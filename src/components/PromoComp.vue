<script setup>
import promoImage from '@/assets/images/promo.png'

</script>

<template>
  <section class="promo">
    <div class="container promo__flex">
      <img class="promo__img" :src="promoImage" alt="Promo">
      <div class="promo__content">
        <h1 class="promo__title">
          <span class="promo__title--brand">THE BRAND</span> <br>
           OF LUXERIOUS <span class="promo__title--fashion">FASHION</span>
        </h1>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

  .promo {
    margin-bottom: 65px;
    background: $bgPromo;
    height: 764px;

    &__flex {
      display: flex;
    }

    &__img {
      margin-left: -227px;
    }

    &__content {
      border-left: 12px solid $borderPinc;
      height: 92px;
      margin-top: 290px;
      display: flex;
      align-items: center;
    }

    &__title {
      @include text(700, 32px, 100%, $textBlack);
      margin-left: 16px;

      &--brand {
       @include text(900, 48px, 100%, $textBlack);
      }

      &--fashion {
        @include text(700, 32px, 100%, $textPinc);
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    .promo {
      height: auto;
      margin-bottom: 19.95px;

      &__img {
        height: 386px;
        margin-left: -35px;
      }

      &__content {
        margin-top: 138px;
      }

      &__title {
        @include text(700, 24px, 100%, $textBlack);
        margin-left: 16px;

        &--brand {
          @include text(900, 44px, 100%, $textBlack);
        }

        &--fashion {
          @include text(700, 24px, 100%, $textPinc);
        }
      }
    }
  }
  @media (max-width: 767.98px) {
    .promo {
      margin-bottom: 64px;
      height: auto;

      &__img {
        display: none;
      }

      &__content {
        margin: 148px auto;
        height: 66px;
      }

      &__title {
        @include text(700, 20px, 100%, $textBlack);
        margin-left: 16px;

        &--brand {
          @include text(900, 38px, 100%, $textBlack);
        }

        &--fashion {
          @include text(700, 20px, 100%, $textPinc);
        }
      }
    }
  }

</style>
