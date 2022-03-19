<template>
<div>
    <h1>{{ $route.params.language }}</h1>
    <nav>
        <nuxt-link :to="`/${$route.params.language}/keyboard/`">keyboard</nuxt-link>
    </nav>
    <nuxt-child/>
</div>
</template>

<style lang="stylus" scoped>
h1
    text-transform capitalize
    display inline-block
nav
    display inline-block
    > a
        display inline-block
</style>
