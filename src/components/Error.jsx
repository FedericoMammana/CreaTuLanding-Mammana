import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>¡Pagina inexistente regrese a Home!</h1>
      <Link className="btn btn-dark" to="/">
        Volver a Home
      </Link>
    </div>
  );
};

export default Error;
