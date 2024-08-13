import { MenuLink } from '@/app/_consts/navbar.const';
import { LinkItem } from './LinkItem';

export const MenuLinks = ({menuLinks}: {menuLinks: MenuLink[]}) => {
	return (
		<ul className='flex items-center gap-4'>
			{menuLinks.map(({ to, content,variant }) => (
				<LinkItem
					to={to}
					key={to}
					variant={variant}>
					{content}
				</LinkItem>
			))}
		</ul>
	);
};
