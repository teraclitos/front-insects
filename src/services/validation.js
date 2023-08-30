const validateField = (value, fieldName, minLength, maxLength) => {
  const fieldTrim = value[fieldName].trim()
  if (fieldTrim === '') {
    return `El campo ${fieldName} está vacío`
  }
  if (fieldTrim.length < minLength || fieldTrim.length > maxLength) {
    return `El campo ${fieldName} debe tener entre ${minLength} y ${maxLength} caracteres`
  }
  return ''
}

export default validateField
