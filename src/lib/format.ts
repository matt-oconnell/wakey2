export default (formatter, apiResponse) => {
  try {
    return formatter(apiResponse)
  } catch(e) {
    throw new Error('Formatting Error')
  }
}
