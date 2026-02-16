'use client';
import {MagneticBasic} from '@/components/MagneticButton';


const JobCard = ({ title, description, seats, type,icon }) => {
    return (
        <div className="border-2 rounded-md py-5 px-4 flex flex-col h-full">
            {/* Title & Description */}
            <div>
                <h1 className="font-bold text-2xl flex gap-3">{title}{icon}</h1>
                <h2 className="text-sm text-gray-600 mt-3 pb-4">{description}</h2>
            </div>

            {/* Labels Section */}
            <div className="flex justify-between items-end mt-auto flex-col md:flex-row">
                {/* Labels on Left */}
                <div className="flex gap-3">
                    <h2 className="bg-red-400 flex items-center justify-center text-white py-2 px-2 text-xs rounded-md leading-none">{type}</h2>
                    <h2 className="bg-blue-500 text-white flex items-center justify-center py-2 px-2 text-xs rounded-md leading-none">
                        Seats: {seats}
                    </h2>
                </div>
                {/* Apply Button on Right */}
                <MagneticBasic text="Apply Now" classname={"bg-green-500 font-bold text-white px-3 py-2 text-sm rounded-md mt-2 md:mt-0"}/>
            </div>
        </div>
    );
};

export default JobCard;
