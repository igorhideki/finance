<template>
  <div
    functional
    class="layout-default"
  >
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.layout-default {
  height: 100%;
  background: $gradient-linear;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 30px;
}
</style>
