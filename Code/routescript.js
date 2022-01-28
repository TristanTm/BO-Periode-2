
const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

const knopNoord = document.getElementById('knopNoord');
const knopOost = document.getElementById('knopOost');
const knopWest = document.getElementById('knopWest');
// const knopZuid = document.getElementById('knopZuid');
const knopHoog = document.getElementById('knopHoog');
const knopLaag = document.getElementById('knopLaag');
const knopTerug = document.getElementById('knopTerug');

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "west": document.getElementById('knopWest'),
    // "zuid": document.getElementById('knopZuid'),
    "hoog": document.getElementById('knopHoog'),
    "laag": document.getElementById('knopLaag'),
    "terug": document.getElementById('knopTerug'),

}

let current_index = 0;

let lokaties =[ // Array
    { //0 = Object
        "titel":"Ingang",
        "image":"/img/Ingang.jpg",
        "directions":{
            "noord": 1,
            "west": 4,
            "oost": 8,
            "terug": 7
        }
    },
    { //1 = Object
        "titel":"Gangtrap Noord",
        "image":"/img/Gangtrap.jpg",
        "directions":{
            "hoog": 2,
            "laag": 3,
            "terug": 0
        }
    },
    { // 2
        "titel":"I love Banda",
        "image":"/img/Scheepsmodellen.jpg",
        "directions":{
            "terug": 1
        }
    },
    { // 3
        "titel":"Republiek aan zee",
        "image":"/img/Voc.jpg",
        "directions":{
            "terug": 1
        }
    },
    { // 4
        "titel":"Gangtrap west",
        "image":"/img/Gangtrap.jpg",
        "directions":{
            "terug": 0,
            "hoog": 5,
            "laag": 6
        }
    },

    { // 5
        "titel":"Scheepsornamenten",
        "image":"/img/Scheepsornamenten.jpg",
        "directions":{
            "terug": 4
        }
    },
    { // 6
        "titel":"Cartografie & curiosa",
        "image":"/img/Scheepsmodellen.jpg",
        "directions":{
            "terug": 4
        }
    },

    { // 7
        "titel":"Museum",
        "image":"/img/Museum.jpg",
        "directions":{
            "terug": 0
        }
    },
    { // 8
        "titel":"Gangtrap oost",
        "image":"/img/Gangtrap.jpg",
        "directions":{
            "terug": 0,
            "hoog": 9,
            "laag": 10
        }
    },
    { // 9
        "titel":"Amsterdam havenstad",
        "image":"/img/Amsterdamhavenstad.jpg",
        "directions":{
            "terug": 8,
        }
    },
    {
        "titel":"Verhaal van de walvis",
        "image":"/img/Walvis.jpg",
        "directions":{
            "terug": 8,
        }
    },
];

// myTitle.innerHTML = "dit is door het script toegevoegd"
// myImage.src = "img/1.jpg";

function show(index){
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
    current_index = index;

    //knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections(){
    let possible = lokaties[current_index].directions;

    let possible_keys = Object.keys(possible);

    let button_keys = Object.keys(directionButtons);

    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
        
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = "visible"
    }

}

function getInput(){
    show(myInput.value);
    // console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}

function goDirection(richting){
    let punt_index = lokaties[current_index].directions[richting];
    show(punt_index);
}


show(0);