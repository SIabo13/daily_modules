<template>
  <div id="app">
    <app-nav></app-nav>
    

    <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <app-side-bar></app-side-bar>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div class="container" id="page-content-wrapper">

      <!-- forces all content to the left -->
   <router-view></router-view>
      
    </div>


    
    <!-- /#page-content-wrapper -->

  </div>
  </div>
</template>

<script>
import Navigation from './components/vue-modules/Navigation.vue'
import Sidebar from './components/vue-modules/Sidebar.vue'

export default {
  name: 'app',
 components:{
   appNav:Navigation,
   appSideBar:Sidebar
 }
}
</script>

<style>
#wrapper {
    overflow-x: hidden;
 }



#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 12rem;
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
