<template>
  <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Start Bootstrap </div>
      <div class="list-group list-group-flush">
        <router-link class=" list-group-item list-group-item-action bg-light" to="/">Main <span class="sr-only">(current)</span></router-link>
        <router-link class=" list-group-item list-group-item-action bg-light" to="/notes" >View All Notes</router-link>
        <router-link class=" list-group-item list-group-item-action bg-light" to="/budget">Budget Calculator</router-link>
        <router-link class=" list-group-item list-group-item-action bg-light" to="/forecast">View Forecast</router-link>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>