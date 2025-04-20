import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";

interface Campaign {
  id: string;
  title: string;
  description: string;
  goal: number;
  raised: number;
  endDate: string;
  creator: string;
}

const mockCampaigns: Campaign[] = [
  {
    id: "1",
    title: "Moon Doge",
    description: "The next big meme token on Solana",
    goal: 100,
    raised: 45,
    endDate: "2024-05-01",
    creator: "0x123...abc",
  },
  {
    id: "2",
    title: "Solana Cat",
    description: "A cute cat token for the Solana ecosystem",
    goal: 50,
    raised: 30,
    endDate: "2024-04-25",
    creator: "0x456...def",
  },
];

const Campaigns = () => {
  const { connected } = useWallet();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Active Campaigns
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Discover and invest in exciting memecoin projects
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {mockCampaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
          >
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">
                {campaign.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {campaign.description}
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>
                    {Math.round((campaign.raised / campaign.goal) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{
                      width: `${(campaign.raised / campaign.goal) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Goal</p>
                  <p className="font-medium text-gray-900">
                    {campaign.goal} SOL
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Raised</p>
                  <p className="font-medium text-gray-900">
                    {campaign.raised} SOL
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">End Date</p>
                  <p className="font-medium text-gray-900">
                    {campaign.endDate}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Creator</p>
                  <p className="font-medium text-gray-900">
                    {campaign.creator}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-4 py-4 sm:px-6">
              <button
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                disabled={!connected}
              >
                {connected ? "Invest Now" : "Connect Wallet to Invest"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
