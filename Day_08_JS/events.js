//evenbts --> action on screen (click , mouseover , keyboard key pressed)
//every html elements --> listener(handler)
let createElementmBtn=document.querySelector("input[value='Hello']");

createElementmBtn.onclick=function()
{
    document.body.style.backgroundColor="Red";
    console.log(this);
}
//unbind document.images[i].onclick = null
for (let i = 0; i < document.images.length; i++) {
    document.images[i].onclick = clickImage;
    
}

/** window.onload=function() happens when all objects is loaded so you can put the script at the top*/