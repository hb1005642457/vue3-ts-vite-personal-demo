<!--
 * @Descripttion: 
 * @Author: hanb
 * @Date: 2022-02-28 18:39:00
 * @LastEditors: hanb
 * @LastEditTime: 2022-02-28 18:43:43
-->
<template>
  <div>
    <span>{{ count }}</span>
    <button @click="handlePlus">操作</button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const count = ref<number>(1);
    const handlePlus = (): void => {
      count.value++;
    };
    return {
      count,
      handlePlus,
    };
  },
};
</script>

<style lang="scss" scoped></style>
