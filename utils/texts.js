import indonesianPeriplus1 from '~/assets/langpacks/indonesian/texts/periplus/periplus-1/index.json'
export const indonesianTexts = indonesianPeriplus1.map(fileName => {
    const parts = fileName.split('.')
    const id = parts.slice(0, parts.length - 2).join('.')
    const title = parts[parts.length - 2]
    return {
        id,
        title,
        url: '/langpacks/indonesian/texts/periplus/periplus-1/' + fileName
    }    
})
