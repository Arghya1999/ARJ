import './App.css'
import Footer from './customers/components/Footer/Footer'
import Navigation from './customers/components/Navigation/Navigation'
import Product from './customers/components/Product/Product'
import HomePage from './customers/pages/HomePage'

function App() {
 

  return (
  
    <div className=''>
      <Navigation/>
      
      <div>
      {/*<HomePage/> , <Product/>*/}
      
      <HomePage/>
      </div>
       <Footer/>
    </div>
    
  )
}

export default App
