import type { CaseStudy } from "@/types/case-study";

export const hoteleriaHospitalaria: CaseStudy = {
  slug: "hoteleria-hospitalaria",
  title: "Hotelería Hospitalaria",
  subtitle:
    "Plataforma para postulación y asignación de turnos extras en el Hospital Municipal de Agudos de Bahía Blanca.",
  summary:
    "Prototipo web desarrollado como proyecto final de carrera para gestionar la postulación, ofrecimiento y asignación de turnos extras del área de Gestión de Servicios Internos y Hotelería Hospitalaria.",
  sections: [
    {
      title: "Contexto",
      paragraphs: [
        "Este proyecto surgió a partir de una problemática real del Hospital Municipal de Agudos de Bahía Blanca.",
        "En una primera reunión con personal del hospital y del departamento de la universidad, relevé requerimientos, aclaré dudas y comencé el diseño y la implementación del prototipo.",
      ],
    },
    {
      title: "Objetivo",
      paragraphs: [
        "Desarrollar una plataforma que gestione la postulación y asignación de turnos extras de trabajadores del hospital para el sector correspondiente al Área de Gestión de Servicios Internos y Hotelería Hospitalaria.",
      ],
    },
    {
      title: "Funcionalidades",
      paragraphs: [
        "La aplicación contempla dos perfiles principales: trabajadores y gestores.",
      ],
      bullets: [
        "Trabajadores: postulación a turnos extras y aceptación de turnos cuando se los ofrece.",
        "Gestores: visualización del listado de postulados por turno, ofrecimiento a un trabajador y seguimiento cuando se necesita cobertura.",
      ],
    },
    {
      title: "Rol y entrega",
      paragraphs: [
        "Realicé el desarrollo completo del frontend y backend, además del despliegue en entornos de prueba para que el personal pudiera validar el prototipo.",
      ],
    },
    {
      title: "Estado actual",
      paragraphs: [
        "La web aún no está productiva. Resta coordinar los pasos finales para su puesta en marcha.",
      ],
    },
  ],
  stack: [
    {
      label: "Frontend",
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "UI responsive (diseño minimalista e intuitivo)",
      ],
    },
    {
      label: "Backend",
      items: ["Laravel", "PHP", "API RESTful"],
    },
    {
      label: "Base de datos",
      items: ["MySQL"],
    },
    {
      label: "Servicios externos",
      items: ["Integración con API del hospital (usuarios y sectores)"],
    },
    {
      label: "Hosting",
      items: ["DigitalOcean (VPS)", "Vercel (frontend)"],
    }
  ],
  links: {
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7424070227602268161/",
  },
  images: [
    {
      src: "/images/hoteleria-hospitalaria/worker/dashboard.png",
      alt: "Dashboard de trabajador mostrando turnos disponibles y postulados",
      caption: "Dashboard de trabajador mostrando turnos disponibles y postulados",
    },
    {
      src: "/images/hoteleria-hospitalaria/worker/offer.png",
      alt: "Formulario de postulación a turno extra",
      caption: "Formulario de postulación a turno extra",
    }, {
      src: "/images/hoteleria-hospitalaria/worker/calendar.png",
      alt: "Calendario de turnos",
      caption: "Calendario de turnos",
    },
    {
      src: "/images/hoteleria-hospitalaria/manager/dashboard.png",
      alt: "Dashboard de gestor mostrando turnos y postulados",
      caption: "Dashboard de gestor mostrando turnos y postulados",
    },
    {
      src: "/images/hoteleria-hospitalaria/manager/slot.png",
      alt: "Formulario de ofrecimiento de turno a trabajadores",
      caption: "Formulario de ofrecimiento de turno a trabajadores",
    }, {
      src: "/images/hoteleria-hospitalaria/manager/calendar.png",
      alt: "Calendario de turnos con seguimiento de cobertura",
      caption: "Calendario de turnos con seguimiento de cobertura",
    }
  ],
};

