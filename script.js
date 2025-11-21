arr = ['i love js', 'js is awesome', 'js is fun', 'Sheriyans is best', 'Harsh Bhaiya is great', 'I love coding', 'Coding is life', 'Frontend development is cool', 'Sarthak Bhaiya is awesome']

var btn = document.querySelector("button")
var main = document.querySelector("main")

btn.addEventListener("click", function() {

  
 var h1 = document.createElement('h1')
 h1.innerHTML = arr[Math.floor(Math.random()*arr.length)]
main.appendChild(h1)

var c1 = Math.floor(Math.random()*256)
var c2 = Math.floor(Math.random()*256)
var c3 = Math.floor(Math.random()*256)


var x = Math.random()*100
var y = Math.random()*100
var rotate = Math.random()*360

h1.style.position = 'absolute'
h1.style.color =`rgb(${c1},${c2},${c3})`
h1.style.left = x +'%'
h1.style.top = y +'%'
h1.style.rotate= rotate + 'deg'
 }
);

