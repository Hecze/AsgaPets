/* Variables */

var cookies = 0;





const mousePrice = 1;
const catPrice = 1;
const elephantPrice = 1;

let recidivism;

const common = "#6D8E78";
const rare = "#8A5022";
const epic = "#5D0056";
const legendary = "#9B0013";

var pets = [];

const allPets = []


/* Clases */

class animal{
    constructor(type){
        this.type = type;
    }
};

class pet extends animal{
    constructor(type){
        super(type);
        if(type == "mouse"){
            var idPet = Math.round(Math.random()*(infoMouse.length - 1));
            var infoPet = infoMouse[idPet];
        }

        else if(type == "cat"){
            var idPet = Math.round(Math.random()*(infoCat.length - 1));
            var infoPet = infoCat[idPet];
        }

        else if(type == "elephant"){
            var idPet = Math.round(Math.random()*(infoElephant.length - 1));
            var infoPet = infoElephant[idPet];
        }
     
        this.name = infoPet.name;
        this.description = infoPet.description;
        this.rarity = infoPet.rarity;
        this.img = "img/" + this.name + ".png";

        this.level = 1;
        this.evolution = 3;

    }

}



/* Data */

const infoMouse = [
    {name: "Jerry", description: "Es muy humilde,le gusta el queso",rarity: common},
    {name: "Piter", description: "Inciste en hacer la segunda reforma agraria", rarity: common},
    {name: "Jerry", description: "Es muy humilde,le gusta el queso",rarity: common},
    {name: "Piter", description: "Inciste en hacer la segunda reforma agraria", rarity: common},
    {name: "Jerry", description: "Es muy humilde,le gusta el queso",rarity: common},
    {name: "Piter", description: "Inciste en hacer la segunda reforma agraria", rarity: common},
    {name: "Jerry", description: "Es muy humilde,le gusta el queso",rarity: common},
    {name: "Piter", description: "Inciste en hacer la segunda reforma agraria", rarity: common},
    {name: "Barba Negra", description: "Tiene un flow que te kgas", rarity: rare},
    {name: "Lengüeto", description: "Su lengua tiene un veneno capaz de matar hasta una hormiga", rarity: rare},
    {name: "Chompiras", description: "Soy vato hay que aclararlo", rarity: rare},
    {name: "Lengüeto", description: "Su lengua tiene un veneno capaz de matar hasta una hormiga", rarity: rare},
    {name: "Barba Negra", description: "Tiene un flow que te kgas", rarity: rare},
    {name: "Riki", description: "Es un galan", rarity: epic},
    {name: "Timothee", description: "Su pelaje suave amortigua hasta los ataques mas feroces", rarity: epic},
    {name: "Batman y Robin", description: "Insultan a todo aquel que no le guste DC", rarity: `${legendary}`}
];

const infoCat = [
    {name: "Cimbo Lazquede", description: "Mas vale prevenir que amamantar", rarity: common},
    {name: "Chully Bellaco", description: "Sigue viviendo en la casa de sus padres y hace trap", rarity: common},
    {name: "Palillo", description: "Mas lento que caracol con asma", rarity: common},
    {name: "Cimbo Lazquede", description: "Mas vale prevenir que amamantar", rarity: common},
    {name: "Chully Bellaco", description: "Sigue viviendo en la casa de sus padres y hace trap", rarity: common},
    {name: "Palillo", description: "Mas lento que caracol con asma", rarity: common},
    {name: "Cimbo Lazquede", description: "Mas vale prevenir que amamantar", rarity: common},
    {name: "Chully Bellaco", description: "Sigue viviendo en la casa de sus padres y hace trap", rarity: common},
    {name: "Tolentino Corlioni", description: "Jefe de la mafia", rarity: rare},
    {name: "Tolentino Corlioni", description: "Jefe de la mafia", rarity: rare},
    {name: "Tolentino Corlioni", description: "Jefe de la mafia", rarity: rare},
    {name: "Tolentino Corlioni", description: "Jefe de la mafia", rarity: rare},
    {name: "Tolentino Corlioni", description: "Jefe de la mafia", rarity: rare},
    {name: "Robb Stark", description: "Rey del Norte", rarity: epic},
    {name: "Suliban", description: "Un verdadero rey no necesita decir que lo és", rarity: epic},
    {name: "Chamo Meteplomo", description: "Mas vale que guardes tu celular",rarity: legendary}
];

