<script setup lang="ts">
import { ref,reactive } from 'vue'
interface PropsType{
  formData:FormDataType2
}
interface FormDataType2{
  formItems: Array<FormItemType>
  labelWidth?: String
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
const props = withDefaults(defineProps<PropsType>(), {})

const data = ref(props.formData)

console.log(data)
</script>
<template>
  <div>
    <slot name="header"></slot>
  </div>
  <div>
    <el-form :label-width="data.labelWidth">
      <template v-for="item in formData.formItems" :key="item.name">
        <el-form-item :label="item.label">
          <template v-if="item.type==='input'">
            <el-input :placeholder="item.placeholder" v-model="item.value"/>
          </template>
          <template v-if="item.type==='switch'">
            <el-switch  v-model="item.value"/>
          </template>
          <template v-if="item.type==='select'">
            <el-select :placeholder="item.placeholder" v-model="item.value">
              <el-option v-for="it in item.optionList" :key="it.value" :label="it.label" :value="it.value" />
            </el-select>
          </template>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>
<style lang="scss" scoped>

</style>