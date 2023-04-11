<script setup lang="ts">
const onSubmit = () => {}
</script>

<template>
  <main>
    <form class="p-2 bg-color1 shadow shadow-color4" @submit.prevent="onSubmit">
      <fieldset class="p-2 flex flex-col items-end gap-1.5">
        <legend class="font-medium text-lg">Введите данные</legend>
        <label>
          Максимум:
          <input type="number" placeholder="<empty>" />
        </label>
        <label>
          Желаемое:
          <input type="number" placeholder="<empty>" />
        </label>
        <label>
          Reviewer 1:
          <input type="number" placeholder="<empty>" />
        </label>
        <label>
          Reviewer 2:
          <input type="number" placeholder="<empty>" />
        </label>
        <label>
          Reviewer 3:
          <input type="number" placeholder="<empty>" />
        </label>
        <label>
          Reviewer 4:
          <input type="number" placeholder="<empty>" />
        </label>
      </fieldset>
      <p></p>
      <p></p>
    </form>
  </main>
</template>

<style scoped>
label {
  @apply flex justify-between items-center;
}

input {
  @apply ml-2 w-20;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  @apply appearance-none;
}
</style>
