import Link from "next/link";
import { TypographyP } from "../shared/typography";

interface Props {
	description: string;
	link: string,
	to: string
}

export const LinkToForm = ({link,to,description}:Props) => {
	return (
		<TypographyP className="text-sm text-gray-600">
			{description}{' '}
			<Link
				href={to}
				className='text-blue-500 font-medium'>
				{link}
			</Link>
		</TypographyP>
	);
};
