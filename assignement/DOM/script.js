let b1=document.getElementById("button1");
let b2=document.getElementById("button2");
let b3=document.getElementById("button3");
let inp=document.getElementById("input");
let c=parseFloat(inp.value)
c=0;
inp.value=c;
b1.addEventListener("click",function()
{
    let c=parseFloat(inp.value);
    c=c-1;
    inp.value=c;
})
b2.addEventListener("click",function()
{
    let c=parseFloat(inp.value);
    c=c+1;
    inp.value=c;
})
b3.addEventListener("click",function()
{
    let c=parseFloat(inp.value);
    c=0;
    inp.value=c;
})