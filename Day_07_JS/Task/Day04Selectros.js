//1- document.getElementById();





// let olObject=document.getElementsByTagName("ol")[0];
// let liElms=olObject.getElementsByTagName("li");
// h1Elm.//do somthing


/************************************************
  * 
  *  Section 1 : Selecting Elements from HTML without ID
  *  what is the best place to include your script tag?
  */

//Using Tree for image Object  DOM
// window.document.images[1] //object of image
//Using document Methods for image Object
// document.getElementsByTagName("img");

 //---------------1- document.getElementById  naming -10
// let divElement= document.getElementById('example'); //same as example


 //---------------2- document.getElementsByTagName
//document.getElementsByTagName("ol")[0].getElementsByTagName("li")
//method chaining--> as string lecture
//  let olElement=document.getElementsByTagName("ol")[0];
//  let olLiElements=olElement.getElementsByTagName("li");
//  let liElements=document.getElementsByTagName("li");  //--> return the object to manipulate it
//or document.getElementsByTagName("li")[0]

// let formElm = document.getElementsByTagName("Form")[0];
// let inputElm = formElm.getElementsByTagName("input");

 //---------------3- document.getElementsByName   name attribute
 //chekboxes
//document.getElementsByName("hoppy")[0]

 //---------------4- document.getElementByClassName
//case-senstive

    //any element contains this class as part of there classes
    // document.getElementsByClassName("bPink");
    //returns table and select
	// document.getElementsByClassName("bGrey");
    //only that have the collection of selected classes and order is not important
    // document.getElementsByClassName("fontBlue bGrey ");
    
//ClassList new property
//document.getElementsByTagName("p")[0].classList
//document.getElementsByTagName("p")[0].classList.add("fontBlue")
//document.getElementsByTagName("p")[0].classList.remove("fontBlue")
//document.getElementsByTagName("p")[0].classList.toggle("fontBlue")
//------------- 5 chaining methods to get your element

//second table rows



/***********************************************
   5-   document.querySelector() and document.querySelectorAll()
      //input for these methods is css2 selectors
*/
//tage name
//parent and direct parent
//classes with parents
//.class1.class2
/***********************************************
  Do Something           Attributes as property and as method
 */
// image src , anchor href , and checkbox(here better to use methods not property)
//document.images[0].src // or // document.images.setAttribute("src","images/4.jpg")
// document.querySelector("p").innerText=`<p style="color:red">eman<p>`
// document.querySelector("p").innerHTML=`<p style="color:red">eman<p>`
//document.querySelector("input[type=text]").value


//--------------------------- Change style for all images



/**********************************************
 *    Section 2: 
 *   /*  create ,insert ,delete  HTML Elements */

 //------------ create Elemnts  document.createElement(TagName) returns HTML Object
//  ul=document.querySelector("ul")
//ul=document.querySelector("ul")
 //liElm.innerText="new Item"
 //appendChild or append
 
//------------- insert the HTML from memory into the page   appendChild Method

//------------- delete Elements
//removeChild or remove-> on the same tag 

//------------- move element with cloneNode()


/**********************************************
 * Image sliding 
 */







