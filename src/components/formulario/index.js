import { useState } from "react"
import Botao from "../botao"
import CampoTexto from "../campoTexto"
import ListaSuspensa from "../listaSuspensa"
import './formulario.css'

const items = [
    'Programação',
    'Design',
    'UI/UX',
    'Front-end',
    'Devops'
]


const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const salvar = (evento) => {
        evento.preventDefault()
        props.cadastrarFunc(
            {
                nome,
                cargo,
                imagem,
                time
            }
        )
    }
    

    return (
        <section className="formulario">
            <form onSubmit={salvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto value={nome} obrigatorio={true} label="Nome" placeholder="Digite seu Nome" alterado={valor => setNome(valor)}/>
                <CampoTexto value={cargo} obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" alterado={valor => setCargo(valor)}/>
                <CampoTexto value={imagem} label="Imagem" placeholder="Informe o endereço da imagem" alterado={valor => setImagem(valor)} />
                <ListaSuspensa value={time} obrigatorio={true} label="Time" items={items} alterado={valor => setTime(valor)}/>
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario