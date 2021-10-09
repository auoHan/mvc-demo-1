import './app1.css'
import $ from 'jquery'

const $add1 = $("#add1")
const $minus1 = $("#minus1")
const $ride2 = $("#ride2")
const $except2 = $("#except2")
const $number = $("#number")
const n = localStorage.getItem("n")
$number.text(n || 100)

$add1.on("click",()=>{
  let n = parseInt($number.text())
  n+=1
  localStorage.setItem("n",n)
  $number.text(n)
})
$minus1.on("click",()=>{
  let n = parseInt($number.text())
  n-=1
  localStorage.setItem("n",n)
  $number.text(n)
})
$ride2.on("click",()=>{
  let n = parseInt($number.text())
  n*=2
  localStorage.setItem("n",n)
  $number.text(n)
})
$except2.on("click",()=>{
  let n = parseInt($number.text())
  n/=2
  localStorage.setItem("n",n)
  $number.text(n)
})
