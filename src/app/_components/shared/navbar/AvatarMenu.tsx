import { ExitIcon, MixerVerticalIcon, PersonIcon } from '@radix-ui/react-icons';

import { Button } from '@/app/_components/ui/button';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu';

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/app/_components/ui/avatar';
import Link from 'next/link';


export const AvatarMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					className='rounded-full'
					size='icon'>
					<Avatar>
						<AvatarImage
							src='https://github.com/shadcn.png'
							alt='@shadcn'
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className='w-40 -translate-x-4 sm:-translate-x-12 translate-y-1'>
				<DropdownMenuLabel className='flex items-center gap-2'>
					<MixerVerticalIcon /> My Account
				</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Link
							href='/blogs/profile'
							className='flex items-center gap-2 
							hover:bg-slate-100 transition-colors cursor-pointer'>
							<PersonIcon /> Profile
						</Link>
					</DropdownMenuItem>

					<DropdownMenuItem
						className='flex items-center gap-2 
							hover:bg-slate-100 transition-colors cursor-pointer'>
						<ExitIcon /> Log out
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
