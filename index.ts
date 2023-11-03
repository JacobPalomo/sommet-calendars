const MONTHS = [
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
const MD_MONTHS = [
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
const WEEKDAYS = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miércoles',
	'Jueves',
	'Viernes',
	'Sábado',
]
const MD_WEEKDAYS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
const SM_WEEKDAYS = ['D', 'L', 'M', 'X', 'J', 'V', 'S', 'D']

export class Day {
	private day: number
	private month: number
	private year: number
	private weekday: number

	constructor(date?: Date) {
		if (date) {
			this.day = date.getDate()
			this.month = date.getMonth()
			this.year = date.getFullYear()
			this.weekday = date.getDay()
		} else {
			const today = new Date()
			this.day = today.getDate()
			this.month = today.getMonth()
			this.year = today.getFullYear()
			this.weekday = today.getDay()
		}
	}

	public getDay(): number {
		return this.day
	}

	public getMonth(): number {
		return this.month
	}

	public getYear(): number {
		return this.year
	}

	public getWeekday(): number {
		return this.weekday
	}

	public getWeekdayName(options?: { size: 'lg' | 'md' | 'sm' }): string {
		let weekdayName

		if (options)
			if (options.size === 'md') weekdayName = MD_WEEKDAYS[this.weekday]
			else if (options.size === 'sm')
				weekdayName = SM_WEEKDAYS[this.weekday]
			else weekdayName = WEEKDAYS[this.weekday]
		else weekdayName = WEEKDAYS[this.weekday]

		return weekdayName
	}

	public toDate(): Date {
		return new Date(this.year, this.month, this.day)
	}

	public isToday(): boolean {
		const date = new Date()
		return (
			date.getFullYear() === this.year &&
			date.getMonth() === this.month &&
			date.getDate() === this.day
		)
	}
}

export class Month {
	private name: string
	private month: number
	private year: number
	private calendar: Array<Day>
	private monthDays: number

	private setCalendar(): Array<Day> {
		const firstDay: Date = new Date(this.year, this.month, 1)
		const lastDay: Date = new Date(this.year, this.month + 1, 0)
		const firstWeekday: number = firstDay.getDay()
		const lastWeekday: number = lastDay.getDay()
		const prevDays: number = firstWeekday === 0 ? 6 : firstWeekday - 1
		const nextDays: number = lastWeekday === 0 ? 0 : 7 - lastWeekday
		const calendar: Array<Day> = []

		const date: Date = firstDay
		const monthDays: number = this.monthDays + prevDays + nextDays
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

	private updateMonth(): void {
		this.name = MONTHS[this.month]
		this.monthDays = this.setMonthDays()
		this.calendar = this.setCalendar()
	}

	constructor(year?: number, month?: number) {
		if (year) this.year = year
		else this.year = new Date().getFullYear()

		if (month) this.month = month
		else this.month = new Date().getMonth()

		this.name = MONTHS[this.month]
		this.monthDays = this.setMonthDays()
		this.calendar = this.setCalendar()
	}

	public getName(options?: { size: 'md' | 'lg' }): string {
		let name = this.name

		if (options && options.size === 'md') name = MD_MONTHS[this.month]

		return name
	}

	public nextMonth(): Month {
		if (this.month === 11) {
			this.year++
			this.month = 0
		} else this.month++

		this.updateMonth()

		return this
	}

	public getNextMonth(): Month {
		let nextMonth
		if (this.month === 11) nextMonth = new Month(this.year + 1, 0)
		else nextMonth = new Month(this.year, this.month + 1)

		return nextMonth
	}

	public prevMonth(): Month {
		if (this.month === 0) {
			this.year--
			this.month = 11
		} else this.month--

		this.updateMonth()

		return this
	}

	public getPrevMonth(): Month {
		let prevMonth
		if (this.month === 0) prevMonth = new Month(this.year - 1, 11)
		else prevMonth = new Month(this.year, this.month - 1)

		return prevMonth
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

	constructor(year?: number) {
		if (year) this.year = year
		else this.year = new Date().getFullYear()

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
