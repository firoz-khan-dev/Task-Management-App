import React, { useEffect } from 'react'
import AddTask from '../components/addTask'
import wheel from "../assets/images.jpg"

function Form() {
  useEffect(() => {
    // Desktop par scrollbar hide, mobile/tablet par scroll chalu
    const updateOverflow = () => {
      document.body.style.overflow = window.innerWidth >= 1024 ? 'hidden' : 'auto';
    };

    updateOverflow();
    window.addEventListener('resize', updateOverflow);

    // Jab is page se hatoge, scrollbar wapas normal ho jaye
    return () => {
      window.removeEventListener('resize', updateOverflow);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='relative dark:bg-linear-to-br dark:from-indigo-950 dark:via-indigo-800 dark:to-cyan-900 bg-red-400'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>

        {/* Image half: mobile par upar, desktop par left half */}
        <section className='relative flex items-center justify-center min-h-[55vh] sm:min-h-[50vh] lg:min-h-screen overflow-hidden'>
          <img
            src={wheel}
            alt="image"
            className='absolute inset-0 w-full h-full object-cover lg:object-fill select-none'
          />

          {/* Halka overlay taaki text hamesha saaf padha jaye */}
          <div className='absolute inset-0 bg-white/30 dark:bg-black/20' />

          {/* Text card */}
          <div className='relative z-10 mx-4 sm:mx-8 my-8 max-w-xl rounded-2xl bg-white/50 dark:bg-black/30 backdrop-blur-sm p-5 sm:p-7 lg:p-9 shadow-xl text-black dark:text-white select-none'>
            <h2 className='text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight'>
              Task Manager lets you create, edit, and track tasks in one place.
            </h2>

            <p className='mt-4 text-sm sm:text-lg lg:text-2xl leading-relaxed font-medium'>
              Each task can be assigned a priority level (high, medium, or low), a due date, and a status (pending, completed, or overdue), so you always know what needs your attention.
            </p>
          </div>
        </section>

        {/* Form half */}
        <AddTask />
      </div>
    </div>
  )
}

export default Form