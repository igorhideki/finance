<template>
  <layout-default>
    <navbar />
    <div class="container">
      <div class="about">
        Em construção...
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault'
import Navbar from '@/components/Navbar'

export default {
  name: 'About',
  components: {
    LayoutDefault,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.about {
  color: #fff;
}
</style>
