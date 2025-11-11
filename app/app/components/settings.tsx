import { Cog, LoaderCircle, Save, Trash } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import appConfig from "@@/app.config.json";
import defAppConfig from "@/lib/app.config.default.json";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "./ui/field";
import { Input } from "./ui/input";
import { NavLink, useFetcher } from "react-router";
import { Button } from "./ui/button";

export default function Settings() {
  return (
    <SidebarGroup>
      <Dialog>
        <SidebarMenu>
          <SidebarMenuItem>
            <NavLink to="/settings">
              {({ isActive }) => (
                <SidebarMenuButton isActive={isActive}>
                  <Cog />
                  Settings
                </SidebarMenuButton>
              )}
            </NavLink>
          </SidebarMenuItem>
        </SidebarMenu>
      </Dialog>
    </SidebarGroup>
  );
}
function SettingsDialog() {
  const keys = Object.keys(appConfig) as (keyof typeof appConfig)[];
  const fetcher = useFetcher();
  let busy = fetcher.state !== "idle";
  return (
    <DialogContent className="w-full max-w-2xl">
      <fetcher.Form action="/actions/save-config" method="post">
        <DialogTitle className="inline-flex gap-2 items-center">
          <Cog />
          Settings
        </DialogTitle>
        <FieldGroup>
          <FieldSet className="gap-2">
            <FieldLegend>Configuration</FieldLegend>
            {keys.map((key, idx) => (
              <Field key={idx} className="gap-0">
                <FieldLabel htmlFor={key} className="mb-1">
                  {key}
                </FieldLabel>
                <Input name={key} defaultValue={appConfig[key]} />
                {defAppConfig[key] && (
                  <FieldDescription>
                    default value: {defAppConfig[key]}
                  </FieldDescription>
                )}
              </Field>
            ))}
          </FieldSet>
        </FieldGroup>
        <DialogFooter className="mt-8">
          <Button disabled={busy}>
            {busy ? (
              <>
                <LoaderCircle className="animate-spin" />
              </>
            ) : (
              <>
                <Save className="size-4" />
              </>
            )}
            Save Config
          </Button>
          <DialogClose type="button" asChild>
            <Button variant="outline">
              <Trash className="size-4" /> Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </fetcher.Form>
    </DialogContent>
  );
}
