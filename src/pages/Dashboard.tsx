import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";

interface UserCampaign {
  id: string;
  title: string;
  status: "active" | "completed" | "failed";
  raised: number;
  goal: number;
  endDate: string;
}

interface UserInvestment {
  id: string;
  campaignTitle: string;
  amount: number;
  date: string;
  status: "pending" | "completed";
}

const mockUserCampaigns: UserCampaign[] = [
  {
    id: "1",
    title: "Moon Doge",
    status: "active",
    raised: 45,
    goal: 100,
    endDate: "2024-05-01",
  },
];

const mockUserInvestments: UserInvestment[] = [
  {
    id: "1",
    campaignTitle: "Solana Cat",
    amount: 5,
    date: "2024-04-15",
    status: "completed",
  },
  {
    id: "2",
    campaignTitle: "Moon Doge",
    amount: 10,
    date: "2024-04-16",
    status: "pending",
  },
];

const Dashboard = () => {
  const { connected } = useWallet();

  if (!connected) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Connect Your Wallet
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Please connect your wallet to view your dashboard
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Your Dashboard
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Manage your campaigns and track your investments
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Your Campaigns
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockUserCampaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {campaign.title}
                </h3>
                <div className="mt-4">
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
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Raised</p>
                    <p className="font-medium text-gray-900">
                      {campaign.raised} SOL
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Goal</p>
                    <p className="font-medium text-gray-900">
                      {campaign.goal} SOL
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      campaign.status === "active"
                        ? "bg-green-100 text-green-800"
                        : campaign.status === "completed"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {campaign.status.charAt(0).toUpperCase() +
                      campaign.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Your Investments
        </h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {mockUserInvestments.map((investment) => (
              <li key={investment.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {investment.campaignTitle}
                      </p>
                      <p className="text-sm text-gray-500">
                        {investment.amount} SOL • {investment.date}
                      </p>
                    </div>
                    <div className="ml-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          investment.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {investment.status.charAt(0).toUpperCase() +
                          investment.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
