import { List } from "./list";
import { NewButton } from "./NewButton";

const Sidebar = () => {
  return (
    <aside
      className="bg-blue-950 h-full
      max-md:w-[80px] md:w-[80px] 3xl:w-[120px] 4xl:w-[160px]
      flex p-3 flex-col gap-y-4 text-white"
    >
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
