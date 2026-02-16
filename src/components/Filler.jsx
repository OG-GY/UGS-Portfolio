"use client";

export default function Filler() {
  return (
    <div
      className="absolute inset-x-0 h-[80px] bg-gradient-to-b from-transparent via-[#0f1012]/50 to-[#0f1012] pointer-events-none"
      style={{
        top: "calc(105vh - 80px)",
      }}
    />
  );
}
