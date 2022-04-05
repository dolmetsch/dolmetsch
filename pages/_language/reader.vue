<template>
<div class="reader-page">
    <aside>
        <!-- <h1>{{ language }} reader</h1> -->
        <nav>
            <nuxt-link
                :to="`/${language}/reader/${t.id}`"
                v-for="t in texts" :key="t.id"
            >
                <i>{{ t.id }}.</i>
                <strong>{{ t.title }}</strong>
            </nuxt-link>
        </nav>
    </aside>
    <nuxt-child class="primary"/>
</div>
</template>

<script>
import {
    indonesianTexts,
} from '~/utils/texts'

export default {
    components: {
    },
    computed: {
        language () {
            return this.$route.params.language
        },
        texts () {
            switch (this.language) {
                case 'indonesian':
                    return indonesianTexts
                default:
                    return []
            }
        },
    }
}
</script>

<style lang="stylus" scoped>
.reader-page
    overflow hidden
    > aside 
        position absolute
        left 0
        top 50px
        width 200px 
        padding 10px
        > h1
            margin 1em auto
            text-transform capitalize
            font-size 2em


        > nav
            > a
                display block
                > i
                    display inline-block
                    width 2em
                > strong
                    font-weight 300
</style>
