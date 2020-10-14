<template>
  <form class="form-inline my-2 my-lg-0">
      <input :v-model="query" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button @click.prevent="searchWeather" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</template>

<script>
import { bus } from '../../main';

export default {
//search bar functionality changes based on page
data(){
  return{
    query:String
  }
},
methods:{
  searchWeather(){
    bus.$emit('query',this.query);
    console.log('I was pressed')
  }
}
}
</script>

<style>

</style>