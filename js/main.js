// const mainBtn = document.getElementsByClassName('btn');
// console.log("mainBtn button po klasie", mainBtn)
// const input = document.getElementsByClassName('margin-bottom');
// console.log("input po klasie", input)
const idBtn = document.getElementById('id-btn');
idBtn.addEventListener("click", takeOrder)

let order = {
    pizza: '',
    sosy: [, ],
    name: '',
    adress: '',
    email: '',
    tel: '',
    text: ''
}

function takeOrder() {
    sprawdzanieSosow("sosy")
    const pomidorowy = document.getElementById('pomidorowy')
    const czosnkowy = document.getElementById('czosnkowy')
    const ostryPomidorowy = document.getElementById('ostryPomidorowy')


    //pobieram imie i nazwisko
    const nameC = document.getElementById('nameC').value;
    order.name = nameC;
    //pobieram email
    const email = document.getElementById('email').value;
    order.email = email;
    //pobieram tel
    const tel = document.getElementById('tel').value;
    order.tel = tel;
    //pobieram adress
    const adress = document.getElementById('adress').value;
    order.adress = adress;
    //pobieram textarea
    const msg = document.getElementById('msg').value;
    order.text = msg;

    console.log("takeOrder -> nameC", order)





    // const maindiv = document.getElementById('main-div');
    // maindiv.appendChild(btn);
    // let span = document.createElement('span');
    // span.innerText = "<button> hi hi </button>"
    // let span2 = document.createElement('span');
    // span2 = document.createElement('span');
    // span2.innerHTML = "<button> HEY HEY </button>"
    // maindiv.appendChild(span);
    // maindiv.appendChild(span2);
    // console.log(pomidorowy.checked)

}





idBtn.addEventListener("click", takeOrder);

function sprawdzanieSosow(nazwaKlasy) {
    const pobraneWszytkieSosyZinputu = document.getElementsByClassName(nazwaKlasy)
    for (let i = 0; i < pobraneWszytkieSosyZinputu.length; i++) {
        // console.log(pobraneWszytkieSosyZinputu[i])
        if (pobraneWszytkieSosyZinputu[i].checked === true) {
            console.log(pobraneWszytkieSosyZinputu[i].attributes)
        }
    }
}