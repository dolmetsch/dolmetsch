<template>
<div class="word-list">
    <div class="toolbar">
        <button class="coursive-mode" v-if="hasCoursive" @click="coursive = !coursive">switch to {{ coursive ? 'print' : 'coursive' }} letters</button>
        <button class="audio-mode" @click="cycleAudioMode">audio : {{ audioMode }}</button>
        <div class="stats">
            <span class="filtered" title="filtered">{{ filteredCount }}</span>
            /<span class="total" title="total">{{ totalCount }}</span>
        </div>
        <input class="search-box" v-model="searchToken" placeholder="filter/search"/>
    </div>
    <ul :class="{ coursive }">
        <audio ref="letterAudio"></audio>
        <li v-for="w in words" :class="{ 'has-audio': w.hasAudio }" @click="playWord(w)">
            <strong>{{ w.original }}</strong>
            <span>{{ w.translation }}</span>
        </li>
    </ul>
</div>
</template>

<script>
import {
    cleanFileName,
    hebrewWords,
    thaiWords,
    georgianWords,
    armenianWords,
} from '~/utils/words'

const hasCoursive = {
    hebrew: true,
}

export default {
    data () {
        return {
            searchToken: '',
            audioMode: 'any',
            coursive: false,
        }
    },
    computed: {
        language () {
            return this.$route.params.language
        },
        hasCoursive () {
            return !!hasCoursive[this.language]
        },
        allWords () {
            switch (this.language) {
                case 'hebrew':
                    return hebrewWords
                case 'thai':
                    return thaiWords
                case 'georgian':
                    return georgianWords
                case 'armenian':
                    return armenianWords
                default:
                    return []
            }
        },
        words () {
            let ws
            if (!this.searchToken) {
                ws = this.allWords
            } else {
                ws = this.allWords.filter(w =>
                    w.original.includes(this.searchToken) ||
                    w.translation.includes(this.searchToken)
                )
            }
            switch (this.audioMode) {
                case 'set':
                    return ws.filter(w => w.hasAudio)
                case 'not set':
                    return ws.filter(w => !w.hasAudio)
                default:
                    return ws
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
        cycleAudioMode () {
            if (this.audioMode === 'any') {
                this.audioMode = 'set'
            } else if (this.audioMode === 'set') {
                this.audioMode = 'not set'
            } else {
                this.audioMode = 'any'
            }
        },
        playWord (w) {
            if (!w.hasAudio) {
                return
            }
            this.$refs.letterAudio.pause()
            if (this.language === 'hebrew' || this.language === 'georgian') {
                this.$refs.letterAudio.src = `/langpacks/${this.language}/audio/${cleanFileName(w.original)}.mp3`
            } else if (this.language === 'thai' || this.language === 'armenian') {
                this.$refs.letterAudio.src = `/langpacks/${this.language}/audio/words/${cleanFileName(w.original)}.mp3`
            }
            this.$refs.letterAudio.play()
        }
    }
}

</script>

<style lang="stylus" scoped>
@font-face {
  font-family: "Motek";
  src: url("~assets/langpacks/hebrew/fonts/Motek.woff") format("woff");
}

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
        > .audio-mode,
        > .coursive-mode
            margin-right 2em
            cursor pointer
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

        &.coursive
            > li
                > strong
                    font-family Motek
</style>