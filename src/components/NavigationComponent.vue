<script setup lang="ts">
import { ref } from 'vue'

const routes = ref({ '/xcheck-calc': 'XCheckCalc Page', '/deploy-finder': 'DeployFinder Page' })
</script>

<template>
  <nav>
    <ul class="flex flex-col">
      <li v-for="(name, route) in routes" :key="name">
        <router-link :to="route" class="block p-3">{{ name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
