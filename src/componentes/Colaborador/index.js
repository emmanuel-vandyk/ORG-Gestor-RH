import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {

    const { nombre, puesto, foto, id, fav } = props.datos;
    const { colorPrimario, eliminarColaborador, like } = props;

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart className="heart" color="red" onClick={() => like(id)}/> : <AiOutlineHeart className="heart" onClick={() => like(id)} />}
            
        </div>
    </div>
}
// imagenes colaboradores 
// https://github.com/genesysaluralatam.png
// https://github.com/JeanmarieAluraLatam.png
// https://github.com/christianpva.png
// https://github.com/JoseDarioGonzalezCha.png

export default Colaborador;
