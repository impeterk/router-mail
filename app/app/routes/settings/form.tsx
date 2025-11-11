import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Save, Trash } from "lucide-react";
import { Form, Link } from "react-router";

import appConfig from "@@/app.config.json";
import defAppConfig from "@/lib/app.config.default.json";

export function SettingsForm() {
  const keys = Object.keys(appConfig) as (keyof typeof appConfig)[];
  return (
    <Form method="post">
      <CardContent>
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
      </CardContent>
      <CardFooter className="justify-end gap-4">
        <Button>
          <Save className="size-4" />
          Save Config
        </Button>
        <Button asChild variant="outline" type="button">
          <Link to="..">
            <Trash className="size-4" /> Cancel
          </Link>
        </Button>
      </CardFooter>
    </Form>
  );
}
