
import {Header} from '../../components/Header'
import { Input } from '../../components/input'
import { FormEvent, useState } from 'react'
import {FiTrash} from 'react-icons/fi'
import{db} from '../../services/firebaseConnection'
import {addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc,} from 'firebase/firestore'


export function Admin(){
    const [nameInput, setNameInput] = useState("")
    const [urlInput, setUrlInput] = useState("")
    const [textColorInput, setTextColorInput] = useState("#f1f1f1")
    const [backgroundColorInput, setBackgroundColorInput] = useState('#121212')
    
    async function handleRegister(e: FormEvent){
        e.preventDefault();
        if(nameInput === "" || urlInput ===""){
            alert("Preencha todos os campos")
            return;
        }
        addDoc(collection(db,"Links"),{
            name: nameInput,
            url: urlInput,
            bg: backgroundColorInput,
            color: textColorInput,
            created: new Date()
        })
    }
    //7:23

    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>
            <form className='flex flex-col mt-8 mb-3 w-full max-w-xl' onSubmit={handleRegister}>
                <label className='text-white font-medium mt-2 mb-2 '>Nome do Link</label>
                <Input placeholder ="Digite o nome do Link" value={nameInput} onChange={ (e)=>setNameInput(e.target.value)} />
                
                <label className='text-white font-medium mt-2 mb-2 '>Url do link</label>
                <Input placeholder ="Digite a url" value={urlInput} onChange={ (e)=>setUrlInput(e.target.value)} />

                <section className='flex my-4 gap-5'>
                    <div>
                        <label className='text-white font-medium mt-2 mb-3'>Cordo link</label>
                        <input type = "color" value = {textColorInput} onChange={(e) => setTextColorInput(e.target.value)}/>
                    </div>
                    <div>
                        <label className='text-white font-medium mt-2 mb-3'>Fundo do link</label>
                        <input type = "color" value = {backgroundColorInput} onChange={(e) => setBackgroundColorInput(e.target.value)}/>
                    </div>
                  {nameInput!= "" && (  <div className='flex items-center justify-start flex-col mb-7 p-1 border-gray-100/25 borded rounded-md'>
                    <label className='text-white font-medium mt-2 mb-3'>Veja como está ficando:</label>
                    <article className='w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3' style={{marginBottom:8, marginTop: 8, backgroundColor: backgroundColorInput}}>
                        <p className='font-medium' style ={{color:textColorInput}}>{nameInput}</p>
                    </article>
                    </div>) }
                    <button  type= "submit" className="mb-7 bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center"> Cadastrar</button>
                </section>
            </form>
            <h2 className='font-bold text-white mb-4 texte-2xl'> Meus Links</h2>

            <article className='flex items-center justify-between max-w-xl rounded py-5 px-10 mb-2' style={{backgroundColor: '#2563EB', color:'#FFF'}}>
                <p>Canal do youtube</p>
            <div>
                <button className='border border-dashed py-1 px-2 rounded ml-4 bg-black' ><FiTrash size={18} color="#fff"/> </button>
            </div>
            </article>
        </div>
    )
}