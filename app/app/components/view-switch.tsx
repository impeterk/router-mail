import { Monitor, Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { useViewStore } from "@/stores/view";
import { useStore } from "@nanostores/react";
import { ButtonGroup } from "./ui/button-group";
const views: { name: "desktop" | "mobile"; Icon: any }[] = [
  {
    name: "desktop",
    Icon: Monitor,
  },
  { name: "mobile", Icon: Smartphone },
];

export default function ViewSwitch() {
  const { view, setView } = useViewStore;
  return (
    <ButtonGroup>
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
    </ButtonGroup>
  );
}
