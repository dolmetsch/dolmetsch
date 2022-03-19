<template>
<dl>
    <audio ref="letterAudio"></audio>
    <template v-for="(v, k) in words">
        <dt @click="playWord(k)">{{ k }}</dt>
        <dd>{{ v }}</dd>
    </template>
</dl>
</template>

<script>
import words from '~/assets/langpacks/hebrew/hebrew2english.json'

export default {
    computed: {
        words () {
            return words
        },
    },
    methods: {
        playWord (w) {
            const cleanFileName = fn => fn.replace('?', '')
            w = cleanFileName(w)
            this.$refs.letterAudio.pause()
            this.$refs.letterAudio.src = `/langpacks/hebrew/audio/${w}.mp3`
            this.$refs.letterAudio.play()
        }
    }
}

</script>

<style lang="stylus" scoped>
dt
    font-size 3em
    cursor pointer
</style>