const infoElephant = [
    {name: "Manny", description: "Ya les he dicho que no me llamo Manny", rarity: common},
    {name: "Horton", description: "Van dos soldados en una moto y no se caen porque van soldados", rarity: common},
    {name: "Dumbo", description: "El unico que fue capaz de romper la telaraña", rarity: common},
    {name: "Manny", description: "Ya les he dicho que no me llamo Manny", rarity: common},
    {name: "Horton", description: "Van dos soldados en una moto y no se caen porque van soldados", rarity: common},
    {name: "Dumbo", description: "El unico que fue capaz de romper la telaraña", rarity: common},
    {name: "Manny", description: "Ya les he dicho que no me llamo Manny", rarity: common},
    {name: "Horton", description: "Van dos soldados en una moto y no se caen porque van soldados", rarity: common},
    {name: "Elefante GPA", description: "Es Guerrero Psiquico y Ancestral", rarity: rare},
    {name: "Max", description: "Quizás nadie se dé cuenta", rarity: rare},
    {name: "Elefante GPA", description: "Es Guerrero Psiquico y Ancestral", rarity: rare},
    {name: "Max", description: "Quizás nadie se dé cuenta", rarity: rare},
    {name: "Elefante GPA", description: "Es Guerrero Psiquico y Ancestral", rarity: rare},
    {name: "Babar", description: "Ponéte las pilas pendejo que se viene candanga con burundanga", rarity: epic},
    {name: "Cthulhu", description: "Proviene de otro universo donde controlan la paz del cosmos", rarity: epic},
    {name: "Coronel Hathi", description: "Mi vieja es reggaetonera porque si no le contesto se desespera", rarity: legendary},
];

function fillallPets(){

    for (let i = 0;i < infoMouse.length - 1; i++){  /* No se pierde la data al recargar la pagina*/

    if(!allPets.includes(infoMouse[i].name)){
        allPets.push(infoMouse[i].name)
    }
}

for (let i = 0;i < infoCat.length - 1; i++){  /* No se pierde la data al recargar la pagina*/

if(!allPets.includes(infoCat[i].name)){
    allPets.push(infoCat[i].name)
}


}

for (let i = 0;i < infoElephant.length - 1; i++){  /* No se pierde la data al recargar la pagina*/

if(!allPets.includes(infoElephant[i].name)){
    allPets.push(infoElephant[i].name)
}
}

}

fillallPets();


/*localStorage*/


if(localStorage.getItem("cookies") != null){
    cookies = parseInt(localStorage.getItem("cookies"))
}

else{
    console.log("se empezó una nueva partida")
    localStorage.setItem("cookies",1.5)
    cookies = parseInt(localStorage.getItem("cookies"))
}

for (let i = 0;i < localStorage.length - 1; i++){  /* No se pierde la data al recargar la pagina*/

    const key = localStorage.key(i);

    try {
        if(allPets.includes(key)){
            const pet = JSON.parse(localStorage.getItem(key));
            pets.push(pet);
        }
    } catch (error) {
        console.log("este dato no pertenece a la pagina: ", key)
    }



}

updateMypets();




/* Sections */

document.getElementById("sections").addEventListener("click",(e)=>{

    if(e.target.id == "btn-home"){
        hideSection("petshop");
        hideSection("fightContainer");
        hideSection("mypets");
    
        showSection("home");
    }

    else if(e.target.id == "btn-petshop"){
        hideSection("mypets");
        hideSection("fightContainer");
        hideSection("home");
    
        showSection("petshop");
    }

    else if(e.target.id == "btn-mypets"){
        hideSection("petshop");
        hideSection("fightContainer");
        hideSection("home");
    
        showSection("mypets");
    }
});

/* LET´S PLAY */

