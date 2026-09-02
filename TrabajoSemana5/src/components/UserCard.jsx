function UserCard({ usuario }) {
  return (
    <article className="user-card">

      <div className="user-card-header">
        <span className="badge">{usuario.rol}</span>
      </div>

      <img
        src={usuario.imagen}
        alt={`Foto de ${usuario.nombre}`}
        className="user-image"
      />

      <p className="user-category">{usuario.categoria}</p>

      <h2>{usuario.nombre}</h2>

      <p className="user-cargo">
        {usuario.cargo}
      </p>

      <p className="user-description">
        {usuario.descripcion}
      </p>

      <div className="tags">
        {usuario.tags.map((tag, index) => (
          <span className="tag" key={index}>
            {tag}
          </span>
        ))}
      </div>

      <button className="contact-button">
        Contactar
      </button>

    </article>
  );
}

export default UserCard;