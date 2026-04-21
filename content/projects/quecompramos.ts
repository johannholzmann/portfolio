import type { CaseStudy } from "@/types/case-study";

export const quecompramos: CaseStudy = {
  slug: "quecompramos",
  title: "QueCompramos",
  subtitle:
    "Lista compartida de supermercado con acceso simple por enlace secreto y colaboracion sin friccion.",
  summary:
    "QueCompramos es una app para mantener siempre disponible una lista de compras compartida. El uso es simple, rapido y colaborativo: cualquier persona con el enlace secreto puede entrar, ver la lista y sumar o marcar productos sin friccion.",
  sections: [
    {
      title: "Objetivo del proyecto",
      paragraphs: [
        "Centralizar una lista viva de compras del supermercado.",
        "Permitir acceso simple mediante sesiones temporales.",
        "Hacer posible que varias personas colaboren sobre la misma lista.",
        "Mantener un flujo liviano para cargar, revisar y completar productos en grupo.",
      ],
    },
    {
      title: "Concepto de uso",
      paragraphs: [
        "El proyecto esta pensado para escenarios cotidianos donde una persona crea una lista nueva, la lista recibe un enlace secreto estable y luego se comparte con otras personas.",
      ],
      bullets: [
        "Cada participante agrega productos que faltan o cambia el estado de los que ya estan comprados o descartados.",
        "La lista queda persistida para volver cuando haga falta.",
      ],
    },
    {
      title: "Principios del producto",
      paragraphs: [
        "Estos principios guian cada decision de producto para mantener una experiencia liviana y facil de usar.",
      ],
      bullets: [
        "Simple antes que complejo.",
        "Compartido antes que individual.",
        "Persistente antes que descartable.",
        "Practico antes que formal.",
      ],
    },
    {
      title: "Modelo actual",
      paragraphs: [
        "El modelo actual prioriza rapidez de carga, colaboracion sin friccion y persistencia para uso cotidiano.",
      ],
      bullets: [
        "La lista vive en PostgreSQL a traves de Prisma.",
        "La sesion temporal identifica al dispositivo o participante, pero no requiere login.",
        "Cada lista nueva queda asociada al participante que la creo, para que luego pueda volver a verla desde la pantalla principal.",
        "El participante puede editar su nombre sin crear una cuenta formal.",
        "Los productos se guardan como texto libre para no frenar la carga rapida.",
        "Mientras se escribe un producto, la UI sugiere hasta 3 coincidencias de listas anteriores donde esa sesion ya participo.",
        "Cada item puede pasar por los estados pendiente, agregado y resuelto, que en la interfaz se muestran como por comprar, comprado y ya no hace falta.",
      ],
    },
    {
      title: "Stack tecnico",
      paragraphs: [
        "El stack prioriza una arquitectura simple y moderna, pensada para productividad y despliegue rapido.",
      ],
      bullets: [
        "Next.js 16 con App Router.",
        "Prisma ORM.",
        "PostgreSQL como base de datos.",
        "Neon para la capa de database hosting.",
        "Vercel para el hosting.",
        "Sesion compartida mediante cookies.",
      ],
    },
    {
      title: "Construccion con Codex",
      paragraphs: [
        "La aplicacion fue construida integramente con el agente Codex de desktop a partir de una serie de prompts, iterando sobre la idea hasta convertirla en un producto funcional.",
      ],
    },
    {
      title: "Estado del proyecto",
      paragraphs: [
        "El proyecto esta publicado y disponible para uso real en su URL de produccion.",
      ],
    },
  ],
  stack: [
    {
      label: "Frontend",
      items: ["Next.js 16", "App Router", "UI simple y rapida"],
    },
    {
      label: "Backend",
      items: ["Prisma ORM", "Server Components", "Session cookies"],
    },
    {
      label: "Base de datos",
      items: ["PostgreSQL", "Neon"],
    },
    {
      label: "Hosting",
      items: ["Vercel"],
    },
    {
      label: "Proceso de construccion",
      items: ["Codex Desktop", "Prompts iterativos"],
    },
  ],
  links: {
    github: "https://github.com/johannholzmann/listamercado",
    live: "https://listamercadox.vercel.app/",
  },
  images: [
    {
      src: "/images/quecompramos/quecompramos.png",
      alt: "Logo de QueCompramos con una bolsa y carrito de supermercado colaborativo",
      caption: "Logo de la aplicacion QueCompramos",
    },
  ],
};
