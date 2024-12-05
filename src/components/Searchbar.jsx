import { useState } from "react";

const Searchbar = ({ setQuery, setCategoria, setActivateSearch }) => {
    const [localQuery, setLocalQuery] = useState(""); // Campo de entrada é controlado localmente

    const categorias = [
        "Natureza",
        "Pessoas",
        "Tecnologia",
        "Animais",
        "Esportes",
        "Arte"
    ]

    return (
        <div className='search-bar'>
            <input type='text' value={localQuery} placeholder='   Pesquisar fotos...' onChange={(e) => setLocalQuery(e.target.value)} />
            <button onClick={() => {
                setQuery(localQuery);
                setActivateSearch(true);
            }}>Pesquisar</button>
            <select onChange={(e) => {
                setCategoria(e.target.value);
                setActivateSearch(true);
            }}>
                <option value="">Todas as categorias</option>
                {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>{categoria}</option> // Categoria é unica então usou também como key
                ))}
            </select>
        </div>
    )
}

export default Searchbar