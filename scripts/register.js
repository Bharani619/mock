let registerForm = document.getElementById("registerForm");
registerForm.addEventListener('submit',(event)=>{
   event.preventDefault();

    const formData = new FormData(registerForm);
    let name = formData.get("user_name")
    let age = formData.get("user_age")
    let place = formData.get("user_place")
    let batch_name = formData.get("user_batch")
    let profession = formData.get("user_profession")

    if(name==""||age==""||place==""||batch_name==""||profession==""){
        alert("please fill the missing details")
    }
    else{
         
        let obj = {
            name,
            age,
            place,
            batch_name,
            profession
        }
        
        let data = JSON.stringify(obj);
        console.log(data)
        register(data);
    }
})

const register=(data)=>{
       
     fetch("https://json-server-mocker-app.herokuapp.com/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:data
     })
     .then((res)=>res.json())
     .then((res)=>{
        alert("registered successfully")
        setTimeout(()=>{
            window.location.href="index.html"
        },1000)
     })
     .catch((err)=>{
        console.log(err)
     })
}
