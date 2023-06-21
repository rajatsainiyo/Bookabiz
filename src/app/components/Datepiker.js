'use client';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const DatePicker = () => {
  const currentDate = new Date();

  const getFormattedDate = (date) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();

    return `${dayOfWeek} ${dayOfMonth}`;
  };

  const getTimeSlots = () => {
    // Replace this with your logic to fetch time slots
    const timeSlots = ['10am', '12pm', '2pm', '4pm',"10pm"];

    return timeSlots.map((timeSlot) => (
      <button
        key={timeSlot}
        className="py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-md mr-2 mb-2"
      >
        {timeSlot}
      </button>
    ));
  };

  return (
    <div className="flex flex-col items-center mt-8">
        <h3 className="text-lg font-bold">May 2023</h3>
      <div className="flex gap-2 mb-4 py-2">
        {[0, 1, 2,3,4].map((dayOffset) => {
            const date = new Date();
            date.setDate(currentDate.getDate() + dayOffset);
            const formattedDate = getFormattedDate(date);
            
            return (
                <button
                key={formattedDate}
                className=" py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-md w-44 h-40"
                >
              {formattedDate}
            </button>
          );
        })}
      </div>
        <h1 className=" text-lg font-bold">Time slot</h1>
      <div className="flex flex-wrap gap-2 py-3">{getTimeSlots()}</div>
      <div className=" flex border w-full justify-center items-center bg-slot h-20">
<p className="text-start mr-auto text-white"><AccountCircleIcon/> anyone</p>

<button className="text-end bg-black rounded-lg px-4 text-white ">Change</button>
      </div>
    </div>
  );
};

export default DatePicker;
