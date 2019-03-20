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
var nameUserInput = document.getElementById("name-user-input");
var emailUserInput = document.getElementById("email-user-input");
var textAreaUser = document.getElementById("text-area-user");
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
    popup.classList.remove("pop-up-err");
    nameUserInput.classList.remove("modal-error");
    emailUserInput.classList.remove("modal-error");
    textAreaUser.classList.remove("modal-error");
   if(!userName.value || !userEmail.value || !userText.value){
    evt.preventDefault();
    console.log("ввести данные");
    if(!userName.value){
        nameUserInput.classList.add("modal-error");
    }
    if(!userEmail.value){
        emailUserInput.classList.add("modal-error");
    } 
    if(!userText.value){
        textAreaUser.classList.add("modal-error");
    } 
    popup.classList.add("pop-up-err");
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
    popup.classList.remove("pop-up-err");
});
// при клике и в воде данных окна перестают показывать ошибку
nameUserInput.addEventListener("click",function(evt){
    nameUserInput.classList.remove("modal-error");
});
emailUserInput.addEventListener("click",function(evt){
    emailUserInput.classList.remove("modal-error");
});
textAreaUser.addEventListener("click",function(evt){
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

