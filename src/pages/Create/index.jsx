import { CurrencyCircleDollar, ArrowLeft } from '@phosphor-icons/react'
import { Container, Header, Form } from './styles'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea/Index'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Create() {
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const tasks = []
   
    const navigate = useNavigate()
    const handleNavigateBack = () => {
        navigate('/')
    }
    
    function handleCreateTask(e) {
        e.preventDefault()

        if(!title || !description) return toast.error('Título e descrição são obrigatórios!')

        const task = {
            id: uuidv4(), 
            title: title, 
            description: description, 
            status: 'do', 
            priority: false
        }
       
        let arrayTasks = localStorage.getItem('@to-do-easy:tasks') // Pegando tasks do localStorage
        arrayTasks = JSON.parse(arrayTasks) // Convertendo
        const checkArrayExists = Array.isArray(arrayTasks) // Checando se é um array

        if(checkArrayExists) {
            tasks.push(...arrayTasks)
        }

        tasks.push(task)
        
        localStorage.setItem('@to-do-easy:tasks', JSON.stringify(tasks))
        toast.success('Tarefa criada!')
        setTitle('')
        setDescription('')
    }

    return (
        <Container>
            <Header>
                <ToastContainer theme='dark' autoClose={2000}/>

                <div className='back'>
                    <ArrowLeft onClick={handleNavigateBack}/>
                </div>

                <div className='title'>
                    <CurrencyCircleDollar/>
                    Nova tarefa
                </div>

                <div className='hidden'>

                </div>
            </Header>

            <Form onSubmit={e => handleCreateTask(e)}>
                <Input 
                    placeholder="Título da tarefa" 
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    />

                <TextArea 
                    placeholder="Descrição da tarefa" 
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    >

                </TextArea>

                <div className='aux-position'>
                    <Button type="submit" title="Criar" className="button-create"/>
                </div>
            </Form>
        </Container>
    )
}