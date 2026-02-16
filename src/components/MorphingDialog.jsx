// components/ui/MorphingDialogComponent.jsx

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog';
import { IoLogoLinkedin } from "react-icons/io5";

const MorphingDialogComponent = ({ imageSrc, title, subtitle, description, link, altText }) => {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: '12px',
        }}
        className="flex w-[250px] flex-col overflow-hidden border border-gray-800 !bg-[#1a1b1e] hover:border-red-500/50 transition-all duration-300 group shadow-lg"
      >
        <div className="relative overflow-hidden">
          <MorphingDialogImage
            src={imageSrc}
            alt={altText}
            className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b1e] via-transparent to-transparent opacity-60"></div>
        </div>
        <div className="flex grow flex-col p-4 w-full">
          <div>
            <MorphingDialogTitle className="text-white font-bold text-xl group-hover:text-red-400 transition-colors">
              {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-gray-400 text-sm mt-1">
              {subtitle}
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '16px',
          }}
          className="pointer-events-auto relative flex h-auto w-auto flex-col overflow-hidden border border-gray-700 !bg-[#1a1b1e] sm:w-[500px] shadow-2xl"
        >
          <div className="relative">
            <MorphingDialogImage
              src={imageSrc}
              alt={altText}
              className="h-64 w-full object-cover"
            />
            {/* Gradient overlay for better text readability if image is bright */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b1e] to-transparent opacity-80"></div>
          </div>
          <div className="p-6 -mt-12 relative z-10">
            <MorphingDialogTitle className="text-3xl font-bold text-white mb-1">
              {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-red-500 font-medium text-sm tracking-wide uppercase">
              {subtitle}
            </MorphingDialogSubtitle>

            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.95, y: 10 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.95, y: 10 },
              }}
            >
              <div className="mt-6 space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {description}
                </p>

                {link && (
                  <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Connect on LinkedIn</span>
                    <a
                      className="inline-flex items-center justify-center p-2 rounded-full bg-blue-600/10 text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoLinkedin size={24} />
                    </a>
                  </div>
                )}
              </div>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-red-600 text-white rounded-full transition-colors backdrop-blur-sm" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
};

export default MorphingDialogComponent;
