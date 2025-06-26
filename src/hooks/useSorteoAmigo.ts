import { useEffect, useState } from 'react'

export const useSorteoAmigo = () => {
    const initialNames = (): string[] => {
        const stored = localStorage.getItem('nombres');
        return stored ? JSON.parse(stored) : [];
    }

    const [inputValue, setInputValue] = useState<string>('');
    const [listNames, setListNames] = useState<boolean>(true);
    const [sorteado, setSorteado] = useState<number>(0);
    const [sorteo, setSorteo] = useState<boolean>(false);
    const [names, setNames] = useState<string[]>(initialNames);

    useEffect(() => {
        localStorage.setItem('nombres', JSON.stringify(names));
    }, [names]);

    const agregarNombre = () => {
        if (listNames) {
            if (inputValue.trim() === '') return;

            setNames([...names, inputValue]);
            setInputValue('');
        } else {
            reiniciarDisplay();
        }
    }

    const reiniciarDisplay = () => {
        setSorteo(false);
        setListNames(true);
        setInputValue('');
    }

    const nombreSorteado = () => {
        const numNombres = names.length;

        if (numNombres < 2) {
            alert("Agrega al menos 2 nombres para hacer el sorteo.");
            return;
        }

        const nuevoSorteado = Math.floor(Math.random() * numNombres);
        setSorteado(nuevoSorteado); // ✅ ahora se guarda como estado

        if (listNames) {
            setSorteo(true);
            setListNames(false);
        }
    }

    return {
        inputValue,
        setInputValue,
        listNames,
        setListNames,
        sorteado,
        setSorteado,
        sorteo,
        setSorteo,
        names,
        setNames,
        agregarNombre,
        nombreSorteado
    }
}
