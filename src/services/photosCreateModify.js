import validatePhotosFieldsWithoutSizesPrices from './validationPhotos'

export const changeFieldFunction = (event, photoFields) => {
  const fieldName = event.target.name
  const copyFields = structuredClone(photoFields)
  const fieldToChange = copyFields.findIndex(field => field?.[fieldName] !== undefined)
  copyFields[fieldToChange][fieldName] = event.target.value
  validatePhotosFieldsWithoutSizesPrices(copyFields[fieldToChange], fieldName)
  return copyFields
}
export const sizesPricesFunction = (event, sizesPrices) => {
  const fieldName = event.target.name
  const newSizesPrices = { ...sizesPrices }
  if (fieldName === 'price') {
    newSizesPrices[fieldName] = Number(event.target.value)
  } else {
    newSizesPrices.size[fieldName] = Number(event.target.value)
  }
  return newSizesPrices
}
export const sizesPricesArrayFunction = (sizesPricesArray, sizesPrices) => {
  const newSizesPricesArray = structuredClone(sizesPricesArray)
  const newSizesPrices = { ...sizesPrices }
  newSizesPricesArray.push(newSizesPrices)
  return newSizesPricesArray
}

export const sizesPricesArrayDeleteOneFunction = (indexToDelete, sizesPricesArray) => {
  const newSizesPricesArray = sizesPricesArray.filter((el, id) => id !== indexToDelete)
  return newSizesPricesArray
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
