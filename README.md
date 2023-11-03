# Sommet Calendars

---

Obtiene dos tipos de calendarios:

-   Anual - Trae todos los calendarios de un año.
-   Mensual - Trae el calendario de un mes.

## Instalación

---

#### npm

```
npm i sommet-calendars
```

#### yarn

```
yarn add sommet-calendars
```

## Uso

---

### Year

---

```js
var smtc = require('sommet-calemdars')

// Year
var year = new smtc.Year(2023) // Inicializa un año (Year)
var currentYear = year.getYear() // Devuelve el año del objeto
var months = year.getMonths() // Devuelve un arreglo de objetos Month
var january = year.getMonth(0) // Devuelve un objeto Month de Enero
var januaryCalendar = january.getCalendar(0) // Devuelve un arreglo de objetos Day

year.setYear(2050) // Cambia al año 2050 y devuelve el mismo objeto Year
year.nextYear() // Cambia al año siguiente (2051) y devuelve el mismo objeto Year
year.prevYear() // Cambia al año anterior (2050) y devuelve el mismo año
```

<br />
Si estas usando ES6:

```js
import { Year } from 'sommet-calendars'

const year = new Year(2023) // Inicializa un año (Year)
const currentYear = year.getYear() // Devuelve el año del objeto
const months = year.getMonths() // Devuelve un arreglo de objetos Month
const january = year.getMonth(0) // Devuelve un objeto Month de Enero
const januaryCalendar = january.getCalendar(0) // Devuelve un arreglo de objetos Day

year.setYear(2050) // Cambia al año 2050 y devuelve el mismo objeto Year
year.nextYear() // Cambia al año siguiente (2051) y devuelve el mismo objeto Year
year.prevYear() // Cambia al año anterior (2050) y devuelve el mismo año
```

#### Imprimiendo los meses de un año

```js
const yearMonths = year.getMonths()
yearMonths.map((month) => console.log(month))
```

#### Imprimiendo todos los días del año

```js
yearMonths.map((month) => {
	const days = month.getCalendar()
	days.map((day) => console.log(day.toDate()))
})
```

### Month

---

```js
// Month
var month = new smtc.Month(2023, 0) // Obtiene el mes de Enero del 2023
var monthName = month.getName() // Devuelve el nombre completo del mes (Enero)
var monthNum = month.getMonth() // Devuelve el mes en formato de numero (0)
var monthNameNormal = month.getName({ size: 'normal' }) // Devuelve el nombre completo del mes (Enero)
var shortMonthName = month.getName({ size: 'short' }) // Devuelve el nombre corto del mes (Ene)
var monthDays = month.getMonthDays() // Devuelve el número de días que tiene el mes
var monthYear = month.getYear() // Devulve el año al que pertenece este mes (2023)
var monthCalendar = month.getCalendar() // Obtiene el calendario de Enero del 2023
month.nextMonth() // Actualiza el mes al siguiente (Febrero 2023)
month.prevMonth() // Actualiza el mes al anterior (Enero 2023)
var nextMonth = month.getNextMonth() // Obtiene el siguiente mes devolviendo un nuevo objeto Month (Febrero 2023)
var prevMonth = month.getPrevMonth() // Obtiene el mes anterior devolviendo un nuevo objeto Month (Diciembre 2022)
```

<br />
o si estas usando ES6:

```js
import { Month } from 'sommet-calendars'
// Month
const month = new Month(2023, 0) // Obtiene el mes de Enero del 2023
const monthName = month.getName() // Devuelve el nombre completo del mes (Enero)
const monthNum = month.getMonth() // Devuelve el mes en formato de numero (0)
const monthNameNormal = month.getName({ size: 'normal' }) // Devuelve el nombre completo del mes (Enero)
const shortMonthName = month.getName({ size: 'short' }) // Devuelve el nombre corto del mes (Ene)
const monthDays = month.getMonthDays() // Devuelve el número de días que tiene el mes
const monthYear = month.getYear() // Devulve el año al que pertenece este mes (2023)
const monthCalendar = month.getCalendar() // Obtiene el calendario de Enero del 2023
month.nextMonth() // Actualiza el mes al siguiente (Febrero 2023)
month.prevMonth() // Actualiza el mes al anterior (Enero 2023)
const nextMonth = month.getNextMonth() // Obtiene el siguiente mes devolviendo un nuevo objeto Month (Febrero 2023)
const prevMonth = month.getPrevMonth() // Obtiene el mes anterior devolviendo un nuevo objeto Month (Diciembre 2022)
```

#### Imprimiendo los días de un mes

```js
const days = month.getCalendar()
days.map((day) => console.log(day.toDate))
```

### Day

---

```js
import { Day } from 'sommet-calendars'

const date = new Date()
const day = new Day(date) // Inicializa un objeto Day

day.getDay() // Devuelve el número del día
day.getMonth() // Devuelve el número del mes
day.getYear() // Devuelve el número del año
day.getWeekday() // Devuelve el número del día de la semana al que pertenece
day.getWeekdayName() // Devuelve el nombre del día de la semana al que pertenece el día
day.getWeekdayName({ size: 'lg' }) // Devuelve el nombre completo (Miércoles) del día de la semana al que pertenece el día
day.getWeekdayName({ size: 'md' }) // Devuelve el nombre de tamaño mediano (Mié) del día de la semana al que pertenece el día
day.getWeekdayName({ size: 'md' }) // Devuelve el nombre de tamaño chico (X) del día de la semana al que pertenece el día
day.isToday() // Comprueba si el día es hoy o no
day.toDate() // Devuelve el día en un objeto Date
```

#### Saber si un día es hoy

