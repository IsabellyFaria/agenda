import "./Body.css";
import "./Home.css";
function Home() {
  return (
    <div className="conteiner">
        <div className="cima">
            <div className = "entrega">
                <div className="entrega-titulo"><h2>Entregas</h2></div>
                <div className="entrega-lista"><a>Não à atividades para entrega</a></div>
            </div>
            <div className="calendario">
                <div className="calendario-horarios">
                    <div className="calendario-horario"> <h4>13:30 - 15:30</h4> </div>
                    <div className="calendario-horario"> <h4>15:30 - 17:30</h4> </div>
                    <div className="calendario-horario"> <h4>19:00 - 21:00</h4> </div>
                    <div className="calendario-horario"> <h4>21:00 - 23:00</h4> </div>
                </div>
                <div className="calendario-lista">
                    <div className="lista-titulo"><h3>Seg</h3></div>
                    <div className="lista-horario">

                    </div>
                </div>
                <div className="calendario-lista">
                    <div className="lista-titulo"><h3>Ter</h3></div>
                    <div className="lista-horario">

                    </div>
                </div>
                <div className="calendario-lista">
                    <div className="lista-titulo"><h3>Qua</h3></div>
                    <div className="lista-horario">

                    </div>
                </div>
                <div className="calendario-lista">
                    <div className="lista-titulo"><h3>Qui</h3></div>
                    <div className="lista-horario">

                    </div>
                </div>
                <div className="calendario-lista ultima">
                    <div className="lista-titulo"><h3>Sex</h3></div>
                    <div className="lista-horario">

                    </div>
                </div>
            </div> 
        </div>
        <div className="embaixo">
            <button className="btn menu row"><h3>Notas</h3></button>
            <button className="btn menu row"><h3>Cronograma</h3></button>
            <button className="btn menu row"><h3>Matérias</h3></button>
            <button className="btn menu row"><h3>Conteúdo</h3></button>
        </div>
    </div>
  );
}

export default Home;