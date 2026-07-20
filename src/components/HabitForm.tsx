import { Button } from "./Button";

export function HabitForm() {
  return (
    <form className="flex flex-row gap-2">
      <input
        className="flex-1 rounded bg-gray-950 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
        placeholder="New habit..."
      ></input>
      <Button variant="primary">Add Habit</Button>
    </form>
  );
}
