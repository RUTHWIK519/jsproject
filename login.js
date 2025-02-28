const loginbutton=document.getElementById("login")
loginbutton.addEventListener("click",()=>{
    let namestorage=localStorage.getItem("name")
    let passwordstorage=localStorage.getItem("password")
    let inputusername=document.getElementById("username").value
    let inputuserpassword=document.getElementById("loginPassword").value
    let errormessage=document.getElementById("errormessage")
    const namepattern=/^[a-zA-z]{3,}$/
    const passwordpattern=/^[a-zA-Z0-9.*][a-zA-Z\d]{8,}$/
    
    if (!namepattern.test(username.value)){
        errormessage.textContent="incorrect name,please signup first"
        return;
    }
    if (!passwordpattern.test(loginPassword.value)){
        errormessage.textContent="incorrect password ,please signup first"
        return;
    }
    
    if(namestorage==inputusername&&passwordstorage==inputuserpassword){
        alert("login done successful")
        window.open("project.html")
    }else{
        alert("oops invalid credentials")
    }


})