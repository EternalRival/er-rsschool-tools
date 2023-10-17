<script setup lang="ts">
  import { Ref, computed, ref } from 'vue';
  import { watchDebounced, useLocalStorage } from '@vueuse/core';
  import { prefix } from '../services/StorageService';

  const inputs = useLocalStorage(`${prefix}deploy-finder__inputs`, { nickname: '', course: '', task: '' });
  const urlOptions = computed(() => {
    const { nickname, course, task } = inputs.value;
    const template = `https://rolling-scopes-school.github.io/${nickname.toLowerCase()}-${course.toUpperCase()}/${task.toLowerCase()}`;
    const dirs = ['', '/pages', '/pages/main'];
    const files = ['', '/index.html', '/main.html'];
    return dirs.flatMap((dir: string) => files.map((file) => `${template}${dir}${file}`));
  });
  const urlOptionsElements: Ref<HTMLLIElement[]> = ref([]);

  const setHrefs = (list: HTMLLIElement[]) => {
    list.forEach(async ({ firstElementChild: anchor }) => {
      anchor instanceof HTMLAnchorElement &&
        (await fetch(anchor.text)).ok &&
        Object.assign(anchor, { href: anchor.text, target: '_blank' });
    });
  };
  watchDebounced(urlOptionsElements.value, setHrefs, { debounce: 1000 });
</script>

<template>
  <main>
    <form>
      <fieldset>
        <legend>Введите данные</legend>
        <label>
          Github nickname:
          <input v-model="inputs.nickname" class="lowercase" />
        </label>
        <label>
          Course:
          <input v-model="inputs.course" class="uppercase" />
        </label>
        <label>
          Taskname:
          <input v-model="inputs.task" class="lowercase" />
        </label>
      </fieldset>
    </form>
    <ul v-if="inputs.nickname && inputs.course && inputs.task" class="p-2">
      <li v-for="option in urlOptions" :key="option" ref="urlOptionsElements">
        <a>{{ option }}</a>
      </li>
    </ul>
  </main>
</template>

<style scoped>
  a:any-link {
    color: blue;
    text-decoration: underline;
  }
</style>
