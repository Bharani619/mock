
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener('submit',(event)=>{
   event.preventDefault();
 
   const loginFormData = new FormData(loginForm);
   let email = loginFormData.get("user_email");
   let password = loginFormData.get("password");

   if(email==""||password==""){
    alert("please fill the missing details")
   }
   else{
       
    let obj = {
         email:email,
         password:password
    }
    
    let data = JSON.stringify(obj);
    login(data);

   }
})

const login = async(payload)=>{

    console.log(payload)
    try {
       
        let res = await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                  "Content-type":"application/json"
            },
            body:payload
        })

        let data = await res.json();
        setTimeout(()=>{
            window.location.href="data.html"
        },1000)
        
    } 
    
    catch (error) {
        console.log(error)
    }
}