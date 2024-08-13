import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

export const LinkItemVariants = cva('relative text-sm font-medium', {
	variants: {
		variant: {
			default:
				'before:content-[""] before:absolute before:w-full before:h-[0.15rem] before:bg-black before:-bottom-1 before:scale-0 before:hover:scale-100 before:transition-transform before:origin-right before:hover:origin-left before:duration-700',
			primary:
				'px-4 py-2 text-center text-black relative border-2 border-black bg-white hover:bg-transparent hover:text-white rounded-md before:content-[""] before:w-full before:h-full before:absolute before:border-2 before:rounded-md before:-z-10 before:border-black before:top-[6px] before:left-[6px] hover:before:top-0 hover:before:left-0 hover:before:text-white transition-all before:duration-300 after:content-[""] after:w-full after:h-full after:absolute after:-z-10 after:rounded-md after:bg-black after:scale-0 hover:after:scale-100 after:origin-bottom-right after:top-0 after:left-0 hover:after:top-0 hover:after:left-0 after:transition-all after:duration-300',
			secondary: 'px-5 py-2',
		},
		size: {
			default: '',
			sm: 'px-4 py-2',
			lg: 'px-2 py-3 text-xl w-40',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

interface Props extends VariantProps<typeof LinkItemVariants> {
	to: string;
	className?: string;
	children: React.ReactNode;
}

export const LinkItem = ({ children, variant,className, to }: Props) => {
	return (
		<li className={LinkItemVariants({ variant, className })}>
			<Link
				href={to}>
				{children}
			</Link>
		</li>
	);
};
