<script setup>
  import { mainCardFore } from '@/stores/cardStore'

  const cardStore = mainCardFore();
</script>

<template>
  <section>
    <div>
      <a href="/"
        v-for="card in cardStore.cards"
        :key="card.id"
      >
        <img :src="card.image" :alt="card.span">
        <p>
          {{ card.text }} <br>
          <span>{{ card.span }}</span>
        </p>
      </a>
    </div>
  </section>
</template>
