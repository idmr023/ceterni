import Hero from './components/Hero'
import MissionCards from './components/MissionCards'
import TerminalBox from './components/TerminalBox'
import CallToAction from './components/CallToAction'

export default function App() {
  return (
    <div className="relative min-h-svh bg-carbon-950 text-white antialiased">
      <main>
        <Hero />
        <MissionCards />
        <TerminalBox />
        <CallToAction />
      </main>
    </div>
  )
}