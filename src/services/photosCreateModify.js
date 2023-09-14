import validatePhotosFieldsWithoutItems from './validationPhotos'

export const changeFieldFunction = (event, photoFields) => {
  const fieldName = event.target.name
  const copyFields = structuredClone(photoFields)
  const fieldToChange = copyFields.findIndex(field => field?.[fieldName] !== undefined)
  copyFields[fieldToChange][fieldName] = event.target.value
  validatePhotosFieldsWithoutItems(copyFields[fieldToChange], fieldName)
  return copyFields
}
export const itemsFunction = (event, items) => {
  const fieldName = event.target.name
  const newItems = { ...items }
  if (fieldName === 'price') {
    newItems[fieldName] = Number(event.target.value)
  } else {
    newItems.size[fieldName] = Number(event.target.value)
  }
  return newItems
}
export const itemsArrayFunction = (itemsArray, items) => {
  const newItemsArray = structuredClone(itemsArray)
  const newItems = { ...items }
  newItemsArray.push(newItems)
  return newItemsArray
}

export const itemsArrayDeleteOneFunction = (indexToDelete, itemsArray) => {
  const newItemsArray = itemsArray.filter((el, id) => id !== indexToDelete)
  return newItemsArray
}
export const activateErrorFunction = (event, firstInputCheck) => {
  const fieldName = event.target.name
  const newFirstInputCheck = structuredClone(firstInputCheck)
  const indexInputCheckToChange = newFirstInputCheck.findIndex(field => field?.[fieldName] !== undefined)
  newFirstInputCheck[indexInputCheckToChange][fieldName] = true
  return newFirstInputCheck
}
export const checkIfThereIsAnyErrorFunction = (photoFields) => {
  return photoFields.some(field => field.error)
}
