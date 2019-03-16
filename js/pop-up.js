var isStorageSupport = true;
var storageName = "";
var storageEmail = "";
var link = document.querySelector(".write-us");
var popup = document.querySelector(".pop-up-login");
var popupClose = document.querySelector(".pop-up-close-button");
var form = popup.querySelector("form");
var userName = popup.querySelector("[name=user-name]");
var userEmail = popup.querySelector("[name=user-email]");
var userText = popup.querySelector("[name=user-text]");
/*тут должен быть querySelectorAll или getElementByClassName, что бы не размножать код через ID, но ничего не работает*/
var nameUserInput = document.getElementById("name-user-input");
var emailUserInput = document.getElementById("email-user-input");
var textAreaUser = document.getElementById("text-area-user");
//var storageName = localStorage.getItem("userName");
//var storageEmail = localStorage.getItem("userEmail");

//проверка локалсторадж на ошибки
try {
    storageName = localStorage.getItem("userName");
    storageEmail = localStorage.getItem("userEmail");
} catch (err){
    isStorageSupport = false;
}
// отслеживание клика с открытием попапа и запись локал сторадж
link.addEventListener("click",function(evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
    console.log(popup.classList);
    if(storageName || storageEmail){
       userName.value = storageName;
       userEmail.value = storageEmail; 
    }
});
//валидация формы и проверка локал сторадж
form.addEventListener("submit", function (evt){
   if(!userName.value || !userEmail.value || !userText.value){
    evt.preventDefault();
    console.log("ввести данные");
    nameUserInput.classList.add("modal-error");
    emailUserInput.classList.add("modal-error");
    textAreaUser.classList.add("modal-error");
   } else {
       if(isStorageSupport){
       localStorage.setItem("userName", userName.value);
       localStorage.setItem("userEmail", userEmail.value);
       }
   }
});
//закрытие поп ап
popupClose.addEventListener("click",function(evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
    nameUserInput.classList.remove("modal-error");
    emailUserInput.classList.remove("modal-error");
    textAreaUser.classList.remove("modal-error");
});
// закрытие поп ап по нажатию на ескейп
window.addEventListener("keydown", function (evt){
    if(evt.keyCode === 27){
        if(popup.classList.contains("modal-show")){
            evt.preventDefault();
            popup.classList.remove("modal-show");
        }
    }
});

