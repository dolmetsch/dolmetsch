<template>
<div class="navigation">
    <nuxt-link to="/" exact>Thaiper</nuxt-link>
    <nav>
        <span>Languages:</span>
        <nuxt-link v-for="l in languages" :to="`/${l}/`">{{ l }}</nuxt-link>
    </nav>
</div>
</template>

<script>
export default {
    computed: {
        languages () {
            return [
                // 'english',

                // 'russian',

                'hebrew',

                'georgian',
                'armenian',

                // 'greek',

                'thai',
                // 'khmer',
                // 'lao',

                // 'hindi',
                // 'tamil',
                // 'sinhala',
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@require '~/assets/styles/mixins.styl'

.navigation
    display flex
    flex-direction row
    justify-content space-between
    align-items center

    span
        opacity 0.5

    a
        display inline-block
        padding 0 .25em
        text-transform capitalize

        &.active
            inverse-accent-colors()
</style>
