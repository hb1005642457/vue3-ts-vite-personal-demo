<!--
 * @Descripttion: 
 * @Author: hanb
 * @Date: 2022-03-01 11:54:27
 * @LastEditors: hanb
 * @LastEditTime: 2022-04-25 15:50:20
-->
<template>
  <div>登录{{ count }}</div>
  <button @click="count++">++</button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const count: number = ref(0);
    return {
      count,
    };
  },
};
</script>

<style lang="scss" scoped></style>
