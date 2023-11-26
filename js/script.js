/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.*/

//Creare l’array di oggetti con le informazioni fornite:
//Creo un array con all'interno degli oggetti.
const teamMembers = [
    {
        //Inserisco la chiave (es. name) seguita da : e il valore.
        name: "Wayne Barnett",
        role: "Founder & CEO",
        //Per inserire un'immagine prima della stringa utilizzo img/.
        profilePicture: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        profilePicture: "img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        profilePicture: "img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        profilePicture: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        profilePicture: "img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        profilePicture: "img/barbara-ramos-graphic-designer.jpg"
    }];

    //Creo una variabile che cerca uno specifico elemento nel documento html.
    const mainEl = document.querySelector(".container-main");
    

    //Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto:
    // Creo un ciclo for per visualizzare singolarmente gli oggetti contenuti nell'array.
    for (let i = 0; i < teamMembers.length; i++){
        const member = teamMembers[i];
        console.log(member);
        //Stampare le stesse informazioni su DOM sottoforma di stringhe:
        //Creo una costante per creare degli elementi all'inerno del file html.
        const createEl = document.createElement("article");
        //Collego l'elemento padre agli elementi precedenmente creati.
        mainEl.appendChild(createEl);
        //Popolo gli elementi con gli oggetti dell'array.
        createEl.innerHTML= 
        `<img src="${member.profilePicture}" alt="">
        <h2>${member.name}</h2>
        <p>${member.role}</p>`;
    }



    
