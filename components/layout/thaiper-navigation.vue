<template>
<nav>
    <nuxt-link to="/" exact>Home</nuxt-link>
    <span>
        <span>Languages:</span>
        <nuxt-link v-for="l in languages" :to="`/${l}/`">{{ l }}</nuxt-link>
    </span>
</nav>
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
a
    display inline-block
    margin-right 1em
    text-transform capitalize
</style>