document.getElementById("lets-play").addEventListener("click", ()=>{

    if(pets.length > 0){
        
        window.location = "#fightContainer";

        hideSection("home");
        showSection("fightContainer");
        showSection("versus");
    
        myPet = pets[Math.ceil(Math.random() * pets.length - 1)]; /* choose a random pet */
        cardBatle(myPet,"myPet");
    
    
        types = ["mouse","cat","elephant"];
        petEnemy = new pet(types[Math.ceil(Math.random() * 3 - 1)]); /* choose a random enemy */
        cardBatle(petEnemy,"petEnemy");
    
        batle(myPet,petEnemy);
    }

    else{
        alert("you need a pet")
    }

});


/* Pet Shop */

document.getElementById("petshop").addEventListener("click",(e)=>{
    
    if(e.target && e.target.id == "mouse"){
        price = mousePrice;
        addPet("mouse");
    }

    else if(e.target && e.target.id == "cat"){
        price = catPrice;
        addPet("cat");
    }

    else if(e.target && e.target.id == "elephant"){
        price = elephantPrice;
        addPet("elephant");
    }

    if(e.target && e.target.id == "reload"){
        localStorage.setItem("cookies",1.5);
        cookies = 1.5;
        updateCookies();
    }
    console.log(e.target.id)

});


/* My Pets*/

document.getElementById("mypets").addEventListener("click",(e)=>{

    var selectedPetrarity = e.target.id; 
    var selectedPetName = e.target.name;

    if(e.target && e.target.classList == "btnSell"){
        
        if(pets.length > 0 | cookies >= 0.5){

            if(selectedPetrarity != legendary){
                e.target.parentNode.remove();
                removePet(selectedPetName,selectedPetrarity);
            }
            else{
                if(window.confirm("¿Do you really want remove " + selectedPetName + "?")){
                    e.target.parentNode.remove();
                    removePet(selectedPetName,selectedPetrarity);
                }
            }

        };
    }
    else if(e.target && e.target.classList == "btnLevel"){
        recidivism =  pets.filter(element => element.name == selectedPetName).length - 1;
        console.log(selectedPetName, recidivism);

        if(recidivism >= 1){

            try {
    
                pets.forEach((pet) => {
        
                    if(pet.name === selectedPetName){
                        console.log(pet.level, recidivism, pet.level + recidivism);
                        pet.level += recidivism;
                        e.target.setAttribute("level", pet.level);
                        console.log(pet.level)
                        localStorage.setItem(pet.name,JSON.stringify(pet))
                        throw "error forzado xddd"}})
        
            }catch(e){
                
                pets = pets.filter(pet =>  pet.name == selectedPetName && pet.level !== 1 || pet.name != selectedPetName);
                updateMypets();
            }
        }
    }
});


/* Functions*/

function updateCookies(){
    if(cookies < 0){
        cookies = 0;
    }
    
    if(cookies < 1){
        for(let i = 1; i < 4; i++){
            document.querySelector(".btnAdopt" + i).style.opacity = "0.85";
            document.querySelector(".btnAdopt" + i).style.backgroundColor = "rgb(116, 62, 62)";
        }
    }
    else {
        for(let i = 1; i < 4; i++){
            document.querySelector(".btnAdopt" + i).style.opacity = "0.9";
            document.querySelector(".btnAdopt" + i).style.backgroundColor = "green";
        }
    }

    document.getElementById("number").textContent = cookies;

    localStorage.setItem("cookies",cookies);
};

function hideSection(section){
    document.getElementById(section).style.display = "none";
};

function showSection(section){
    if(section == "home"){
        document.getElementById(section).style.display = "block";
    }
    else{
        document.getElementById(section).style.display = "grid";
    }
};

function addPet(type){

    if(cookies >= price){
        
        newPet = new pet(type);
        localStorage.setItem(newPet.name, JSON.stringify(newPet))

        pets.push(newPet);
        cookies -= price;

        updateMypets();
        updateCookies();
    };
};

function removePet(selectedPetName,selectedPetrarity){

    var x = 0;
    try {

        pets.forEach((pet) => {

            if(pet.name === selectedPetName && pet.rarity === selectedPetrarity){

                localStorage.removeItem(pet.name);
                throw "error forzado xddd";
            }
            else{x += 1}})  

    }catch(e){

        pets.splice(x, 1)

    }


    if (selectedPetrarity == common){
        cookies += .5 ;
    }
    else if (selectedPetrarity == rare){
        cookies += 1 ;
    }
    else if (selectedPetrarity == epic){
        cookies += 4;
    }
    else if (selectedPetrarity == legendary){
        cookies +=  10;
    }
    updateCookies();
    updateMypets();

}

