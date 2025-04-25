import { motion } from 'framer-motion';

interface Doctor {
  id: string;
  name: string;
  specialities: { name: string }[];
  experience: string;
  fees: string;
  photo?: string;
}

interface DoctorListProps {
  doctors: Doctor[];
}

export default function DoctorList({ doctors }: DoctorListProps) {
  return (
    <div className="space-y-4">
      {doctors.map((doctor, index) => (
        <motion.div
          key={doctor.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          data-testid="doctor-card"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start gap-4">
            {doctor.photo && (
              <img 
                src={doctor.photo} 
                alt={doctor.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            )}
            <div className="flex-1">
              <h2 
                data-testid="doctor-name" 
                className="text-xl font-semibold text-gray-800"
              >
                {doctor.name}
              </h2>
              <p 
                data-testid="doctor-specialty" 
                className="text-gray-600 mt-2"
              >
                {doctor.specialities.map(s => s.name).join(', ')}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span 
                  data-testid="doctor-experience" 
                  className="text-gray-700"
                >
                  {doctor.experience}
                </span>
                <span 
                  data-testid="doctor-fee" 
                  className="text-primary font-semibold"
                >
                  {doctor.fees}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}