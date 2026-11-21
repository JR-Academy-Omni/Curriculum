# 企业 AI 自动化实战营 L02 · Design System 与报价单

`bun install --frozen-lockfile` 后运行 `bun run dev`。左右方向键翻页，F 全屏，N 查看讲师备注。

报价单成品及课堂输入在 `public/quote/`。课件第 5 页可直接打开成品，第 9 页可下载实操资料。

报价路径为 `quote.md` → `quote-sot.md` → `quote.html` → PDF。修改 SoT 后可运行 `python3 scripts/render-quote.py` 生成 HTML，再从同一 HTML 的报价版本打印为 A4 PDF。
