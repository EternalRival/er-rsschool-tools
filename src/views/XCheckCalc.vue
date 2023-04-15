<script setup lang="ts">
  import { computed, reactive, ref } from 'vue';
  const [max, desired] = [ref('100'), ref('0')];
  const reviewers = reactive(['', '', '', '']);
  const score = computed(() => {
    const list = reviewers
      .filter((v) => v !== '')
      .map((v) => +v)
      .sort((a, b) => b - a)
      .slice(0, 3);
    return Math.round(list.reduce((sum, score) => score + sum, 0) / list.length) || 0;
  });
  const appeal = computed(() => +desired.value - score.value >= +max.value * 0.1);

  const handleLimits = (e: Event) =>
    e.target instanceof HTMLInputElement && e.target.value !== '' ? `${Math.min(+e.target.value, +e.target.max)}` : '';
</script>

<template>
  <main>
    <form>
      <fieldset>
        <legend>Введите данные</legend>
        <label>
          Максимум:
          <input
            :value="max"
            class="w-20"
            type="number"
            placeholder="<empty>"
            min="0"
            max="999"
            @input="(max = handleLimits($event)), $forceUpdate()" />
        </label>
        <label>
          Желаемое:
          <input
            :value="desired"
            class="w-20"
            type="number"
            placeholder="<empty>"
            min="0"
            :max="max"
            @input="(desired = handleLimits($event)), $forceUpdate()" />
        </label>
        <label v-for="(_, index) in reviewers" :key="index">
          Reviewer {{ index + 1 }}:
          <input
            :value="reviewers[index]"
            class="w-20"
            type="number"
            placeholder="<empty>"
            min="0"
            :max="max"
            @input="(reviewers[index] = handleLimits($event)), $forceUpdate()" />
        </label>
      </fieldset>
      <p class="text-center">{{ score }}</p>
      <p :class="`text-center ${appeal ? 'text-color-valid' : 'text-color-invalid'}`">
        Апелляция {{ appeal ? '' : 'не' }}возможна
      </p>
    </form>
  </main>
</template>
