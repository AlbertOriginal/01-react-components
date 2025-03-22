import { differences } from "../data"
import Button from "./components/Button/Button.jsx"
import { useState } from 'react'

export default function differencesSection () {
  return(
    <section>
        const [ contentType, setContentType ] = useState(null)
  
  function handleClick( type ) {
    setContentType(type)
  }

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
  )
}