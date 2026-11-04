import React, { useState } from 'react'

function DateCalender() {
  // "kaunsi date abhi selected hai" yaad rakhne ke liye state
  // shuru mein aaj ki date select rahegi
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  // Aaj se leke agle 7 dino ki list banane wala function
  const generateDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(date);
    }

    return dates;
  };

  const dates = generateDates(); // 7 dates ka array
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      <div className='flex gap-2 mt-5 ml-0 lg:ml-180 px-2 overflow-x-auto'>
        {dates.map((date, index) => {
          const dayNum = date.getDate();           // jaise 8, 9, 10...
          const dayName = dayNames[date.getDay()]; // jaise Mon, Tue...
          const isSelected = selectedDate === dayNum;

          return (
            <div
              key={index}
              onClick={() => setSelectedDate(dayNum)}
              className={`rounded h-24 w-16 sm:h-30 sm:w-20 shrink-0 border-2 flex flex-col items-center justify-center 
                          cursor-pointer transition-colors duration-200
                          ${isSelected 
                            ? "bg-blue-500 text-white border-blue-500" 
                            : "hover:bg-blue-500"}`}
            >
              <span className='text-sm font-medium'>{dayName}</span>
              <span className='text-2xl font-bold'>{dayNum}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DateCalender;