import { cn } from '@/app/_lib/utils';

interface Props {
	className?: string;
	children: React.ReactNode;
}

export function TypographySmall({ children, className, ...props }: Props) {
	return (
		<small
			className={cn('text-sm font-medium leading-none', className)}
			{...props}>
			{children}
		</small>
	);
}
