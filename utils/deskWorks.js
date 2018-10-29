export const makeIdFromTitle = title =>
  title
    .toString()
    .replace(/\s/g, '')
    .toLowerCase()

const makeEmptyDeckContent = title => ({
  title,
  questions: [],
})

export const makeEmptyDeck = title => ({
  [makeIdFromTitle(title)]: makeEmptyDeckContent(title),
})
