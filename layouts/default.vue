<template>
<div class="layout">
    <!-- <header>
        <thaiper-navigation/>
    </header> -->
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

:root
  --font-primary Inter, Roboto, Arial, Tahoma, sans-serif
  --color-primary-foreground black
  --color-primary-accent gold
  --color-primary-background white

html[data-theme='thai']
    --color-primary-foreground #370e62

html[data-theme='georgian']
    --color-primary-foreground #200

html[data-theme='armenian']
    --color-primary-foreground #0033a0
    --color-primary-accent #f2a800 //#d90012

html[data-theme='hebrew']
    --color-primary-foreground #0038b8

*, a
    box-sizing border-box
    padding 0
    margin 0
    font-size 1em
    font-weight normal
    text-decoration none
    text-transform none
    border none
    color inherit
    background inherit
    font-family inherit
</style>

<style lang="stylus" scoped>
@require '~/assets/styles/mixins.styl'

.layout
    font-family var(--font-primary)
    direct-colors()
    height 100%
    display flex
    flex-direction column
    justify-content space-between
    align-items center

    >.content
        flex-grow 1
        padding-top 1em
        padding-bottom 3em

    // > header,
    > footer
        width 100%
        line-height 3em
        padding 0 1em
        inverse-colors()
        position fixed
        bottom 0
        left 0
        right 0
</style>