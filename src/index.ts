class Day {
	private date: Date
	private today: boolean

	constructor(date: Date) {
		const today = new Date()

		this.date = date
		this.today =
			date.getFullYear() === today.getFullYear() &&
			date.getMonth() === today.getMonth() &&
			date.getDate() === today.getDate()
	}

	public toDate() {
		return this.date
	}

	public isToday() {
		return this.today
	}
}

class Month {
	private name: string
	private month: number
	private year: number
	private calendar: Array<Day>
	private monthDays: number
	private names = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre',
	]
	private shortNames = [
		'Ene',
		'Feb',
		'Mar',
		'Abr',
		'May',
		'Jun',
		'Jul',
		'Ago',
		'Sep',
		'Oct',
		'Nov',
		'Dic',
	]

	private setCalendar(): Array<Day> {
		const firstDay: Date = new Date(this.year, this.month, 1)
		const lastDay: Date = new Date(this.year, this.month + 1, 0)
		const firstWeekday: number = firstDay.getDay()
		const lastWeekday: number = lastDay.getDay()
		const prevDays: number = firstWeekday === 0 ? 6 : firstWeekday - 1
		const nextDays: number = lastWeekday === 0 ? 0 : 7 - lastWeekday
		const calendar: Array<Day> = []

		const date: Date = firstDay
		const monthDays: number = this.monthDays + prevDays + nextDays - 1
		let iterableDate: Date = new Date(
			date.getFullYear(),
			date.getMonth(),
			date.getDate() - prevDays
		)

		for (let i = 0; i < monthDays; i++) {
			calendar.push(new Day(iterableDate))

			iterableDate = new Date(
				iterableDate.getFullYear(),
				iterableDate.getMonth(),
				iterableDate.getDate() + 1
			)
		}

		return calendar
	}

	private setMonthDays(): number {
		const lastDayMonth = new Date(this.year, this.month + 1, 0)

		return lastDayMonth.getDate()
	}

	constructor(
		year: number,
		month: number,
		options?: { nameSize: 'short' | 'normal' }
	) {
		if (options && options.nameSize === 'short')
			this.name = this.shortNames[month]
		else this.name = this.names[month]

		this.year = year
		this.month = month
		this.monthDays = this.setMonthDays()
		this.calendar = this.setCalendar()
	}

	public getName(): string {
		return this.name
	}

	public getMonth(): number {
		return this.month
	}

	public getYear(): number {
		return this.year
	}

	public getCalendar(): Array<Day> {
		return this.calendar
	}

	public getMonthDays(): number {
		return this.monthDays
	}
}

export class Year {
	private year: number
	private months: Array<Month>

	private setMonths(): Array<Month> {
		const monthCalendars: Array<Month> = []
		for (let month = 0; month < 12; month++) {
			const monthCalendar = new Month(this.year, month)
			monthCalendars.push(monthCalendar)
		}

		return monthCalendars
	}

	constructor(year: number) {
		this.year = year
		this.months = this.setMonths()
	}

	public getYear(): number {
		return this.year
	}

	public setYear(year: number): Year {
		this.year = year
		this.months = this.setMonths()

		return this
	}

	public getMonth(month: number): Month {
		return this.months[month]
	}

	public nextYear(): Year {
		this.year++
		this.months = this.setMonths()

		return this
	}

	public prevYear(): Year {
		this.year--
		this.months = this.setMonths()

		return this
	}

	public getMonths(): Array<Month> {
		return this.months
	}
}
