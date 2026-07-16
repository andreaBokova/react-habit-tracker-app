import { Button } from "./components/Button";
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
  return (
    <div className="">
    <div className="bg-red-500 flex flex-row gap-4">
      
        <span>Practice CSS</span>
        <span>Streak: 2</span>
        <button className="flex bg-green-300 flex-1">Delete</button>
      </div>
    </div>
  );
}
