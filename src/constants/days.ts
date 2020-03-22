export interface DayInfoI {
  morning: string;
  midmorning: string;
  midday: string;
  afternoon: string;
  evening: string;
}

export enum EDayInfo {
  morning = 'morning',
  midmorning = 'midmorning',
  midday = 'midday',
  afternoon = 'afternoon',
  evening = 'evening'
}

export const DAY_ICONS = {
  morning: '🌥️',
  midmorning: '⛅',
  midday: '☀️',
  afternoon: '🌤️',
  evening: '🌙'
} as DayInfoI

// FIXME use i18n
export const DAY_TIME = {
  morning: 'Mañana',
  midmorning: 'Media Mañana',
  midday: 'Mediodía',
  afternoon: 'Tarde',
  evening: 'Noche'
} as DayInfoI

export enum EDayTitles {
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  saturday = 'saturday',
  sunday = 'sunday'
}

// FIXME use i18n
export const DAY_TITLES = {
  monday: 'LUN',
  tuesday: 'MAR',
  wednesday: 'MIE',
  thursday: 'JUE',
  friday: 'VIE',
  saturday: 'SAB',
  sunday: 'DOM'
}
