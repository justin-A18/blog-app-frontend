import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: 'Nuki',
	description:
		'Descubre una plataforma de blogs diseñada para creadores de contenido que buscan simplicidad y potencia. Nuestra herramienta permite a los usuarios escribir y gestionar publicaciones utilizando Markdown, un lenguaje de marcado ligero que facilita la escritura y el formato de texto sin complicaciones.',
  icons: [
    {
      url: '/logo.svg',
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang='en'>
			<body
				suppressHydrationWarning={true}
				className={poppins.className}>
				{children}
			</body>
		</html>
	);
}
