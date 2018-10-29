import { makeIdFromTitle, makeEmptyDeck } from '../utils/deskWorks'
import {
  getDecksFromStorage,
  saveNewDeskToStorage,
  deleteDeskFromStorage,
  addCardInStorage,
} from '../utils/storageWorks'

export const GET_DESKS = 'GET_DESKS'
export const CREATE_DESK = 'CREATE_DESK'
export const DELETE_DESK = 'DELETE_DESK'
export const ADD_CARD = 'ADD_CARD'

export const getDesks = desks => ({
  type: GET_DESKS,
  desks,
})
export const createDesk = desk => ({
  type: CREATE_DESK,
  desk,
})

export const deleteDesk = deskId => ({
  type: DELETE_DESK,
  deskId,
})

export const addCard = (deskId, card) => ({
  type: ADD_CARD,
  deskId,
  card,
})

export const handleGetDesks = () => dispatch =>
  getDecksFromStorage().then(desks => dispatch(getDesks(desks)))

export const handleCreateDesk = deskName => dispatch =>
  saveNewDeskToStorage(deskName).then(() => dispatch(createDesk(makeEmptyDeck(deskName))))

export const handleDeleteDesk = deskName => dispatch =>
  deleteDeskFromStorage(deskName).then(() =>
    dispatch(deleteDesk(makeIdFromTitle(deskName))),
  )

export const handleAddCardToDesk = (deskName, question, answer) => dispatch =>
  addCardInStorage(deskName, question, answer).then(() =>
    dispatch(addCard(makeIdFromTitle(deskName), { question, answer })),
  )
