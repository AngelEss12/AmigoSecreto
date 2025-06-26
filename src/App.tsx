import './App.css'
import InputNombre from './components/InputNombre';
import ListaNombres from './components/ListaNombres';
import Sorteado from './components/Sorteado';
import { useSorteoAmigo } from './hooks/useSorteoAmigo';

function App() {

  const {
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
  } = useSorteoAmigo();

  return (
    <>
      <header className="w-full h-[10vh] bg-slate-900 flex items-center justify-center">
        <h1 className="text-4xl text-white uppercase font-black">Amigo Secreto</h1>
      </header>

      <div className='w-full h-[90vh] flex items-center justify-center bg-slate-300'>
        <div className='sm:w-[90%] lg:w-[40%] bg-white p-6 rounded shadow-lg flex flex-col gap-4'>
          <InputNombre
            value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

          {listNames && (
            <ListaNombres names={names} />
          )}

          {sorteo && (
            <Sorteado names={names[sorteado]} />
          )}


          <div className='flex gap-2 w-full justify-between'>
            <button className='bg-blue-500 w-[250px] text-white text-xl font-bold uppercase p-3 rounded hover:bg-blue-600 transition-colors duration-300'
              onClick={agregarNombre}
              onKeyDown={(e) => e.key === 'Enter' && agregarNombre()}>
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
              localStorage.removeItem('nombres');
            }}>
            Reiniciar
          </button>
        </div>
      </div>
    </>
  )
}

export default App
