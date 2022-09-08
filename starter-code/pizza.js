// Write your Pizza Builder JavaScript in this file.
let $body = $("body")
let sectionArray = document.getElementsByTagName('pep')
console.log(sectionArray)
let count = 0
function Toggle(){
$(".btn-pepperonni").click(function(){
    $(".pep").toggle()
})

$(".btn-mushrooms").click(function(){
    $(".mushroom").toggle()
})

$(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle()
})

$(".btn-sauce").click(function() {
    $(".sauce").toggle()
})

$(".btn-crust").click(function() {
    $(".crust-gluten-free").toggle()
})
}
Toggle()

