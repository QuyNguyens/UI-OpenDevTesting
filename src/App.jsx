import Attraction from './components/Attraction'
import Banner from './components/Banner'
import Entertainment from './components/Entertainment'
import Footer from './components/Footer'
import Gift from './components/Gift'
import Registration from './components/Registration'
import Menubar from './components/Menubar'

import './App.css'

function App() {

  return (
    <div className="flex flex-col gap-10 lg:gap-25">
      <Menubar/>
      <Banner />
      <Registration />
      <Entertainment/>
      <Attraction />
      <Gift/>
      <Footer/>
    </div>
  )
}

export default App
