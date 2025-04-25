'use client';

import { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import FilterPanel from '@/components/FilterPanel';
import DoctorList from '@/components/DoctorList';

interface Doctor {
  id: string;
  name: string;
  specialities: { name: string }[];
  experience: string;
  fees: string;
  video_consult: boolean;
  in_clinic: boolean;
  photo?: string;
}

function FindDoctorContent() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConsultType, setSelectedConsultType] = useState('');
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('');

  const router = useRouter();
  const searchParams = useSearchParams();

  // First useEffect - Add searchParams to dependencies
  useEffect(() => {
    // Initialize state from URL params
    const search = searchParams.get('search') || '';
    const consultType = searchParams.get('consultType') || '';
    const specialties = searchParams.get('specialties')?.split(',').filter(Boolean) || [];
    const sort = searchParams.get('sort') || '';
  
    setSearchTerm(search);
    setSelectedConsultType(consultType);
    setSelectedSpecialties(specialties);
    setSortBy(sort);
  
    fetchDoctors();
  }, [searchParams]); // Add searchParams to dependency array
  
  // Second useEffect - Add applyFilters to dependencies
  useEffect(() => {
    applyFilters();
  }, [searchTerm, selectedConsultType, selectedSpecialties, sortBy, doctors]); // Add relevant dependencies

  const fetchDoctors = async () => {
    try {
      const response = await fetch('https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json');
      const data = await response.json();
      setDoctors(data);
      setFilteredDoctors(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const updateUrlParams = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (selectedConsultType) params.set('consultType', selectedConsultType);
    if (selectedSpecialties.length) params.set('specialties', selectedSpecialties.join(','));
    if (sortBy) params.set('sort', sortBy);

    router.push(`/find-doctor?${params.toString()}`);
  };

  const applyFilters = () => {
    let filtered = [...doctors];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(doctor => 
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply consultation type filter
    if (selectedConsultType === 'video') {
      filtered = filtered.filter(doctor => doctor.video_consult);
    } else if (selectedConsultType === 'clinic') {
      filtered = filtered.filter(doctor => doctor.in_clinic);
    }

    // Apply specialty filters
    if (selectedSpecialties.length > 0) {
      filtered = filtered.filter(doctor =>
        doctor.specialities.some(specialty =>
          selectedSpecialties.includes(specialty.name)
        )
      );
    }

    // Apply sorting
    if (sortBy === 'fees') {
      filtered.sort((a, b) => 
        parseInt(a.fees.replace(/[^\d]/g, '')) - parseInt(b.fees.replace(/[^\d]/g, ''))
      );
    } else if (sortBy === 'experience') {
      filtered.sort((a, b) => 
        parseInt(b.experience.replace(/[^\d]/g, '')) - parseInt(a.experience.replace(/[^\d]/g, ''))
      );
    }

    setFilteredDoctors(filtered);
    updateUrlParams();
  };

  useEffect(() => {
    applyFilters();
  }, [searchTerm, selectedConsultType, selectedSpecialties, sortBy]);

  return (
    <div className="min-h-screen bg-[#EEF4FF]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-sm"
      >
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-[#1A237E]">Find Doctors Near You</h1>
          <p className="text-gray-600 mt-2">380360 Internists across 54 states and territories</p>
          
          {/* Search Bar */}
          <div className="mt-6">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              doctors={doctors}
            />
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filter Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <FilterPanel
              selectedConsultType={selectedConsultType}
              setSelectedConsultType={setSelectedConsultType}
              selectedSpecialties={selectedSpecialties}
              setSelectedSpecialties={setSelectedSpecialties}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </motion.div>

          {/* Doctor List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3"
          >
            <DoctorList doctors={filteredDoctors} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function FindDoctor() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FindDoctorContent />
    </Suspense>
  );
}