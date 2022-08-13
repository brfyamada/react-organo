import  './lista-suspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.value} onChange={evento => props.alterado(evento.target.value)}>
                {
                    props.items.map(item => <option key={item}>{item}</option>)
                }
            </select>
        </div>
    )
}

export default ListaSuspensa