'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { LinkToForm, HeaderAuth } from '@/app/_components/auth';
import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import { Alert, AlertTitle } from '@/app/_components/ui/alert';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/app/_components/ui/form';
import { forgotPasswordSchema } from '@/app/_schemas';
import { CheckCircledIcon } from '@radix-ui/react-icons';

const ForgotPasswordPage = () => {
	const form = useForm<z.infer<typeof forgotPasswordSchema>>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = (values: z.infer<typeof forgotPasswordSchema>) => {
		console.log(values);
	};

	return (
		<div className='w-full h-full flex items-center justify-center'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-5'>
					<HeaderAuth
						title='Password Recovery'
						description='Forgot your password? Enter your email to get back in quickly!'
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

					<Button
						type='submit'
						variant='auth'
						size='lg'>
						Recover password
					</Button>

					<div className='space-y-2'>
						<LinkToForm
							to='/auth/login'
							link='Log In'
							description='do you have an account?'
						/>

						<LinkToForm
							to='/auth/register'
							link='Sign Up'
							description='You do not have an account ?'
						/>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default ForgotPasswordPage;
