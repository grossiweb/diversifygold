import TickerBar from './TickerBar'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full">
      <TickerBar />
      <Navbar />
    </header>
  )
}
