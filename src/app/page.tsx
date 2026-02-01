import { CampaignMap } from "@/components/CampaignMap";
import { StatsGrid } from "@/components/StatsGrid";
import { InfluencerTable } from "@/components/InfluencerTable";
import { AudienceChart } from "@/components/AudienceChart";
import { InterestRadar } from "@/components/InterestRadar";
import { DashboardHeader } from "@/components/DashboardHeader";

export default function Home() {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Page Header */}
      <DashboardHeader />

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex gap-8">
          <button className="pb-3 border-b-2 border-text-primary font-medium text-text-primary text-sm px-1">
            Tiktok
          </button>
          <button className="pb-3 border-b-2 border-transparent hover:border-gray-300 font-medium text-text-secondary hover:text-text-primary text-sm px-1 transition-colors">
            Instagram
          </button>
          <button className="pb-3 border-b-2 border-transparent hover:border-gray-300 font-medium text-text-secondary hover:text-text-primary text-sm px-1 transition-colors">
            Facebook
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column (Stats + ...?) Note: Image shows stats on left, map on right. 
            Wait, the image shows Stats (left 2 cols) and Map (right 2 cols) of the *top* section.
            Actually, the stats are in a 2x2 grid on the LEFT side of the middle section?
            Looking at the image:
            Row 1: Header/Tabs
            Row 2: 
               Left Block (approx 30%): 4 Stats Cards (2x2 grid: Likes, Comments | Shares, Engagement)
               Right Block (approx 70%): Campaign Reach Map
            
            Row 3:
               Left Block: Influencer Table
               Middle Block: Audience Chart
               Right Block: Follower Interest Radar
        */}

        <div className="col-span-4 grid grid-cols-2 gap-6 h-full">
          {/* Stats are actually already in Stats Grid but I need to adapt the layout. 
                My StatsGrid component currently uses grid-cols-4. I should change it or use it differently.
                The image shows them as a 2x2 grid. 
            */}
          <StatsGrid />
        </div>

        <div className="col-span-8">
          <CampaignMap />
        </div>

        {/* Bottom Row placeholders */}
        <div className="col-span-4 h-[400px]">
          <InfluencerTable />
        </div>
        <div className="col-span-4 h-[400px]">
          <AudienceChart />
        </div>
        <div className="col-span-4 h-[400px]">
          <InterestRadar />
        </div>
      </div>

    </div>
  );
}
