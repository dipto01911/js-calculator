function cal(x){
    nam.dis.value= (nam.dis.value+x);
   }
   var m;
m=document.querySelector("#nama");
m.addEventListener("click",function(){
   nam.dis.value=0;
})

var t;
t=document.querySelector("form");
function my(){
t.classList.add("add");
}
function my1(){
t.classList.remove("add");
}
var x;
x=document.querySelector("form");
function my2(){
x.classList.add("nan");
}   
function my3(){
x.classList.remove("nan");
}