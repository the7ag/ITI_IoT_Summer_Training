//event --> action on screen  (click, mouseover , keyboard -> -< keypressing)
//every html elment --> listener(handler a proprty onevent)

/******
 * Bind ecent from JS code
 * //1- this keyword (object rasing the evnet)
 * //2-  addEventListener (load)
 * //3- event Object
 */
//find something
// let createElemntmBtn=document.querySelector("input[value='Create Element']");


//do somthing
// createElemntmBtn.onclick=function(){
//     //this  --> object firing for event
//     document.body.style.backgroundColor="yellow";
//     this.value="test";
// }



// //unbind
// // createElemntmBtn.onclick=null;

// document.images // length 16

// for(let i=0;i<document.images.length;i++)
// {
//     // console.log(i,document.images[i]);
//     document.images[i].onclick=clickImage;
// }



window.addEventListener("load",function(){
    
    // console.log("Loaded");
    let createElemntmBtn=document.querySelector("input[value='Create Element']");


// do somthing
    createElemntmBtn.onclick=function(){
        //this  --> object firing for event
        document.body.style.backgroundColor="yellow";
        this.value="test";
    }

//find image
let imageObject=document.images[0];
let id=0;counter=1;

imageObject.onmouseover=function(){
id=setInterval(()=>{
        counter++;
        if(counter>8)
        counter=1;
        this.src=`images/${counter}.jpg`;
       
    },1000)

}

imageObject.onmouseout=function(){

    clearInterval(id);
}

/*********************
event object and preventing broswer default actions */

let textGradeElement=document.querySelector("input[type=text]");

textGradeElement.onkeypress=function(event){
    console.log(event.key);
    // event.prevenDefault();
}

});//load




//timers    async     
// setInterval(function to do , miliseconds)
// console.log("starting");
// let id=setInterval(function(){
//     console.log("interval");
// },1000);

// console.log("ending");

// //clearInterval(id);


// let id=setTimeout(function(){
//     console.log("timeout");
// },3000);

// clearInterval(id);






