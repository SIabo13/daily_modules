<template>
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
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>