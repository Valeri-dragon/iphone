const scroll = ()=>{
  const blockMenu = document.querySelector(".header-menu__list")
 const menuLink = document.querySelectorAll(".header-menu__item  a")
 
 blockMenu.addEventListener("click",(event)=>{
   menuLink.forEach(itemLink=>{
 if(event.target == itemLink){
     event.preventDefault()
    
     const ID = event.target.getAttribute("href").substring(1);
     if(ID !==""){
       document.getElementById(ID).scrollIntoView({ 
         behavior: "smooth",
        block: "start" });
     }
 
   }
   })
  
 })
 
}
scroll()