<template>

  <content-container>
    <h2 v-show="!displayNote">Create Note</h2>
    <h4 class="text-success">{{ message }}</h4>
    <div v-show="!displayNote">
      <form>
        <div class="form-group text-left">
          <label for="exampleInputEmail1">Title</label>
          <input v-model="notes.title" type="text" class="form-control" id="exampleInputEmail1"
            aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">Whats on your mind?</small>
        </div>
        <div class="md-form text-left">
          <label for="form7">Body</label>
          <textarea v-model="notes.body" id="form7" class="md-textarea form-control" rows="3"></textarea>
        </div>

        <button @click.prevent="addNote" class="btn btn-primary mt-3">Submit</button>
      </form>
    </div>

    <div v-show="displayNote">
      <h3>{{currentNote.title}}</h3>
      <p>{{currentNote.body}}</p>
      <button @click="saveData" class="btn btn-success mt-3">Save Note</button>
      <button @click="displayNote = !displayNote" class="btn btn-primary mt-3">Edit Note</button>
    </div>

  </content-container>

</template>

<script>
  import ContentContainer from './Content_Container.vue';
  import db from "../firebaseinit"

  export default {
    components: {
      ContentContainer
    },
    data() {
      return {
        displayNote: false,
        message: null,
        notes: {
          title: null,
          body: null
        },
        currentNote: {
          title: null,
          body: null
        }

      }
    },
    methods: {
      addNote() {
        this.currentNote.title = this.notes.title;
        this.currentNote.body = this.notes.body;
        this.displayNote = !this.displayNote;

      },



      saveData() {
        db.ref("notes/").push({
          title: this.notes.title,
          body: this.notes.body,
        });

        this.message = 'Note was saved';
        this.notes.title = null;
        this.notes.body = null;
        this.displayNote = !this.displayNote;
      },

      editNote() {
        //edit note dont save
      }

    }
  }

</script>

<style lang="scss" scoped>

</style>
