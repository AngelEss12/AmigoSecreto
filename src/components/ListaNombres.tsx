
type ListaNombresProps = {
    names: string[];
}

export default function ListaNombres({ names }: ListaNombresProps) {
    return (
        <div className='flex flex-col gap-4'>
            <h3 className='text-2xl font-bold text-center py-3'>Lista de Amigos</h3>
            {
                names.map((name, index) => (
                    <p key={index} className='border-b border-gray-300 pb-1 text-xl'>
                        {name}
                    </p>
                ))
            }
        </div>
    )
}
