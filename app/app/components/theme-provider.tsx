import { createContext, useContext, useLayoutEffect, useState } from "react";

export type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  serverTheme?: boolean;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

const isBrowser = typeof window !== "undefined";

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (!isBrowser) return "system";
    return (localStorage.getItem("ui-theme") as Theme) || defaultTheme;
  });

  useLayoutEffect(() => {
    const root = document.documentElement;

    let tmp = theme;
    if (theme !== "system" && root.classList.contains(tmp)) return;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      tmp = systemTheme;
    }

    root.classList.add(tmp);
    document.cookie = `${storageKey}=${tmp};max-age=${
      1000 * 60 * 60 * 24 * 365
    };path=/`;
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      document.documentElement.classList;
      document.cookie = `${storageKey}=${theme};max-age=${
        60 * 60 * 24 * 365
      };path=/`;
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
