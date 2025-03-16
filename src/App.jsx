import Header from "./components/Header"
import { ways } from "./data"
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button/Button.jsx"

function App() {
  let content = 'Нажми на кнопку'

  function handleClick( type ) {
    console.log('button clicked', type)
    content = type
  }


  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>

          <ul>
            <WayToTeach {...ways[0]} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>

          <Button onClick={() => handleClick('way')}>Подход</Button>
          <Button onClick={() => handleClick('easy')}>Доступность</Button>
          <Button onClick={() => handleClick('program')}>Концентрация</Button>

          <p>{content}</p>
        </section>
      </main>
    </div>
  )
}

export default App
