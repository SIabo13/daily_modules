<template>
<div class="content-box bg-light">
    <h2 v-show="!displayNote">Create Note</h2>
    <h4 class="text-success">{{ message }}</h4>
    <div v-show="!displayNote">
        <form>
            <div class="form-group text-left">
                <label for="exampleInputEmail1">Title</label>
                <input v-model="notes.title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
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
        <button @click="returnAndSave" class="btn btn-success mt-3">Save Note</button>
        <button @click="displayNote = !displayNote" class="btn btn-primary mt-3">Edit Note</button>
    </div>

</div>
</template>

<script>
export default {
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
        returnAndSave() {
            fetch('https://modular-planner.firebaseio.com/notes.json', {
                method: 'POST',
                headers: {
                    "Content-type": 'application/json'
                },
                body: JSON.stringify({
                    title: this.notes.title,
                    body: this.notes.body,
                }),

            }).then(response => {
                if (response.ok) {
                    //....
                } else {
                    throw new Error('Could not save data!');
                }
            }).catch(error => {
                console.log(error);
                this.error = error.message;
            })

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
