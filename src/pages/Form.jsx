import React, { useEffect } from 'react'
import AddTask from '../components/addTask'
import wheel from "../assets/images.jpg"

function Form() {
  useEffect(() => {
    // Page load hote hi scrollbar hide karo
    document.body.style.overflow = 'hidden';

    // Jab is page se hatoge (dusre page par jaoge), scrollbar wapas normal ho jaye
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='relative dark:bg-linear-to-br dark:from-indigo-950 dark:via-indigo-800 dark:to-cyan-900 bg-red-400'>
        <div className='grid grid-cols-2'>  
          <img src={wheel} alt="image" className='w-[50vw] h-[100vh] absolute object-fit '/>
        
          <p className='text-3xl my-auto text-black  z-10 mt-65 mx-8 select-none'>
            <span className='text-5xl font-medium'>Task Manager lets you create, edit, and track tasks in one place.</span> Each task can be assigned a priority level (high, medium, or low)<span className='text-3xl font-medium'>a due date, and a status (pending, completed, or overdue), so you always know what needs your attention</span>
          </p>
          <AddTask/>
        </div>
    </div>
  )
}

export default Form