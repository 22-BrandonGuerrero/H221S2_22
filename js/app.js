
//SCRIPT PARA LA HAMBURGESA DEL MENU

const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha = document.querySelector('.fecha');
document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
    fechaActual();
});

function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');

    }); 
}

function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click',(e)=>{
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            cambioSeccion(seccion);
            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
        });
    });
}

function cambioSeccion(seccion){
    seccion.scrollIntoView({
        behavior:'smooth'
    })
}

function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}





// SCRIPT PARA EL CARRUSEL DE IMAGENES

'use strict'

/* 
    // Cuando hacemos CLICK en .a
        // .lightbox ADD CLASS 'activo'
        // .img ATTR "SRC"
        // .grande COLOCAR el SRC de .img

    // Cuando hacemos CLICK en .cerrar
        // .lightbox REMOVE CLASS 'activo'
*/

const enlaces1  = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande   = document.querySelector('.grande')
const cerrar   = document.querySelector('.cerrar')

enlaces1.forEach(( cadaEnlace , i )=>{
    enlaces1[i].addEventListener('click', ( e )=>{
        e.preventDefault()
        let ruta = cadaEnlace.querySelector('.img').src
        console.log( ruta ) 

        lightbox.classList.add('activo')
        grande.setAttribute('src', ruta)

    })
})

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo')
})









//SCRIPT PARA EL CURSOR DEL RATON

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY -10) + "px; left: "+ (e.pageX - 15) + "px;");
})







//SCRIPT PARA EL TEXTO EN MOVIMIENTO

const typed = new Typed('.typed', {
    strings: [
        '<i class="palabra">principios</i>', 
        '<i class="palabra">valores</i>',
        '<i class="palabra">enseñanzas</i>'
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato 
    });
    