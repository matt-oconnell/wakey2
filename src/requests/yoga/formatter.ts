import moment from '../../utils/moment'

export interface yogaClass {
  class: string
  time: string
  instructor: string
}

function filterYogaClasses(classEvent) {
  return /Yoga/i.test(classEvent.className)
  && 
  ((moment().weekday() === 0 || moment().weekday === 6)
  || (moment(classEvent.timestamp).isSameOrAfter(moment().startOf('day').add(12, 'hours'))))
}

export default (apiData: [any]): yogaClass[] => {
  return apiData.filter(filterYogaClasses).map(classEvent => ({
    class: classEvent.className,
    time: classEvent.time,
    instructor: classEvent.instructorName
  }))
}
