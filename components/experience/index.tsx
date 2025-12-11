/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

export default function TimelineExperience() {
  const [activeExperience, setActiveExperience] = useState(0);
  const experiences = [
    {
      title: 'Asisten Pengajar',
      company: 'Universitas Gunadarma',
      period: '2018 - 2020',
      description:
        '- Mendukung kegiatan belajar mengajar di bidang pengembangan web.\n' +
        '- Menyiapkan materi praktikum (HTML, CSS, responsive design, Tailwind CSS).\n' +
        '- Membimbing mahasiswa memahami konsep frontend modern.\n' +
        '- Memberikan asistensi langsung saat praktikum.\n' +
        '- Berkontribusi dalam penyusunan materi yang lebih terstruktur.'
    },
    {
      title: 'Admin Finance',
      company: 'Sehat 365',
      period: '2022',
      description:
        '- Mengelola pencatatan transaksi dan laporan keuangan.\n' +
        '- Melakukan rekonsiliasi data keuangan secara rutin.\n' +
        '- Berkoordinasi lintas divisi untuk memastikan kelancaran operasional.\n' +
        '- Menjaga akurasi dan ketelitian seluruh dokumen keuangan.\n' +
        '- Menerapkan sistem administrasi yang lebih efisien dan rapi.'
    },
    {
      title: 'Fullstack Web Developer',
      company: 'PT. Pendidikan Ganesha Operation',
      period: '2022 - Sekarang',
      description:
        '- Mengembangkan aplikasi web secara end-to-end (frontend & backend).\n' +
        '- Membangun fitur seperti registrasi, dashboard admin, dan manajemen data.\n' +
        '- Integrasi API internal dan eksternal.\n' +
        '- Optimasi performa aplikasi dan peningkatan kualitas codebase.\n' +
        '- Berkolaborasi dengan tim desain, produk, dan QA.\n' +
        '- Kontribusi pada arsitektur sistem agar scalable.'
    },
    {
      title: 'Backend Developer',
      company: 'Bank Mega Syariah',
      period: 'Juni 2025 - Sekarang',
      description:
        '- Mengembangkan dan memelihara layanan backend untuk digital banking.\n' +
        '- Implementasi fitur inti backend dengan standar keamanan tinggi.\n' +
        '- Integrasi sistem internal agar layanan stabil dan interoperable.\n' +
        '- Optimasi performa layanan agar scalable dan reliable.\n' +
        '- Monitoring, debugging, dan peningkatan kualitas layanan.\n' +
        '- Kolaborasi dengan divisi security, QA, dan product.'
    }
  ];

  return (
    <div id="work" className="text-white p-6 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center mb-8 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
          Work <span className="text-pink font-bold">Experience</span>
        </h1>

        {/* Timeline Navigation */}
        <div className="flex justify-between mb-8 border rounded-lg shadow overflow-hidden">
          {experiences.map((exp, index) => (
            <button
              key={index}
              className={`flex-1 py-4 px-2 text-center  transition-all ${
                activeExperience === index ? ' bg-pink text-blue' : 'hover:bg-blue-50'
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
                    {/* <Briefcase size={20} className="text-white" /> */}
                  </div>
                </div>

                {/* Content */}
                <div className="ml-6  bg-white p-6 rounded-lg shadow-lg flex-grow">
                  <h2 className="text-2xl font-bold text-gray-800">{experience.title}</h2>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{experience.period}</span>
                  </div>

                  <p className="text-gray-700 whitespace-pre-line">{experience.description}</p>

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
