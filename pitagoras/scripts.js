const imagenes = ["./imagenes/historieta1.jpg", "./imagenes/historieta2.jpg", "./imagenes/historieta3.jpg"];
const informacion= [ 
    {
        nombre: "Pitágoras de Samos",
        descripcion: "Pitágoras fue un filósofo y matemático griego considerado el primer matemático puro. Contribuyó de manera significativa en el avance de la matemática helénica, la geometría y la aritmética."
    },
    {
        nombre: "Teorema de Pitágoras",
        descripcion: "b²+c² es la suma de los catetos que dirá el valor de la hipotenusa que es a² en un triángulo rectángulo. "
    },
    {
        nombre: "Tabla de multiplicar",
        descripcion: "Descubrió un sistema que permite multiplicar los números."
    }
];

let indiceComic = 0;

const imagenComic = document.getElementById("imagen-comic");
const informacionComic = document.getElementById("informacion");
const cambiarComicButton = document.getElementById("cambiar-comic");

function actualizarComic() {
    imagenComic.src = imagenes[indiceComic];
    informacionComic.innerHTML = `
        <h2>${informacion[indiceComic].nombre}</h2>
        <p>${informacion[indiceComic].descripcion}</p>
    `;
}

cambiarComicButton.addEventListener("click", () => {
    indiceComic = (indiceComic + 1) % imagenes.length;
    actualizarComic();
});

// Inicializar el carrusel con la primera imagen
actualizarComic();
