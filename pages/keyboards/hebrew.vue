<template>
<div>
    <button @click="coursive = !coursive">switch to {{ coursive ? 'print' : 'coursive' }} letters</button>
    <dl-keyboard :map="layout" class="keyboard" :class="{ coursive: coursive }" />
</div>
</template>

<script>
import DlKeyboard from '~/components/dl-keyboard/dl-keyboard'
import layout from '~/assets/langpacks/hebrew/keyboard_layouts/macos.json'

export default {
    components: {
        DlKeyboard
    },
    data () {
        return {
            coursive: false,
        }
    },
    computed: {
        layout () {
            return layout
        }
    }
}
</script>

<style lang="stylus" scoped>
@font-face {
  font-family: "Motek";
  src: url("~assets/langpacks/hebrew/fonts/Motek.woff") format("woff");
}

button
    position absolute
    left 1em
    top 1em

.keyboard.coursive
    font-family Motek
</style>