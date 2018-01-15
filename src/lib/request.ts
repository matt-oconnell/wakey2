import apiChecker from './apiChecker'
import format from './format'

export default (requestData, shape, formatter) =>  {
  apiChecker(shape, requestData)
  return format(formatter, requestData)
}
