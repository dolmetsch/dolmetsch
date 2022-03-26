<template>
    <dl-recorder class="recorder-page" :words="words"/>
</template>

<script>
import {
    hebrewWords,
    thaiWords,
    georgianWords,
    armenianWords,
} from '~/utils/words'

import DlRecorder from '~/components/dl-recorder/dl-recorder'

export default {
    components: {
        DlRecorder,
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
                case 'armenian':
                    return armenianWords
                default:
                    return []
            }
        },
        words () {
            return this.allWords.filter(w => !w.hasAudio)
        },
    }
}
</script>

<style lang="stylus" scoped>
.recorder-page
    margin-top 4em
</style>
