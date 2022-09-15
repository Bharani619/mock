let container = document.getElementById("dataContainer");

var backUp = [];

const getData = ()=>{
   
    fetch("https://json-server-mocker-app.herokuapp.com/users")
    .then((res)=>res.json())
    .then((res)=>{
        backUp=[...res];
        renderCard(res);
    })
    .catch((err)=>{
        console.log(err)
    })
}
getData();

const filter=()=>{

    let arr = []

    let selected = document.getElementById("filter").value;

    if(selected===''){
        renderCard(backUp)
    }
    else{

        backUp.filter((el)=>{
            if(el.profession===selected){
              arr.push(el)  
            }
            renderCard(arr)
        })
    }
}

const sort = ()=>{

    let selected = document.getElementById("sort").value;

    if(selected==""){
        renderCard(backUp);
    }
    else if(selected=="asc"){
        let asc = backUp.sort((a,b)=>{
            return Number(a.age)- Number(b.age)
        })
        renderCard(asc)
    }
    else{
        let desc = backUp.sort((a,b)=>{
            return Number(b.age) - Number(a.age)
        })
        renderCard(desc);
    }
}

const renderCard = (data)=>{

    container.innerHTML="";

    data.map((el)=>{

        let card = document.createElement("div");
        card.setAttribute("class","card")

        let flexDiv = document.createElement("div");
        flexDiv.setAttribute("class","flexDiv");
        
        let nameDiv = document.createElement("div");
        let ageDiv = document.createElement("div");
        let placeDiv = document.createElement("div");
        let batchDiv = document.createElement("div");
        let roleDiv = document.createElement("div");
        let deleteDiv = document.createElement("div");
        let editDiv = document.createElement("div");
        let imgDiv = document.createElement("div");

        let Name = document.createElement('p');
        Name.innerText=`Name: ${el.name}`;
        let Age = document.createElement("p");
        Age.innerText=`Age: ${el.age}`;
        let Place = document.createElement("p");
        Place.innerText=`Place: ${el.place}`;
        let Batch = document.createElement("p");
        Batch.innerText=`Batch Name :${el.batch_name}`;
        let role = document.createElement("p");
        role.innerText=`Profession :${el.profession}`;
        let image = document.createElement("img")
        image.src = "https://th.bing.com/th/id/OIP.8pQGc1uvCGFkeniunEv1rwHaHa?w=190&h=190&c=7&r=0&o=5&";
        let remove = document.createElement("button")
        remove.setAttribute("class","removeIcon")
        remove.innerHTML=`<i class="fas fa-trash-alt"></i>`
        let edit = document.createElement("button");
        edit.setAttribute("class","edit")
        edit.innerText="EDIT";

        nameDiv.append(Name);
        ageDiv.append(Age);
        placeDiv.append(Place);
        batchDiv.append(Batch);
        roleDiv.append(role);
        imgDiv.append(image);
        deleteDiv.append(remove);
        editDiv.append(edit);
        
        flexDiv.append(editDiv,deleteDiv)
        card.append(imgDiv,nameDiv,ageDiv,batchDiv,roleDiv,placeDiv,flexDiv)
        container.append(card);

    })

}