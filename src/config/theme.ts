/**
 * Colour themes defined in src/app/globals.css as [data-theme="..."] blocks.
 * Add a name here when you add a block there, then change `activeTheme`
 * to switch the whole app.
 */
export const themes = ["rink", "sunny", "fresh"] as const;

export type ThemeName = (typeof themes)[number];

export const activeTheme: ThemeName = "rink";
