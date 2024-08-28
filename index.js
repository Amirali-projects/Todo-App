let ul=document.querySelector("ul")
let input=document.querySelector("input")
let button=document.querySelector("button")
button.addEventListener("click",function(){
    let item=document.createElement("li");
       item.innerText=input.value;
       ul.appendChild(item);   
       input.value="";
        let del=document.querySelectorAll(".delete");
let delbtn=document.createElement("button");
delbtn.innerText="delete"
delbtn.classList.add("delete");
item.appendChild(delbtn);
ul.appendChild(item);
// let textall=document.querySelectorAll(".delete");
// for (const iterator of textall) {
//     iterator.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

// Event Delegation Phenomemnon

ul.addEventListener("click",function(event){
    // console.log(event.target);
    console.log(event.target.nodeName)
    // console.log("button clicked");
    if(event.target.nodeName=="BUTTON"){
      let dele= event.target.parentElement;
      dele.remove();
    }
})

});

