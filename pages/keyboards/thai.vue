<template>
    <dl-keyboard :map="layout"/>
</template>

<script>
import DlKeyboard from '~/components/dl-keyboard/dl-keyboard'
import layout from '~/assets/langpacks/thai/keyboard_layouts/macos.kedmanee.json'

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