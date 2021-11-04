export const ageGenerator = (birthString) => {
  if (birthString) {
    const today = new Date()
    const birthday = new Date(birthString)

    let age = today.getFullYear() - birthday.getFullYear()
    const month = today.getMonth() - birthday.getMonth()

    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) age--
    return age;
  }
  return ''
}

export const dateFormatter = (date) => {
  if (date) {
    date = new Date(date)
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    return `${year}/${month}/${day}`
  }
  return ''
}
