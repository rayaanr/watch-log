"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-transparent"
        >
            {theme === "dark" ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
        </Button>
    );
}
