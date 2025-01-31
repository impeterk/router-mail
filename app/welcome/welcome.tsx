import { Link } from "react-router";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import FileIconsMjml from "@/components/icons/mjm-icon";
import { ArrowLeft } from "lucide-react";
import background from "@/assets/background.svg";

export function Welcome() {
  return (
    <>
      <div className="absolute w-60 top-22 left-4 flex flex-row gap-2 items-center">
        <p>
          <ArrowLeft className="size-12 text-base" />
        </p>
        <span className="text-balance text-center text-xl text-[#4b5563]">
          Select a template from the menu
        </span>
      </div>
      <main className="flex items-center justify-center pt-16 pb-4 relative w-full">
        <img
          id="background"
          src={background}
          className="absolute top-0 left-0 h-full w-full pointer-events-none blur-[100px]"
        />

        <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
          <header className="flex flex-col items-center gap-9">
            <div className="w-full max-w-4xl mx-auto flex items-center justify-center gap-12">
              <a href="https://astro.build">
                <img
                  src={logoLight}
                  alt="React Router"
                  className="block h-16 dark:hidden"
                />
                <img
                  src={logoDark}
                  alt="React Router"
                  className="hidden h-16 dark:block"
                />
              </a>
              <a href="https://mjml.io">
                <FileIconsMjml className="size-16 text-[#f25f4a]" />
              </a>
            </div>
          </header>
          <section id="hero">
            <div className="text-pretty w-full max-w-2xl space-y-12">
              <h1 className="text-4xl">
                To get started please head to{" "}
                <code className="bg-muted text-muted-foreground px-2 py-1 rounded-xl text-3xl underline underline-offset-4">
                  <Link to="/docs">/docs</Link>
                </code>{" "}
                or read the <code className="text-4xl">README.md</code> file in
                the root of the project
              </h1>
              <h2 className="text-2xl">
                In case of any 🪳 (bugs) or 🚧🏴‍☠️(issues) feel free to contact me
              </h2>
              <p className="text-xl">Good luck :-)</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
