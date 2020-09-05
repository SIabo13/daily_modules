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
            <div class="content-box bg-light">
              <h2>Weather</h2>
              <img class="img-fluid m-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9V5ISyZ2rQ-484bvqVLg0oN29LSGfOUBhbg&usqp=CAU" alt="">
              <h4>Current Temp: 60</h4>
              <h4>Wind Speed: 5 mph <b>SW</b></h4>
              <button class="btn btn-primary mt-3">See 7 day forecast</button>
          </div>
          </div>
            
          <div class="col-md-8">
            <div class="content-box bg-light">
              <h2>News</h2>
              <img class="m-4" src="https://static01.nyt.com/images/2020/09/04/business/04virus-briefing-dining/merlin_176577702_84a94391-de15-4aef-8cae-03d7ce36c966-mediumThreeByTwo252.jpg?quality=100&auto=webp" alt="">
              <p>New Jersey Resumes Indoor Dining With Limits
                Gov. Philip D. Murphy of New Jersey announced restaurants and bars in the state could resume indoor dining with capacity limits. Smoking inside state casinos remains prohibited.
                
                By NEW JERSEY OFFICE OF THE GOVERNOR VIA YOUTUBE
                
                Sept. 4, 2020</p>
                <button class="btn btn-primary mt-3">Read More</button>


          </div>
          </div>
             
                
            </div>

            <div class="row pt-5">
              <div class="col-md-6">
                <div class="content-box bg-light">
                  <h2>To Do</h2>
                  <ul class="list-group">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                  </ul>
                  <button class="btn btn-primary mt-3">Add TODO</button>
              </div>
              </div>
                
              <div class="col-md-6"> 
                <div class="content-box bg-light">
                  <h2>Create Note</h2>
                  <form>
                    <div class="form-group text-left">
                      <label for="exampleInputEmail1" >Title</label>
                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                      <small id="emailHelp" class="form-text text-muted">Whats on your mind?</small>
                    </div>
                    <div class="md-form text-left">
                      <label for="form7" >Body</label>
                      <textarea id="form7" class="md-textarea form-control" rows="3"></textarea>   
                    </div>
                    
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                  </form>
              </div>
              </div>
                 
                    
                </div>
            
        
 </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
