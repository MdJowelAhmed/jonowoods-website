// DailyInspiration.jsx
import React from "react";
import { VideoCard } from "./VideoCard";

export const DailyInspiration = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Daily Inspiration</h2>
      <VideoCard
        title="Daily Inspiration"
        imageUrl="/assests/payerImage.png"
        overlayText="Cooling Yoga Flow"
      />
    </section>
  );
};
