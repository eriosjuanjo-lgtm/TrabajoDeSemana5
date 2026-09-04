import UserCard from "./UserCard.jsx";
import usuarios from "../Data/usuarios.js";

function ListaDeUsuario() {
  return (
    <section className="usuarios-section">

      <div className="section-title">
        <p>CONOCE NUESTRO EQUIPO</p>

        <h1>Lista de usuarios</h1>

        <span>
          Profesionales especializados en desarrollo de sofware.
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

export default ListaDeUsuario;