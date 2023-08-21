const passwordValue = document.getElementById("password");
const confirmPasswordValue = document.getElementById("confirm_password");

confirmPasswordValue.addEventListener("change", ()=>{
    if(passwordValue.textContent !== confirmPasswordValue.textContent){
        console.log("no");
    }else{
        console.log("yes");
    }
})