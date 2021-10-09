import './app3.css'
import $ from 'jquery'

const $square = $("#app3 .square")

$square.on("click",()=>{
  $square.toggleClass("active")//有就删掉没有就添加
})