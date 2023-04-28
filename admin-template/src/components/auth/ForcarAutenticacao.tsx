import Image from 'next/image'
import loading from '../../../public/loading.gif'
import useAuthData from '@/data/hook/UseAuthData'
import Head from 'next/head'

export default function ForcarAutenticacao(props: any) {

    const { usuario, carregando } = useAuthData()

    function renderizarConteudo() {
        return (
            <>
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html: `if(!document.cookie?.includes("admin-template-ihcc")) {
                        window.location.href = "/autenticacao"
                    }`
                    }} />
                </Head>
                {props.children}
            </>
        )
    }

    function renderizarCarregando() {
        return (
            <div className={`flex justify-center items-center h-screen`}>
                {props.children}
                <Image src={loading} alt='Carregando' />
            </div>
        )
    }

    if (!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if (carregando) {
        return renderizarCarregando()
    } else {
        return null
    }
}