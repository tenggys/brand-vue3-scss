<script setup>
  import { mainCardAdvantages } from '@/stores/cardStore'

  const cardStore = mainCardAdvantages();
</script>

<template>
  <section>
    <div>
      <div

        v-for="card in cardStore.cards"
        :key="card.id"
      >
        <img :src="card.image" :alt="card.title">
        <p>
          {{ card.title }}
        </p>
        <p>
          {{ card.text }}
        </p>
      </div>
    </div>
  </section>
</template>
