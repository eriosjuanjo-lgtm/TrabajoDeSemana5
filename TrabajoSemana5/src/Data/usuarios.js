import UserCard from "./UserCard";

const usuarios = [
  {
    id: 1,
    nombre: "Santiago Gómez",
    cargo: "Profesor de Frontend",
    categoria: "DESARROLLO WEB",
    rol: "DOCENTE",
    descripcion:
      "Especialista en React, diseño web y metodologías de aprendizaje práctico.",
    tags: ["React", "UI/UX", "Proyectos"],
    imagen: "/imagen1.png"
  },

  {
    id: 2,
    nombre: "Laura Martínez",
    cargo: "Desarrolladora Frontend",
    categoria: "DESARROLLO WEB",
    rol: "DOCENTE",
    descripcion:
      "Profesional especializada en interfaces modernas y desarrollo con React.",
    tags: ["React", "CSS", "JavaScript"],
    imagen: "/imagen2.png"
  },

  {
    id: 3,
    nombre: "Carlos Rodríguez",
    cargo: "Desarrollador Backend",
    categoria: "PROGRAMACIÓN",
    rol: "DOCENTE",
    descripcion:
      "Experto en desarrollo de aplicaciones y construcción de APIs.",
    tags: ["Node.js", "API", "Backend"],
    imagen: "/imagen3.png"
  },

  {
    id: 4,
    nombre: "Ana Torres",
    cargo: "Diseñadora UI/UX",
    categoria: "DISEÑO",
    rol: "DOCENTE",
    descripcion:
      "Diseñadora enfocada en crear experiencias digitales fáciles de utilizar.",
    tags: ["Figma", "UI/UX", "Diseño"],
    imagen: "/imagen4.png"
  },

  {
    id: 5,
    nombre: "Miguel Hernández",
    cargo: "Ingeniero de Software",
    categoria: "TECNOLOGÍA",
    rol: "DOCENTE",
    descripcion:
      "Ingeniero especializado en arquitectura y desarrollo de software.",
    tags: ["Java", "SQL", "Git"],
    imagen: "/imagen5.png"
  },

  {
    id: 6,
    nombre: "Daniela López",
    cargo: "Desarrolladora Web",
    categoria: "DESARROLLO WEB",
    rol: "DOCENTE",
    descripcion:
      "Especialista en desarrollo de páginas web modernas y responsivas.",
    tags: ["HTML", "CSS", "JavaScript"],
    imagen: "/imagen6.png"
  },

  {
    id: 7,
    nombre: "Andrés Pérez",
    cargo: "Analista de Sistemas",
    categoria: "SISTEMAS",
    rol: "DOCENTE",
    descripcion:
      "Analista dedicado al diseño y optimización de sistemas informáticos.",
    tags: ["Sistemas", "SQL", "Análisis"],
    imagen: "/imagen7.png"
  },

  {
    id: 8,
    nombre: "Valentina Castro",
    cargo: "Frontend Developer",
    categoria: "DESARROLLO WEB",
    rol: "DOCENTE",
    descripcion:
      "Desarrolladora enfocada en crear interfaces atractivas y funcionales.",
    tags: ["React", "Vite", "CSS"],
    imagen: "/imagen8.png"
  },

  {
    id: 9,
    nombre: "Sebastián Vargas",
    cargo: "Programador Java",
    categoria: "PROGRAMACIÓN",
    rol: "DOCENTE",
    descripcion:
      "Programador especializado en Java y programación orientada a objetos.",
    tags: ["Java", "POO", "SQL"],
    imagen: "/imagen9.png"
  },

  {
    id: 10,
    nombre: "Camila Moreno",
    cargo: "Diseñadora Web",
    categoria: "DISEÑO WEB",
    rol: "DOCENTE",
    descripcion:
      "Diseñadora especializada en interfaces web modernas y accesibles.",
    tags: ["Diseño", "CSS", "UX"],
    imagen: "/imagen10.png"
  },

  {
    id: 11,
    nombre: "Felipe Ramírez",
    cargo: "Ingeniero de Datos",
    categoria: "BASES DE DATOS",
    rol: "DOCENTE",
    descripcion:
      "Especialista en almacenamiento, análisis y gestión de información.",
    tags: ["SQL", "Datos", "Backend"],
    imagen: "/imagen11.png"
  },

  {
    id: 12,
    nombre: "Mariana Silva",
    cargo: "Desarrolladora Full Stack",
    categoria: "DESARROLLO",
    rol: "DOCENTE",
    descripcion:
      "Profesional con experiencia en frontend y backend.",
    tags: ["React", "Node", "API"],
    imagen: "/imagen12.png"
  },

  {
    id: 13,
    nombre: "Juan Martínez",
    cargo: "Ingeniero de Software",
    categoria: "SOFTWARE",
    rol: "DOCENTE",
    descripcion:
      "Especialista en desarrollo y mantenimiento de aplicaciones.",
    tags: ["Git", "Java", "React"],
    imagen: "/imagen13.png"
  },

  {
    id: 14,
    nombre: "Paula Sánchez",
    cargo: "Especialista UX",
    categoria: "DISEÑO",
    rol: "DOCENTE",
    descripcion:
      "Especialista en experiencia de usuario y diseño de productos digitales.",
    tags: ["UX", "Figma", "Research"],
    imagen: "/imagen14.png"
  },

  {
    id: 15,
    nombre: "David Gómez",
    cargo: "Desarrollador JavaScript",
    categoria: "PROGRAMACIÓN",
    rol: "DOCENTE",
    descripcion:
      "Desarrollador especializado en JavaScript y aplicaciones web.",
    tags: ["JavaScript", "React", "Node"],
    imagen: "/imagen15.png"
  },

  {
    id: 16,
    nombre: "Natalia Ríos",
    cargo: "Desarrolladora Frontend",
    categoria: "DESARROLLO WEB",
    rol: "DOCENTE",
    descripcion:
      "Desarrolladora enfocada en interfaces responsivas.",
    tags: ["React", "HTML", "CSS"],
    imagen: "/imagen16.png"
  },

  {
    id: 17,
    nombre: "Jorge Restrepo",
    cargo: "Administrador de Bases de Datos",
    categoria: "BASES DE DATOS",
    rol: "DOCENTE",
    descripcion:
      "Profesional especializado en bases de datos relacionales.",
    tags: ["SQL Server", "SQL", "Datos"],
    imagen: "/imagen17.png"
  },

  {
    id: 18,
    nombre: "Isabella Ortiz",
    cargo: "Diseñadora UI",
    categoria: "DISEÑO",
    rol: "DOCENTE",
    descripcion:
      "Diseñadora especializada en interfaces limpias y modernas.",
    tags: ["UI", "Figma", "UX"],
    imagen: "/imagen18.png"
  },

  {
    id: 19,
    nombre: "Mateo Jiménez",
    cargo: "Desarrollador Full Stack",
    categoria: "DESARROLLO",
    rol: "DOCENTE",
    descripcion:
      "Desarrollador con experiencia en aplicaciones completas.",
    tags: ["React", "Node.js", "MongoDB"],
    imagen: "/imagen19.png"
  },

  {
    id: 20,
    nombre: "Sofía Herrera",
    cargo: "Ingeniera de Software",
    categoria: "TECNOLOGÍA",
    rol: "DOCENTE",
    descripcion:
      "Ingeniera enfocada en soluciones tecnológicas y desarrollo de software.",
    tags: ["Java", "React", "Git"],
    imagen: "/imagen20.png"
  },
];

function ListaUsuarios() {
  return (
    <section className="usuarios-section">

      <div className="section-title">
        <p>CONOCE NUESTRO EQUIPO</p>

        <h1>Lista de usuarios</h1>

        <span>
          Profesionales especializados en desarrollo de sofware
        </span>
      </div>

      <div className="usuarios-grid">
        {usuarios.map((usuario) => (
          <UserCard
            key={usuario.id}
            usuario={usuario}
          />
        ))}
      </div>

    </section>
  );
}

export default ListaUsuarios;