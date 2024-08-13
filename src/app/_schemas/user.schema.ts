import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email({
		message: 'Please provide a valid email address',
	}),
	password: z.string().min(6, {
		message: 'Password must be at least 6 characters',
	}),
})

export const registerSchema = z.object({
	username: z.string().min(3, {
		message: 'Username must be at least 3 characters',
	}),
	email: z.string().email({
		message: 'Please provide a valid email address',
	}),
	password: z.string().min(6, {
		message: 'Password must be at least 6 characters',
	}),
});

export const changePasswordSchema = z.object({
	newPassword: z.string().min(6, {
		message: 'Password must be at least 6 characters',
	}),
})

export const forgotPasswordSchema = z.object({
	email: z.string().email({
		message: 'Please provide a valid email address',
	}),
})