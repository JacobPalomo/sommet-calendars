"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Year = exports.Month = exports.Day = void 0;
class Day {
    constructor(date) {
        this.weekdays = [
            'Domingo',
            'Lunes',
            'Martes',
            'Miércoles',
            'Jueves',
            'Viernes',
            'Sábado',
        ];
        this.mdWeekdays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
        this.smWeekdays = ['D', 'L', 'M', 'X', 'J', 'V', 'S', 'D'];
        const today = new Date();
        if (date) {
            this.date = date;
            this.day = date.getDate();
            this.month = date.getMonth();
            this.year = date.getFullYear();
            this.weekday = date.getDay();
            this.today =
                date.getFullYear() === today.getFullYear() &&
                    date.getMonth() === today.getMonth() &&
                    date.getDate() === today.getDate();
        }
        else {
            this.date = today;
            this.day = today.getDate();
            this.month = today.getMonth();
            this.year = today.getFullYear();
            this.weekday = today.getDay();
            this.today = true;
        }
    }
    getDay() {
        return this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }
    getWeekday() {
        return this.weekday;
    }
    getWeekdayName(options) {
        let weekdayName;
        if (options)
            if (options.size === 'md')
                weekdayName = this.mdWeekdays[this.weekday];
            else if (options.size === 'sm')
                weekdayName = this.smWeekdays[this.weekday];
            else
                weekdayName = this.weekdays[this.weekday];
        else
            weekdayName = this.weekdays[this.weekday];
        return weekdayName;
    }
    toDate() {
        return this.date;
    }
    isToday() {
        return this.today;
    }
}
exports.Day = Day;
class Month {
    setCalendar() {
        const firstDay = new Date(this.year, this.month, 1);
        const lastDay = new Date(this.year, this.month + 1, 0);
        const firstWeekday = firstDay.getDay();
        const lastWeekday = lastDay.getDay();
        const prevDays = firstWeekday === 0 ? 6 : firstWeekday - 1;
        const nextDays = lastWeekday === 0 ? 0 : 7 - lastWeekday;
        const calendar = [];
        const date = firstDay;
        const monthDays = this.monthDays + prevDays + nextDays;
        let iterableDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - prevDays);
        for (let i = 0; i < monthDays; i++) {
            calendar.push(new Day(iterableDate));
            iterableDate = new Date(iterableDate.getFullYear(), iterableDate.getMonth(), iterableDate.getDate() + 1);
        }
        return calendar;
    }
    setMonthDays() {
        const lastDayMonth = new Date(this.year, this.month + 1, 0);
        return lastDayMonth.getDate();
    }
    updateMonth() {
        this.name = this.names[this.month];
        this.monthDays = this.setMonthDays();
        this.calendar = this.setCalendar();
    }
    constructor(year, month) {
        this.names = [
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
        ];
        this.mdNames = [
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
        ];
        if (year)
            this.year = year;
        else
            this.year = new Date().getFullYear();
        if (month)
            this.month = month;
        else
            this.month = new Date().getMonth();
        this.name = this.names[this.month];
        this.monthDays = this.setMonthDays();
        this.calendar = this.setCalendar();
    }
    getName(options) {
        let name = this.name;
        if (options && options.size === 'md')
            name = this.mdNames[this.month];
        return name;
    }
    nextMonth() {
        if (this.month === 11) {
            this.year++;
            this.month = 0;
        }
        else
            this.month++;
        this.updateMonth();
        return this;
    }
    getNextMonth() {
        let nextMonth;
        if (this.month === 11)
            nextMonth = new Month(this.year + 1, 0);
        else
            nextMonth = new Month(this.year, this.month + 1);
        return nextMonth;
    }
    prevMonth() {
        if (this.month === 0) {
            this.year--;
            this.month = 11;
        }
        else
            this.month--;
        this.updateMonth();
        return this;
    }
    getPrevMonth() {
        let prevMonth;
        if (this.month === 0)
            prevMonth = new Month(this.year - 1, 11);
        else
            prevMonth = new Month(this.year, this.month - 1);
        return prevMonth;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }
    getCalendar() {
        return this.calendar;
    }
    getMonthDays() {
        return this.monthDays;
    }
}
exports.Month = Month;
class Year {
    setMonths() {
        const monthCalendars = [];
        for (let month = 0; month < 12; month++) {
            const monthCalendar = new Month(this.year, month);
            monthCalendars.push(monthCalendar);
        }
        return monthCalendars;
    }
    constructor(year) {
        if (year)
            this.year = year;
        else
            this.year = new Date().getFullYear();
        this.months = this.setMonths();
    }
    getYear() {
        return this.year;
    }
    setYear(year) {
        this.year = year;
        this.months = this.setMonths();
        return this;
    }
    getMonth(month) {
        return this.months[month];
    }
    nextYear() {
        this.year++;
        this.months = this.setMonths();
        return this;
    }
    prevYear() {
        this.year--;
        this.months = this.setMonths();
        return this;
    }
    getMonths() {
        return this.months;
    }
}
exports.Year = Year;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLEdBQUc7SUFvQmYsWUFBWSxJQUFXO1FBWmYsYUFBUSxHQUFHO1lBQ2xCLFNBQVM7WUFDVCxPQUFPO1lBQ1AsUUFBUTtZQUNSLFdBQVc7WUFDWCxRQUFRO1lBQ1IsU0FBUztZQUNULFFBQVE7U0FDUixDQUFBO1FBQ08sZUFBVSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDOUQsZUFBVSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBRzVELE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7UUFFeEIsSUFBSSxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtZQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUM1QixJQUFJLENBQUMsS0FBSztnQkFDVCxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRTtvQkFDMUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFF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