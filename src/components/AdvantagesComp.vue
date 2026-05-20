<script setup>
  import { mainCardAdvantages } from '@/stores/cardStore'

  const cardStore = mainCardAdvantages();
</script>

<template>
  <section class="advantages">
    <div class="container advantages__flex">
      <div class="advantages__item"
        v-for="card in cardStore.cards"
        :key="card.id"
      >
        <img class="advantages__icon" :src="card.image" :alt="card.title">
        <p class="advantages__title">
          {{ card.title }}
        </p>
        <p class="advantages__text">
          {{ card.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

  .advantages {
    padding: 104px 0;
    background: $bgBlack;

    &__flex {
      @include flex-between;
    }

    &__item {
      @include flex-center;
      flex-direction: column;
      text-align: center;
      width: 360px;
    }

    &__icon {
      &:nth-child(1) {
        margin-bottom: 28.07px;
        width: 44.99px;
        height: 31.93px;
      }

      &:nth-child(2) {
        margin-bottom: 19.07px;
        width: 39.99px;
        height: 39.92px;
      }

      &:nth-child(3) {
        margin-bottom: 25.07px;
        width: 47.02px;
        height: 34.93px;
      }
    }

    &__title {
      margin-bottom: 16px;
      @include text(400, 19.96px, 100%, $textWhite);
    }

    &__text {
      margin-bottom: 16px;
      @include text(400, 13.97px, 100%, $textGray);
    }
  }
  @media (min-width: 768px) and (max-width: 1199.98px) {
    .advantages {
      padding: 48px 0;

      &__flex {
        @include flex-center;
        flex-direction: column;
        gap: 48px;
      }
    }
  }
  @media (max-width: 767.98px) {
    .advantages {
      padding: 48px 0;

      &__flex {
        @include flex-center;
        flex-direction: column;
        gap: 46px;
      }
    }
  }
</style>
