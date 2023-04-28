import Card from "@/components/template/Card";
import Layout from "@/components/template/Layout";
import data from "../data/dataCards";
import Head from "next/head";

export default function Perfil() {

  return (
    <>
      <Head>
        <title>Perfil do Usuário</title>
      </Head>
      <Layout titulo="Perfil do Usuário" subtitulo="">
        {data.map((item) => (
          <Card
            key={item.id}
            nome={item.name}
            perfil={item.perfil}
            avatar={item.avatar}
          />
        ))}
      </Layout>
    </>
  )
}