// ==========================================
// 1. ARREGLO DE PERSONAJES (URLS OPTIMIZADAS Y ESTABLES)
// ==========================================
const listaPersonajes = [
    {
        id: 1,
        nombrePersonaje: "Peter Parker",
        descripción: "El Spider-Man original de la Tierra-616. Científico brillante, fotógrafo y protector de Nueva York tras ser mordido por una araña radiactiva.",
        habilidades: ["Sentido arácnido", "Fuerza sobrehumana", "Lanzatelarañas", "Adherencia a superficies"],
        url_imagen: "https://i.pinimg.com/736x/b8/9d/61/b89d614e41c7cd5f49561e4b7b48d8fe.jpg", 
        edad: 25,
        altura: 1.78,
        esVillano: false
    },
    {
        id: 2,
        nombrePersonaje: "Miles Morales",
        descripción: "Joven de Brooklyn que asume el manto de Spider-Man. Además de las habilidades arácnidas clásicas, posee poderes bio-eléctricos únicos.",
        habilidades: ["Rayo venom (Bio-electricidad)", "Camuflaje invisible", "Sentido arácnido", "Acrobacias de gran nivel"],
        url_imagen: "https://i.pinimg.com/736x/03/ec/f6/03ecf6877bffd1e2ee130b2451631a50.jpg", 
        edad: 17,
        altura: 1.73,
        esVillano: false
    },
    {
        id: 3,
        nombrePersonaje: "Gwen Stacy",
        descripción: "Conocida como Spider-Gwen o Ghost-Spider en la Tierra-65. Es una baterista apasionada que lucha con un estilo ágil y acrobático.",
        habilidades: ["Estilo de pelea dancístico", "Sentido arácnido", "Lanzadores mecánicos", "Viaje interdimensional"],
        url_imagen: "https://i.pinimg.com/736x/e0/f1/4c/e0f14c5e95809cfb7b582d455a17ada7.jpg",
        edad: 19,
        altura: 1.65,
        esVillano: false
    },
    {
        id: 4,
        nombrePersonaje: "Spider-Man Noir",
        descripción: "Una versión más oscura de Peter Parker de la década de 1930 durante la Gran Depresión. Resuelve crímenes con métodos de detective clásico.",
        habilidades: ["Investigación detectivesca", "Combate cuerpo a cuerpo", "Sigilo nocturno", "Uso de armas de época"],
        url_imagen: "https://i.pinimg.com/736x/9a/6e/c9/9a6ec9fde9b0751d2d5081751c0339b0.jpg",
        edad: 35,
        altura: 1.85,
        esVillano: false
    },
    {
        id: 5,
        nombrePersonaje: "Green Goblin",
        descripción: "Norman Osborn, el despiadado líder de Oscorp. Tras probar el Suero del Duende, obtuvo fuerza sobrehumana a costa de su cordura.",
        habilidades: ["Intelecto nivel genio", "Planeador de alta tecnología", "Bombas de calabaza", "Fuerza aumentada"],
        url_imagen: "https://i.pinimg.com/736x/a9/1e/68/a91e68a76a28f8fed63525de42501b99.jpg",
        edad: 50,
        altura: 1.80,
        esVillano: true
    },
    {
        id: 6,
        nombrePersonaje: "Venom",
        descripción: "Un temible simbionte alienígena que se fusionó con el reportero Eddie Brock. Comparten un odio profundo y mutuo hacia Spider-Man.",
        habilidades: ["Fuerza bruta descomunal", "Metamorfosis física", "Inmunidad al sentido arácnido", "Generación de tentáculos"],
        url_imagen: "https://i.pinimg.com/736x/5c/2c/3c/5c2c3c07adf09c9bcc07b1c58ab3c644.jpg",
        edad: 32,
        altura: 2.30,
        esVillano: true
    }
];

function renderizarPersonajes() {
    const contenedor = document.getElementById("contenedor-tarjetas");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    listaPersonajes.forEach((personaje, index) => { // Agregamos 'index' aquí
        const card = document.createElement("div");
        card.className = personaje.esVillano ? "card villano" : "card";

        card.innerHTML = `
            <div class="card-img-container">
                <img src="${personaje.url_imagen}" alt="${personaje.nombrePersonaje}" class="card-img">
            </div>
            <div class="card-body">
                <h3 class="card-title">${personaje.nombrePersonaje}</h3>
                <p><strong>Edad:</strong> ${personaje.edad} años</p>
                <p class="card-desc">${personaje.descripción}</p>
                
                <!-- BOTÓN DE ELIMINAR -->
                <button onclick="eliminarPersonaje(${index})" class="btn-delete">
                    Eliminar de la Base
                </button>
            </div>
        `;
        contenedor.appendChild(card);
    });
}
// ==========================================
// 3. FUNCIONES DE INTERACCIÓN (BOTONES DE FILTRO)
// ==========================================
function inicializarEventos() {
    const btnNombre = document.getElementById("btn-ordenar-nombre");
    const btnEdad = document.getElementById("btn-ordenar-edad");

    if (btnNombre) {
        btnNombre.addEventListener("click", () => {
            listaPersonajes.sort((a, b) => a.nombrePersonaje.localeCompare(b.nombrePersonaje));
            renderizarPersonajes();
        });
    }

    if (btnEdad) {
        btnEdad.addEventListener("click", () => {
            listaPersonajes.sort((a, b) => a.edad - b.edad);
            renderizarPersonajes();
        });
    }

// --- ESCUCHA DEL FORMULARIO DE NUEVOS PERSONAJES ---
    const formulario = document.getElementById("formulario-personaje");
    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault(); // Evita que la página se recargue

            // 1. Capturar los valores del formulario
            const nombre = document.getElementById("nombre").value;
            const bando = document.getElementById("bando").value;
            const descripcion = document.getElementById("descripcion").value;
            const edad = parseInt(document.getElementById("edad").value);
            const altura = parseFloat(document.getElementById("altura").value);
            
            // Convertir la cadena de texto de habilidades en un Arreglo limpio sin espacios vacíos
            const habilidades = document.getElementById("habilidades").value
                .split(",")
                .map(hab => hab.trim())
                .filter(hab => hab !== "");

            const url_imagen = document.getElementById("url_imagen").value;

            // 2. Crear el nuevo objeto de personaje estructurado
            const nuevoPersonaje = {
                id: listaPersonajes.length + 1, // Genera un ID dinámico básico
                nombrePersonaje: nombre,
                descripción: descripcion,
                habilidades: habilidades,
                url_imagen: url_imagen,
                edad: edad,
                altura: altura,
                esVillano: (bando === "villano") // Si es villano devuelve true, sino false
            };

            // 3. Empujar al arreglo principal y volver a renderizar
            listaPersonajes.push(nuevoPersonaje);
            renderizarPersonajes();

            // 4. Limpiar el formulario para dejarlo listo para otro registro
            formulario.reset();
        });
    }
}

// Carga la app una vez que la estructura HTML esté lista
document.addEventListener("DOMContentLoaded", () => {
    renderizarPersonajes();
    inicializarEventos();
});

function eliminarPersonaje(index) {
    // Confirmación estética para no borrar por error
    if (confirm("¿Estás seguro de que quieres eliminar a este personaje del registro?")) {
        listaPersonajes.splice(index, 1); // Elimina 1 elemento en la posición del índice
        renderizarPersonajes(); // Refresca la lista visualmente
    }
}