var link = document.querySelector(".write-us");
var popup = document.querySelector(".pop-up-login");
var popupClose = document.querySelector(".pop-up-close-button");

link.addEventListener("click",function(evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
    console.log(popup.classList);
});
popupClose.addEventListener("click",function(evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
});