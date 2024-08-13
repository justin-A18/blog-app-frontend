'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { LinkToForm, HeaderAuth } from '@/app/_components/auth';
import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/app/_components/ui/form';
import { loginSchema } from '@/app/_schemas';
import Link from 'next/link';

const LoginPage = () => {
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (values: z.infer<typeof loginSchema>) => {
		console.log(values);
	};

	return (
		<div className='w-full h-full flex items-center justify-center'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-5'>
					<HeaderAuth
						title='Welcome back!'
						description='Log in to continue exploring our latest 
						articles and insights.'
					/>

					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type='email'
										placeholder='example@gmail.com'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										type='password'
										placeholder='******'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className='w-full text-end text-sm font-medium'>
						<Link href='/auth/forgot-password'>Forgot password?</Link>
					</div>

					<Button
						type='submit'
						variant='auth'
						size='lg'>
						Log In
					</Button>

					<LinkToForm
						to='/auth/register'
						link='Sign Up'
						description='You do not have an account ?'
					/>
				</form>
			</Form>
		</div>
	);
};

export default LoginPage;