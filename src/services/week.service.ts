import data from '@/services/week.sample.json'
import {
  DAY_TITLES,
  DAY_TIME,
  DAY_ICONS,
  EDayInfo,
  EDayTitles
} from '@/constants/days'

export const week = () => {
  const week: string[] = []

  for (const day in data.week) {
    const title = DAY_TITLES[day as EDayTitles]
    week.push(title)
  }

  return week
}

export const dayTimes = () => {
  const dayTimes = data.dayTimes as EDayInfo[]

  return dayTimes.map((time: EDayInfo) => {
    return {
      icon: DAY_ICONS[time],
      time: DAY_TIME[time]
    }
  })
}