function updateMypets(){
    id = 1;

    let mypets = document.querySelector(".mypets")
    while(mypets.firstChild){
        mypets.removeChild(mypets.firstChild)
    };

    pets.forEach((pet) => {

        while(pet.level >= pet.evolution){

            console.log("ejecutando funcion en clase");
            
            if(pet.rarity === common){
                pet.rarity = rare;
                pet.evolution += 3;
            }
            else if (pet.rarity === rare){
                pet.rarity = epic;
                pet.evolution += 3;
            }
            else if (pet.rarity === epic){
                pet.rarity = legendary;
                pet.evolution += 3;
            }
            else if (pet.rarity === legendary){
                pet.cookies += 50;
                pet.evolution = 100000;
            }
            
        }

        localStorage.setItem(pet.name,JSON.stringify(pet))
        
        const cardpet = document.createElement("div");
        cardpet.classList.add("cardpet");
        cardpet.setAttribute("id",id);
        
        const h1 = document.createElement("h1");
        h1.textContent = pet.name;

        const h3 = document.createElement("h3");
        h3.textContent = pet.description;

        var price = 0;

        if (pet.rarity == common){
            price = 0;
        }
        else if (pet.rarity == rare){
            price = 1;
        }
        else if (pet.rarity == epic){
            price = 4;
        }
        else if (pet.rarity == legendary){
            price = 9; 
        }

        const btnSell = document.createElement("button");
        btnSell.textContent = "Sell";
        btnSell.classList.add("btnSell")
        btnSell.setAttribute("price",price);
        btnSell.setAttribute("id",pet.rarity); 
        btnSell.setAttribute("name",pet.name);

        const btnLevel = document.createElement("button");
        btnLevel.textContent = "+Lv";
        btnLevel.classList.add("btnLevel")
        btnLevel.setAttribute("level", pet.level);
        btnLevel.setAttribute("id",pet.rarity); 
        btnLevel.setAttribute("name",pet.name);



        document.getElementById("mypets").appendChild(cardpet); 
        document.getElementById(id).style.backgroundImage = `url("${pet.img}")`;
        document.getElementById(id).style.boxShadow = `0 0 30px ${pet.rarity}`;
        document.getElementById(id).style.border = `6px solid ${pet.rarity}`;
        document.getElementById(id).appendChild(h1);
        document.getElementById(id).appendChild(h3);
        document.getElementById(id).appendChild(btnSell);
        document.getElementById(id).appendChild(btnLevel);

        id += 1;
    });
} 

function cardBatle(pet,id){
    var h1 = document.querySelector(`#${id} > h1`);
    h1.textContent = pet.name;
    
    var h3 = document.querySelector(`#${id} > h3`);
    h3.textContent = pet.description;

    document.getElementById(id).style.backgroundImage = `url("${pet.img}")`;
    document.getElementById(id).style.boxShadow = `0 0 30px ${pet.rarity}`;
    document.getElementById(id).style.border = `9px solid ${pet.rarity}`;
};

function modifyStyle(result, rarity){

    const versus = document.querySelector(".versus");
    const batleCookie = document.querySelector(".batleCookie");

    versus.textContent = "VS";
    versus.style.fontSize = "220px";
    versus.style.top = "37vh";
    versus.style.color = "black";

    var reward = 0.5;
    var lost = 0;

    if(rarity == rare){
        reward = 1.5;
        lost = 0.5;
    }
    else if(rarity == epic){
        reward = 3;
        lost = 1;
    }
    else if(rarity == legendary){
        reward = 5;
        lost = 2;
    }
    

    function changeVersus(){
        versus.textContent = result;
        versus.style.fontSize = "80px";
        versus.style.top = "42vh" 
        if(result == "Draw"){
            versus.style.color = "#253B70";
            batleCookie.style.backgroundColor = "#253B70";
            document.getElementById("prize").textContent = "+ 0";
        }
        else if(result == "Defeat"){
            versus.style.color = "#A72D26";
            batleCookie.style.backgroundColor = "rgba(155,5,28,0.3)";
            document.getElementById("prize").textContent = `-${lost}`;
            cookies -= lost;
            updateCookies();
        }  
        else if(result == "Victory"){
            versus.style.color = "rgba(0,140,16,1)";
            batleCookie.style.backgroundColor = "rgba(0,171,16,0.3)";
            document.getElementById("prize").textContent = `+${reward}`;
            cookies += reward;
            updateCookies();
        }  
    };

    setTimeout(changeVersus,0);
};

