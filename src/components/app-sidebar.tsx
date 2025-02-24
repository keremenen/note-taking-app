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

// Menu items.
const items = [
	{
		title: 'Cooking',
		url: '#',
	},
	{
		title: 'Dev',
		url: '#',
	},
	{
		title: 'Fitness',
		url: '#',
	},
	{
		title: 'Health',
		url: '#',
	},
	{
		title: 'Personal',
		url: '#',
	},
	{
		title: 'React',
		url: '#',
	},
	{
		title: 'Recipes',
		url: '#',
	},
	{
		title: 'Shopping',
		url: '#',
	},
	{
		title: 'Travel',
		url: '#',
	},
	{
		title: 'TypeScript',
		url: '#',
	},
]

export function AppSidebar() {
	const pathname = usePathname()

	return (
		<Sidebar>
			<SidebarHeader className="p-4">
				<Logo />
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton
								asChild
								isActive={!pathname.includes('archive')}
							>
								<a href="/app/dashboard">
									<Home />
									<span>All Notes</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton
								asChild
								isActive={pathname.includes('archive')}
							>
								<a href="/app/dashboard/archive">
									<Archive />
									<span>Archived Notes</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroup>
				<SidebarSeparator />
				<SidebarGroup>
					<SidebarGroupLabel>Tags</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<Tag />
											<span>{item.title}</span>
										</a>
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
