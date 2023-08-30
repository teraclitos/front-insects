import validateField from './validation'
const validateUserFields = (value, fieldName) => {
  value.error = validateField(value, fieldName, 8, 20)
}
export default validateUserFields
