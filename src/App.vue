<template>
  <div class="todoapp">
    <TodoHeader :arr="list" ></TodoHeader>
    <TodoMain :arr="list" @delete="list.splice($event,1)"></TodoMain>
    <TodoFooter :arr="list" @clear="doClear"></TodoFooter>
  </div>
</template>

<script>
//1.导入css样式
import "@/assets/css/base.css"
import "@/assets/css/index.css"
//2.导入局部组件
import TodoHeader from "@/components/TodoHeader.vue"
import TodoMain from "@/components/TodoMain.vue"
import TodoFooter from "@/components/TodoFooter.vue"


export default {
  name:'App',
  //注册组件
  components:{TodoHeader,TodoMain,TodoFooter},
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
    // 把isDone =true删除
  doClear(){
  this.list = this.list.filter(item=>!item.isDone)
  }
  }
}
</script>

<style scoped></style>
