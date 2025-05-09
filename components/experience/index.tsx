import { useState } from 'react';
import { Briefcase, Calendar, ChevronRight, Award, ChevronLeft } from 'lucide-react';
import { Button } from '@shared-components';

export default function TimelineExperience() {
  const [activeExperience, setActiveExperience] = useState(0);
  const experiences = [
    {
      title: 'Asisten Pengajar',
      company: 'Universitas Gunadarma',
      period: '2018 - 2020',
      description:
        'Membantu dalam kegiatan belajar mengajar, termasuk mempersiapkan materi dan memberikan dukungan kepada mahasiswa. Bertanggung jawab dalam pengajaran topik terkait pengembangan web dan teknologi frontend, serta membantu mahasiswa memahami konsep desain responsif dan penggunaan Tailwind CSS dalam proyek praktikum.'
    },
    {
      title: 'Admin Finance',
      company: 'Sehat 365',
      period: '2022',
      description:
        'Mengelola proses administrasi keuangan perusahaan, termasuk pencatatan transaksi, pengelolaan laporan keuangan, dan koordinasi dengan pihak terkait untuk memastikan kelancaran operasional keuangan. Memastikan semua data keuangan akurat dan sesuai dengan prosedur yang berlaku.'
    },
    {
      title: 'Fullstack Web Developer',
      company: 'PT. Pendidikan Ganesha Operation',
      period: '2022 - Sekarang',
      description:
        'Bertanggung jawab dalam pengembangan dan pemeliharaan aplikasi web dari sisi frontend dan backend. Mengintegrasikan berbagai fitur pada aplikasi seperti sistem registrasi, dashboard admin, dan manajemen data. Menjamin performa aplikasi yang optimal dan bekerja sama dengan tim lain untuk menyelesaikan tugas pengembangan perangkat lunak secara efisien.'
    }
  ];

  return (
    <div className="text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-blue-800">Work Experience</h1>

        {/* Timeline Navigation */}
        <div className="flex justify-between mb-8 border rounded-lg shadow overflow-hidden">
          {experiences.map((exp, index) => (
            <button
              key={index}
              className={`flex-1 py-4 px-2 text-center  transition-all ${
                activeExperience === index ? 'text-white bg-pink text-blue' : 'hover:bg-blue-50'
              }`}
              onClick={() => setActiveExperience(index)}>
              <span className="font-medium">{exp.company}</span>
            </button>
          ))}
        </div>

        {/* Timeline Display */}
        <div className="relative">
          {/* Timeline line */}
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`transition-opacity duration-300  ${
                activeExperience === index ? 'opacity-100' : 'opacity-0 absolute'
              }`}
              style={{ display: activeExperience === index ? 'block' : 'none' }}>
              <div className="flex mb-12">
                {/* Timeline dot */}
                <div className="relative">
                  <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center z-10 relative shadow-lg">
                    <Briefcase size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="ml-6  bg-white p-6 rounded-lg shadow-lg flex-grow">
                  <h2 className="text-2xl font-bold text-gray-800">{experience.title}</h2>
                  <h3 className="text-xl text-blue-600 font-semibold mb-2">{experience.company}</h3>

                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{experience.period}</span>
                  </div>

                  <p className="mb-4 text-gray-700">{experience.description}</p>

                  {/* <div className="mt-4">
                    <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                      <Award size={16} className="mr-2" />
                      Keahlian
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between mt-4 px-4">
                {index > 0 ? (
                  <button
                    onClick={() => setActiveExperience(index - 1)}
                    className="flex items-center text-blue-600 hover:text-blue-800">
                    <ChevronLeft size={16} className="mr-1" />
                    Sebelumnya
                  </button>
                ) : (
                  <div></div>
                )}

                {index < experiences.length - 1 ? (
                  <button
                    onClick={() => setActiveExperience(index + 1)}
                    className="flex items-center text-blue-600 hover:text-blue-800">
                    Selanjutnya
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
