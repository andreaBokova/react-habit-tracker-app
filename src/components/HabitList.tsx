import { Button } from "./Button";
import { endOfWeek, startOfWeek, eachDayOfInterval, format } from "date-fns";

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
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), {weekStartsOn: 1}),
    end: endOfWeek(new Date(), {weekStartsOn: 1}),
  });

  return (
    <div className="bg-gray-800 rounded-2xl p-3 flex flex-col gap-2">
      <div className="flex flex-row gap-4 justify-between items-center">
        <span className="font-medium">{habit.name}</span>
        <span className="text-sm">Streak: {habit.streak}</span>
        <Button text="Delete" variant="delete" className="text-black ml-auto"/>

      </div>
      <div className="flex items-center justify-between">
        {visibleDates.map((date) => (
          <div className="rounded-xl bg-zinc-700 px-6 flex flex-col text-center">
            <span>{format(date, "eee")}</span>
            <span>{format(date, "d")}</span>
          </div>
        ))}
        
      </div>
    </div>
  );
}
