import SidebarUser from "@/components/layout/user/Sidebar"

export default function DashboardUser() {
  return (
    <div className="flex">
      <SidebarUser />
      <div className="p-8 border w-full">
        <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
        {/* Dashboard content goes here */}
      </div>

    </div>
  )
}