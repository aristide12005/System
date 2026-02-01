import { DashboardHeader } from "@/components/DashboardHeader";

export default function Home() {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Page Header */}
      <DashboardHeader />

      {/* Empty Content Area */}
      <div className="min-h-[500px] flex items-center justify-center text-gray-400">
        {/* Intentionally left empty as per request */}
      </div>
    </div>
  );
}
