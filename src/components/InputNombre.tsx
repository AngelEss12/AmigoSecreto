import React from 'react'

type InputNombreProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function InputNombre({ value, onChange, onKeyDown }: InputNombreProps) {
    return (
        <input type="text" className='border border-gray-400 p-2 rounded w-full text-2xl'
            value={value}
            placeholder='Agregue nombre del Amigo'
            onChange={onChange}
            onKeyDown={onKeyDown}
        />

    )
}
