import { motion } from 'framer-motion';
import Image from 'next/image';

interface Doctor {
  id: string;
  name: string;
  specialities: { name: string }[];
  experience: string;
  fees: string;
  photo?: string;
  video_consult?: boolean;  // Add this property
}

interface DoctorListProps {
  doctors: Doctor[];
}

export default function DoctorList({ doctors }: DoctorListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {doctors.map((doctor, index) => (
        <motion.div
          key={doctor.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white p-6 pb-16 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
        >
          <div className="flex items-start gap-4">
            {doctor.photo && doctor.photo !== 'null' && doctor.photo !== null && (
              <Image 
                src={doctor.photo}
                alt={doctor.name}
                width={100}
                height={100}
                className="rounded-xl object-cover"
              />
            )}
            <div className="flex-1">
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${
                doctor.video_consult ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
              }`}>
                {doctor.video_consult ? '• Online' : '• Away'}
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mt-2">
                {doctor.name}
              </h2>
              <p className="text-gray-800 text-sm">
                {doctor.specialities[0]?.name}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-800">
                  {doctor.experience}
                </span>
                <span className="text-gray-800 font-medium">
                  {doctor.fees}
                </span>
              </div>
            </div>
          </div>
          <button className="absolute bottom-4 right-4 p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
          </button>
        </motion.div>
      ))}
    </div>
  );
}