
export function HabitList() {
  const habits = [
    { id: "1", name: "Learn min 1 h", streak: 2 },
    { id: "2", name: "Gratitude journal", streak: 3 },
  ];
  return (
    <div className="flex flex-col gap-4">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit}></HabitItem>
      ))}
    </div>
  );
}

type HabitItemProps = {
  habit: { id: string; name: string; streak: number };
};

function HabitItem({ habit }: HabitItemProps) {
  return (
    <div className="bg-gray-800">
      <div className="bg-red-500 flex items-center flex-row gap-4">
        <span>{habit.name}</span>
        <span>Streak: {habit.streak}</span>
        <button className="bg-green-300 ml-auto">Delete</button>
      </div>
      <div className="flex justify-evenly gap-6">
        <div className="rounded-xl bg-pink-200 px-2 flex flex-col text-center">
          <span>Mon</span>
          <span>6</span>
        </div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>
    </div>
  );
}
