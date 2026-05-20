<script setup>

</script>

<template>
  <section class="breadcrumb">
    <div class="container">
      <h1 class="breadcrumb__title">REGISTRATION</h1>
    </div>
  </section>
</template>

<style lang="scss">
  .breadcrumb {
    background: $bgGrayNamePage;
    padding: 60px 0;
    margin-bottom: 64px;

    &__title {
      @include text(400, 24px, 100%, $textPinc);
    }
  }

  @media (max-width: 1199.98px) {
    .breadcrumb {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 767.98px) {
    .breadcrumb {
      padding: 46px 0;

      &__title {
        text-align: center;
      }
    }
  }
</style>
