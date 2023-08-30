import validateField from './validation'
const validateUserFields = (value, fieldName) => {
  if (fieldName !== 'profileDescription') {
    value.error = validateField(value, fieldName, 5, 20)
    return
  }
  value.error = validateField(value, fieldName, 8, 1000)
}
export default validateUserFields
