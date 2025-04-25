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
  selectedConsultType: string;
  selectedSpecialties: string[];
  sortBy: string;
  onRemoveFilter: (type: string, value?: string) => void;
}

export default function DoctorList({ 
  doctors, 
  selectedConsultType,
  selectedSpecialties,
  sortBy,
  onRemoveFilter 
}: DoctorListProps) {
  return (
    <div>
      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        {selectedConsultType && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800"
          >
            <span>{selectedConsultType === 'video' ? 'Video Consult' : 'In Clinic'}</span>
            <button
              onClick={() => onRemoveFilter('consultType')}
              className="ml-2 hover:text-blue-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        )}

        {selectedSpecialties.map((specialty) => (
          <motion.div
            key={specialty}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800"
          >
            <span>{specialty}</span>
            <button
              onClick={() => onRemoveFilter('specialty', specialty)}
              className="ml-2 hover:text-blue-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        ))}

        {sortBy && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800"
          >
            <span>{sortBy === 'fees' ? 'Fees: Low to High' : 'Experience: High to Low'}</span>
            <button
              onClick={() => onRemoveFilter('sort')}
              className="ml-2 hover:text-blue-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>

      {/* Doctor Grid */}
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
    </div>
  );
}