import "./Body.css";
import "./Prod.css";
import { FaHeart } from "react-icons/fa";
function Prod() {
  return (
    <div className="conteiner">
        <div className="cima">
            <div className="container-coracao">
                    <div className="pocao">
                        

                        <div className="vidro-borda">

                            <div className="vidro">

                                <div className="liquido"/>

                                <div className="brilho"/>

                            </div>

                        </div>
                        <FaHeart className="coracao"/>
                    </div>
            </div>
            <div className="container-botoes">
                    <button className="btn"><h3>Recompensas</h3></button>
                    <button className="btn"><h3>Atividades</h3></button>
                    <button className="btn"><h3>Matérias</h3></button>
                    <button className="btn"><h3>Pontuação</h3></button>
            </div>
            <div className="container-tarefa">

            </div>
        </div>
    </div>
  );
}

export default Prod;