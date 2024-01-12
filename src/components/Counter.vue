<script setup lang="ts">
import { ref } from 'vue';

interface Props{
  initCount?: number,
  min?: number,
  max?: number
}
const props = withDefaults(defineProps<Props>(),{
  initCount: 0,
  min:0
})

const count = ref(props.initCount)
const increase = () => {
  if (count.value > 9) {
    return;
  }
  count.value++
}
const decrease = () => {
  if (count.value < 1) {
    return;
  }
  count.value--
}
</script>
<template>
  <div class="bga">
    Counter hehe
    <div>
      <div data-testid="count">{{count}}</div>
      <button @click="increase">increase</button>
      <button @click="decrease">decrease</button>
    </div>
  </div>
</template>
<style scoped>
.bga{
  background-color: pink;
}
</style>