import { Monitor, Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { useViewStore } from "@/stores/view";
import { useStore } from "@nanostores/react";
const views: { name: "desktop" | "mobile"; Icon: any; className: string }[] = [
  {
    name: "desktop",
    Icon: Monitor,
    className: "rounded-r-none",
  },
  { name: "mobile", Icon: Smartphone, className: "rounded-l-none" },
];

export default function ViewSwitch() {
  const { view, setView } = useViewStore;
  return (
    <div className="rounded overflow-clip">
      {views.map(({ name, Icon, className }) => (
        <Button
          key={name}
          variant={view === name ? "default" : "secondary"}
          onClick={() => setView(name)}
          className={className}
        >
          <Icon />
          {name}
        </Button>
      ))}
    </div>
  );
}
