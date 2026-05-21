<script setup>
  import { useBasketStore } from '@/stores/basketStore'

  const basketStore = useBasketStore()

  defineProps({
    isBasketOpen: Boolean
  })
</script>

<template>
  <div class="basket" :class="{ 'basket--open': isBasketOpen }">
    <div class="basket__header">
      <p class="basket__title">Название товара</p>
      <p class="basket__title">Количество</p>
      <p class="basket__title">Цена за шт.</p>
      <p class="basket__title">Итого</p>
    </div>
    <div class="basket__row" v-for="item in basketStore.items" :key="item.id">
      <p class="basket__data">{{ item.name }}</p>
      <p class="basket__data">{{ item.quantity }} шт.</p>
      <p class="basket__data">{{ item.price }}$</p>
      <p class="basket__data">{{ (item.price * item.quantity) }}$</p>
    </div>
    <div class="basket__total">
      <p class="basket__total-price">Товаров в корзине на сумму: <span>{{ basketStore.totalPrice }}</span>$</p>
    </div>
  </div>
</template>

<style lang="scss">
  .basket {
    position: absolute;
    top: 47px;
    right: 0;
    width: 500px;
    padding: 15px;
    background: $bgWhite;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: all 0.3s ease;
    z-index: 2;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);

    &--open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    &__header {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid $borderBlack;
    }

    &__title {
      @include text(400, 16px, 100%, $textBlack);
      width: 120px;
    }

    &__row {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid $borderBlack;
    }

    &__data {
      @include text(400, 16px, 100%, $textBlack);
      width: 120px;
    }
  }
</style>
