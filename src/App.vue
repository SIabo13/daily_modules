<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/vue-modules/Navigation.vue'

export default {
  name: 'app',
 components:{
   appNav:Navigation
 }
}
</script>

<style lang="scss">

</style>
