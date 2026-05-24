// ==========================================
// 1. ARREGLO DE NOTICIAS DEL MULTIVERSO
// ==========================================
const listaNoticias = [
    {
        id: 1,
        titulo: "¡Colisión Dimensional en Brooklyn!",
        categoria: "Alerta",
        descripcion: "Se reportan sutiles distorsiones visuales y fallos en la gravedad cerca del apartamento de Miles Morales. Testigos aseguran haber visto portales hexagonales de color neón.",
        fuente: "Daily Bugle Tierra-1610",
        fecha: "24 de Mayo, 2026",
        esUrgente: true
    },
    {
        id: 2,
        titulo: "Norman Osborn adquiere nuevos laboratorios",
        categoria: "Corporativo",
        descripcion: "Oscorp Industries ha concretado la compra de las antiguas instalaciones de Horizon Labs. Científicos temen que se retomen los experimentos con el suero de regeneración celular.",
        fuente: "Caché de Datos Oscorp",
        fecha: "23 de Mayo, 2026",
        esUrgente: false
    },
    {
        id: 3,
        titulo: "Spider-Gwen anuncia gira con 'The Mary Janes'",
        categoria: "Multiverso",
        descripcion: "La baterista y heroína de la Tierra-65 confirmó que dará un concierto interdimensional usando tecnología de la Spider-Society. Las entradas se agotaron en microsegundos.",
        fuente: "Rolling Stone T-65",
        fecha: "21 de Mayo, 2026",
        esUrgente: false
    }
];

// ==========================================
// 2. FUNCIÓN DE RENDERIZADO DE NOTICIAS
// ==========================================
function renderizarNoticias() {
    const contenedor = document.getElementById("contenedor-noticias");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    listaNoticias.forEach(noticia => {
        // Creamos la tarjeta reutilizando la estructura del CSS global
        const card = document.createElement("div");
        card.classList.add("card");

        // Si la noticia es urgente, le aplicamos el estilo de tarjeta de villano (borde rojo neón)
        if (noticia.esUrgente) {
            card.classList.add("villano");
        }

        card.innerHTML = `
            <div class="card-body" style="justify-content: space-between; min-height: 250px;">
                <div>
                    <span class="tag-badge ${noticia.esUrgente ? 'badge-villano' : 'badge-heroe'}">
                        ${noticia.categoria}
                    </span>
                    
                    <h3 class="card-title" style="margin-top: 15px; margin-bottom: 10px;">${noticia.titulo}</h3>
                    <p class="card-desc">${noticia.descripcion}</p>
                </div>
                
                <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 12px; margin-top: 15px;">
                    <p style="font-size: 0.82rem;"><strong>Fuente:</strong> ${noticia.fuente}</p>
                    <p style="font-size: 0.82rem;"><strong>Fecha:</strong> ${noticia.fecha}</p>
                </div>
            </div>
        `;

        contenedor.appendChild(card);
    });
}

// Inicializar al cargar el DOM
document.addEventListener("DOMContentLoaded", renderizarNoticias);