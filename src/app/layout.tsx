import './globals.css'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/layout/navbar'
import ClickSparkWrapper from '@/components/ClickSparkWrapper'
import { ThemeProvider } from '@/components/layout/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'POS Ecuador - Vende más, preocúpate menos',
	description: 'Punto de venta con facturación electrónica SRI, inventario y cajas seguras para negocios en Ecuador',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='es' suppressHydrationWarning className='bg-background'>
			<body className={cn('min-h-screen bg-background', inter.className)}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<Navbar />
					<ClickSparkWrapper>
						<main className='w-[90%] md:w-[70%] lg:w-[75%] top-0 mx-auto flex flex-col items-center p-4 bg-background'>
							{children}
						</main>
					</ClickSparkWrapper>
				</ThemeProvider>
			</body>
		</html>
	)
}
