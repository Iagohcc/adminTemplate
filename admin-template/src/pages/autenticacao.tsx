import { IconAviso } from "@/components/Icons";
import AuthInput from "@/components/auth/AuthInput";
import useAuthData from "@/data/hook/UseAuthData";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Autenticacao() {

    const { cadastrar, login, loginGoogle } = useAuthData()

    const [erro, setErro] = useState(null)
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function submeter() {
        try {
            if (modo === 'login') {
                await login(email, senha)
                exibirErro('Ocorreu um erro no login!')
            } else {
                await cadastrar(email, senha)
                exibirErro('Ocorreu um erro no cadastro!')
            }
        } catch (e) {
            exibirErro(e?.message ?? 'Ocorreu um erro')
        }

    }

    function exibirErro(msg: any, tempoEmSegundos = 5) {
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000)
    }

    return (
        <>
            <Head>
                <title>Autenticação</title>
            </Head>
            <div className="flex h-screen items-center justify-center">
                <div className="md:w-1/2 lg:w-2/3 hidden md:block">
                    <img src="https://source.unsplash.com/user/wsanter" alt="Imagem da Tela de Autenticação"
                        className="h-screen w-full object-cover" />
                </div>
                <div className=" m-10 w-full md:w-1/2 lg:w-1/3">
                    <h1 className="text-3xl font-bold mb-5">
                        {modo === 'login' ? 'Entre com Sua Conta' : 'Cadastra-se na Plataforma.'}
                    </h1>

                    {erro ? (
                        <div className=" flex items-center bg-red-600 text-white py-3 px-5 my-2 border border-red-800 rounded-lg">
                            {IconAviso()}
                            <span className="ml-6">{erro}</span>
                        </div>
                    ) : false}


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

                    <button onClick={loginGoogle} className={`flex flex-grow justify-center items-center text-white bg-red-600 hover:bg-red-500 rounded-lg w-full px-4 py-3 `}>
                        <Image className="mr-2" src="/icon-google.png" alt="Ícone da pasta public" width={16} height={16} /> Entrar com Google
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
        </>
    )
}