import { Button } from "./Button";
import {
  endOfWeek,
  startOfWeek,
  eachDayOfInterval,
  format,
  isFuture,
} from "date-fns";

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
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });

  return (
    <div className="bg-gray-800 rounded-2xl p-3 flex flex-col gap-2">
      <div className="flex flex-row gap-4 justify-between items-center">
        <span className="font-medium">{habit.name}</span>
        <span className="text-sm">Streak: {habit.streak}</span>
        <Button variant="delete" className="text-black ml-auto">
          Delete
        </Button>
      </div>
      <div className="flex flex-row flex-wrap gap-1">
        {visibleDates.map((date) => (
          <Button
            disabled={isFuture(date)}
            className="flex min-w-10 flex-col flex-1 rounded-xl px-2 text-center"
            variant={"days"}
            key={date.toISOString()}
          >
            <span>{format(date, "eee")}</span>
            <span>{format(date, "d")}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
