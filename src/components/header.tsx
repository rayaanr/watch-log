import Link from "next/link";
import Image from "next/image";
import { CircleUser } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link href="#">
                    <Image src="/full-logo.svg" alt="Logo" width={200} height={45} className="h-full" />
                </Link>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Dashboard
                </Link>
                <Link href="#" className="text-foreground transition-colors hover:text-foreground">
                    Settings
                </Link>
            </nav>

            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <div className="ml-auto flex-1 sm:flex-initial">
                    <Button variant="secondary" size="icon" className="rounded-full">
                        <CircleUser className="h-5 w-5" />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
