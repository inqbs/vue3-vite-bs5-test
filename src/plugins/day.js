import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/en'
import 'dayjs/locale/ko'

//  dayjs
dayjs.extend(duration)
  .extend(customParseFormat)
  .extend(relativeTime)
