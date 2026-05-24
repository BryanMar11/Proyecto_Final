// ==========================================
// 1. ARREGLO DE PERSONAJES (URLS DE INTERNET ESTABLES)
// ==========================================
const listaPersonajes = [
    {
        id: 1,
        nombrePersonaje: "Peter Parker",
        descripción: "El Spider-Man original de la Tierra-616. Científico brillante, fotógrafo y protector de Nueva York tras ser mordido por una araña radiactiva.",
        habilidades: ["Sentido arácnido", "Fuerza sobrehumana", "Lanzatelarañas", "Adherencia a superficies"],
        // Imagen directa y pública de Peter Parker (Traje Clásico)
        url_imagen: "https://i.pinimg.com/1200x/b8/9d/61/b89d614e41c7cd5f49561e4b7b48d8fe.jpg", 
        edad: 25,
        altura: 1.78,
        esVillano: false
    },
    {
        id: 2,
        nombrePersonaje: "Miles Morales",
        descripción: "Joven de Brooklyn que asume el manto de Spider-Man. Además de las habilidades arácnidas clásicas, posee poderes bio-eléctricos únicos.",
        habilidades: ["Rayo venom (Bio-electricidad)", "Camuflaje invisible", "Sentido arácnido", "Acrobacias de gran nivel"],
        // Imagen directa y pública de Miles Morales (Traje Negro/Rojo)
        url_imagen: "https://i.pinimg.com/736x/03/ec/f6/03ecf6877bffd1e2ee130b2451631a50.jpg", 
        edad: 17,
        altura: 1.73,
        esVillano: false
    }
];

// ==========================================
// 2. FUNCIÓN PRINCIPAL DE RENDERIZADO
// ==========================================
function renderizarPersonajes() {
    const contenedor = document.getElementById("contenedor-tarjetas");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    listaPersonajes.forEach(personaje => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        if (personaje.esVillano) {
            card.classList.add("villano");
        }

        const habilidadesBadges = personaje.habilidades
            .map(hab => `<span class="tag-badge ${personaje.esVillano ? 'badge-villano' : 'badge-heroe'}">${hab}</span>`)
            .join(" ");

        card.innerHTML = `
            <img src="${personaje.url_imagen}" alt="${personaje.nombrePersonaje}" class="card-img">
            <div class="card-body">
                <span class="tag-badge ${personaje.esVillano ? 'badge-villano' : 'badge-heroe'}">
                    ${personaje.esVillano ? 'Villano' : 'Héroe'}
                </span>
                <h3 class="card-title">${personaje.nombrePersonaje}</h3>
                <p class="card-desc">${personaje.descripción}</p>
                <p><strong>Edad:</strong> ${personaje.edad} años</p>
                <p><strong>Altura:</strong> ${personaje.altura}m</p>
                <div class="habilidades-container" style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 5px;">
                    ${habilidadesBadges}
                </div>
            </div>
        `;

        contenedor.appendChild(card);
    });
}

// ==========================================
// 3. INICIALIZADOR DE EVENTOS
// ==========================================
document.addEventListener("DOMContentLoaded", renderizarPersonajes);