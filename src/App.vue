<script setup lang="ts">
import { reactive } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import MyForm from './components/MyForm.vue'

interface FormDataType1{
  formItems: Array<FormItemType>
  labelWidth?: number
}
interface FormItemType{
  type: string
  label: string
  name: string
  value:any
  placeholder?: string
  optionList?: Array<OptionType>
}
interface OptionType{
  value: string
  label: string
}
const formData = reactive<FormDataType1>({
  formItems: [
    {
      type: 'input',
      label: '姓名',
      name: 'user',
      placeholder: '请输入姓名',
      value:'张三'
    },
    {
      type: 'switch',
      label: '是否打开',
      name: 'switch',
      value: true
    },
    {
      type: 'select',
      label: '城市',
      name: 'city',
      placeholder: '请选择城市',
      value:'',
      optionList: [
        {value:'1',label:'深圳'},
        {value:'2',label:'广州'},
      ]

    }
  ],
  labelWidth:200
})




</script>

<template>
  <div>
    <MyForm :formData="formData">
      <template #header>
        <h1>登录</h1>
      </template>
    </MyForm>
    <div style="height:150px;"></div>
    <Counter></Counter>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
