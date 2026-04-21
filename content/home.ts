import type {
  Education,
  ExperienceItem,
  HomeContent,
  ProjectItem,
} from "@/types/home";

export const education = {
  period: "2017 - 2025",
  degree: "Ingeniería en Computación",
  institution: "Universidad Nacional del Sur",
  duration: "Duración estimada: 6 años",
  summary:
    "Formación en sistemas y computación, con foco en ingeniería de software y resolución estructurada de problemas. La carrera consolidó un enfoque técnico y analítico, con experiencia práctica en desarrollo de software, gestión de proyectos y trabajo en equipo.",
  thesis: {
    label: "Proyecto final de carrera",
    title: "Hotelería Hospitalaria",
    summary:
      "Diseño e implementación de una aplicación web para gestión hospitalaria, centrada en accesibilidad, trazabilidad y claridad operativa.",
  },
  linkedinPostEmbed: {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7424070226104946689?collapsed=1",
    title: "Publicación integrada",
  },
} satisfies Education;

export const experience = [
  {
    period: "May 2023 - Feb 2026",
    role: "Fullstack Developer",
    company: "NexoSmart",
    website: "https://nexosmart.com.ar",
    summary:
      "Full Stack Developer con foco en backend, trabajando en soluciones web para entornos productivos.",
    achievements: [
      "Diseñé, desarrollé y mantuve APIs RESTful con Laravel PHP, siendo responsable de su ciclo de vida completo en producción.",
      "Administré y optimicé bases de datos MySQL, mejorando performance en queries críticas.",
      "Implementé sistema de colas y jobs asincrónicos mediante Supervisor, mejorando la performance en",
      "procesos pesados y evitando bloqueos en la API.",
      "Integré APIs de pago y logística de envíos, utilizando la API de Mercado Pago y Pedidos ya, respectivamente,  automatizando procesos que antes eran manuales.",
      "Integré bucket de Amazon S3 para almacenamiento de archivos, optimizando la gestión de recursos y reduciendo costos de infraestructura.",
      "Configuré y desplegué aplicaciones en servidores Linux con Nginx, gestionando entornos productivos.",
      "Resolví incidencias en producción bajo presión y ejecuté refactorizaciones sobre código legacy.",
      "Colaboré en el desarrollo frontend con React y Next.js, asegurando integración fluida entre capas.",
      "Participé en code reviews y apliqué buenas prácticas de desarrollo (clean code, documentación, estándares de equipo).",
    ],
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Laravel", "PHP", "MySQL", "Nginx", "Supervisor", "Cloudflare", "Mercado Pago API", "Pedidos Ya API", "Amazon S3"],
  },
  {
    period: "2010 - ∞",
    role: "Atención al cliente",
    company: "Comercio familiar",
    // es una panaderia, pero no quiero que se vea tan amateur, asi que lo dejo como comercio familiar
    summary:
      "Atención personalizada a clientes, ventas de productos.",
    stack: ["Atención al cliente", "Ventas", "Gestión de stock"],
  },
] satisfies ExperienceItem[];

export const projects = [
  {
    slug: "hoteleria-hospitalaria",
    caseStudy: true,
    title: "Hotelería Hospitalaria",
    description:
      "Prototipo web desarrollado como proyecto final de carrera para gestionar la postulación, ofrecimiento y asignación de turnos extras del área de Gestión de Servicios Internos y Hotelería Hospitalaria.",
    github: undefined,
    website: "https://www.linkedin.com/posts/johann-holzmann_me-recib%C3%AD-soy-ingeniero-en-computaci%C3%B3n-ugcPost-7424070226104946689-CpeU",
    accent: "from-cyan-400/40 via-sky-500/20 to-transparent",
    label: "Hospitality system",
    tags: [
      "Next.js",
      "Laravel",
      "PHP",
      "Vercel",
      "MySQL",
      "DigitalOcean",
      "Integración API",
      "Responsive UI",
      "UX",
      "Arquitectura",
      "Accesibilidad",
    ],
  },
  {
    slug: "quecompramos",
    caseStudy: true,
    title: "QueCompramos",
    description:
      "Aplicacion fullstack para crear y compartir una lista de compras viva, con acceso por enlace secreto, sesion temporal por cookies y edicion colaborativa sin login.",
    logo: "/images/quecompramos/quecompramos.png",
    github: "https://github.com/johannholzmann/listamercado",
    website: "https://quecompramos.vercel.app/",
    accent: "from-emerald-400/35 via-lime-500/20 to-transparent",
    label: "Shared shopping list",
    tags: [
      "Next.js 16",
      "App Router",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "Vercel",
      "Cookies",
      "Fullstack",
      "Colaboracion",
      "UX simple",
    ],
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    description:
      "Sitio web personal para mostrar mi experiencia, currículum y proyectos, y compartir ideas sobre tecnología, desarrollo y diseño.",
    github: "https://github.com/johannholzmann/portfolio",
    website: "/",
    accent: "from-fuchsia-500/35 via-violet-500/20 to-transparent",
    label: "Portfolio personal",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel", "UI", "UX", "Diseño"],
  },
] satisfies ProjectItem[];

export const homeContent = {
  education,
  experience,
  projects,
} satisfies HomeContent;
