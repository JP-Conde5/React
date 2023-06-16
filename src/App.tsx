import {useState} from 'react'
import {List} from "./components/List"

function App() {
  const [projects, setProjects] = useState<string[]>([]);
  function handleAddProject(){
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }
  return(
    <>
      <header>Aula de rações químicas</header>
      <main>
        <ul>
          {projects.map(item => <List key={item}>{item}</List>)}
        </ul>
        <button onClick={handleAddProject}>Adicionar</button>
      </main>
    </>
  )  
}

export default App