<script setup>
  import { mainCardFore } from '@/stores/cardStore'

  const cardStore = mainCardFore();
</script>

<template>
  <section class="for">
    <div class="container for__flex">
      <a
        class="for__item"
        href="/"
        v-for="card in cardStore.cards"
        :key="card.id"
      >
        <img class="for__image" :src="card.image" :alt="card.span">
        <p class="for__text">
          {{ card.text }} <br>
          <span class="for__span">{{ card.span }}</span>
        </p>
      </a>
    </div>
  </section>
</template>

<style lang="scss">

  .for {
    margin-bottom: 96px;

    &__flex {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }

    &__item {
      display: flex;
      position: relative;
      @include flex-center;
      transition: transform 0.3s ease;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #211616B2;
        z-index: 2;
      }

      &:hover {
        transform: scale(1.05);
      }
    }

    &__item:nth-child(-n+3) {
      width: 360px;
      height: 260px;
    }

    &__item:nth-child(4) {
      width: 100%;
      height: 180px;
    }

    &__image {
      position: absolute;
      z-index: 1;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    &__text {
      z-index: 3;
      position: absolute;
      text-align: center;
      @include text(400, 16px, 100%, $textWhite);
    }

    &__span {
      @include text(700, 24px, 100%, $textPinc);
    }

  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    .for {
      margin-bottom: 19.95px;

      &__flex {
        gap: 20px;
      }

      &__item:nth-child(-n+3) {
        width: calc(33.333% - 14px);
        height: 167px;
      }

      &__item:nth-child(4) {
        width: 100%;
        height: 116px;
      }
    }
  }
  @media (max-width: 767.98px) {
    .for {
      margin-bottom: 64px;

      &__flex {
        gap: 32px;
        flex-direction: column;
      }

      &__item:nth-child(-n+3) {
        width: 100%;
        height: 248px;
      }

      &__item:nth-child(4) {
        width: 100%;
        height: 111px;
      }
    }
  }
</style>
