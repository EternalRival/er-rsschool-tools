<script setup lang="ts">
  import { computed, ref, watch } from 'vue';
  import { debounce } from 'lodash';

  const [nickname, course, task] = ['', '', ''].map((v) => ref(v));
  const urlOptions = computed(() => {
    const urlNickname = nickname.value.toLowerCase();
    const urlCourse = course.value.toUpperCase();
    const urlTask = task.value.toLowerCase();
    const urlTemplate = `https://rolling-scopes-school.github.io/${urlNickname}-${urlCourse}/${urlTask}`;
    const possibleDirs = ['', '/pages', '/pages/main'];
    const possibleFiles = ['', '/index.html', '/main.html'];
    return possibleDirs.flatMap((dir: string) => possibleFiles.map((file) => `${urlTemplate}${dir}${file}`));
  });

  const urlOptionsElements = ref<HTMLLIElement[]>([]);
  const setHrefs = debounce(() => {
    urlOptionsElements.value.forEach(async ({ firstElementChild: anchor }) => {
      if (anchor instanceof HTMLAnchorElement && (await fetch(anchor.text)).status === 200) {
        anchor.href = anchor.text;
      }
    });
  }, 1000);

  watch(urlOptionsElements.value, () => setHrefs(), { flush: 'post' });
</script>

<template>
  <main>
    <form>
      <fieldset>
        <legend>Введите данные</legend>
        <label>
          Github nickname:
          <input v-model="nickname" />
        </label>
        <label>
          Course:
          <input v-model="course" />
        </label>
        <label>
          Taskname:
          <input v-model="task" />
        </label>
      </fieldset>
    </form>
    <ul v-if="nickname && course && task" class="p-2">
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
