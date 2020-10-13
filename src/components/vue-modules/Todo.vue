<template>
<div class="content-box bg-light">
    <h2>To Do List</h2>
    <h1 v-if="todoList.length == 0" v-show="!showForm"> Add Something</h1>
    <div>
        <div class="list-box" v-show="!showForm">

            <ul class="list-group">
                <app-list-item :key="index" v-for="(item,index) in todoList">{{ item }}<span @click="todoList.splice(index,1)" class="delete-card">X</span></app-list-item>

            </ul>
        </div>
        <button v-show="!showForm" @click="showForm = !showForm" class="btn btn-primary mt-3">Add TODO</button>
        <button @click="saveList" class="btn btn-primary mt-3">Save List</button>
        <button @click="deleteCache" class="btn btn-primary mt-3">delete List</button>

    </div>

    <form class="mt-5" v-show="showForm">
        <div class="form-group mt-5">
            <label for="exampleInputEmail1">Add to Your List</label>
            <input ref="input" v-model="itemInput" type="text" class="form-control" placeholder="Enter To Do">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <button @click.prevent="addItem(itemInput)" class="btn btn-primary">Submit</button>
        <button @click.prevent="showForm = !showForm" class="btn btn-primary">Back to List</button>
    </form>

</div>
</template>

<script>
import ListItem from './Todo-list-item.vue';

export default {
    components: {
        appListItem: ListItem
    },
    data() {
        return {
            itemInput: null,
            todoList: [],
            showForm: false,
            isLoading: false,
            listCache: []
        }
    },
    methods: {
        addItem(input) {
            if (input != null) {
                this.todoList.push(input);
                this.itemInput = null;
                this.$refs.input.focus()
            }

        },
        saveList() {
            if (this.todoList.length > 0) {
                fetch('https://modular-planner.firebaseio.com/todos.json', {
                    method: 'POST',
                    headers: {
                        "Content-type": 'application/json'
                    },
                    body: JSON.stringify({
                        todoList: this.todoList,

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

            }
        },
        deleteCache() {
            // Deletes third oldest entry
            
                fetch('https://modular-planner.firebaseio.com/todos.json', {
                        method: 'DELETE'

                    })
                    .then(response => response.json())
                    .then(response => {
                        // Delete third oldest entry and todo list
                        console.log(response)
                       

                    })
                    

            
        },
        loadTodoList() {
            // Repopulate the list onload from database
            fetch('https://modular-planner.firebaseio.com/todos.json')
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })

                .then((data) => {
                    this.isLoading = false;
                    const results = [];

                    let list = data[Object.keys(data)[Object.keys(data).length -1]];

                    for (let i = 0; i < list.todoList.length; i++) {
                        results.push(list.todoList[i])
                    }

                    //    console.log(this.listCache)
                    this.todoList = results;
                })
                .catch((error) => {
                    console.log(error);
                    this.isLoading = false;
                    this.error = "Failed to fetch data - please try again later";
                });
        },
        
    },
    mounted() {
            this.loadTodoList();
        }
}
</script>

<style lang="scss">
li:hover {
    background: grey;
    color: white;
}

.list-box {
    overflow: scroll;
    height: 400px;
}

.delete-card {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px 15px;
    opacity: .4;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover,
    .error {
        opacity: 1;
        transform: rotate(360deg);

    }
}

.flip-enter-active {
    transition: all 0.4s ease;
}

.flip-leave-active {
    display: none;
}

.flip-enter,
.flip-leave {
    transform: rotateY(180deg);
    opacity: 0;

}
</style>
