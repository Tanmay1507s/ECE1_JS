//JavaScript can change all the Html elements in the page
//JavaScript can change all the Html attributes int the page
//JavaScript can change all the CSS styles in the page 
//JavaScript can remove existing Html elements and attributes
//JavaScript can add new html elements and attributes
//JavaScript can react to all existing html events in the page
//JavaScript can create new html events in the page
//for css property we use element.style.property
//to create a element using javascript we use document.createElement("h1")
//for getting parent we use document.getElementByTagName("body")
//add element at the position using append method bodytag[0].append
//node.prepend adds at the start of node(inside)
//node.before adds before the node(outside)
//node.after adds after the node(outside)
//mouse events
//onclick
//onmouseover
//onmouseup
//onmousedown
//onmousedblclick
//onmousemove
//onmouseout
//keyboard event
//onfocus event onfocus
//onblur event onblur
//onchange event onchange
//oninput event oninput
//onsubmit event onsubmit
//window event
//onunload event onunload
//onresize event onresize




//const result=document.getElementById("jk");
//console.log(result);
//result.innerHTML="<b>Hello World</b>";
//const result1=document.getElementById("p1");
//console.log(result);
//result1[1].innerHTML="Chauhan";
//result1[0].innerHTML="Jitendra";
//const result=document.getElementById("jk").getAttribute("class");
//document.getElementById("p1").innerHTML=result;
//function onClick(){
//    console.log("Clicked");
//}
//function onmouseover(){
  //  console.log("on mouse over");
//}
//function onmousemove(){
  //  console.log("on mouse move");
//}
//function onmouseout(){
  //  console.log("on mouse out");
//}
//function onmousedown(){
  //  console.log("on mouse down");
//}
//function onmouseup(){
  //  console.log("on mouse up");
//}
//function onmousedblclick(){
  //  console.log("on mouse double click");
//}

//Asynchronous Programming
//let promise = new Promise((resolve,reject)=>{
  //  let success = true;
    //if(success)
      //  resolve("Data Locked");
    //else
      //  reject("Error Occured");
//});
  //  promise.then(result => console.log(result)).catch(error => console.log(error));
//resolve then statement us executed and rejevct catch statement is executed

//synchronous event
//async function getData() {
  //  let response = await fetch("https://jsonplaceholder.typocode.com/users");
    //let data = await response.json();
    //console.log(data);
//}
//getData();

//fetch API
//fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.jsom()).then(data => console.log(data)).catch(error => console.log(error))


try{
    var x = y+10;
}catch(error){
    console.log
}


//local storage
localStorage.setItem("name","Jeet");
//retrieve data
var name1 = localStorage.getItem("name");
console.log(name1);
//Remove Data
localStorage.removeItem("name");
//store Object
var user = {name:"Jeet",age:50};
localStorage.setItem("user",JSON.stringify(user));
//Retrieve Object
var data = JSON.parse(localStorage.getItem("user"));
console.log(data);