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
    
    const onSave=(event) => {
        event.preventDefault()
        console.log('Submit')
    }

    return(
        <section className="forms">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextPlace mandatory={true} label="Nome" placeholder="Digite seu nome"/>
                <TextPlace mandatory={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextPlace label="Imagem" placeholder="Digite o endereço da imagem"/>
                <List mandatory={true} label="Time" itens={times}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Forms