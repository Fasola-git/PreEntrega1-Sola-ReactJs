import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavaBar from './components/NavBar'

function App() {
  
  return (
    <>
      <NavaBar></NavaBar>
      <ItemListContainer greeting="Bienvenidos"></ItemListContainer>
    </>
  )
}

export default App
