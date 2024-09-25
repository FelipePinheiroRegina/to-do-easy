import { CurrencyCircleDollar, ArrowLeft } from '@phosphor-icons/react'
import { Container, Header, Form } from './styles'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea/Index'
import { Button } from '../../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useRefresh } from '../../hooks/refresh'

export function Update() {
    const { light } = useRefresh()
    const { id }= useParams()
    const navigate = useNavigate()

    const tasks = JSON.parse(localStorage.getItem('@to-do-easy:tasks'))
    const [ currentTask ] = tasks.filter(task => task.id === id) 

    const [ title, setTitle ] = useState(currentTask.title) 
    const [ description, setDescription ] = useState(currentTask.description)

    const handleNavigateBack = () => {
        navigate(-1)
    }

    function handleUpdate(e) {
        e.preventDefault()
        
        if(!title || !description) return toast.error('Preencha todos os campos!')
        
        currentTask.title = title
        currentTask.description = description

        const index = tasks.findIndex(task => task.id === id)

        if(index != -1) {
            tasks.splice(index, 1, currentTask)
        }

        localStorage.setItem('@to-do-easy:tasks', JSON.stringify(tasks))
        toast.success('Tarefa atualizada!')
    }

    function handleDelete() {
        const index = tasks.findIndex(task => task.id === id)

        if(index != -1) {
            tasks.splice(index, 1)
        }

        localStorage.setItem('@to-do-easy:tasks', JSON.stringify(tasks))
        toast.success('Tarefa deletada!')
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }

    return (
        <Container>
            <Header $light={light}>
                <ToastContainer theme='dark' autoClose={2000}/>
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
                    <Button 
                        title="Deletar tarefa" 
                        className="delete"
                        onClick={handleDelete}
                    />

                    <Button type="submit" title="Atualizar" className="button-update"/>
                </div>
            </Form>
        </Container>
    )
}