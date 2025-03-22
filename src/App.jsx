import Header from "./components/Header"
import { differences } from "./data"
import { useState } from 'react'
import Button from "./components/Button/Button.jsx"
import TeachingSection from "./components/TeachingSection.jsx"

function App() {
  const [ contentType, setContentType ] = useState(null)
  
  function handleClick( type ) {
    setContentType(type)
  }

  return (
    <div>
      <Header />
      <main>
        <TeachingSection />
        <section>
          <h3>Чем мы отличаемся от других</h3>

          <Button isActive={contentType == 'way'}
           onClick={() => handleClick('way')}>Подход</Button>
          <Button isActive={contentType == 'easy'}
           onClick={() => handleClick('easy')}>Доступность</Button>
          <Button isActive={contentType == 'program'}
           onClick={() => handleClick('program')}>Концентрация</Button>

          {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
          <p>Нажми на кнопку</p>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
