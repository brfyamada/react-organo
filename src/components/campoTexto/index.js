import './campo-texto.css'
const CampoTexto = (props) => {

    const alterar = (evento) => {
        props.alterado(evento.target.value)
    }

    return(
        <section className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} required={props.obrigatorio} placeholder={props.placeholder} onChange={alterar}></input>
        </section>
    );
}

export default CampoTexto