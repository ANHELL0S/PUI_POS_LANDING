'use client'

import { useTheme } from 'next-themes'
import ClickSpark from '@/components/reactbits/ClickSpark'

export default function ClickSparkWrapper({ children }: { children: React.ReactNode }) {
	const { theme } = useTheme()

	return (
		<ClickSpark
			sparkColor={theme === 'light' ? '#111111' : '#ffffff'}
			sparkSize={8}
			sparkRadius={20}
			sparkCount={10}
			duration={500}
			easing='ease-out'
			extraScale={1.2}>
			{children}
		</ClickSpark>
	)
}
