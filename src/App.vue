<template>
  <div id="app">
   <div class="container pb-5 pt-5">
      <div class="row">
        <div class="col">
          <ul class="list-group list-group-horizontal-md">
          <li class="list-group-item">View All Notes</li>
          <li class="list-group-item">View All Plans</li>
          <li class="list-group-item">Budget Calculator</li>
        </ul>
      </div>
        <div class="col">
          <div class="content-box bg-light">
            <h2 class="text-center">Greetings: User</h2>
          </div>
          
        </div>
      </div>
        
        <div class="row pt-5">
          <div class="col-md-4">

            <app-weather></app-weather>

          </div>
            
          <div class="col-md-8">

            <app-news></app-news>

          </div>
             
                
            </div>

            <div class="row pt-5">
              <div class="col-md-6">

                <app-todo></app-todo>

              </div>
                
              <div class="col-md-6"> 
                <app-notes></app-notes>
              </div>
                 
                    
                </div>
            
        
 </div>
  </div>
</template>

<script>
import Budget from './assets/components/Budget.vue';
import News from './assets/components/News.vue';
import Notes from './assets/components/Notes.vue';
import Todo from './assets/components/Todo.vue';
import Weather from './assets/components/Weather.vue';



export default {
  name: 'app',
  components:{
    appBudget: Budget,
    appNews: News,
    appNotes: Notes,
    appTodo: Todo,
    appWeather:Weather
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
