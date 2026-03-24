function sayHello() {
    return "Hello Raga";
}

function showHello() {
    document.getElementById("demo").innerHTML = sayHello();
}

console.log(sayHello());

const add = (a, b) => {
    console.log(a + b);
};

add(1, 3);

const student = {
    name: "raga",
    age: 20
};

function showda(){
    return new Date();
}

const d = showda();

console.log(d);
console.log(d.getFullYear());
console.log(d.getDay());
console.log(d.getHours());

d.setFullYear(2020);
console.log(d.getFullYear());

function showDate(){
    const dat = document.getElementById("date");
    dat.innerHTML = showda();
}
function showDate() {
    const value = document.getElementById("myDate").value;
    const d = new Date(value);
    document.getElementById("output").innerHTML = d;
}
function sho(){
    document.getElementById("d1").innerHTML=Date();
}
const btn=document.getElementById("d2");
btn.addEventListener("click",function() {
    document.getElementById("p1").innerHTML=Date();
});
const box = document.getElementById("box");

// Let box listen for mouseover
box.addEventListener("mouseover", function () {
  box.innerHTML = "Mouse is over me!";
});

// Let box listen for mouseout
box.addEventListener("mouseout", function () {
  box.innerHTML = "Move is out!";
});
