import { useState, useEffect } from 'react'
import SushiItem from './components/SuhsiItem'
import './App.css'

function App() {
    const [pecas, setPecas] = useState(() => {
        const salvo = localStorage.getItem("pecas");
        return salvo
            ? JSON.parse(salvo)
            : [
                { nome: "Hossomaki", quantidade: 0 },
                { nome: "Temaki", quantidade: 0 },
                { nome: "Uramaki", quantidade: 0 }
            ];
    });

    function adicionar(index) {
        const novaLista = [...pecas];
        novaLista[index].quantidade++;
        setPecas(novaLista);
    }

    function remover(index) {
      const novaLista = [...pecas];

      if (novaLista[index].quantidade > 0) {
          novaLista[index].quantidade--;
      }

      setPecas(novaLista);
    }

    function resetar() {
    localStorage.removeItem("pecas");
    setPecas([
        { nome: "Peças Comuns", quantidade: 0 },
        { nome: "Temaki", quantidade: 0 },
        { nome: "Outros Itens", quantidade: 0 }
      ]);
    }

      useEffect(() => {
        localStorage.setItem("pecas", JSON.stringify(pecas));
    }, [pecas]);

    const total = pecas.reduce((acc, item) => acc + item.quantidade, 0);

     return (
        <div style={{ textAlign: "center" }}>
            <h1>🍣 Contador de Sushi</h1>

            <h2>Total: {total}</h2>
            <button onClick={resetar}>
              Resetar tudo
            </button>
            {pecas.map((item, index) => (
                <SushiItem
                    key={index}
                    nome={item.nome}
                    quantidade={item.quantidade}
                    onAdd={() => adicionar(index)}
                    onRemove={() => remover(index)}
                />
            ))}
        </div>
    );

}

export default App
