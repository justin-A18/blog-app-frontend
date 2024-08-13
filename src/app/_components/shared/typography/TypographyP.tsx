import { cn } from '@/app/_lib/utils';

interface Props {
	className?: string;
	children: React.ReactNode;
}

export function TypographyP({ children, className, ...props }: Props) {
	return (
		<p
			className={cn('leading-7', className)}
			{...props}>
			{children}
		</p>
	);
}
