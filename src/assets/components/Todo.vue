<template>
    <div class="content-box bg-light">
                  <h2>To Do</h2>
                  <ul class="list-group">
                      <app-list-item></app-list-item>
                    
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                  </ul>
                  <button class="btn btn-primary mt-3">Add TODO</button>
              </div>
</template>

<script>
import ListItem from './Todo-list-item.vue';

export default {
    components:{
        appListItem: ListItem
    }
}
</script>

<style lang="scss" scoped>
    li:hover{
        background:grey;
    }
</style>