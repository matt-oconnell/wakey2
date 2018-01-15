import * as moment from 'moment-timezone'
import { TIMEZONE } from '../config/constants'

moment.tz.setDefault(TIMEZONE)

export default moment
