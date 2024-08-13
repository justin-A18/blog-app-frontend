import Link from "next/link";
import { Logo } from "./Logo";

export const NavLogo = () => {
	return (
		<Link href='/' className="flex items-center gap-4">
			<Logo/>
			<span className="text-2xl font-bold hidden sm:block">Nuki</span>
		</Link>
	);
};
