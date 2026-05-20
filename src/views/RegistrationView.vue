<script setup>
  import { ref } from 'vue';
  import NamePage from '@/components/NamePage.vue';
  import SubscribeComp from '@/components/SubscribeComp.vue';

  const picked = ref('Один');

</script>

<template>
  <NamePage />
  <section class="registration">
    <div class="container registration__flex">
      <form class="registration__form">
        <p class="registration__heading">Your Name</p>
        <input class="registration__input" type="text" placeholder="First Name">
        <input class="registration__input" type="text" placeholder="Last Name">
        <div class="registration__radios">
          <input type="radio" id="men"  value="Men" v-model="picked">
          <label for="men">Men</label>
          <input type="radio" id="female"  value="Female" v-model="picked">
          <label for="female">Female</label>
        </div>
        <p class="registration__heading">Login details</p>
        <input class="registration__input" type="email" placeholder="Email">
        <input class="registration__input" type="password" placeholder="Password">
        <p class="registration__note">
          Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters
        </p>
        <button class="registration__button">
          <span>JOIN NOW</span>
          <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.54 0.208095C11.6058 0.142131 11.684 0.0897967 11.77 0.0540883C11.8561 0.01838 11.9483 0 12.0415 0C12.1347 0 12.2269 0.01838 12.313 0.0540883C12.399 0.0897967 12.4772 0.142131 12.543 0.208095L16.7929 4.458C16.8589 4.5238 16.9112 4.60196 16.9469 4.68802C16.9826 4.77407 17.001 4.86632 17.001 4.95949C17.001 5.05266 16.9826 5.14491 16.9469 5.23097C16.9112 5.31702 16.8589 5.39518 16.7929 5.46098L12.543 9.71089C12.41 9.84389 12.2296 9.91861 12.0415 9.91861C11.8534 9.91861 11.673 9.84389 11.54 9.71089C11.407 9.57788 11.3323 9.39749 11.3323 9.2094C11.3323 9.0213 11.407 8.84091 11.54 8.70791L15.2898 4.95949L11.54 1.21107C11.474 1.14528 11.4217 1.06711 11.386 0.981059C11.3503 0.895005 11.3319 0.802752 11.3319 0.709584C11.3319 0.616415 11.3503 0.524162 11.386 0.438109C11.4217 0.352055 11.474 0.273891 11.54 0.208095Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.95948C0 4.77162 0.0746263 4.59146 0.207462 4.45862C0.340297 4.32579 0.52046 4.25116 0.708318 4.25116H15.583C15.7708 4.25116 15.951 4.32579 16.0838 4.45862C16.2167 4.59146 16.2913 4.77162 16.2913 4.95948C16.2913 5.14734 16.2167 5.3275 16.0838 5.46033C15.951 5.59317 15.7708 5.6678 15.583 5.6678H0.708318C0.52046 5.6678 0.340297 5.59317 0.207462 5.46033C0.0746263 5.3275 0 5.14734 0 4.95948Z" fill="white"/>
          </svg>
        </button>
      </form>
      <div class="registration__content">
        <h3 class="registration__title">LOYALTY HAS ITS PERKS</h3>
        <p class="registration__info">
          Get in on the loyalty program where you can earn points and
          unlock serious perks. Starting with these as soon as you join:
        </p>
        <ul class="registration__list">
          <li class="registration__text">
            <svg class="registration__text-icon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z" fill="black"/>
            </svg>
            <span>15% off welcome offer</span>
          </li>
          <li class="registration__text">
            <svg class="registration__text-icon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z" fill="black"/>
            </svg>
            <span>Free shipping, returns and exchanges on all orders</span>
          </li>
          <li class="registration__text">
            <svg class="registration__text-icon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z" fill="black"/>
            </svg>
            <span>$10 off a purchase on your birthday</span>
          </li>
          <li class="registration__text">
            <svg class="registration__text-icon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z" fill="black"/>
            </svg>
            <span>Early access to products</span>
          </li>
          <li class="registration__text">
            <svg class="registration__text-icon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z" fill="black"/>
            </svg>
            <span>Exclusive offers & rewards</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <SubscribeComp />
</template>

<style lang="scss">
  .registration {
    margin-bottom: 96px;

    &__flex {
      @include flex-between;
      align-items: flex-start;
    }

    &__form {
      max-width: 360px;
      display: flex;
      flex-direction: column;
    }

    &__heading {
      margin-bottom: 20px;
      @include text(400, 16px, 100%, $textBlack);
    }

    &__input {
      padding: 13px 0 16px 17px;
      margin-bottom: 20px;
      border: 1px solid #A4A4A4;
    }

    &__radios {
      margin-bottom: 20px;
      display: flex;
      align-content: center;
      gap: 10px;
    }

    &__note {
      margin-bottom: 39px;
      @include text(400, 13px, 100%, $textGray);
    }

    &__button {
      width: 167px;
      @include flex-center;
      gap: 20px;
      padding: 16px 0;
      @include text(400, 14px, 100%, $textWhite);
      border: none;
      background: $bgPinc;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    &__content {
      max-width: 652px;
    }

    &__title {
      @include text(400, 24px, 100%, $textBlack);
      margin-bottom: 22px;
    }

    &__info {
      @include text(400, 24px, 100%, $textBlack);
      margin-bottom: 21px;
    }

    &__text {
      @include text(400, 24px, 100%, $textBlack);
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 22px;
    }

  }

  @media (min-width: 767.98px) and (max-width: 1199.98px) {
    .registration {
      &__content {
        max-width: 354px;
      }

      &__title {
        @include text(400, 16px, 100%, $textBlack);
      }

      &__info {
        @include text(400, 16px, 100%, $textBlack);
      }

      &__text {
        @include text(400, 16px, 100%, $textBlack);
      }
    }
  }

  @media (max-width: 767.98px) {
    .registration {
      &__flex {
        @include flex-center;
        flex-direction: column;
      }

      &__form {
        max-width: 100%;
        margin-bottom: 40px;
      }
      
      &__title {
        @include text(400, 16px, 100%, $textBlack);
      }

      &__info {
        @include text(400, 16px, 100%, $textBlack);
      }

      &__text {
        @include text(400, 16px, 100%, $textBlack);
      }
    }
  }
</style>
