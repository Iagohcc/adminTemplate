import Layout from "@/components/template/Layout";
import useAppData from "@/data/hook/UseAppData";

export default function Notificacoes() {

  const dados = useAppData()
  return (
    <Layout titulo="Notificações" subtitulo="Construindo uma page">
      <h3>{dados.nome}</h3>
    </Layout>
  )
}