import "./Header.css";

type HeaderProps = {
  paginaAtual: string;
  onChangePagina: (pagina: string) => void;
};

function Header({ paginaAtual, onChangePagina }: HeaderProps) {
  return (
    <header>
      <button
        className={paginaAtual === "home" ? "ativo" : ""}
        onClick={() => onChangePagina("home")}
      >
        <h1>Home</h1>
      </button>

      <button
        className={paginaAtual === "prod" ? "ativo" : ""}
        onClick={() => onChangePagina("prod")}
      >
        <h1>Produtividade</h1>
      </button>

      <button
        className={paginaAtual === "horas" ? "ativo" : ""}
        onClick={() => onChangePagina("horas")}
      >
        <h1>Horas</h1>
      </button>
    </header>
  );
}

export default Header;