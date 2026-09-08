const escapeText = (value = "") =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const typeLabel = (l) =>
  l.isLive
    ? l.cohort7Track === "theory"
      ? "理论课 Live"
      : "独立实践课 Live"
    : {
        Video: "录播课",
        InteractiveLab: "互动 Lab",
        Information: "配套资料",
        Quest: "任务",
      }[l.type] || "非 Live 内容";
let lessonsByCode = new Map();
const resourceStep = (s) =>
  /^(AI Engineer|Vibe Coding|Prompt Master|OpenClaw|Prompt Lab|LLM Lab|Python Lab|AWS Lab):\s*/i.test(
    s.title || "",
  );
function supportingContent(l, seen = new Set(), seenResources = new Set()) {
  if (seen.has(l.code)) return "";
  seen.add(l.code);
  const resources = (l.learns || []).filter((r) => {
    if (!r || typeof r !== "object" || !r.direction || !r.slug) return false;
    const key = "learn:" + r.direction + "/" + r.slug;
    if (seenResources.has(key)) return false;
    seenResources.add(key);
    return true;
  });
  const refs = resources.length
    ? `<p>配套阅读：${resources.map((r) => `<code>${escapeText(r.direction + "/" + r.slug)}</code>`).join("、")}</p>`
    : "";
  const labs = (l.labs || []).filter((r) => {
    if (!r || !r.slug) return false;
    const key = "lab:" + r.source + "/" + r.slug;
    if (seenResources.has(key)) return false;
    seenResources.add(key);
    return true;
  });
  const labRefs = labs.length
    ? `<p>保留的实验入口：${labs.map((r) => `<code>${escapeText(r.slug)}</code>`).join("、")}（可用性待核验）</p>`
    : "";
  return (
    refs +
    labRefs +
    (l.cohort7SupplementaryLessons || [])
      .map((code) => {
        const source = lessonsByCode.get(code);
        if (!source || seen.has(code)) return "";
        const nested = supportingContent(source, seen, seenResources);
        if (!source.learningMaterial && !nested) return "";
        return `<details><summary>合并配套：${escapeText(source.title)}</summary>${source.learningMaterial || ""}${nested}</details>`;
      })
      .join("")
  );
}
function card(l, label, expanded) {
  const steps = (l.steps || []).filter((s) => !resourceStep(s));
  const agenda = `<ol class="agenda">${steps.map((s) => `<li><b>${escapeText(s.title)}</b>${s.description && s.description.trim() !== (s.title || "").trim() ? `<p>${escapeText(s.description)}</p>` : ""}</li>`).join("")}</ol>${steps.some((s) => !s.description || s.description.trim() === (s.title || "").trim()) ? '<p class="material-status">部分步骤尚缺具体操作与验收说明，待补充。</p>' : ""}${supportingContent(l)}`;
  return `<article id="lesson-${escapeText(l.code)}" class="course ${l.isLive ? "live" : "small"} ${l.cohort7Track === "practice" ? "practice" : ""}"><div class="course-label">${escapeText(label)} · ${typeLabel(l)}</div><h3>${escapeText(l.title)}</h3><p>${escapeText(l.description)}</p>${expanded ? agenda : `<details><summary>展开学习内容</summary>${agenda}</details>`}<details><summary>完整讲义正文与材料状态</summary><div class="material">${l.learningMaterial || "<p>正文尚待整理。</p>"}</div><p>材料状态：${escapeText(l.cohort7Readiness?.reason || l.cohort7MaterialStatus || l.cohort7ModelMigrationStatus || "已有素材与当前教学范围仍需核验")}</p><p>前置：${escapeText((l.cohort7Prerequisites || []).join("、") || "未单独登记")}</p><small>内部条目 ${escapeText(l.code)}</small></details></article>`;
}
fetch("./outline.json", { cache: "no-store" })
  .then((r) => {
    if (!r.ok) throw Error(r.status);
    return r.json();
  })
  .then((outline) => {
    const all = outline.phases.flatMap((p) =>
      p.lessons.map((l) => ({ ...l, phase: p.name })),
    );
    lessonsByCode = new Map(all.map((l) => [l.code, l]));
    const active = all
      .filter((l) => l.cohort7Included !== false)
      .sort((a, b) => a.cohort7LessonOrder - b.cohort7LessonOrder);
    let order = 0;
    // Match the syllabus lessonIds writer: phases array, then lessons array.
    // Legacy lesson.index values are incomplete; do not sort by them or by week/code.
    const blocks = active.map((l) =>
      card(
        l,
        `第 ${String(++order).padStart(3, "0")} 条 · ${l.code}${l.cohort7Week ? ` · W${l.cohort7Week}` : ""}`,
        true,
      ),
    );
    document.querySelector("#flow-weeks").innerHTML = blocks.join("");
    const referenceLessons = (outline.cohort7ReferenceLessons || [])
      .map((code) => lessonsByCode.get(code))
      .filter(Boolean);
    if (referenceLessons.length)
      document.querySelector("#flow-weeks").innerHTML +=
        `<section class="week-block" id="course-resources"><h2>课程参考资料 · 不计入课时</h2><p>保留的历史资源清单，链接与适用性待复核，不作为趋势或效果承诺。</p>${referenceLessons.map((l) => `<details><summary>${escapeText(l.title)}</summary><div class="material">${l.learningMaterial || ""}</div></details>`).join("")}</section>`;
    document.querySelector("#flow-status").textContent =
      `按 cohort7LessonOrder 展示并同步 ${active.length} 条当前保留内容；技术 Phase 只表示 10-layer 归属，不再影响数据库顺序。已移出的 ${all.length - active.length} 条历史内容不占当前顺序。数据来源：第七期 outline.json。`;
    document.querySelector("#flow-nav").innerHTML = outline.phases
      .map((p, i) => `<a href="#phase-${i + 1}">${escapeText(p.name)}</a>`)
      .join("");
  })
  .catch((e) => {
    document.querySelector("#flow-status").classList.add("error");
    document.querySelector("#flow-status").textContent =
      "无法读取大纲：" + e.message;
  });
