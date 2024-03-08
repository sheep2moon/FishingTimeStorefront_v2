import Link from "next/link";
import { navLinks } from "../../../lib/const/nav-links";
import { ClientLink } from "../../ui/client-link";
import Image from "next/image";
import { Button } from "../../ui/button";
import { TfiMenu } from "react-icons/tfi";

export default async function Nav() {
    return (
        <div className="sticky z-50 top-0 inset-x-0 border-b-slate-300 border-b-2">
            <header className="flex flex-col w-screen max-w-screen-xl mx-auto items-center pt-4">
                <div className="grid grid-cols-3">
                    <div>
                        <div className="self-center lg:hidden">
                            <Button variant="ghost" className="text-xl">
                                <TfiMenu />
                            </Button>
                        </div>
                    </div>

                    <Link href="/" className="text-xl-semi uppercase">
                        <Image alt="store logo" width={340} height={0} src="/store-logo.svg" />
                    </Link>
                    <div className="place-self-end self-center">cart</div>
                </div>
                <nav className="h-16 flex items-center">
                    {navLinks.map(link => (
                        <ClientLink key={link.href} href={link.href}>
                            {link.title}
                        </ClientLink>
                    ))}
                </nav>
            </header>
        </div>
    );
}
