<template>
  <header class="header">
    <h1>todos</h1>
    <input v-model="allCheck" id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="msg"
      @keyup.enter="doAdd"
    />
  </header>
</template>

<script>
export default {
  props:{
    arr:Array
  },
  data() {
    return {
      msg:''
    }
  },
  methods: {
  doAdd(){
    this.arr.unshift({
      name:this.msg,
      isDone:false
    })
    this.msg ='' 
  },
  },
  computed: {
  allCheck:{
    get(){
      return this.arr.every(item=>item.isDone)
    },
    set(val){
    this.arr.forEach(item => item.isDone =val);
    }
  }
  }
}
</script>
