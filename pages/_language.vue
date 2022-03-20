<template>
<div class="language-page">
    <aside>
        <h1>{{ $route.params.language }}:</h1>
        <nav>
            <nuxt-link v-if="hasKeyboard" :to="`/${$route.params.language}/keyboard/`">keyboard</nuxt-link>
            <nuxt-link v-if="hasWordList" :to="`/${$route.params.language}/word-list/`">dictionary</nuxt-link>
        </nav>
    </aside>
    <nuxt-child/>
</div>
</template>

<script>
export default {
    computed: {
        hasKeyboard () {
            return true
        },
        hasWordList () {
            return this.$route.params.language === 'hebrew'
        }
    }
}
</script>

<style lang="stylus" scoped>
@require '~/assets/styles/mixins.styl'

.language-page
    > aside
        position fixed
        left 0
        top 0
        inverse-colors()
        padding .5em
        z-index 2

    h1
        display inline-block
        text-transform capitalize
        font-weight bold
        line-height 2em
        margin-right 1em
    nav
        display inline-block
        > a
            display inline-block
            margin-right .5em
            text-decoration underline
</style>
