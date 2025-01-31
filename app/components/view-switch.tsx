import { Monitor, Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { useViewStore } from "@/stores/view";
import { useStore } from "@nanostores/react";
const views: { name: "desktop" | "mobile"; Icon: any }[] = [
  {
    name: "desktop",
    Icon: Monitor,
  },
  { name: "mobile", Icon: Smartphone },
];

export default function ViewSwitch() {
  const { $view, setView } = useViewStore;
  const view = useStore($view);
  return (
    <div className="ml-auto rounded overflow-clip">
      {views.map(({ name, Icon }) => (
        <Button
          key={name}
          variant={view === name ? "default" : "secondary"}
          onClick={() => setView(name)}
        >
          <Icon />
          {name}
        </Button>
      ))}
    </div>
  );
}
