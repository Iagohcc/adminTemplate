import Layout from "@/components/template/Layout";
import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Página Inicial</title>
            </Head>
            <Layout titulo="Página Inicial" subtitulo="Página em Construção">
            </Layout>
        </div>
    )
}