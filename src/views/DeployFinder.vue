<script setup lang="ts">
const onSubmit = () => console.log('kek');
</script>

<template>
  <main>
    <form class="p-2 bg-color1 shadow shadow-color4" @submit.prevent="onSubmit">
      <fieldset class="p-2 flex flex-col items-end gap-1.5">
        <legend class="font-medium text-lg">Введите данные</legend>
        <label>
          Github nickname:
          <input>
        </label>
        <label>
          Course:
          <input>
        </label>
        <label>
          Taskname:
          <input>
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
