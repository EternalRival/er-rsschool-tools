<script setup lang="ts">
  import { computed, reactive, watch } from 'vue';
  import { debounce } from 'lodash';
  import axios from 'axios';
  import { StorageService } from '../service/StorageService';

  const storageInputs = StorageService.get<Record<string, string>>('deploy-finder__inputs');
  const inputs = reactive({
    nickname: storageInputs?.nickname ?? '',
    course: storageInputs?.course ?? '',
    task: storageInputs?.task ?? '',
  });
  const urlOptions = computed(() => {
    const urlNickname = inputs.nickname.toLowerCase();
    const urlCourse = inputs.course.toUpperCase();
    const urlTask = inputs.task.toLowerCase();
    const urlTemplate = `https://rolling-scopes-school.github.io/${urlNickname}-${urlCourse}/${urlTask}`;
    const possibleDirs = ['', '/pages', '/pages/main'];
    const possibleFiles = ['', '/index.html', '/main.html'];
    return possibleDirs.flatMap((dir: string) => possibleFiles.map((file) => `${urlTemplate}${dir}${file}`));
  });

  const urlOptionsElements: HTMLLIElement[] = reactive([]);
  const setHrefs = debounce(() => {
    urlOptionsElements.forEach(async ({ firstElementChild: anchor }) => {
      if (anchor instanceof HTMLAnchorElement && (await axios.get(anchor.text))) anchor.href = anchor.text;
    });
  }, 1000);
  watch(urlOptionsElements, setHrefs, { flush: 'post' });

  const setValues = debounce(() => StorageService.set('deploy-finder__inputs', inputs), 1000);
  watch(inputs, setValues);
</script>

<template>
  <main>
    <form>
      <fieldset>
        <legend>Введите данные</legend>
        <label>
          Github nickname:
          <input v-model="inputs.nickname" />
        </label>
        <label>
          Course:
          <input v-model="inputs.course" />
        </label>
        <label>
          Taskname:
          <input v-model="inputs.task" />
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
