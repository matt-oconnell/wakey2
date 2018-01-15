import axios from 'axios'
import request from '../../lib/request'
import apiShape from './apiShape'
import formatter, { yogaClass } from './formatter'
import moment from '../../utils/moment'

export default async (): Promise<yogaClass[]> => {
  const today = moment().format('YYYY-MM-DD')
  const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD')
  const url = `https://nyhrc-schedules.64labs.com/calendars/events?clubNumbers=5102&startDate=${today}&endDate=${tomorrow}`
  const yogaResponse = await axios.get(url)
  return request(yogaResponse.data, apiShape, formatter)
}
