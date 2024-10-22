import Tabela from './components/Tabela'
import './App.css'



const App = () => {
  const dados = [
    { id: 1, nome: 'Anna', idade: 19 },
    { id: 2, nome: 'Kikirus', idade: 6 },
    { id: 3, nome: 'Kowasemy', idade: 30 },
  ];

  return (
    <div>
      <h1>Lista de Pessoas</h1>
      <Tabela dados={dados} />
    </div>
  );
};

export default App



