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
        language () {
            return this.$route.params.language
        },
        hasKeyboard () {
            return true
        },
        hasWordList () {
            return [
                'hebrew',
                'thai',
                'georgian',
            ].includes(this.language)
        }
    },
    mounted () {
        document.documentElement.setAttribute('data-theme', this.language)
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
        z-index 2
        padding .5em

    h1
        display inline-block
        text-transform capitalize
        font-weight bold
        line-height 2em
    nav
        display inline-block
        > a
            display inline-block
            padding .5em .25em
            text-decoration underline
            &.active
                inverse-accent-colors()
</style>
