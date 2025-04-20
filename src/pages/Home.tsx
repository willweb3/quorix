import React from "react";
import { Link } from "react-router-dom";
import { Rocket, Coins, Users } from "lucide-react";
import FeatureCard from "../components/FeatureCard";

const features = [
  {
    icon: Rocket,
    title: "Launch Your Token",
    description:
      "Create your memecoin with custom tokenomics and raise funds through community support.",
  },
  {
    icon: Coins,
    title: "Secure Funding",
    description:
      "Raise SOL through our secure smart contract system with automatic token distribution.",
  },
  {
    icon: Users,
    title: "Build Community",
    description:
      "Connect with investors and build a strong community around your memecoin project.",
  },
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Launch Your Memecoin</span>
          <span className="block text-purple-600">on Solana</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Create, fund, and launch your memecoin project with our decentralized
          crowdfunding platform.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link
              to="/campaigns"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
            >
              Explore Campaigns
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link
              to="/create"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Create Campaign
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
