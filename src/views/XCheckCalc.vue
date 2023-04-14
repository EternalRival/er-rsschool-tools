<script setup lang="ts">
  const onSubmit = () => {};
</script>

<template>
  <main>
    <form @submit.prevent="onSubmit">
      <fieldset>
        <legend>Введите данные</legend>
        <label>
          Максимум:
          <input class="w-20" type="number" placeholder="<empty>" />
        </label>
        <label>
          Желаемое:
          <input class="w-20" type="number" placeholder="<empty>" />
        </label>
        <label>
          Reviewer 1:
          <input class="w-20" type="number" placeholder="<empty>" />
        </label>
        <label>
          Reviewer 2:
          <input class="w-20" type="number" placeholder="<empty>" />
        </label>
        <label>
          Reviewer 3:
          <input class="w-20" type="number" placeholder="<empty>" />
        </label>
        <label>
          Reviewer 4:
          <input class="w-20" type="number" placeholder="<empty>" />
        </label>
      </fieldset>
      <p></p>
      <p></p>
    </form>
  </main>
</template>
