"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // You can also return a loading spinner or skeleton here
    return <div className="opacity-0 pointer-events-none">{children}</div>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}




// "use client";

// import * as React from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

// // Safely infer props from the component itself
// type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
// }