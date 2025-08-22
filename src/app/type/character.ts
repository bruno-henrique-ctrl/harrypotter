export type Character = {
    id: string
    name: string
    actor: string
    image: string
    house: string
}

export type CharacterDetail = {
    id: string
    name: string
    actor: string
    image: string
    house: string
    alive: boolean
    alternate_names: string[]
    ancestry: string
    dateOfBirth: string
    eyeColour: string
    gender: string
    hairColour: string
    hogwartsStudent: boolean
    hogwartsStaff: boolean
    patronus: string
    species: string
    wand: {
        wood: string
        core: string
    }
    wizard: true
}