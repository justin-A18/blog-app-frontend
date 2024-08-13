import React from "react";

const AuthLayout = ({children}: {children: React.ReactNode}) => {
	return (
		<main className='w-full min-h-dvh flex items-center justify-center px-5 lg:px-12 py-5'>
			<section className='max-w-[500px] w-full'>
				{children}
			</section>
		</main>
	);
};

export default AuthLayout;
