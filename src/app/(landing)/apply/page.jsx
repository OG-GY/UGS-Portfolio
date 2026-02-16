import JobCard from '@/components/Job'
import { jobsList } from '@/lib/jobsData'

export default function Apply() {
    return (
        <div className=''>
            <div className='my-[15vh] mx-12 flex items-center flex-col'>
                <div className='mb-8 flex items-center flex-col'>
                    <h1 className='font-extrabold text-5xl text-red-500'>Apply Now</h1>
                    <h3 className='text-sm text-gray-500 mt-2'>and be a part of our team</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        jobsList.map((job) => (
                            <JobCard title={job.title} description={job.description} type={job.type} seats={job.seats} extras={job.extras} icon={job.icon} />
                        )
                        )}
                </div>
            </div>
        </div>
    );
};