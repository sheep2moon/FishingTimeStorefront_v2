import { navLinks } from "../../../lib/const/nav-links";
import { ClientLink } from "../../ui/client-link";

export default async function Nav() {
    return (
        <div>
            <header>
                <nav>
                    <ClientLink href="/">Strona główna</ClientLink>
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
