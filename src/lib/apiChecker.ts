import * as apiCheck from 'api-check'

const checker = apiCheck({})

export default (format, apiResponse) => {
  try {
    checker.throw(format(checker), apiResponse)
  } catch(e) {
    throw new Error('API Shape Check Failed')
  }
}
