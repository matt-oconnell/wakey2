export interface parkingResponse {
  suspended_dates: [number]
  text: string
}

export default (apiData: [any]): parkingResponse => {
  return apiData[0]
}
