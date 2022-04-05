<template>
<div class="text-page">
    <pre class="text">
        {{ text }}
    </pre>
    <div class="selected-fragment">
        <span class="original">{{ selectedFragment }}</span>
        <span class="translation">{{ selectedFragmentTranslation }}</span>
    </div>
</div>
</template>

<script>
import {
    indonesianTexts,
} from '~/utils/texts'

export default {
    data () {
        return {
            text: '',
            selectedFragment: '',
        }
    },
    components: {
    },
    computed: {
        language () {
            return this.$route.params.language
        },
        textId () {
            return this.$route.params.tid
        },
        texts () {
            switch (this.language) {
                case 'indonesian':
                    return indonesianTexts
                default:
                    return []
            }
        },
        dict () {
            return {
                saya: "I, me",
                bahasa: "language",
            }
        },
        selectedFragmentTranslation () {
            return this.dict[this.selectedFragment.toLowerCase()] || ''
        }
    },
    methods: {
        loadText () {
            const url = this.texts.find(t => t.id === this.textId)?.url
            if (!url) {
                return
            }
            fetch(url).then(response => response.text()).then(text => {
                this.text = text
            })
        },
        handleSelect (event) {
            this.selectedFragment = '' + document.getSelection()
        }
    },
    mounted () {
        this.loadText()
        document.addEventListener('selectionchange', this.handleSelect)
    },
    beforeDestroy () {
        document.removeEventListener('selectionchange', this.handleSelect)
    },
    watch: {
        '$route.params' (oldP, newP) {
            if (oldP.tid !== newP.tid || oldP.language !== newP.language) {
                this.loadText()
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.text-page
    padding-left 250px
    width 100vw

    > .text
        //

    > .selected-fragment
        > .original
            display block
            font-weight bolder
        > .translation
            display block            
</style>
