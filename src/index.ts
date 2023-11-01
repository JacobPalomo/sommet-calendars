export class Calendar {
	private month: number
	private year: number

	private validateMonth(month: number): void {
		if (month < 0 || month > 11)
			throw new Error(
				'El numero de més debe ser mayor o igual que 0 y menor o igual que 11.'
			)
	}

	constructor(month: number, year: number) {
		this.validateMonth(month)

		this.month = month
		this.year = year
	}

	public nextMonth(): void {
		if (this.month <= 10) {
			this.month += 1
		} else {
			this.month = 0
			this.year += 1
		}
	}

	public prevMonth(): void {
		if (this.month >= 1) {
			this.month -= 1
		} else {
			this.month = 11
			this.year -= 1
		}
	}

	public getMonth(): number {
		return this.month
	}

	public setMonth(month: number): void {
		this.validateMonth(month)

		this.month = month
	}

	public getYear(): number {
		return this.year
	}

	public setYear(year: number): void {
		this.year = year
	}

	public getMonthDays(): number {
		const lastDayMonth = new Date(this.year, this.month + 1, 0)

		return lastDayMonth.getDate()
	}

	public getMonthCalendar(): Array<number> {
		const firstDay: Date = new Date(this.year, this.month, 1)
		const lastDay: Date = new Date(this.year, this.month + 1, 0)
		const firstWeekday: number = firstDay.getDay()
		const lastWeekday: number = lastDay.getDay()
		const prevDays: number = firstWeekday === 0 ? 6 : firstWeekday - 1
		const nextDays: number = lastWeekday === 0 ? 0 : 7 - lastWeekday
		const calendar: Array<number> = []

		const date: Date = firstDay
		const monthDays: number = this.getMonthDays() + prevDays + nextDays - 1
		let iterableDate: Date = new Date(
			date.getFullYear(),
			date.getMonth(),
			date.getDate() - prevDays
		)

		for (let i = 0; i < monthDays; i++) {
			calendar.push(iterableDate.getDate())

			iterableDate = new Date(
				iterableDate.getFullYear(),
				iterableDate.getMonth(),
				iterableDate.getDate() + 1
			)
		}

		return calendar
	}
}
