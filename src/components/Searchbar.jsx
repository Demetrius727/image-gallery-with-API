import React from 'react'

const Searchbar = () => {

    const categorias = [
        "Natureza",
        "Pessoas",
        "Tecnologia",
        "Animais",
        "Esportes"
    ]

  return (
    <div className='search-bar'>
        <input type='text' placeholder='   Pesquisar fotos...'/>
        <button>Pesquisar</button>
        <select>
            {categorias.map((categoria) => (
                <option key={categoria} value={categoria}>{categoria}</option> // Categoria é unica então usou também como key
            ))}
        </select>
    </div>
  )
}

export default Searchbar