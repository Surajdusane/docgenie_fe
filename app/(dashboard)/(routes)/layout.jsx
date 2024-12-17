import { AppSidebar } from "@/components/global/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function Layout({ children }) {
  return (
    <div className="w-screen bg-[#f9fafb]">
        <SidebarProvider>
          <SidebarTrigger/>
      <AppSidebar />
      <main className="w-full ">
        {children}
      </main>
    </SidebarProvider>
    </div>
  )
}
