'use client'
import { Archive, Home, Tag } from 'lucide-react'
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator,
} from '@/components/ui/sidebar'
import Logo from './logo'

import { usePathname } from 'next/navigation'
import { useNoteContext } from '@/lib/hooks'
import Link from 'next/link'

// Menu items.

const routes = [
	{
		title: 'All Notes',
		url: '/app/dashboard',
		icon: <Home />,
	},
	{
		title: 'Archived Notes',
		url: '/app/dashboard/archive',
		icon: <Archive />,
	},
]

export function AppSidebar() {
	const pathname = usePathname()
	const { tags } = useNoteContext()

	return (
		<Sidebar>
			<SidebarHeader className="p-4">
				<Logo />
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						{routes.map((route) => (
							<SidebarMenuItem key={route.title}>
								<SidebarMenuButton asChild isActive={pathname === route.url}>
									<Link href={route.url}>
										{route.icon}
										<span>{route.title}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
				<SidebarSeparator />
				<SidebarGroup>
					<SidebarGroupLabel>Tags</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{tags.map((item, i) => (
								<SidebarMenuItem key={i}>
									<SidebarMenuButton asChild>
										<Link href={`/app/dashboard?tag=${item}`}>
											<Tag />
											<span>{item}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	)
}
