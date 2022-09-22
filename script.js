const jogoElements = document.querySelectorAll("[data-jogo]");
const borda = document.querySelector("[data-borda]");
   
    let VezBola;

    const casosGanhou = [
        /*vertical*/
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        /*horizontal*/
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        /*diagonal*/
        [0, 4, 8],
        [2, 4, 6]
    ]

    const IniciarJogo = () => {
     for (const jogo of jogoElements){
        jogo.addEventListener("click", Click, { once: true });
     }    

     VezBola = false;

     borda.classList.add("x");
    };

    const siGanhou = (JogadorAtual) => {
        return casosGanhou.some(combos => {
            return combos.every(index => {
                return jogoElements[index].classList.contains(JogadorAtual)
            })
        })
    }

    function casaMarca(jogo, classToAdd) {
    jogo.classList.add(classToAdd);
}

const Turnos = () => {
    VezBola = !VezBola;

    borda.classList.remove('bola');
    borda.classList.remove('x');

    if (VezBola) {
        borda.classList.add('circle');
    } else {
        borda.classList.add('x');  
    }
};

const Click = (e) => {

    const jogo = e.target;
    const classToAdd = VezBola ? 'bola' : 'x';

    casaMarca(jogo, classToAdd);

    const EbaGanhou = siGanhou(classToAdd);
    if (EbaGanhou) {
        console.log("ai papai");
    }

    Turnos();
};

    for (const jogo of jogoElements) 
    {
        jogo.addEventListener("click", Click, { once: true });
    }

IniciarJogo();