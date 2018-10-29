import { AsyncStorage } from 'react-native'
import { MOBILE_FLASHCARDS_STORAGE_KEY } from './CONST'
import { makeIdFromTitle, makeEmptyDeck } from './deskWorks'
// import { dummyData } from './dummyData'

export const getDecksFromStorage = async () => {
  try {
    const result = await AsyncStorage.getItem(MOBILE_FLASHCARDS_STORAGE_KEY)
    if (result) {
      return JSON.parse(result)
    }
    AsyncStorage.setItem(MOBILE_FLASHCARDS_STORAGE_KEY, JSON.stringify({}))
    return {}
  } catch (e) {
    console.warn('Error in getting Data from Storage ', e)
    return Promise.reject()
  }
}
export const saveNewDeskToStorage = title => {
  try {
    return AsyncStorage.mergeItem(
      MOBILE_FLASHCARDS_STORAGE_KEY,
      JSON.stringify(makeEmptyDeck(title)),
    )
  } catch (e) {
    console.warn('Error in merging Data to Storage ', e)
    return Promise.reject()
  }
}

export const saveDecksToStorage = decks => {
  try {
    return AsyncStorage.setItem(MOBILE_FLASHCARDS_STORAGE_KEY, JSON.stringify(decks))
  } catch (e) {
    console.warn('Error in saving Data from Storage ', e)
    return Promise.reject()
  }
}

export const addCardInStorage = async (deskName, question, answer) => {
  try {
    const desks = await getDecksFromStorage()
    const desk = desks[makeIdFromTitle(deskName)] || makeEmptyDeck(deskName)
    desk.questions.push({ question, answer })
    saveDecksToStorage(desks)
    return Promise.resolve()
  } catch (e) {
    console.warn('Error add Card to Storage', e)
    return Promise.reject()
  }
}

export const deleteDeskFromStorage = async title => {
  try {
    const idToDelete = makeIdFromTitle(title)
    const desks = await getDecksFromStorage()
    desks[idToDelete] = undefined
    delete desks[idToDelete]
    saveDecksToStorage(desks)
    return Promise.resolve()
  } catch (e) {
    console.warn('Error delete Desk', e)
    return Promise.reject()
  }
}
