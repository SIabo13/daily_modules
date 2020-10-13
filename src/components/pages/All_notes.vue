<template>
<div class="container pb-5 pt-5">
  <div class="row">
    
      <div  v-for="(note,index) in allNotes" :key="index" class="content-box bg-light col-md-3 m-3">
        <span @click="allNotes.splice(index,1)" class="delete-card">X</span>
    <h2>{{note.title}}</h2>
    <p>{{note.body}}</p>
  </div>
  
    
  </div>
  
</div>
</template>

<script>
export default {
data(){
  return {
    allNotes:[]
  }
},
methods:{
showArray(){
  console.log(this.allNotes)
},
getNotes(){
    fetch('https://modular-planner.firebaseio.com/notes.json')
                .then((response) => {
                    if (response.ok) {
                      console.log(response)
                        return response.json();
                    }
                })

                .then((data) => {
                    this.isLoading = false;
                    let note = Object.values(data);
                    let entry = Object.values(note);
                    for(let i = 0; i < entry.length; i++){
                      this.allNotes.push(entry[i]);
                    }
                   
                })
                .catch((error) => {
                    console.log(error);
                    this.isLoading = false;
                    this.error = "Failed to fetch data - please try again later";
                });
  },
  
},
mounted(){
  this.getNotes();
}
}
</script>

<style scoped>
.row{
  justify-content: center;
}
</style>