declare module 'sommet-calendars' {
	export class Day {
		private day: number
		private month: number
		private year: number
		private weekday: number

		constructor(date?: Date)

		public getDay(): number
		public getMonth(): number
		public getYear(): number
		public getWeekday(): number
		public getWeekdayName(options?: { size: 'lg' | 'md' | 'sm' }): string
		public toDate(): Date
		public isToday(): boolean
	}

	export class Month {
		private name: string
		private month: number
		private year: number
		private calendar: Array<Day>
		private monthDays: number

		private setCalendar(): Array<Day>
		private setMonthDays(): number
		private updateMonth(): void

		constructor(year?: number, month?: number)

		public getName(options?: { size: 'md' | 'lg' }): string
		public nextMonth(): Month
		public getNextMonth(): Month
		public prevMonth(): Month
		public getPrevMonth(): Month
		public getMonth(): number
		public getYear(): number
		public getCalendar(): Array<Day>
		public getMonthDays(): number
	}

	export class Year {
		private year: number
		private months: Array<Month>

		private setMonths(): Array<Month>

		constructor(year?: number)

		public getYear(): number
		public setYear(year?: number): Year
		public getMonth(month?: number): Month
		public nextYear(): Year
		public prevYear(): Year
		public getMonths(): Array<Month>
	}
}
