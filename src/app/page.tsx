import Image from "next/image";
import NotesList from "./components/notes-list";
import TimerCounter from "./components/timer-counter";

export default function Home() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World🚀</p>
        <NotesList />
        <TimerCounter />
      </div>
    </main>
  );
}
