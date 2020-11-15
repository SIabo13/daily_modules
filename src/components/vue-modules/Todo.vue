<template>

<keep-alive>

<content-container>

<h2>To Do List</h2>
    <h1 v-if="todoList.length == 0" v-show ="!showForm"> Add Something</h1>
    <div>
        <div class="list-box" v-show="!showForm">

            <ul class="list-group">
                <app-list-item :key="index" v-for="(item,index) in todoList">{{ item }}<span @click="todoList.splice(index,1)" class="delete-card">X</span></app-list-item>

            </ul>
        </div>
        <button v-show="!showForm" @click="showForm = !showForm" class="btn btn-primary mt-3">Add TODO</button>
        <button @click.prevent="saveList" class="btn btn-primary mt-3">Save List</button>
        <button class="btn btn-primary mt-3">delete List</button>

    </div>

    <form class="mt-5" v-show="showForm">
        <div class="form-group mt-5">
            <label for="exampleInputEmail1">Add to Your List</label>
            <input ref="input" v-model="itemInput" type="text" class="form-control" placeholder="Enter To Do">
        </div>

        <button @click.prevent="addItem(itemInput)" class="btn btn-primary">Submit</button>
        <button @click.prevent="showForm = !showForm" class="btn btn-primary">Back to List</button>
    </form>
</content-container>
</keep-alive>

</template>

<script>
import ListItem from './Todo-list-item.vue'
import ContentContainer from './Content_Container.vue'
import db from "../firebaseinit"

export default {
    components: {
        appListItem: ListItem,
        ContentContainer
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
            console.log("im running biach")
            if (input != null) {
                this.$emit("input event",input)
                this.todoList.push(input);
                this.itemInput = null;
                this.$refs.input.focus()
            }

        },
        saveList(){
            db.ref("todos/").set({
                todoList: this.todoList
        });

            
        },
        
       

         loadTodoList(){
          let _this = this
          let ref = db.ref('todos');
          ref.on('value',gotData);
           
            function gotData(data){               

                if(_this.todoList.length == 0){
                    data.val().todoList.forEach(element => {
                    _this.todoList.push(element)
                });
                }
                

                


            }

        }
        
    },
    mounted() {
            this.loadTodoList();
        },
    
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
