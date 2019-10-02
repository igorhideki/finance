<template>
  <layout-default>
    <navbar />
    <div class="home">
      Home
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault'
import Navbar from '@/components/Navbar'

export default {
  name: 'Home',
  components: {
    LayoutDefault,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.home {
  color: #fff;
}
</style>
