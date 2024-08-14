const lIcon = document.querySelector(".licon");
const rIcon = document.querySelector(".rightIcon");
const menu = document.querySelector(".infoul");
const button = document.querySelector(".btn");
const projectcont = document.querySelector(".projects");
const projectLink = document.querySelector("#projectnav");
const services = document.querySelector("#serv");
const serviesSection = document.querySelector(".services");
const contects = document.querySelector("#contect");
const contectpage = document.querySelector(".conatect");
const from = document.getElementsByTagName("form");
const namee = document.querySelector(".nameInput");
const number = document.querySelector(".Number");
const reason = document.querySelector(".work");
const submitbutn = document.querySelector(".submitbtn");
const footer = document.querySelector("#footer")

submitbutn.addEventListener("click",(e)=>{
  e.preventDefault();
  const nameIn = namee.value;
  if(nameIn ==='' || nameIn.length < 5)
  {
    alert("Enter Your name")
    submitbutn.style.background= "red";
  }
  const res = reason.value;
  if(res ==='' || res.length < 6)
  {
    alert("Please Enter a Reason like Web , app , blog ")
  }
  const num = number.value;
  if(num === '' || num.length < 11)
  {
    alert("Enter a full Number")
  }
  else{
    submitbutn.style.background = "rgb(23, 213, 93)";
    alert("Sucessfully submitted")
  }
  console.log(nameIn);
  
  
})

lIcon.addEventListener("click", () => {
  lIcon.style.display = "none";
  rIcon.style.display = "flex";
  menu.style.display = "flex";
  menu.classList.add("active");
  

});

rIcon.addEventListener("click", () => {
  rIcon.style.display = "none";
  lIcon.style.display = "flex";
  menu.style.display = "none";
  menu.classList.remove("active");
});

button.addEventListener("click",()=>{
  if(projectcont.style.display === "none"){
    projectcont.style.display = "flex";
    projectcont.style.opacity = 0;
    projectcont.style.transition = "opacity ease 0.8s"
    button.innerHTML = "HIDE"
    setTimeout(() => {
      projectcont.style.opacity = 1;
    }, 250);
  } else {
    projectcont.style.opacity = 0;
    projectcont.style.transition = "opacity ease 0.8s"
    button.innerHTML = "SHOW"
    setTimeout(() => {
      projectcont.style.display = "none";
    }, 500);
  }
})

projectLink.addEventListener("click",()=>{
  const container = document.querySelector('.containerr');
  container.scrollIntoView({ behavior: 'smooth' });
})

services.addEventListener("click",()=>{
  serviesSection.scrollIntoView({behavior: 'smooth' });
})

contects.addEventListener("click",()=>{
  
  contectpage.scrollIntoView({behavior: 'smooth'});
})
//using GSAP Liberary
gsap.from("#col-1", {
  y:-70,
  x:-70,
  opacity:1,
   duration: 1.5, 
   stagger:0.5,
   
   scrollTrigger: {
     trigger: "#col-1",
     scroller: "body",
     start: "top 50%", 
     end: "top 45%",
    
     scrub: 2
   }
 })
 gsap.from("#col-2", {
  y:60,
  x:60,
  opacity:1,
   duration: 1.5, 
   stagger:0.5,
   
   scrollTrigger: {
     trigger: "#col-1",
     scroller: "body",
     start: "top 30%", 
     end: "top 25%",
     scrub: 2
   }
 })
 //
 gsap.to("#footer", {
  y:-50,
  opacity:1,
   duration: 1.2,   
   scrollTrigger: {
     trigger: "#footer",
     scroller: "body",
     start: "top 75%", 
     end: "top 70%",
    
     scrub: 2
   }
 })
 gsap.from(".services", {
  scale:0.9,
  opacity:0,
   duration: 1, 

   
   scrollTrigger: {
     trigger: ".services",
     scroller: "body",
     start: "top 60%", 
     end: "top 55%",
    
     scrub: 3
   }
 })
 
 gsap.from(".hero", {
  scale: 0.9,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".hero",
    scroller: "body", // Change this line
    start: "top 68%",
    end: "top 60%",
    scrub: 3
  }
})