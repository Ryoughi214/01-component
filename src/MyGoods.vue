<template>
  <div class="box">
    <p>商品名称:</p>
    <p>商品价格:</p>
    <p>商品编号:</p>
    <MyButton></MyButton>
  </div>
</template>

<script>
import MyButton from '@/MyButton.vue';

export default {
    name:'my-goods',
    components: { MyButton }
}
</script>

<style scoped>
/* 如果父组件 和 子组件有相同的css样式权重,则优先加载父组件样式
   解决方案 : 给子组件添加css作用域scoped属性
   面试题 :scoped作用及原理
   (1)scoped作用 :给子组件添加css作用域,避免子组件样式被父组件覆盖
   (2)scoped原理 :给子组件添加自定义属性 data-v-xxxx,通过css选择器增加权重 */
.box{
    border: 2px solid #1f1177;
}

</style>