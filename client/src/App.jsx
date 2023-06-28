

function App() {
  return (
    <div>
      <h1>Hola, Giovanny</h1>
      <button onClick={async() => {
        const response = await fetch('http://localhost:3001/users')
        const data = response.json()
        console.log(data);
      }}>Obtener datos</button>
    </div>
  )
}

export default App
