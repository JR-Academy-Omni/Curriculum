<template>
  <div class="slidev-layout cover-page">
    <header class="masthead">
      <div>
        <span class="badge">JR ACADEMY</span>
        <span style="margin-left: 0.6rem;">SKILL WORKSHOP · VOL 001</span>
      </div>
      <div>{{ date || '2026 · 04 · 28' }}</div>
    </header>

    <main style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
      <slot />
    </main>

    <footer class="bottom-meta">
      <div>★ STARS · 7.4k</div>
      <div>LANGUAGE · CLAUDE SKILL</div>
      <div>LICENSE · INTERNAL</div>
      <div>#001 · WORKSHOP</div>
    </footer>
  </div>
</template>

<script setup>
defineProps({ date: { type: String, default: '2026 · 04 · 28' } })
</script>
