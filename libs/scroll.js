const scroll = ()=>{
  const blockMenu = document.querySelector(".header-menu__list")
 const menuLink = document.querySelectorAll(".header-menu__item  a")
 const allCharater = document.querySelector('.card-details__link-characteristics');
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
 allCharater.addEventListener('click', (event) => {
    event.preventDefault();

    const allCharaterId = allCharater.getAttribute('href').substring(1);
    const allCharaterSection = document.getElementById(allCharaterId);

    allCharaterSection.scrollIntoView( {
        behavior: "smooth",
        block: "start"
    })
})
}
scroll()