<template>
<div class="word-list">
    <div class="toolbar">
        <div class="stats">
            <span class="filtered" title="filtered">{{ filteredCount }}</span>
            /<span class="total" title="total">{{ totalCount }}</span>
        </div>
        <input class="search-box" v-model="searchToken" placeholder="filter/search"/>
    </div>
    <ul>
        <audio ref="letterAudio"></audio>
        <li v-for="(v, k) in words" :class="{ 'has-audio': hasAudio(k) }" @click="playWord(k)">
            <strong>{{ k }}</strong>
            <span>{{ v }}</span>
        </li>
    </ul>
</div>
</template>

<script>
import allWords from '~/assets/langpacks/hebrew/hebrew2english.json'
import audioList from '~/assets/langpacks/hebrew/audio-list.json'

const cleanFileName = fn => fn.replace('?', '')

export default {
    data () {
        return {
            searchToken: ''
        }
    },
    computed: {
        audioList () {
            return audioList
        },
        allWords () {
            return allWords
        },
        words () {
            if (!this.searchToken) {
                return this.allWords
            } else {
                return Object.keys(this.allWords).filter(w =>
                    w.includes(this.searchToken) || this.allWords[w].includes(this.searchToken)
                ).reduce((acc, k) => (acc[k] = this.allWords[k], acc), {})
            }
        },
        totalCount () {
            return Object.keys(this.allWords).length
        },
        filteredCount () {
            return Object.keys(this.words).length
        },
    },
    methods: {
        hasAudio (w) {
            w = cleanFileName(w)
            return this.audioList.includes(w)
        },
        playWord (w) {
            w = cleanFileName(w)
            if (!this.hasAudio(w)) {
                return
            }
            this.$refs.letterAudio.pause()
            this.$refs.letterAudio.src = `/langpacks/hebrew/audio/${w}.mp3`
            this.$refs.letterAudio.play()
        }
    }
}

</script>

<style lang="stylus" scoped>
.word-list
    padding 3em 1em
    > .toolbar
        position fixed
        top 0
        right 0
        padding 0.5em 1em
        display flex
        flex-direction row
        justify-content flex-end
        align-items center
        padding-left 250px
        width 100%
        z-index 1
        border-bottom 1px solid rgba(0, 0, 0, 0.1)
        > .stats
            margin-right 1em
        > .search-box
            float right
            margin-right .75em
            background rgba(0, 0, 0, 0.03)
            padding .5em
            text-align right
    > ul
        clear both
        display flex
        flex-direction row
        justify-content flex-end
        align-items center
        flex-wrap wrap

        > li
            padding .5em
            display inline-block
            margin .5em .75em
            border 1px solid rgba(0, 0, 0, 0.1)
            > strong
                font-size 3em
                display block
            > span
                //
            &.has-audio
                cursor pointer
                border-bottom-width 5px
</style>