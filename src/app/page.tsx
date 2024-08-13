import Image from 'next/image';
import Link from 'next/link';

import { TypographyH1, TypographyP } from './_components/shared/typography';
import { LinkItemVariants, Navbar } from './_components/shared/navbar';

export default function Home() {
	return (
		<>
			<Navbar />

			<main className='w-full min-h-[calc(100vh-8rem)] px-5 py-3 sm:px-12 sm:py-5'>
				<section className='grid place-items-center h-[calc(100vh-8rem)] gap-8 justify-center md:grid-cols-2'>
					<article className='max-w-[500px] flex items-center md:items-start flex-col gap-4'>
						<header className='text-center md:text-start'>
							<TypographyH1>
								Start your <span className='text-purple-app'>Blogger</span>{' '}
								Journey
							</TypographyH1>

							<TypographyP className='text-[#515151] sm:text-lg'>
								Discover a new way to express yourself with{' '}
								<span className='text-purple-app font-bold'>Nuki</span>. Bring
								your ideas to life and share them with the world in minutes!
							</TypographyP>
						</header>

						<Link
							className={LinkItemVariants({
								variant: 'primary',
								size: 'lg',
								className: 'text-base md:text-lg',
							})}
							href='/auth/register'>
							Get Started
						</Link>
					</article>

					<figure>
						<Image
							width={600}
							height={600}
							src='/image-home.png'
							alt='home-image'
						/>
					</figure>
				</section>
			</main>
		</>
	);
}
