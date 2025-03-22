import Header from "./components/Header"
import TeachingSection from "./components/TeachingSection"
import differencesSection from "./components/differencesSection"
import IntroSection from "./components/IntroSection"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TeachingSection />
        <differencesSection />
      </main>
    </>
  )
}

 
