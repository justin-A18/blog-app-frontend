
import { TypographyH1, TypographyP } from '../shared/typography';
import { Logo } from '../shared/navbar/Logo';
import Link from 'next/link';

interface Props {
	title: string;
	description: string;
}

export const HeaderAuth = ({ title, description }: Props) => {
	return (
		<header className='flex items-center justify-center flex-col gap-2'>
			<Link href='/'>
				<Logo />
			</Link>

			<TypographyH1 className='text-3xl lg:text-4xl text-center'>
				{title}
			</TypographyH1>
			<TypographyP className='text-[#515151] text-center text-sm lg:text-sm'>
				{description}
			</TypographyP>
		</header>
	);
};
