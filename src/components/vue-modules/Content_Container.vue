<template>
  <div class="content-box">
<slot></slot>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>
.content-box {
        padding: 20px;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        text-align: center;
        background-color: white;
}
</style>
