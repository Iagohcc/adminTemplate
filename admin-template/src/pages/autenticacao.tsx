import AuthInput from "@/components/auth/AuthInput";
import { useState } from "react";

export default function Autenticacao() {
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function submeter() {
        if (modo === 'login') {
            console.log('login')
        } else {
            console.log('cadastrar')
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="md:w-1/2 lg:w-2/3 hidden md:block">
                <img src="https://source.unsplash.com/user/wsanter" alt="Imagem da Tela de Autenticação"
                    className="h-screen w-full object-cover" />
            </div>
            <div className=" m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className="text-3xl font-bold mb-5">
                    {modo === 'login' ? 'Entre com Sua Conta' : 'Cadastra-se na Plataforma.'}
                </h1>
                <AuthInput
                    label="Email"
                    tipo="email"
                    valor={email}
                    valorMudou={setEmail} />
                <AuthInput
                    label="Senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={setSenha} />

                <button onClick={submeter} className={`text-white bg-indigo-500 hover:bg-indigo-400 rounded-lg w-full px-4 py-3 mt-6 `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 w-full border-gray-300" />

                <button onClick={submeter} className={`text-white bg-red-600 hover:bg-red-500 rounded-lg w-full px-4 py-3 `}>
                    Entrar com Google
                </button>

                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')}
                            className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"> Crie uma Conta Gratuitamente</a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModo('login')}
                            className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"> Entre com a suas Credenciais</a>
                    </p>
                )}
            </div>
        </div>
    )
}