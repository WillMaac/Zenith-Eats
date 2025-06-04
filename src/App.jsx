
import './App.css'
import { PratosDia } from './components/Dish of the day/PratosDia'
import { Footer } from './components/Footer/Footer'
import { Home } from './components/Home/Home'
import { Header } from './components/Main/Header'
import { Chefees } from './components/MeetTheCheefs/Chefees'

import { Navbar } from './components/Navbar/Navbar'
import { PopularDishes } from './components/Popular Dishes/PopularDishes'
import { Promotional } from './components/Promotional Section/Promotional'
import { Yakisoba } from './components/Qualityhighlight/Yakisoba'
import { Tradition } from './components/Tradition/Tradition'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Header/>
      <Tradition/>
      <Yakisoba/>
      <PratosDia/>
      <PopularDishes/>
      <Promotional/>
      <Chefees/>
      <Footer/>
      
    </div>
  )
}

export default App
