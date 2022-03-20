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
                'english',

                'russian',

                'hebrew',

                'georgian',
                'armenian',

                'greek',

                'thai',
                'khmer',
                'lao',

                'hindi',
                'tamil',
                'sinhala',
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.navigation
    display flex
    flex-direction row
    justify-content space-between
    align-items center

    span
        opacity 0.5

    a
        display inline-block
        margin-right .5em
        text-transform capitalize
</style>
