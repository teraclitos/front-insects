import validateField from './validation'
const validatePhotosFieldsWithoutItems = (value, fieldName) => {
  if (fieldName !== 'description') {
    value.error = validateField(value, fieldName, 5, 40)
    return
  }
  value.error = validateField(value, fieldName, 8, 1000)
}
export default validatePhotosFieldsWithoutItems
