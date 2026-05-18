<script setup>

</script>

<template>
    <section class="subscribe">
        <div class="container subscribe__container">
            <figure class="subscribe__figure">
                <img class="subscribe__img" src="@/assets/images/figure.png" alt="">
                <figcaption class="subscribe__text">
                    “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“
                </figcaption>
            </figure>
            <form class="subscribe__form" @submit.prevent>
                <p class="subscribe__title">
                    <span class="subscribe__title--span">SUBSCRIBE</span> <br>
                    FOR OUR NEWLETTER AND PROMOTION
                </p>
                <input class="subscribe__input" type="email" placeholder="Enter Your Email">
                <button class="subscribe__button" type="submit">Subscribe</button>
            </form>
        </div>
    </section>
</template>

<style lang="scss">
    .subscribe {
        background: url('@/assets/images/subscribe.png') no-repeat;
        background-size: cover;
        background-position: center;
        height: 448px;
        z-index: 1;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 2;
            background: #F4F4F4B2;
        }

        &__container {
            position: relative;
        }

        &__figure {
            margin-top: 97px;
            width: 359.45px;
            z-index: 3;
            position: absolute;
            @include flex-center;
            flex-direction: column;

        }

        &__img {
            width: 96px;
            height: 96px;
            border-radius: 50px;
            object-fit: cover;
            overflow: hidden;
            margin-bottom: 30px;
        }

        &__text {
            @include text(400, 20px, 100%, $textBlack);
            text-align: center;
        }

        &__form {
            padding: 0 97px 0 104px;
            z-index: 3;
            position: absolute;
            top: 150px;
            right: 0
        }

        &__title {
            @include text(400, 18px, 167%, $textBlack);
            text-align: center;
            margin-bottom: 32px;

            &--span {
                @include text(700, 24px, 167%, $textBlack);
            }
        }

        &__input {
            width: 256px;
            height: 49px;
            background: $bgInput;
            border: none;
            border-radius: 30px 0 0 30px;
            @include text(400, 14px, 100%, $inputText);
            padding-left: 22px;
            padding-right: 64px;
        }

        &__button {
            border: none;
            border-radius: 0 30px 30px 0;
            background: $bgPinc;
            height: 49px;
            width: 100px;
            @include text(400, 14px, 100%, $textWhite);
        }

    }
</style>