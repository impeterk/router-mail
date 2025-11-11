import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { CheckCircle2Icon, XCircleIcon } from "lucide-react";

export function SuccessMessage() {
  return (
    <Item variant="outline" className="bg-green-50 dark:bg-green-800" size="sm">
      <ItemMedia>
        <CheckCircle2Icon className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Success! Your changes have been saved</ItemTitle>
      </ItemContent>
    </Item>
  );
}

export function ErrorMessage() {
  return (
    <Item variant="outline" className="bg-red-50 dark:bg-destructive" size="sm">
      <ItemMedia>
        <XCircleIcon className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Something went wrong</ItemTitle>
        <ItemDescription>
          Configuration was not saved properly. Please try again
        </ItemDescription>
      </ItemContent>
    </Item>
  );
}
