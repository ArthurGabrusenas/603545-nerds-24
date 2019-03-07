var link = document.querySelector(".write-us");
var popup = document.querySelector(".pop-up-login");
  
link.addEventListener("click",function(evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
    console.log("клик");
});