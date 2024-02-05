let a=document.querySelector("img");
let i=document.getElementById("i");
// let b=document.querySelector("#i1");
let b=document.getElementById("i1")

a.addEventListener("dblclick",function()
{ 
    i.style.transform = 'translate(-50%,-50%) scale(1)';
    b.style.color=" rgb(221, 20, 20)";
    i.style.opacity=0.8;
    
setTimeout(function()
{
    i.style.opacity=0;

},500)
   
setTimeout(function()
{
    i.style.transform = 'translate(-50%,-50%) scale(0)';

},500)
})