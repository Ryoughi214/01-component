<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{ arr.length }}</strong></span>
    <button class="clear-completed" @click=" $emit('clear')">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props:{arr:Array},
  data() {
    return {
      
    }
  }
}
</script>