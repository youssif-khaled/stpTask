window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
let x = document.getElementById("color");
let Elements = document.getElementsByTagName('li');
let Elements2 = document.getElementsByTagName('p');
let Elements3 = document.getElementsByTagName('h1');
let Elements4 = document.getElementsByTagName('h4');
let Elements6 = document.getElementsByTagName('a');
let Elements7 = document.getElementsByTagName('button');
function opa() {
  for (let i = 0; i < Elements3.length; i++) {
    Elements3[i].style.color = `${x.value}`;
}
for (let i = 0; i < Elements.length; i++) {
  Elements[i].style.color = `${x.value}`;
}
for (let i = 0; i < Elements2.length; i++) {
  Elements2[i].style.color = `${x.value}`;
  }
  for (let i = 0; i < Elements4.length; i++) {
    Elements4[i].style.color = `${x.value}`;
  }
  for (let i = 0; i < Elements6.length; i++) {
    Elements6[i].style.color = `${x.value}`;
  }
  for (let i = 0; i < Elements7.length; i++) {
    Elements7[i].style.color = `${x.value}`;
}
}

var t1 = document.getElementById("finput");
var t2 = document.getElementById("sinput");


// Update the count down every 1 second
function timer() {
  var countDownDate = new Date(`${t1.value}`).getTime();
  console.log(countDownDate);
  var now = new Date(`${t2.value}`).getTime();
  console.log(now);

  var z = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(z);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}

var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');
var link4 = document.getElementById('link4');
link1.addEventListener("click", function (e) {
  link1.style.backgroundColor = "dodgerblue";
  link2.style.backgroundColor = "transparent";
  link3.style.backgroundColor = "transparent";
  link4.style.backgroundColor = "transparent";
  
})
link2.addEventListener("click", function (e) {
  link2.style.backgroundColor = "dodgerblue";
  link3.style.backgroundColor = "transparent";
  link4.style.backgroundColor = "transparent";
  link1.style.backgroundColor = "transparent";
  
})
link3.addEventListener("click", function (e) {
  link3.style.backgroundColor = "dodgerblue";
  link1.style.backgroundColor = "transparent";
  link2.style.backgroundColor = "transparent";
  link4.style.backgroundColor = "transparent";
  
})
link4.addEventListener("click", function (e) {
  link4.style.backgroundColor = "dodgerblue";
  link1.style.backgroundColor = "transparent";
  link2.style.backgroundColor = "transparent";
  link3.style.backgroundColor = "transparent";
  
})