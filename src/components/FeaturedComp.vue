<script setup>
import { mainCardFetured } from '@/stores/cardStore'

const cardStore = mainCardFetured()

</script>

<template>
  <section class="featured">
    <div class="container featured__flex">
      <h2 class="featured__heading">Fetured Items</h2>
      <p class="featured__subheading">
        Shop for items based on what we featured in this week
      </p>
      <div class="featured__box">
        <a class="featured__card featured__card--second" href="/"
          v-for="card in cardStore.cards"
          :key="card.id"
        >
          <div class="featured__top">
            <img class="featured__image"
              :src="card.image"
              :alt="card.name"
            >
            <button class="featured__buy">
              <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.333 21.9733C21.3781 21.9619 21.3994 21.9409 21.4171 21.9199C21.4248 21.9108 21.4326 21.9016 21.4405 21.8926C21.477 21.8508 21.4803 21.7623 21.4794 21.7175C21.4662 21.6115 21.3755 21.5386 21.2982 21.5386C21.2945 21.5386 21.2906 21.5387 21.2883 21.5388C21.2101 21.5442 21.1224 21.6479 21.129 21.7695C21.1383 21.8864 21.2245 21.9733 21.2963 21.9733H21.333ZM7.67657 21.9669C7.77576 21.9669 7.85638 21.8726 7.85638 21.7566C7.85638 21.6411 7.77576 21.5471 7.67657 21.5471C7.57745 21.5471 7.49677 21.6411 7.49677 21.7566C7.49677 21.8726 7.57745 21.9669 7.67657 21.9669ZM21.4565 23.9733C21.4088 23.9733 21.3448 23.9733 21.2963 23.9733C20.1587 23.9733 19.2137 23.0615 19.1335 21.905C19.0535 20.7 19.9507 19.6254 21.1523 19.5435C21.2012 19.5402 21.2499 19.5386 21.2982 19.5386C22.437 19.5386 23.3984 20.4395 23.4761 21.5955C23.5076 22.1985 23.3312 22.7682 22.9468 23.2083C22.5626 23.6646 22.0334 23.9247 21.4565 23.9733ZM7.67657 23.9669C6.47235 23.9669 5.49677 22.9779 5.49677 21.7566C5.49677 20.5361 6.47235 19.5471 7.67657 19.5471C8.88074 19.5471 9.85638 20.5361 9.85638 21.7566C9.85638 22.9779 8.88074 23.9669 7.67657 23.9669ZM20.6555 17.1008H8.59009C8.15717 17.1008 7.77289 16.8075 7.66034 16.3845L3.73456 1.95471H0.97876C0.450439 1.95471 0.0175781 1.51562 0.0175781 0.977417C0.0175781 0.440063 0.450439 0 0.97876 0H4.45636C4.88837 0 5.27264 0.293335 5.38513 0.717285L9.31097 15.1461H20.0146L23.5715 6.84082H11.7148C11.1857 6.84082 10.7527 6.40076 10.7527 5.86353C10.7527 5.32617 11.1857 4.88611 11.7148 4.88611H25.0457C25.3661 4.88611 25.6711 5.04895 25.8467 5.32617C26.0231 5.60242 26.0555 5.94446 25.9268 6.25403L21.5366 16.514C21.3763 16.8723 21.0397 17.1008 20.6555 17.1008Z" fill="white"/>
              </svg>
              Add to Cart
            </button>
          </div>

          <div class="featured__content">
            <p class="featured__name">
              {{ card.name }}
            </p>
            <p class="featured__text">
              {{ card.text }}
            </p>
            <span class="featured__price">
              ${{ card.price }}
            </span>
          </div>
        </a>
      </div>
      <button class="featured__button">
        Browse All Product
      </button>
    </div>
  </section>
</template>

<style lang="scss">
  .featured {
    margin-bottom: 95px;

    &__flex {
      @include flex-center;
      flex-direction: column;
    }

    &__heading {
      @include text(400, 30px, 100%, $textBlack);
      text-align: center;
      margin-bottom: 6px;
    }

    &__subheading {
      @include text (400, 14px, 100%, $textGaryPale);
      text-align: center;
      margin-bottom: 48px;
    }

    &__box {
      @include flex-wrap;
      gap: 30px;
      margin-bottom: 48px;
    }

    &__card {
      display: block;
      width: 360px;
      background: $bgGrayCard;
      cursor: pointer;
      z-index: 1;

      .featured__top {
        position: relative;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #211616B2;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }
      }

      &:hover {
        .featured__top::before {
          opacity: 1;
        }

        .featured__buy {
          display: flex;
          align-items: center;
          gap: 11.05px;
          z-index: 3;
        }
      }

      &--second {
        .featured__top {
          @include flex-center;
        }
      }
    }

    &__top {
      background: $bgGrayImg;
      height: 420px;
      position: relative;
    }

    &__image {
      object-fit: cover;
      height: 100%;
      max-width: 100%;
    }

    &__content {
      padding: 25.35px 28.8px 20px 16.46px;
    }

    &__name {
      @include text(400, 13px, 100%, $textBlack);
      margin-bottom: 12.65px
    }

    &__text {
      @include text(300, 14px, 100%, $textGray);
      margin-bottom: 18px
    }

    &__price {
      @include text(400, 16px, 100%, $textPinc);
    }

    &__button {
      @include flex-center;
      padding: 15px 39px;
      background: $bgWhite;
      @include text(400, 16px, 100%, $textPinc);
      border: 1px solid $borderPinc;
      transition: all 0.3s ease;

      &:hover {
        background: $bgPinc;
        color: $textWhite;
      }
    }

    &__buy {
      display: none;
      position: absolute;
      background: none;
      @include text(400, 14px, 100%, $textWhite);
      padding: 11.29px 16.41px 8.73px 13.54px;
      border: 1px solid $borderWhite;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.15);
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    .featured {
      margin-bottom: 65px;

      &__box {
        gap: 16px;
        margin-bottom: 33px;
      }

      &__card {
        width: calc(49.999% - 8px);

      }
    }
  }

  @media (max-width: 767.98px) {
    .featured {
      margin-bottom: 96px;

      &__box {
        flex-direction: column;
        gap: 16px;
        margin-bottom: 41px;
      }

      &__card {
        width: 100%;

      }
    }
  }
</style>
