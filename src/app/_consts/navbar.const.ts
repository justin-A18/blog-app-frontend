export interface MenuLink {
	to: string
	content: string,
	variant?: 'default' | 'primary' | 'secondary'
}

export const MENU_LINKS_BLOG: MenuLink[] = [
	{
		to: '/blogs',
		content: 'Blogs',
	},
	{
		to: '/blogs/explore',
		content: 'Explore',
	},
	{
		to: '/blogs/create',
		content: 'Create',
	},
];

export const MENU_LINKS_AUTH: MenuLink[] = [
	{
		to: '/auth/login',
		content: 'Log In',
		variant: 'secondary',
	},
	{
		to: '/auth/register',
		content: 'Get Started',
		variant: 'primary',
	},
]