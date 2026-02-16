"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import PortalGames from "@/app/_portalComponents/portalGames";
import { Icon } from "@iconify/react";
import { projects } from "@/lib/projectsData"; // Import game data

export default function GamePlayer() {
  const [iframeSrc, setIframeSrc] = useState("");
  const [gameData, setGameData] = useState(null); // Store full game data instead of just name
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { gameId } = useParams();
  const router = useRouter();
  const modalRef = useRef(null); // Create a ref for the modal

  useEffect(() => {
    // Find game data from imported projects using gameId
    const selectedGame = projects.find((game) => game.key === gameId);

    if (selectedGame) {
      setIframeSrc(`${selectedGame.link}/index.html`);
      setGameData(selectedGame); // Set the entire game data
    }
  }, [gameId]);

  const handleFullscreen = () => {
    const iframe = document.querySelector("iframe");
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Close modal when clicking outside of it
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen lg:h-screen justify-center items-start pt-16 z-10">
      {/* Left side: Game player */}
      <div className="flex flex-col w-full lg:w-2/3 h-[80vh] justify-center items-center px-4 sm:px-10 mt-20 md:mt-10 rounded-lg">
        {iframeSrc ? (
          <>
            <iframe
              src={iframeSrc}
              className="w-full h-full border-none rounded-lg"
              allowFullScreen
            />
            <div className="flex justify-center md:justify-between items-center bg-gray-900 w-full py-2 px-4 mt-2 rounded-lg">
              {/* Left side: Game Title */}
              <div className="flex justify-center md:justify-start items-center w-full">
                {gameData && (
                  <>
                    <img
                      src="/icons/logoIcon.png"
                      alt="Logo"
                      className="mr-4 hidden sm:block"
                      style={{ width: '30px', height: '30px' }}
                    />
                    <span className="text-white text-center w-full md:w-auto">
                      {gameData.title}
                    </span>
                  </>
                )}
              </div>

              {/* Right side: Fullscreen and Controls Buttons (Hidden for screens < 320px) */}
              <div className="hidden md:flex items-center space-x-4">
                <button
                  className="bg-white/10 backdrop-blur-lg text-white px-4 py-2 rounded-lg shadow-lg border border-white/20 z-40"
                  onClick={handleFullscreen}
                >
                  <Icon icon="lucide:maximize-2" width="14" height="14" className="text-white" />
                </button>
                <button
                  className="bg-white/10 backdrop-blur-lg text-white px-4 py-2 rounded-lg shadow-lg border border-white/20 z-40"
                  onClick={toggleModal}
                >
                  <Icon icon="mdi:gamepad" width="20" height="20" className="text-white" />
                </button>
              </div>
            </div>

            {/* Modal for Controls */}
            {isModalOpen && gameData && (
              <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                <div
                  className="bg-gray-800 text-white p-8 rounded-lg w-3/4 max-w-lg"
                  ref={modalRef} // Attach ref to the modal
                >
                  <h2 className="text-xl mb-4">Controls for {gameData.title}</h2>
                  <ul className="list-disc list-inside">
                    {Object.entries(gameData.controls).map(([action, key]) => (
                      <li key={action}>
                        <span className="font-bold">{action.charAt(0).toUpperCase() + action.slice(1)}:</span> {key}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="mt-4 bg-white/10 backdrop-blur-lg text-white px-4 py-2 rounded-lg shadow-lg border border-white/20"
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <p>Loading game...</p>
        )}
      </div>

      {/* Right side panel for related games */}
      <div className="w-full lg:w-1/3 h-full p-4 overflow-y-auto no-scrollbar">
        <PortalGames />
      </div>
    </div>
  );
}
