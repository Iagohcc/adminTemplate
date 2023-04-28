
interface CardsProps {
    nome: string,
    perfil: string,
    avatar: string,
}

export default function Card(props: CardsProps) {
    return (
        <div className=" ">
            <a href="#" className="">
                <img className="" src={props.avatar} alt='' />
                <div className="">
                    <h1 className="">{props.nome}</h1>
                    <p className="">{props.perfil}</p>
                </div>
            </a>
        </div>
    )
}
