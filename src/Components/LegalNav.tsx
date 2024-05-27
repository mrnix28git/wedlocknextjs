"use client";
import { useState } from 'react';

const LegalNav = () => {
  const [activeSection, setActiveSection] = useState<string | null>('LEGAL OVERVIEW');

  const handleToggle = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className=" p-4 w-72 ">
      <div className="cursor-pointer" onClick={() => handleToggle('LEGAL OVERVIEW')}>
        <h2 className="font-semibold">LEGAL OVERVIEW</h2>
        {activeSection === 'LEGAL OVERVIEW' && (
          <div className="">
            <p className="py-2">Privacy Policy</p>
            <p className="py-2">
              <a href="#data-processing" className="text-[#545454]">Data Processing</a>
            </p>
            <p className="py-2">
              <a href="#third-parties" className="text-[#545454]">Third Parties</a>
            </p>
          </div>
        )}
      </div>
      <div className="cursor-pointer mt-4" onClick={() => handleToggle('SECURITY')}>
        <h2 className="font-semibold">SECURITY</h2>
        {activeSection === 'SECURITY' && <div className="pl-4">
            <p className="py-2">Privacy Policy</p>
            <p className="py-2">
              <a href="#data-processing" className="text-[#545454]">Data Processing</a>
            </p>
            <p className="py-2">
              <a href="#third-parties" className="text-[#545454]">Third Parties</a>
            </p>
          </div>}
      </div>
      <div className="cursor-pointer mt-4" onClick={() => handleToggle('TERMS')}>
        <h2 className="font-semibold">TERMS</h2>
        {activeSection === 'TERMS' && <div className="pl-4">
            <p className="py-2">Privacy Policy</p>
            <p className="py-2">
              <a href="#data-processing" className="text-[#545454]">Data Processing</a>
            </p>
            <p className="py-2">
              <a href="#third-parties" className="text-[#545454]">Third Parties</a>
            </p>
          </div>}
      </div>
      <div className="cursor-pointer mt-4" onClick={() => handleToggle('PRIVACY')}>
        <h2 className="font-semibold">PRIVACY</h2>
        {activeSection === 'PRIVACY' && <div className="pl-4">
            <p className="py-2">Privacy Policy</p>
            <p className="py-2">
              <a href="#data-processing" className="text-[#545454]">Data Processing</a>
            </p>
            <p className="py-2">
              <a href="#third-parties" className="text-[#545454]">Third Parties</a>
            </p>
          </div>}
      </div>
      <div className="cursor-pointer mt-4" onClick={() => handleToggle('COOKIES POLICY')}>
        <h2 className="font-semibold">COOKIES POLICY</h2>
        {activeSection === 'COOKIES POLICY' && <div className="pl-4">
            <p className="py-2">Privacy Policy</p>
            <p className="py-2">
              <a href="#data-processing" className="text-[#545454]">Data Processing</a>
            </p>
            <p className="py-2">
              <a href="#third-parties" className="text-[#545454]">Third Parties</a>
            </p>
          </div>}
      </div>
    </div>
  );
};

export default LegalNav;
