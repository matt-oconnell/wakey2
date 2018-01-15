import axios from 'axios'
import request from '../../lib/request'
import apiShape from './apiShape'
import formatter, { parkingResponse } from './formatter'

export default async (): Promise<parkingResponse> => {
  const parkingResponse = await axios.get('https://nyc-asp-twitter.herokuapp.com')
  // todo: custom Error type
  return request(parkingResponse.data, apiShape, formatter)
}
