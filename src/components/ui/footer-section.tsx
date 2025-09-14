'use client'
import React from 'react'
import type { ComponentProps, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Instagram, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

interface FooterLink {
	title: string
	href: string
	icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
	label: string
	links: FooterLink[]
}

const footerLinks: FooterSection[] = [
	{
		label: 'Navigation',
		links: [
			{ title: 'Home', href: '/#home' },
			{ title: 'About', href: '/#about' },
			{ title: 'Projects', href: '/#projects' },
			{ title: 'Resume', href: '/resume' },
		],
	},
	{
		label: 'Social',
		links: [
			{ title: 'Instagram', href: 'https://instagram.com/benzodiazepics', icon: Instagram },
			{ title: 'GitHub', href: 'https://github.com/pastapomodoro', icon: Github },
			{ title: 'LinkedIn', href: 'https://linkedin.com/', icon: Linkedin },
			{ title: 'Mail', href: 'mailto:eugenio.bellini@yahoo.it', icon: Mail },
		],
	},
]

export function Footer() {
	return (
		<footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center border-t border-border bg-background px-6 py-6 lg:py-8">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
						<span className="text-sm font-semibold text-primary">EB</span>
					</div>
					<p className="text-muted-foreground mt-8 text-sm md:mt-0">
						© {new Date().getFullYear()} Eugenio Bellini. All rights reserved.
					</p>
				</AnimatedContainer>

				<div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs tracking-wider text-foreground/80">{section.label}</h3>
								<ul className="text-muted-foreground mt-4 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<Link
												href={link.href}
												className="hover:text-foreground inline-flex items-center transition-all duration-300"
												prefetch={false}
												target={link.href.startsWith('http') ? '_blank' : undefined}
												rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
											>
												{link.icon && <link.icon className="me-2 size-4" />}
												{link.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	)
}

type ViewAnimationProps = {
	delay?: number
	className?: ComponentProps<typeof motion.div>['className']
	children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion()

	if (shouldReduceMotion) {
		return <>{children}</>
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export default Footer


