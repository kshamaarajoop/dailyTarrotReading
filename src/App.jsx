import Header from "./Header";
import DailyReading from "./dashboard";

export default function App() {
  return (
    <div className="
      min-h-screen 
      w-full 
      flex flex-col 
      items-center 
      pt-10 
      text-white
    ">
      <Header />

      <div className="mt-8 flex justify-center w-full">
        <DailyReading />
      </div>
    </div>
  );
}
