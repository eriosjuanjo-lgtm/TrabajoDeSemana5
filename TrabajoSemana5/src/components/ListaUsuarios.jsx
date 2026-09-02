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
    imagen: "https://i.pravatar.cc/300?img=12",
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
    imagen: "https://i.pravatar.cc/300?img=47",
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
    imagen: "https://i.pravatar.cc/300?img=11",
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
    imagen: "https://i.pravatar.cc/300?img=44",
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
    imagen: "https://i.pravatar.cc/300?img=13",
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
    imagen: "https://i.pravatar.cc/300?img=49",
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
    imagen: "https://i.pravatar.cc/300?img=68",
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
    imagen: "https://i.pravatar.cc/300?img=32",
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
    imagen: "https://i.pravatar.cc/300?img=60",
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
    imagen: "https://i.pravatar.cc/300?img=45",
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
    imagen: "https://i.pravatar.cc/300?img=14",
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
    imagen: "https://i.pravatar.cc/300?img=48",
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
    imagen: "https://i.pravatar.cc/300?img=15",
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
    imagen: "https://i.pravatar.cc/300?img=43",
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
    imagen: "https://i.pravatar.cc/300?img=51",
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
    imagen: "https://i.pravatar.cc/300?img=25",
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
    imagen: "https://i.pravatar.cc/300?img=52",
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
    imagen: "https://i.pravatar.cc/300?img=46",
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
    imagen: "https://i.pravatar.cc/300?img=33",
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
    imagen: "https://i.pravatar.cc/300?img=31",
  },
];

function ListaUsuarios() {
  return (
    <section className="usuarios-section">

      <div className="section-title">
        <p>CONOCE NUESTRO EQUIPO</p>

        <h1>Lista de usuarios</h1>

        <span>
          Profesionales y docentes especializados en tecnología.
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