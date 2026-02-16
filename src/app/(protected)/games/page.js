"use client";
import PortalGames from "@/app/_portalComponents/portalGames";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="">     

      {/* Games Menu */}
      <div className=" z-5 p-8 pt-20 h-full">
        <PortalGames layoutType="grid" />
      </div>
    </div>
  );
}
