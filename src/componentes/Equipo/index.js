import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {
    //Destructuración
    // De esta forma se mejora la legibilidad del código al traer las props de datos(equipos)
    
    const { colorPrimario, colorSecundario, titulo } = props.datos

    const backgroundEquipos = {backgroundColor: colorSecundario}

    const estiloTitulo = {borderColor: colorPrimario}

    return <section className="equipo" style={backgroundEquipos}>
        <h3 style={estiloTitulo} >{titulo}</h3>
        <div className="colaboradores">
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
        </div>
    </section>
}

export default Equipo;