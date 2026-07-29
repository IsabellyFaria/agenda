
import "./Header.css";
type HeaderProps = {
  paginaAtual: string;
};

function Header({ paginaAtual }: HeaderProps) {
  return (
    <header>
      <button className={paginaAtual === "home" ? "ativo" : ""}>
        Home
      </button>

      <button className={paginaAtual === "agenda" ? "ativo" : ""}>
        Agenda
      </button>

      <button className={paginaAtual === "config" ? "ativo" : ""}>
        Configurações
      </button>
    </header>
  );
}

export default Header;