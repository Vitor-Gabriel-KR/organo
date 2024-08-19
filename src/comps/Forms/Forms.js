import { useState } from 'react';
import TextPlace from '../TextPlace/TextPlace';
import './Forms.css'
import List from '../List/List';
import Button from '../Button/Button';

const Forms = (props) => {

    const times=[
        'programação',
        'Front-End',
        'DataScience',
        'Devops',
        'Ux e Design',
        'Mobile',
        'inovação e Gestão'
    ]

    const [nome, setNome]= useState('')
    const [cargo, setCargo]= useState('')
    const [imagem, setImagem]= useState('')
    const [time, setTime]= useState('')
    
    const onSave=(event) => {
        event.preventDefault()
        console.log('Submit :',nome,cargo,imagem,time)
    }

    return(
        <section className="forms">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextPlace mandatory={true} label="Nome" placeholder="Digite seu nome" valueA={nome} onAtt={valueA =>setNome(valueA)}  />
                <TextPlace mandatory={true} label="Cargo" placeholder="Digite seu cargo" valueA={cargo} onAtt={valueA =>setCargo(valueA)}/>
                <TextPlace label="Imagem" placeholder="Digite o endereço da imagem" valueA={imagem} onAtt={valueA =>setImagem(valueA)}/>
                <List mandatory={true} label="Time" itens={times} valueA={time} aoAtt={valueA=> setTime(valueA)}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Forms