
interface CardsProps {
    nome: string,
    perfil: string,
    avatar: string,
}

export default function Card(props: CardsProps) {
    return (
        <div className="mt-4 mr-4 p-6 bg-white rounded-lg w-auto">
            <div className="flex flex-col">
                <img className="h-44 w-44 rounded-full" src={props.avatar} alt='' />
                <h3 className="text-lg font-bold mt-2 mb-1">{props.nome}</h3>
                <p className="text-gray-600">{props.perfil}</p>
            </div>
        </div>
    )
}
