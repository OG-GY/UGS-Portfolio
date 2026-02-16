import Link from 'next/link';
import { projects } from "@/lib/projectsData";
import { Icon } from "@iconify/react";
import Image from 'next/image';

export default function PortalGames({ layoutType = "list" }) {
  return (
    <div className="w-full p-4">
      {layoutType === "list" ? (
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-white">More Games</h2>
          {projects.map((project) => (
            <Link
              key={project.key}
              href={`/games/${project.key}`}
              passHref
            >
              <div className="flex gap-2 items-center bg-white/10 backdrop-blur-lg p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/20">
                <div className="w-full md:w-1/4 flex justify-center">
                  <Image
                    src={project.iconImage}
                    alt={project.title}
                    className="object-cover rounded-md border border-gray-700"
                    width={300}
                    height={300}
                    layout="responsive"
                  />
                </div>
                <div className="w-full md:w-3/4 md:pl-4 text-white">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-400">{project.description[0]}</p>
                  {/* <div className='flex justify-start items-center gap-2 text-gray-400'>
                    <Icon icon="mdi:thumbs-up" className="text-lg" />
                    {project.likes} 23
                  </div>  */}
                </div>
              </div>
            </Link>
          ))}
        </div>  
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => (
            <Link
              key={project.key}
              href={`/games/${project.key}`}
              passHref
            >
              <div
                className="relative bg-gray-900 rounded-lg overflow-hidden cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105 h-48 sm:h-64 md:h-80"
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-80 flex justify-center items-center text-white p-4">
                  <div className="text-center">
                    <p className="text-sm">{project.description[0]}</p>
                    <div className="flex space-x-2 mt-2 justify-center">
                      {project.platforms.map((platform, i) => (
                        <Icon key={i} icon={platform} className="text-lg" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative z-10 p-4 bg-white/10 backdrop-blur-sm text-white w-fit rounded-br-2xl">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
