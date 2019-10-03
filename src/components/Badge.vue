<template>
  <span
    class="badge"
    :class="state"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    state: {
      type: String,
      required: true,
      validator (state) {
        const states = ['success', 'danger', 'info']

        return states.includes(state)
      }
    }
  }
}
</script>

<style lang="scss" scpoed>
.badge {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 2px;
  color: #fff;
  font-size: 12px;

  &.danger {
    background: $danger;
  }

  &.success {
    background: $success;
  }
}
</style>
