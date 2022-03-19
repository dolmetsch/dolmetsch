<template>
<div>
    <h1>{{ $route.params.language }}</h1>
    <nav>
        <nuxt-link v-if="hasKeyboard" :to="`/${$route.params.language}/keyboard/`">keyboard</nuxt-link>
        <nuxt-link v-if="hasWordList" :to="`/${$route.params.language}/word-list/`">word list</nuxt-link>
    </nav>
    <nuxt-child/>
</div>
</template>

<script>
export default {
    computed: {
        hasKeyboard () {
            return true
        },
        hasWordList () {
            return this.$route.params.language === 'hebrew'
        }
    }
}
</script>

<style lang="stylus" scoped>
h1
    text-transform capitalize
    display inline-block
nav
    display inline-block
    > a
        display inline-block
</s>
