<template>
  <!-- 1.组件默认吧template里面的根元素作为挂载点 -->
  <!-- 一个template 只能有一个根元素
       因为vue默认挂载点只能一个 -->
  <!-- <div>我是首页</div> -->
  <div class="box">
    <h1>我是根组件</h1>
    <MyButton></MyButton>
    <!-- 使用组件:当成自定义html标签 -->
    <MyGoods></MyGoods>
    <MyGoods></MyGoods>
    <my-goods></my-goods>
    
  </div>
</template>

<script>
//  导入组件
import MyGoods from "@/MyGoods.vue"
import MyButton from "@/MyButton.vue";
// 2.组件 js代码
// 组件vue实例
export default {
  // 为啥组价data必须是一个函数
  /* 因为组件要复用，保证每一次复用数据是独立的 */
  /* 因为组件是需要复用的，如果组件data是一个对象，那么组件在复用的时候就会使用相同的对象地址。一旦在一个地方被修改，其
他的也会跟着修改。如果组件data是一个函数，组件在每一次复用的时候就会调用这个函数得到一个全新的对象，这样就可以做到在复用时候每个组件之间的数据都是独立的的.互不影响.
复用的时候海个组件之间的数据都是独立的，互不影响。 */
// 注册组件
components:{ MyGoods, MyButton },
data() {
  return{
    name:'ikun'
  }
}
}
</script>

<style>
.box{
  /* background-color: #f00; */
  border: 10px solid #33e1f1;
}
</style>