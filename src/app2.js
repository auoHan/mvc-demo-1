import './app2.css'
import $ from 'jquery'

const $tabBar = $("#app2 .tab-bar")
const $tabContent = $("#app2 .tab-content")
$tabBar.on("click","li",(e)=>{
  const $li = $(e.currentTarget)
  $li.addClass("selected").siblings().removeClass("selected")
  const index = $li.index()
  $tabContent.children().eq(index).addClass("active").siblings().removeClass("active")
})

//自动点击第一个元素
$tabBar.children().eq(0).trigger("click")
