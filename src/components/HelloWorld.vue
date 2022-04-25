<!--
 * @Descripttion: 
 * @Author: hanb
 * @Date: 2022-02-28 16:45:32
 * @LastEditors: hanb
 * @LastEditTime: 2022-04-25 16:57:17
-->
<script setup lang="ts">
import { testApi } from "../api/index";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

defineProps<{ msg: string }>();
testApi().then((res: any): void => {
  console.log(res, 123);
});

const count = ref(0);
const router = useRouter();
const route = useRoute();
const routeTo = (): void => {
  router.push({
    name: "login",
    query: {
      ...route.query,
    },
  });
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <p class="cell">
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <a @click="routeTo">去login</a>
</template>

<style scoped lang="scss">
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

.cell {
  color: $test-color;
}
</style>
