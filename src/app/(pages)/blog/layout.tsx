import { Navbar } from "@/app/_components/shared/navbar";

const BlogLayout = ({children}: {children: React.ReactNode}) => {
	return (
		<>
			<Navbar />
			<main className='w-full min-h-[calc(100vh-8rem)] px-5 py-3 sm:px-12 sm:py-5'>
				{children}
			</main>
		</>
	);
};

export default BlogLayout;
