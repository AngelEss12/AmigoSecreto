import React from 'react'

type SorteadoProps = {
    names: string;
}

export default function Sorteado({ names }: SorteadoProps) {
    return (
        <div>
            <h3 className='text-2xl font-bold text-center py-3'>El amigo Sorteado es:</h3>
            <p className='text-4xl py-4 text-center'>{names}</p>
        </div>
    )
}