```js
const date = new Day(new Date())
console.log(date.isToday()) // Output: true

const tomorrow = new Day(new Date(2023, 10, 3))
console.log(tomorrow.isToday()) // Output: false
```

## Ejemplo de formatos de nombres

---

### Month

<table>
	<th>Opción</th>
	<th>Tamaño</th>
	<th>Ejemplo</th>
	<tbody>
		<tr>
			<td><code>lg</code></td>
			<td>grande / normal</td>
			<td>Enero</td>
		</tr>
		<tr>
			<td><code>md</code></td>
			<td>mediano</td>
			<td>Ene</td>
		</tr>
	</tbody>
</table>

### Weekday

<table>
	<th>Opción</th>
	<th>Tamaño</th>
	<th>Ejemplo</th>
	<tbody>
		<tr>
			<td><code>lg</code></td>
			<td>grande / normal</td>
			<td>Miercoles</td>
		</tr>
		<tr>
			<td><code>md</code></td>
			<td>mediano</td>
			<td>Mié</td>
		</tr>
		<tr>
			<td><code>sm</code></td>
			<td>pequeño</td>
			<td>X</td>
		</tr>
	</tbody>
</table>

> El día Miércoles en formato <code>sm</code> aparece como <code>X</code> para evitar confundir con el día Martes que aparece como <code>M</code>.

## Listas de nombres

---

### Months

<table>
	<th>Mes</th>
	<th><code>lg</code></th>
	<th><code>md</code></th>
	<tbody>
		<tr>
			<td>0</td>
			<td>Enero</td>
			<td>Ene</td>
		</tr>
		<tr>
			<td>1</td>
			<td>Febrero</td>
			<td>Feb</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Marzo</td>
			<td>Mar</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Abril</td>
			<td>Abr</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Mayo</td>
			<td>May</td>
		</tr>
		<tr>
			<td>5</td>
			<td>Junio</td>
			<td>Jun</td>
		</tr>
		<tr>
			<td>6</td>
			<td>Julio</td>
			<td>Jul</td>
		</tr>
		<tr>
			<td>7</td>
			<td>Agosto</td>
			<td>Ago</td>
		</tr>
		<tr>
			<td>8</td>
			<td>Septiembre</td>
			<td>Sep</td>
		</tr>
		<tr>
			<td>9</td>
			<td>Octubre</td>
			<td>Oct</td>
		</tr>
		<tr>
			<td>10</td>
			<td>Noviembre</td>
			<td>Nov</td>
		</tr>
		<tr>
			<td>11</td>
			<td>Diciembre</td>
			<td>Dic</td>
		</tr>
	</tbody>
</table>

### Weekdays

<table>
	<thead>
		<th>Weekday</th>
		<th><code>lg</code></th>
		<th><code>md</code></th>
		<th><code>md</code></th>
	</thead>
	<tbody>
		<tr>
			<td>0</td>
			<td>Domingo</td>
			<td>Dom</td>
			<td>D</td>
		</tr>
		<tr>
			<td>1</td>
			<td>Lunes</td>
			<td>Lun</td>
			<td>L</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Martes</td>
			<td>Mar</td>
			<td>M</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Miércoles</td>
			<td>Mie</td>
			<td>X</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Jueves</td>
			<td>Jue</td>
			<td>J</td>
		</tr>
		<tr>
			<td>5</td>
			<td>Viernes</td>
			<td>Vie</td>
			<td>V</td>
		</tr>
		<tr>
			<td>6</td>
			<td>Sábado</td>
			<td>Sáb</td>
			<td>S</td>
		</tr>
	</tbody>
</table>

> Aunque el domingo es el primer día de la semana los días de los meses empiezan desde el lunes. Más abajo está un ejemplo de como se vería un calendario construido con este módulo.

## Ejemplo de Calendario

---

Así es como se generan los días que están en el siguiente calendario. Incluyendo los días del mes anterior y el siguiente para que se genere el cuadro completo:

### Noviembre 2023

<table>
	<thead>
		<th>L</th>
		<th>M</th>
		<th>X</th>
		<th>J</th>
		<th>V</th>
		<th>S</th>
		<th style="color: red;">D</th>
	</thead>
	<tbody>
		<tr>
			<td style="opacity: 0.35;">30</td>
			<td style="opacity: 0.35;">31</td>
			<td>1</td>
			<td>2</td>
			<td>3</td>
			<td>4</td>
			<td style="color: red;">5</td>
		</tr>
		<tr>
			<td>6</td>
			<td>7</td>
			<td>8</td>
			<td>9</td>
			<td>10</td>
			<td>11</td>
			<td style="color: red;">12</td>
		</tr>
		<tr>
			<td>13</td>
			<td>14</td>
			<td>15</td>
			<td>16</td>
			<td>17</td>
			<td>18</td>
			<td style="color: red;">19</td>
		</tr>
		<tr>
			<td>20</td>
			<td>21</td>
			<td>22</td>
			<td>23</td>
			<td>24</td>
			<td>25</td>
			<td style="color: red;">26</td>
		</tr>
		<tr>
			<td>27</td>
			<td>28</td>
			<td>29</td>
			<td>30</td>
			<td style="opacity: 0.35;">1</td>
			<td style="opacity: 0.35;">2</td>
			<td style="opacity: 0.35; color: red;">3</td>
		</tr>
	</tbody>
</table>

Así es como se ve el arreglo de los días (`Date[]`) generados:

<img src="https://github.com/JacobPalomo/sommet-calendars/blob/main/readme-assets/nov-days-toDate.png" style="height: 350px"></img>

y así es como se un arreglo de los numeros de los días (`number[]`):

<img src="https://github.com/JacobPalomo/sommet-calendars/blob/main/readme-assets/nov-days-getDay.png" style="height: 159px"></img>
