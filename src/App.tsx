import { Header } from "./components/Header";
import { HabitForm } from "./components/HabitForm";

export default function App() {
  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm />
      <HabitList />
    </div>
  );
}

function HabitList() {
  const habits = [
    { id: 1, name: "Learn min 1 h", streak: 2 },
    { id: 2, name: "Gratitude journal", streak: 3 },
  ];
  return (
    <div className="flex flex-col gap-80 ">
      {habits.map((habit) => (
        <div className="bg-gray-800">
        <div className="bg-red-500 flex items-center flex-row gap-4">
          <span key={habit.id}>{habit.name}</span>
          <span>Streak: {habit.streak}</span>
          <button className="bg-green-300 ml-auto">Delete</button>
         
        </div>
        <div className="flex justify-evenly gap-6">
         <div className="rounded-xl bg-pink-200 px-2 flex flex-col text-center"><span>
          Mon</span><span>6</span></div>
         <div>Tue</div>
         <div>Wed</div>
         <div>Thu</div>
         <div>Fri</div>
         <div>Sat</div>
         <div>Sun</div>
        </div>
         </div>
      ))}
    </div>
  );
}
