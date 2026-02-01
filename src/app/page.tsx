import { DashboardHeader } from "@/components/DashboardHeader";
import { TraineeWidget } from "@/components/TraineeWidget";

export default function Home() {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Page Header */}
      <DashboardHeader />

      {/* Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TraineeWidget />
      </div>
    </div>
  );
}
