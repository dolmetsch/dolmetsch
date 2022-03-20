<template>
<div>
    <button v-if="hasCoursive" @click="coursive = !coursive">switch to {{ coursive ? 'print' : 'coursive' }} letters</button>
    <dl-keyboard :map="layout" class="keyboard" :class="{ [language]: true, coursive }" @keyPressed="handleKeyPressed"/>
    <audio ref="letterAudio"></audio>
</div>
</template>

<script>
import DlKeyboard from '~/components/dl-keyboard/dl-keyboard'

const degenerateLayout = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "-": "-",
    "=": "=",
    q: "q",
    w: "w",
    e: "e",
    r: "r",
    t: "t",
    y: "y",
    u: "u",
    i: "i",
    o: "o",
    p: "p",
    "[": "[",
    "]": "]",
    "\\": "\\",
    a: "a",
    s: "s",
    d: "d",
    f: "f",
    g: "g",
    h: "h",
    j: "j",
    k: "k",
    l: "l",
    ";": ";",
    "'": "'",
    z: "z",
    x: "x",
    c: "c",
    v: "v",
    b: "b",
    n: "n",
    m: "m",
    ",": ",",
    ".": ".",
    "/": "/",
    "!": "!",
    "@": "@",
    "#": "#",
    $: "$",
    "%": "%",
    "^": "^",
    "&": "&",
    "*": "*",
    "(": "(",
    ")": ")",
    _: "_",
    "+": "+",
    Q: "Q",
    W: "W",
    E: "E",
    R: "R",
    T: "T",
    Y: "Y",
    U: "U",
    I: "I",
    O: "O",
    P: "P",
    "{": "{",
    "}": "}",
    "|": "|",
    A: "A",
    S: "S",
    D: "D",
    F: "F",
    G: "G",
    H: "H",
    J: "J",
    K: "K",
    L: "L",
    ":": ":",
    '"': '"',
    Z: "Z",
    X: "X",
    C: "C",
    V: "V",
    B: "B",
    N: "N",
    M: "M",
    "<": "<",
    ">": ">",
    "?": "?",
}

const layouts = {
    english: degenerateLayout,
    russian: require('~/assets/langpacks/russian/keyboard_layouts/macos-default.json'),
    hebrew: require('~/assets/langpacks/hebrew/keyboard_layouts/macos.json'),
    georgian: require('~/assets/langpacks/georgian/keyboard_layouts/macos.qwerty.json'),
    armenian: require('~/assets/langpacks/armenian/keyboard_layouts/macos.phonetic.json'),
    greek: require('~/assets/langpacks/greek/keyboard_layouts/macos.json'),
    thai: require('~/assets/langpacks/thai/keyboard_layouts/macos.kedmanee.json'),
    khmer: require('~/assets/langpacks/khmer/keyboard_layouts/macos.json'),
    lao: require('~/assets/langpacks/lao/keyboard_layouts/macos.json'),
    hindi: require('~/assets/langpacks/hindi/keyboard_layouts/macos.devanagari.qwerty.json'),
    tamil: require('~/assets/langpacks/tamil/keyboard_layouts/macos.99.json'),
    sinhala: require('~/assets/langpacks/sinhala/keyboard_layouts/macos.json'),
}

const hasCoursive = {
    hebrew: true,
}

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
        language () {
            return this.$route.params.language
        },
        hasCoursive () {
            return !!hasCoursive[this.language]
        },
        layout () {
            return layouts[this.language] || degenerateLayout
        }
    },
    methods: {
        handleKeyPressed (letter) {
            this.$refs.letterAudio.pause()
            this.$refs.letterAudio.src =
                this.language === 'hebrew' || this.language === 'georgian' ?
                    `/langpacks/${this.language}/audio/${letter}.mp3`
                    : this.language === 'thai' ?
                        `/langpacks/thai/audio/characters/${letter}.mp3`
                        : this.language === 'armenian' ?
                            `/langpacks/armenian/audio/letters/${letter}_1.mp3`
                            : ''
            this.$refs.letterAudio.src && this.$refs.letterAudio.play()
        }
    }
}

</script>

<style lang="stylus" scoped>
@require '~/assets/styles/mixins.styl'

@font-face {
  font-family: "Motek";
  src: url("~assets/langpacks/hebrew/fonts/Motek.woff") format("woff");
}

button
    position fixed
    right 0
    top 0
    inverse-colors()
    padding .5em 1em

.keyboard.hebrew.coursive
    font-family Motek
</style>