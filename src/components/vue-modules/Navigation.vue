<template>
  

<nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button @click="toggleMenu" class="btn btn-primary" id="menu-toggle">Toggle Menu</button>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">Profile <span class="sr-only">(current)</span></a>
            </li>
                
            <app-dropdown></app-dropdown>

            <app-search></app-search>
          </ul>
        </div>
      </nav>
</template>

<script>

import { bus } from '../../main';
import Dropdown from './Dropdown.vue';
import Search from './Search';

export default {
  components:{
    appDropdown:Dropdown,
    appSearch:Search
  },
  
  methods: {
    toggleMenu(){
      bus.$emit('toggleSidebar',false)
    }
  }
}
</script>





<style scoped>


 #wrapper {
    overflow-x: hidden;
 }



#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}



</style>