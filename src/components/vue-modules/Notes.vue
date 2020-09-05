<template>
    <div class="content-box bg-light">
                  <h2 v-show="!displayNote">Create Note</h2>
                  <h4 class="text-success">{{ message }}</h4>
                  <div v-show="!displayNote">
                    <form>
                    <div class="form-group text-left">
                      <label for="exampleInputEmail1" >Title</label>
                      <input v-model="notes.title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                      <small id="emailHelp" class="form-text text-muted">Whats on your mind?</small>
                    </div>
                    <div class="md-form text-left">
                      <label for="form7" >Body</label>
                      <textarea v-model="notes.body" id="form7" class="md-textarea form-control" rows="3"></textarea>   
                    </div>
                    
                    <button @click.prevent="addNote" class="btn btn-primary mt-3">Submit</button>
                  </form>
                  </div>
                  
                  <div v-show="displayNote">
                    <h3>{{currentNote.title}}</h3>
                    <p>{{currentNote.body}}}</p>
                    <button @click="returnAndSave" class="btn btn-success mt-3">Save Note</button>
                    <button @click="editNote" class="btn btn-primary mt-3">Edit Note</button>
                  </div>

              </div>
</template>

<script>
export default {
    data(){
      return {
        displayNote:false,
        message:null,
        notes:{
          title:null,
          body:null
        },
        currentNote:
          {
            title:"I am the first Note",
            body:"The fact that remakes of both Resident Evil 3 and Final Fantasy 7 arrive just a week apart is pretty incredible, especially because they couldn’t be more different in their approaches as far as a “remake” goes. While RE3 is a mostly faithful modernization of its original, Final Fantasy 7 is less a remake and more a complete reinvention. It swaps turn-based combat with exciting real-time action and expands the first leg of the original story by dozens of hours – including with a bit too much filler and some convoluted new plot points. The long wait for this revival may not be a perfect reunion, but with or without nostalgia in play, it’s still a great JRPG in its own right."
          }
          
        
      }
    },
    methods:{
      addNote(){
        this.currentNote.title = this.notes.title;
        this.currentNote.body = this.notes.body;
        this.displayNote = !this.displayNote;
      },
      returnAndSave(){
        this.message = 'Note was saved',
        this.displayNote = !this.displayNote;
      },
      editNote(){
        //edit note dont save
      }

      
    }
}
</script>

<style lang="scss" scoped>

</style>