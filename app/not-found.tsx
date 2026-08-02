import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found section-pad container">
      <span>404</span>
      <h1>Esta página no está disponible.</h1>
      <p>La dirección pudo cambiar o el contenido todavía no se ha publicado.</p>
      <Link className="button" href="/">Volver al inicio</Link>
    </section>
  );
}
