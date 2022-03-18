<template>
<div class="layout">
    <header>
        <!-- <thaiper-navigation/> -->
    </header>
    <div class="content">
        <nuxt/>
    </div>
    <footer>
        <thaiper-navigation/>
    </footer>
</div>
</template>

<script>
import ThaiperNavigation from '~/components/layout/thaiper-navigation'

export default {
    components: {
        ThaiperNavigation,
    }
}
</script>

<style lang="stylus">
html, body, #__nuxt, #__layout
    height 100%
    margin 0
    padding 0
</style>

<style lang="stylus" scoped>
.layout
    height 100%
    display flex
    flex-direction column
    justify-content space-between
    align-items center

    >.content
        flex-grow 1
        margin-top 3em

    > header,
    > footer
        line-height 3em
</style>