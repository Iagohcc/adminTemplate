import Card from "@/components/template/Card";
import Layout from "@/components/template/Layout";
import data from "../data/dataCards";
import Head from "next/head";

export default function Usuarios() {

    return (
        <>
            <Head>
                <title>Usuários</title>
            </Head>
            <Layout titulo="Perfil de Usuários" subtitulo="">
                <div className="flex flex-wrap w-100 justify-center">
                    {data.map((item) => (
                        <Card
                            key={item.id}
                            nome={item.name}
                            perfil={item.perfil}
                            avatar={item.avatar}
                        />
                    ))}
                </div>
            </Layout>
        </>
    )
}