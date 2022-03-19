<template>
<dl>
    <template v-for="(v, k) in words">
        <dt>
            <strong>{{ k }}</strong>
            {{ v }}

        </dt>
        <dd><audio :src="`/langpacks/hebrew/audio/${k}.mp3`" controls></audio></dd>
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
    }
}

</script>

<style lang="stylus" scoped>
</style>