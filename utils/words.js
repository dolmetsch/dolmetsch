import allHebrewWords from '~/assets/langpacks/hebrew/hebrew2english.json'
import hebrewAudioList from '~/assets/langpacks/hebrew/audio-list.json'

export const cleanFileName = fn => fn.replace('?', '')
const originalComparator = (a, b) => a.original === b.original ? 0 : a.original > b.original ? 1 : - 1

export const hebrewWords = Object.keys(allHebrewWords).reduce(
    (acc, original) => {
        const translation = allHebrewWords[original]
        const hasAudio = hebrewAudioList.includes(cleanFileName(original))
        acc.push({ original, translation, hasAudio })
        return acc
    }, []
)//.sort(originalComparator)


import mostFrequentThaiWords from '~/assets/langpacks/thai/words/most_frequent.json'
import thai2english from '~/assets/langpacks/thai/words/dicts/thai2english.json'
import thaiAudioList from '~/assets/langpacks/thai/audio/words.json'


export const thaiWords = mostFrequentThaiWords.map(w => ({
    original: w,
    translation: thai2english[w] || '',
    hasAudio: thaiAudioList.includes(cleanFileName(w))
}))


import georgianWordsDict from '~/assets/langpacks/georgian/words.json'
import georgianAudioList from '~/assets/langpacks/georgian/audio.json'

export const georgianWords = Object.keys(georgianWordsDict).reduce(
    (acc, original) => {
        const translation = georgianWordsDict[original]
        const hasAudio = georgianAudioList.includes(cleanFileName(original))
        acc.push({ original, translation, hasAudio })
        return acc
    }, []
)//.sort(originalComparator)


import armenianWordsDict from '~/assets/langpacks/armenian/words.json'
import armenianAudioList from '~/assets/langpacks/armenian/audio/words.json'

export const armenianWords = Object.keys(armenianWordsDict).reduce(
    (acc, original) => {
        const translation = armenianWordsDict[original]
        const hasAudio = armenianAudioList.includes(cleanFileName(original))
        acc.push({ original, translation, hasAudio })
        return acc
    }, []
)//.sort(originalComparator)
