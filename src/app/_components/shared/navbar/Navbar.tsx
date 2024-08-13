import { MENU_LINKS_AUTH } from '@/app/_consts';

import { MenuLinks } from './MenuLinks';
import { NavLogo } from './NavLogo';

export const Navbar = () => {
	return (
		<header className='w-full px-4 sm:px-10 py-4 min-h-20 font-poppins'>
			<nav className='w-full h-full flex items-center justify-between'>
				<NavLogo />
				{/*<MenuLinks menuLinks={MENU_LINKS_BLOG} /> */}

				<MenuLinks menuLinks={MENU_LINKS_AUTH} />

				{/*<AvatarMenu/> */}
			</nav>
		</header>
	);
};
