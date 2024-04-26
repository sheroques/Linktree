import { Link } from "react-router-dom"
import {Input} from '../../components/input'
export function Login(){
    return(
        <div className="flex w-full h-screen items-center justify-center flex-col">
            <Link to="/">
                <h1 className="mt-11 text-white mb-7 font-bold text-5xl">Log
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
                        in
                    </span>
                </h1>
            </Link>
            <form className="w-full max-w-xl flex flex-col px-2 ">
                <Input placeholder="Digite o seu email"/>
                <button  type="submit" className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white">
                Acessar
                </button>
            </form>
        </div>
    )
}