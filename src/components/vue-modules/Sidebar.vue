<template>
<div class="bg-light border-right"  id="sidebar-wrapper" :style="toggle">
    <div class="sidebar-heading">Start Bootstrap </div>
    <div class="list-group list-group-flush">
        <router-link class=" list-group-item list-group-item-action bg-light" to="/">Main <span class="sr-only">(current)</span></router-link>
        <router-link class=" list-group-item list-group-item-action bg-light" to="/notes">View All Notes</router-link>
        <router-link class=" list-group-item list-group-item-action bg-light" to="/budget">Budget Calculator</router-link>
        <router-link class=" list-group-item list-group-item-action bg-light" to="/forecast">View Forecast</router-link>
    </div>
</div>
</template>

<script>
import { bus } from '../../main';

export default {
    data() {
        return {
            toggleSidebar:true,
            show:0,
            hide:-12
        }
    },
    created() {
        bus.$on('toggleSidebar', (data) => {
            //Receives boolean to change style from navigation
            if(this.toggleSidebar){
              this.toggleSidebar = data;
            }else{
              this.toggleSidebar = !data;
            }
            
        })
    },
    computed:{
      toggle(){
        if(this.toggleSidebar){
          return{
            marginLeft:this.show + 'rem',
          } 
        }else if(!this.toggleSidebar){
            marginLeft:this.hide + 'rem'
          }
      }
    }
    

}
</script>

<style scoped>
#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -12rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}



</style>
