<template>
  <div class="slidev-layout checklist">
    <header class="masthead">
      <div>
        <span class="badge">CHECKLIST</span>
        <span style="margin-left: 0.6rem;">REFERENCE A</span>
      </div>
      <div>P.{{ page }}</div>
    </header>
    <slot />
  </div>
</template>

<script setup>
defineProps({ page: { type: [Number, String], default: '' } })
</script>
