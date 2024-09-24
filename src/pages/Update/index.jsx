import { CurrencyCircleDollar, ArrowLeft } from '@phosphor-icons/react'
import { Container, Header, Form } from './styles'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea/Index'
import { Button } from '../../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

export function Update() {
    const { id }= useParams()
    const navigate = useNavigate()
    let tasks = JSON.parse(localStorage.getItem('@to-do-easy:tasks')) 
    tasks = tasks.filter(task => task.id === id)
    const [ title, setTitle ] = useState(tasks[0].title)
    const [ description, setDescription ] = useState(tasks[0].description)

    const handleNavigateBack = () => {
        navigate(-1)
    }

    function handleUpdate(e) {
        e.preventDefault()
        tasks = JSON.parse(localStorage.getItem('@to-do-easy:tasks'))
        const index = tasks.findIndex(task => task.id === id)
        
        if(index != -1) {
            tasks.splice(index, 1, )
        }
        
    }

    return (
        <Container>
            <Header>
                <div className='back'>
                    <ArrowLeft onClick={handleNavigateBack}/>
                </div>

                <div className='title'>
                    <CurrencyCircleDollar/>
                    Atualizar tarefa
                </div>

                <div className='hidden'>

                </div>
            </Header>

            <Form onSubmit={handleUpdate}>
                <Input
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />

                <TextArea
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                >

                </TextArea>

                <div className='aux-position'>
                    <Button type="submit" title="Atualizar" className="button-update"/>
                </div>
            </Form>
        </Container>
    )
}