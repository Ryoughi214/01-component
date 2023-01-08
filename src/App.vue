<template>
  <div class="todoapp">
    <TodoFooter></TodoFooter>
    <TodoHeader></TodoHeader>
    <TodoMain></TodoMain>
  </div>
</template>

<script>
//1.导入css样式
import "@/assets/css/base.css"
import "@/assets/css/index.css"
//2.导入局部组件
import TodoFooter from "@/components/TodoFooter.vue"
import TodoHeader from "@/components/TodoHeader.vue"
import TodoMain from "@/components/TodoMain.vue"
export default {
  name:'App',
  //注册组件
  components:{TodoFooter,TodoHeader,TodoMain},
  data() {
    return {
      list: [
        { name: "吃饭", isDone: true },
        { name: "睡觉", isDone: false },
        { name: "打豆豆", isDone: true }
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style scoped></style>
