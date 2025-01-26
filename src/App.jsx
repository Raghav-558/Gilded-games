import './App.css'
import Earn from './components/Earn'
import GamingPlatform from './components/GamingPlatform'
import Hero from './components/Hero'
import PoweredBy from './components/PoweredBy'
import Roadmap from './components/Roadmap'
import TokenInfo from './components/TokenInfo'
import Uniswap from './components/Uniswap'
import Utility from './components/Utility'

function App () {
  return (
    <>
      <Hero />
      <Utility />
      <Earn />
      <GamingPlatform />
      <TokenInfo />
      <Roadmap />
      <Uniswap />
      <PoweredBy />
    </>
  )
}

export default App
