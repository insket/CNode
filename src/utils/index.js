import dayjs from 'dayjs';

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
// 引入中文包
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')



// 日期 hook
export function fromnow(date) {
  return dayjs(date).fromNow()
}
