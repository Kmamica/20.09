// const mainBtn = document.getElementsByClassName('btn');
// console.log("mainBtn button po klasie", mainBtn)
// const input = document.getElementsByClassName('margin-bottom');
// console.log("input po klasie", input)
const idBtn = document.getElementById('id-btn');




idBtn.addEventListener("click", takeOrder)

function takeOrder() {
    sprawdzanieSosow("sosy")
    const pomidorowy = document.getElementById('pomidorowy')
    const czosnkowy = document.getElementById('czosnkowy')
    const ostryPomidorowy = document.getElementById('ostryPomidorowy')
    let btn = document.createElement("button");
    let textBtn = document.createTextNode("Click me");
    btn.setAttribute('class', 'fun');
    btn.innerText = " Click me ";
    console.log(btn);
    const maindiv = document.getElementById('main-div');
    maindiv.appendChild(btn);
    let span = document.createElement('span');
    span.innerText = "<button> hi hi </button>"
    let span2 = document.createElement('span');
    span2 = document.createElement('span');
    span2.innerHTML = "<button> HEY HEY </button>"
    maindiv.appendChild(span);
    maindiv.appendChild(span2);
    console.log(pomidorowy.checked)
}

function sprawdzanieSosow(nazwaKlasy) {
    const pobraneWszytkieSosyZinputu = document.getElementsByClassName(nazwaKlasy)
    for (let i = 0; i < pobraneWszytkieSosyZinputu.length; i++) {
        // console.log(pobraneWszytkieSosyZinputu[i])
        if (pobraneWszytkieSosyZinputu[i].checked === true) {
            console.log(pobraneWszytkieSosyZinputu[i].attributes)
        }
    }
}


// function dodawanie(a, b) {
//     let wynik = a + b
//     console.log(wynik)
// }
// dodawanie(5, 15)

// dodawanie(2, 15)
// dodawanie(7, 1885)
// dodawanie(5, 88)
// dodawanie(7, 7)