<template>
    <dl-keyboard :map="layout"/>
</template>

<script>
import DlKeyboard from '~/components/dl-keyboard/dl-keyboard'
import layout from '~/assets/langpacks/russian/keyboard_layouts/macos-default.json'

export default {
    components: {
        DlKeyboard
    },
    computed: {
        layout () {
            return layout
        }
    }
}
</script>