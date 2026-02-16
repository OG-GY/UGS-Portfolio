import { useCallback, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";

function calculateCardRotation({ currentX, currentY, centerX, centerY, maxRotationX, maxRotationY }) {
  // Calculate the distance from the center
  const deltaX = currentX - centerX;
  const deltaY = currentY - centerY;

  // Calculate the maximum distance (assuming a rectangular area)
  const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
  // Calculate the actual distance
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  // Calculate the rotation factor (0 to 1)
  const rotationFactor = distance / maxDistance;

  // Calculate rotations (inverted for natural tilt effect)
  const rotationY = ((-deltaX / centerX) * maxRotationY * rotationFactor).toFixed(2);
  const rotationX = ((deltaY / centerY) * maxRotationX * rotationFactor).toFixed(2);

  return { rotationX, rotationY };
}

export default function GithubCardSkew({ className, count = 200, text = "Projects Completed" }) {
  const containerRef = useRef(null);
  const resetRef = useRef();

  const update = useCallback(({ x, y }) => {
    if (!containerRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();
    const { rotationX, rotationY } = calculateCardRotation({
      centerX: width / 2,
      centerY: height / 2,
      currentX: x,
      currentY: y,
      maxRotationX: 4,
      maxRotationY: 6,
    });

    containerRef.current.style.setProperty("--x", `${rotationX}deg`);
    containerRef.current.style.setProperty("--y", `${rotationY}deg`);
  }, []);

  useMousePosition(containerRef, update);

  return (
    <div
      ref={containerRef}
      className={cn(
        "text-3xl text-red-500 font-extrabold border-2 border-gray-600 rounded-lg flex px-5 py-5 max-w-60 transform-gpu flex-col bg-[#24252A] shadow-lg transition-transform ease-linear will-change-transform",
        className
      )}
      style={{
        transform: "perspective(400px) rotateX(var(--x)) rotateY(var(--y))",
        transitionDuration: "50ms",
      }}
      onMouseEnter={() => {
        resetRef.current = setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.transitionDuration = "0ms";
          }
        }, 300);
      }}
      onMouseLeave={() => {
        clearTimeout(resetRef.current);
        if (containerRef.current) {
          containerRef.current.style.transitionDuration = "50ms";
          containerRef.current.style.setProperty("--x", "0deg");
          containerRef.current.style.setProperty("--y", "0deg");
        }
      }}
    >
      <h1 className="font-mono text-3xl tracking-tight">{count}+</h1>
      <p className="text-lg font-medium text-zinc-400">{text}</p>
    </div>
  );
}
