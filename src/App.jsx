
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Courseinfos from './components/Courseinfos/Courseinfos'


export const totalCredit = 15;
function App() {
  // add to cart about course
  const [courseInfos, setCourseInfos] = useState([]);
  // about course credit
  const [credits, setCredits] = useState(0);




  const handleSelected = (card, credit) => {
    /*  const credit = courseInfos.reduce((p, c) => p + c.credit, 0);
 
     if (credit + courseInfos.credit > totalCredit) {
       return alert(`only ${totalCredit} allowed`);
 
     } */



    const newCredit = credits + credit;
    setCredits(newCredit);
    if (credits + card.credit > 15) {
      return alert(`you can not get more than 15 credit`);
    }


    const alreadyExist = courseInfos.find(info => info.id === card.id);
    if (!alreadyExist) {
      const newCourseInfo = [...courseInfos, card];
      setCourseInfos(newCourseInfo);
    }
    else {
      alert('already exist')
    }


  }

  const handleDelete = (id) => {
    const remaining = courseInfos.filter(course => course.id !== id);
    setCourseInfos(remaining);
   

  }
 





  return (
    <>

      <div className='text-center my-16 font-bold'>
        <h1 className='text-4xl container mx-auto px-10'>Course Registration</h1>
      </div>

      <div className='grid  grid-cols-4 gap-4 container mx-auto px-10'>
        <div className='col-span-3'>
          <Cards handleSelected={handleSelected}></Cards>
        </div>
        <div className='col-span-1 bg-green-200'>
          <Courseinfos courseInfos={courseInfos}
          handleDelete={handleDelete}
          ></Courseinfos>
        </div>
      </div>


    </>
  )
}

export default App
