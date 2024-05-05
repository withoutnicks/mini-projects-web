const $ = selector => document.querySelector(selector)

const $month = $('#month')
const $dayName = $('#day-name')
const $dayNum = $('#day-num')
const $year = $('#year')

const date = new Date()

$month.innerText = date.toLocaleString('en-GB', { month: 'long' })
$dayName.innerText = date.toLocaleString('en-GB', { weekday: 'long' })
$dayNum.innerText = date.toLocaleString('en-GB', { day: 'numeric' })
$year.innerText = date.toLocaleString('en-GB', { year: 'numeric' })
