
import './App.css'
import Cards from './components/Cards/Cards'
import Courseinfos from './components/Courseinfos/Courseinfos'

function App() {
 

  return (
    <>
     
      <div className='text-center my-16 font-bold'>
      <h1 className='text-4xl container mx-auto px-10'>Course Registration</h1>
      </div>

      <div className='grid  grid-cols-4 gap-4 container mx-auto px-10'>
        <div className='col-span-3'>
          <Cards></Cards>
        </div>
        <div className='col-span-1 bg-green-200'>
          <Courseinfos></Courseinfos>
        </div>
      </div>
      
     
    </>
  )
}

export default App
