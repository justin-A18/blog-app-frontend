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

import { registerSchema } from '@/app/_schemas';
import { Alert, AlertTitle } from '@/app/_components/ui/alert';
import { CheckCircledIcon } from '@radix-ui/react-icons';

const RegisterPage = () => {
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	});

	const onSubmit = (values: z.infer<typeof registerSchema>) => {
		console.log(values);
	};

	return (
		<div className='w-full h-full flex items-center justify-center'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-5'>
					<HeaderAuth
						title='Join Us Today!'
						description='Sign up to access our exclusive content 
						and latest articles.'
					/>

					<Alert
						variant='success'
						className='flex items-center gap-3 py-2'>
						<AlertTitle className='flex items-center gap-2'>
							<CheckCircledIcon className='size-5' />
							Se le ha enviado un correo de verficación
						</AlertTitle>
					</Alert>

					<FormField
						control={form.control}
						name='username'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input
										type='text'
										placeholder='Jhoe Doe'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
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

					<Button
						type='submit'
						variant='auth'
						size='lg'>
						Sign Up
					</Button>

					<LinkToForm
						to='/auth/login'
						link='Log In'
						description='do you have an account?'
					/>
				</form>
			</Form>
		</div>
	);
};

export default RegisterPage;