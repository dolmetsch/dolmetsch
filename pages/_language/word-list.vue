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
        <li v-for="w in words" :class="{ 'has-audio': w.hasAudio }" @click="playWord(w)">
            <strong>{{ w.original }}</strong>
            <span>{{ w.translation }}</span>
        </li>
    </ul>
</div>
</template>

<script>
import allHebrewWords from '~/assets/langpacks/hebrew/hebrew2english.json'
import hebrewAudioList from '~/assets/langpacks/hebrew/audio-list.json'

const cleanFileName = fn => fn.replace('?', '')
const originalComparator = (a, b) => a.original === b.original ? 0 : a.original > b.original ? 1 : - 1

const hebrewWords = Object.keys(allHebrewWords).reduce(
    (acc, original) => {
        const translation = allHebrewWords[original]
        const hasAudio = hebrewAudioList.includes(cleanFileName(original))
        acc.push({ original, translation, hasAudio })
        return acc
    }, []
)//.sort(originalComparator)


import mostFrequentThaiWords from '~/assets/langpacks/thai/words/most_frequent.json'
import thai2english from '~/assets/langpacks/thai/words/dicts/thai2english.json'
import thaiAudioList from '~/assets/langpacks/thai/audio/words.json'


const thaiWords = mostFrequentThaiWords.map(w => ({
    original: w,
    translation: thai2english[w] || '',
    hasAudio: thaiAudioList.includes(cleanFileName(w))
}))


import georgianWordsDict from '~/assets/langpacks/georgian/words.json'
import georgianAudioList from '~/assets/langpacks/georgian/audio.json'

const georgianWords = Object.keys(georgianWordsDict).reduce(
    (acc, original) => {
        const translation = georgianWordsDict[original]
        const hasAudio = georgianAudioList.includes(cleanFileName(original))
        acc.push({ original, translation, hasAudio })
        return acc
    }, []
)//.sort(originalComparator)

export default {
    data () {
        return {
            searchToken: ''
        }
    },
    computed: {
        language () {
            return this.$route.params.language
        },
        allWords () {
            switch (this.language) {
                case 'hebrew':
                    return hebrewWords
                case 'thai':
                    return thaiWords
                case 'georgian':
                    return georgianWords
                default:
                    return []
            }
        },
        words () {
            if (!this.searchToken) {
                return this.allWords
            } else {
                return this.allWords.filter(w =>
                    w.original.includes(this.searchToken) ||
                    w.translation.includes(this.searchToken)
                )
            }
        },
        totalCount () {
            return this.allWords.length
        },
        filteredCount () {
            return this.words.length
        },
    },
    methods: {
        playWord (w) {
            if (!w.hasAudio) {
                return
            }
            this.$refs.letterAudio.pause()
            if (this.language === 'hebrew' || this.language === 'georgian') {
                this.$refs.letterAudio.src = `/langpacks/${this.language}/audio/${cleanFileName(w.original)}.mp3`
            } else if (this.language === 'thai') {
                this.$refs.letterAudio.src = `/langpacks/${this.language}/audio/words/${cleanFileName(w.original)}.mp3`
            }
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