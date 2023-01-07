<template>
  <div class="box">
    <p>商品名称:</p>
    <p>商品价格:</p>
    <p>商品编号:</p>
    <MyButton></MyButton>
  </div>
</template>

<script>
import MyButton from './MyButton.vue';

export default {
    components: { MyButton }
}
</script>

<style>
.box{
    border: 2px solid #1f1177;
}

</style>