function batle(myPet,petEnemy){

    const fightContainer = document.querySelector(".fightContainer").style;
    fightContainer.backgroundImage = `linear-gradient(35deg,${myPet.rarity},${petEnemy.rarity}`;

    if(myPet.rarity == epic & petEnemy.rarity == common |
        myPet.rarity == legendary & petEnemy.rarity == rare|
        myPet.rarity == legendary & petEnemy.rarity == common){
        modifyStyle("Victory",petEnemy.rarity);
    } /* Siempre que sea el doble de raro, ganas*/

    else if(petEnemy.rarity == epic & myPet.rarity == common |
            petEnemy.rarity == legendary & myPet.rarity == rare|
            petEnemy.rarity == legendary & myPet.rarity == common){
        modifyStyle("Defeat",petEnemy.rarity);
    } /* Siempre que sea la mitad de raro, pierdes */

    else if(myPet.type == petEnemy.type){

        if(myPet.rarity == petEnemy.rarity){

            modifyStyle("Draw",petEnemy.rarity);
            fightContainer.backgroundImage = "linear-gradient(35deg,rgb(113, 173, 226),rgb(52, 9, 9))";


        }
        else if(myPet.rarity == legendary|
                myPet.rarity == epic & petEnemy.rarity !== legendary|
                myPet.rarity == rare & petEnemy.rarity !== epic){

                    modifyStyle("Victory",petEnemy.rarity)
                }
        else if(petEnemy.rarity == legendary|
                petEnemy.rarity == epic & myPet.rarity !== legendary|
                petEnemy.rarity == rare & myPet.rarity !== epic){

                     modifyStyle("Defeat",petEnemy.rarity)
                }
    
    } /* En caso de empate,gana el mas raro*/


    /* En igualdad de rareza, Mouse < Cat < Elephant < Mouse :*/

    else if(myPet.type == "mouse"){

        if(petEnemy.type == "cat"){
            modifyStyle("Defeat",petEnemy.rarity);
            fightContainer.backgroundImage = "linear-gradient(35deg,rgb(113, 173, 226),rgb(52, 9, 9))";
        }

        else if(petEnemy.type == "elephant"){
            modifyStyle("Victory",petEnemy.rarity);
            fightContainer.backgroundImage = "linear-gradient(35deg,rgb(113, 173, 226),rgb(52, 9, 9))";
        }
    } 

    else if(myPet.type == "cat"){

        if(petEnemy.type == "mouse"){
            console.log("Your pet " + myPet.name + " has gon");
            modifyStyle("Victory",petEnemy.rarity);
            fightContainer.backgroundImage = "linear-gradient(35deg,rgb(113, 173, 226),rgb(52, 9, 9))";
        }

        else if(petEnemy.type == "elephant"){
            console.log("Your pet " + myPet.name + " has lost");
            modifyStyle("Defeat",petEnemy.rarity);
            fightContainer.backgroundImage = "linear-gradient(35deg,rgb(113, 173, 226),rgb(52, 9, 9))";
        }
    }

    else if(myPet.type == "elephant"){

        if(petEnemy.type == "mouse"){
            console.log("Your pet " + myPet.name + " has lost");
            modifyStyle("Defeat",petEnemy.rarity);
            fightContainer.backgroundImage = "linear-gradient(35deg,rgb(113, 173, 226),rgb(52, 9, 9))";
        }

        else if(petEnemy.type == "cat"){
            console.log("Your pet " + myPet.name + " has won");
            modifyStyle("Victory",petEnemy.rarity);
            fightContainer.backgroundImage = "linear-gradient(35deg,rgb(113, 173, 226),rgb(52, 9, 9))";
        }
    }
};

updateCookies();
