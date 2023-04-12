<script setup lang="ts">
  import { computed } from 'vue';
  import { ref } from 'vue';

  const getStatus = async (url: string) => (await fetch(url)).status;

  const [nickname, course, task] = [ref(''), ref(''), ref('')];
  const urlOptions = computed(() => {
    const urlNickname = nickname.value.toLowerCase();
    const urlCourse = course.value.toUpperCase();
    const urlTask = task.value.toLowerCase();
    const urlTemplate = `https://rolling-scopes-school.github.io/${urlNickname}-${urlCourse}/${urlTask}`;
    return [
      '',
      '/index.html',
      '/main.html',
      '/pages/index.html',
      '/pages/main.html',
      '/pages/main',
      '/page/main/index.html',
      '/pages/main/main.html',
    ].map((option) => urlTemplate + option);
  });

  const onSubmit = () => {
    console.log(urlOptions.value);
  };
</script>

<template>
  <main>
    <form class="p-2 bg-color1 shadow shadow-color4" @submit.prevent="onSubmit">
      <fieldset class="p-2 flex flex-col items-end gap-1.5">
        <legend class="font-medium text-lg">Введите данные</legend>
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
        <button type="submit">Search</button>
      </fieldset>
    </form>
  </main>
</template>

<style scoped>
  label {
    @apply flex justify-between items-center;
  }

  input {
    @apply ml-2;
  }
</style>
