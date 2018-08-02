class Pieza {
    constructor(color,casillero) {
        this.color = color;
        this.casillero = casillero;
        this.forma = '';


    }
    mover() {}
    atacar() {}


}

class Peon extends Pieza {

}

class Alfil extends Pieza {

}

class Caballo extends Pieza {

}

class Torre extends Pieza {

}

class Reina extends Pieza {

}

class Rey extends Pieza {

}




class Casillero {
    constructor(col,row,color) {
        this.col = col;
        this.row = row;
        this.color = color;
    }

}
class Tablero {
    constructor() {
        this.rows = [1, 2, 3, 4, 5, 6, 7, 8];
        this.cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
        this.casilleros = [];
    }
    inicializar() {
        
        let color = 'white';
        for(let row of this.rows) {
           color = color === 'white' ? 'black' : 'white'
           for(let col of this.cols) {
            this.casilleros.push(new Casillero(col, row, color))
            color = color === 'white' ? 'black' : 'white'
        }
        }
    }
    getCasilleros() {
        return this.casilleros;
    }

}


// DOM


const tableroElement = document.getElementById('tablero')
const comenzarElement = document.getElementById("iniciar")

function iniciarJuego(){
    const game = new Tablero()
    game.inicializar();
    let mostrarHTML = game.getCasilleros()
    mostrarHTML = mostrarHTML.map( (elem) => {
        // <p class="${elem.color ==='white' ? 'text-black' : 'text-white'}" > ${elem.col} ${elem.row} </p>
        return `
            <div class=" casillero ${elem.color}">
            <img src="peonblanco.png" alt="">
               
            </div>
        `;
    })
    mostrarHTML = mostrarHTML.reduce((a,b) => a + b )
    tableroElement.innerHTML = mostrarHTML

   
}

comenzarElement.addEventListener('click', iniciarJuego)