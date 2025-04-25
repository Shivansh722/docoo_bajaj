import { motion } from 'framer-motion';

interface FilterPanelProps {
  selectedConsultType: string;
  setSelectedConsultType: (type: string) => void;
  selectedSpecialties: string[];
  setSelectedSpecialties: (specialties: string[]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const specialties = [
  "General Physician", "Dentist", "Dermatologist", "Paediatrician",
  "Gynaecologist", "ENT", "Diabetologist", "Cardiologist",
  "Physiotherapist", "Endocrinologist", "Orthopaedic", "Ophthalmologist",
  "Gastroenterologist", "Pulmonologist", "Psychiatrist", "Urologist",
  "Dietitian/Nutritionist", "Psychologist", "Sexologist", "Nephrologist",
  "Neurologist", "Oncologist", "Ayurveda", "Homeopath"
];

export default function FilterPanel({
  selectedConsultType,
  setSelectedConsultType,
  selectedSpecialties,
  setSelectedSpecialties,
  sortBy,
  setSortBy
}: FilterPanelProps) {
  const handleSpecialtyChange = (specialty: string) => {
    if (selectedSpecialties.includes(specialty)) {
      setSelectedSpecialties(selectedSpecialties.filter(s => s !== specialty));
    } else {
      setSelectedSpecialties([...selectedSpecialties, specialty]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-4 rounded-lg shadow"
    >
      {/* Consultation Mode */}
      <div className="mb-6">
        <h3 data-testid="filter-header-moc" className="font-semibold mb-3">
          Consultation Mode
        </h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              data-testid="filter-video-consult"
              checked={selectedConsultType === 'video'}
              onChange={() => setSelectedConsultType('video')}
              className="mr-2"
            />
            Video Consult
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              data-testid="filter-in-clinic"
              checked={selectedConsultType === 'clinic'}
              onChange={() => setSelectedConsultType('clinic')}
              className="mr-2"
            />
            In Clinic
          </label>
        </div>
      </div>

      {/* Specialties */}
      <div className="mb-6">
        <h3 data-testid="filter-header-speciality" className="font-semibold mb-3">
          Speciality
        </h3>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {specialties.map(specialty => (
            <label key={specialty} className="flex items-center">
              <input
                type="checkbox"
                data-testid={`filter-specialty-${specialty.replace('/', '-')}`}
                checked={selectedSpecialties.includes(specialty)}
                onChange={() => handleSpecialtyChange(specialty)}
                className="mr-2"
              />
              {specialty}
            </label>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <h3 data-testid="filter-header-sort" className="font-semibold mb-3">
          Sort By
        </h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              data-testid="sort-fees"
              checked={sortBy === 'fees'}
              onChange={() => setSortBy('fees')}
              className="mr-2"
            />
            Fees (Low to High)
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              data-testid="sort-experience"
              checked={sortBy === 'experience'}
              onChange={() => setSortBy('experience')}
              className="mr-2"
            />
            Experience (High to Low)
          </label>
        </div>
      </div>
    </motion.div>
  );
}