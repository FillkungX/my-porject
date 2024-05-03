const container = document.querySelector(".container");
const kmitl = document.getElementsByClassName("kmitl");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card1_back = document.getElementById("card1_back");
// const card = document.getElementsByClassName(".card");


const slideOut = () => {
  const kmitl = document.querySelector(".kmitl");
  const itcamp = document.querySelector(".itcamp-logo");

  kmitl.style.transition = "transform 0.3s";
  itcamp.style.transition = "transform 2s";

  kmitl.style.transform = "translateX(-300%)";
  itcamp.style.transform = "translateX(100%)";
}; 

card.addEventListener("click", () => {
  card.style.animation = "spin 0.4s linear ";
  slideOut();
  
  
    setTimeout(function() {
        
    card.style.transform = "translateY(-300%)";
    
  }, 500);


  setTimeout(function() {
        
      card1.animate([
    {
      transform: "translate(400px, -540px) rotate(360deg)",
      opacity: 1 ,
       
      
    },
    {
      transform: "translate(0)",
      opacity: 1,
    }

  ],{
    duration: 800,
    fill: "forwards",
    easing: "ease-out"
  })
  }, 1000);


  setTimeout(function() {
        
    card2.animate([
  {
    transform: "translate(100px, -540px) rotate(360deg)",
    opacity: 1 ,
     
    
  },
  {
    transform: "translate(0)",
    opacity: 1,
  }

],{
  duration: 800,
  fill: "forwards",
  easing: "ease-out"
})
}, 1500);


setTimeout(function() {
        
  card3.animate([
{
  transform: "translate(-150px, -540px) rotate(360deg)",
  opacity: 1 ,
   
  
},
{
  transform: "translate(0)",
  opacity: 1,
}

],{
duration: 800,
fill: "forwards",
easing: "ease-out"
})
}, 2000);


setTimeout(function() {
        
  card4.animate([
{
  transform: "translate(-300px, -540px) rotate(360deg)",
  opacity: 1 ,
   
  
},
{
  transform: "translate(0)",
  opacity: 1,
}

],{
duration: 800,
fill: "forwards",
easing: "ease-out"
})
}, 2500);

}); 
 
