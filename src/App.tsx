import { useState } from 'react';
import './App.css'

function App() {

  const [inputValue, setInputValue] = useState<string>('');
  const [names, setNames] = useState<string[]>([]);
  const [listNames, setListNames] = useState<boolean>(true);
  const [sorteado, setSorteado] = useState<number>(0);
  const [sorteo, setSorteo] = useState<boolean>(false);

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

  return (
    <>
      <header className="w-full h-[10vh] bg-slate-900 flex items-center justify-center">
        <h1 className="text-4xl text-white uppercase font-black">Amigo Secreto</h1>
      </header>

      <div className='w-full h-[90vh] flex items-center justify-center bg-slate-300'>
        <div className='sm:w-[90%] lg:w-[40%] bg-white p-6 rounded shadow-lg flex flex-col gap-4'>
          <input type="text" className='border border-gray-400 p-2 rounded w-full text-2xl'
            value={inputValue}
            placeholder='Agregue nombre del Amigo'
            onChange={(e) => setInputValue(e.target.value)}
          />

          {listNames && (<div className='flex flex-col gap-4'>
            <h3 className='text-2xl font-bold text-center py-3'>Lista de Amigos</h3>
            {
              names.map((name, index) => (
                <p key={index} className='border-b border-gray-300 pb-1 text-xl'>
                  {name}
                </p>
              ))
            }
          </div>)}

          {sorteo && (
            <div>
              <h3 className='text-2xl font-bold text-center py-3'>El amigo Sorteado es:</h3>
              <p className='text-4xl py-4 text-center'>{names[sorteado]}</p>
            </div>
          )}


          <div className='flex gap-2 w-full justify-between'>
            <button className='bg-blue-500 w-[250px] text-white text-xl font-bold uppercase p-3 rounded hover:bg-blue-600 transition-colors duration-300'
              onClick={agregarNombre}>
              Agregar
            </button>
            <button className='bg-green-500 w-[250px] text-white text-xl font-bold uppercase p-3 rounded hover:bg-green-600 transition-colors duration-300'
              onClick={nombreSorteado}>
              Sortear
            </button>
          </div>
            <button className='bg-red-500 w-full text-white text-xl font-bold uppercase p-3 rounded hover:bg-red-600 transition-colors duration-300'
              onClick={() => {
                setNames([]);
                setSorteado(0);
                setSorteo(false);
                setListNames(true);
              }}>
              Reiniciar
            </button>
        </div>
      </div>
    </>
  )
}

export default App
