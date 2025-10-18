// src/data/posts.js
export const posts = [
  {
    id: 1,
    title: "Cusco íntimo: entre calles de piedra y tejados rojos",
    content:
      "Cusco revela su pulso en las mañanas: pan recién horneado, voces quechuas, sombras alargadas en Sacsayhuamán...",
    banner: "/images/cusco-banner.jpg",       // Banner grande del artículo
    thumb: "/images/cusco-thumb.jpg",         // Miniatura para listas
    author: {
      name: "Lucía Herrera",
      bio: "Cronista peruana. Recorre los Andes documentando fiestas patronales y gastronomía local desde 2016.",
      avatar: "/images/lucia.jpg"             // Avatar del autor
    },
    figureNote: "Figura 1. Amanecer en Cusco."
  },
  {
    id: 2,
    title: "Arequipa en tres sabores: queso helado, ocopa y adobo",
    content:
      "En el mercado San Camilo aprendí que la ciudad blanca también es ciudad de aromas. La ocopa humea como volcán...",
    banner: "/images/arequipa-banner.jpg",
    thumb: "/images/arequipa-thumb.jpg",
    author: {
      name: "Mateo Salvatierra",
      bio: "Fotógrafo y viajero. Busca historias en mercados y terminales. Publica en revistas de viaje latinoamericanas.",
      avatar: "/images/mateo.jpg"
    },
    figureNote: "Figura 2. Puestos de mercado en Arequipa."
  },
  {
    id: 3,
    title: "Puno: danzas, lago y un cielo que no se acaba",
    content:
      "Las bandas afinan al borde del Titicaca. Cada máscara cuenta una leyenda: diablos, morenos y marineras de viento frío...",
    banner: "/images/puno-banner.jpg",
    thumb: "/images/puno-thumb.jpg",
    author: {
      name: "Camila Ríos",
      bio: "Investigadora cultural. Estudia rituales y música altiplánica. Escribe crónicas para radios comunitarias.",
      avatar: "/images/camila.jpg"
    },
    figureNote: "Figura 3. Danza típica en Puno."
  }
];
