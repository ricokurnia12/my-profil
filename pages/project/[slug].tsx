/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import { Navbar } from '@shared-components';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import projectData from 'data/project-data';
import Link from 'next/link';

const Detail = () => {
  const path = useRouter().query.slug;
  // eslint-disable-next-line no-console
  console.log('path', path);
  console.log(projectData);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const projectActived = projectData.find((val) => val.name.toLowerCase() === path);
  console.log(projectActived);
  console.log(projectActived?.image[0].path);

  return (
    <div className="bg-blue">
      <Navbar />
      <div className="container mx-auto py-24 px-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Project Images */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <h2 className="text-2xl font-bold mb-6">{projectActived?.name}</h2>
            {projectActived?.url && (
              <div>
                Click this link to visit project site 👇:
                <Link
                  href={projectActived?.url || '#'}
                  target="_blank"
                  className="text-blue-300 mb-4 block">
                  {projectActived?.url}
                </Link>
              </div>
            )}

            {/* Main Project Image */}
            {projectActived?.image?.[0] && (
              <div className="mb-8">
                <img
                  src={projectActived.image[0].path}
                  alt={projectActived.image[0].description}
                  className="w-full rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-400">{projectActived.image[0].description}</p>
              </div>
            )}
            {previewImage && (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                className="fixed  inset-0 mx-auto bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={() => setPreviewImage(null)}>
                <div className="container">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="max-w-full max-h-[75vh] rounded-lg shadow-xl"
                  />
                </div>
              </div>
            )}

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {projectActived?.image?.slice(1).map((img, index) => (
                <div onClick={() => setPreviewImage(img.path)} key={index}>
                  <img
                    src={img.path}
                    alt={img.description}
                    className="w-full h-48 object-cover rounded-lg shadow-md mb-2"
                  />
                  <p className="text-sm text-gray-400">{img.description}</p>
                </div>
              ))}
            </div>

            {/* Project Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Project Description</h2>
              {projectActived?.description}
            </div>
            {/* Project Challenges */}
            {/* <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Tech Use</h2>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
                <p className="text-gray-300 mb-4">
                  The dashboard needed to handle large datasets while maintaining fast load times. I
                  implemented lazy loading, data caching, and optimized database queries to ensure
                  smooth performance even with thousands of products and orders.
                </p>
                <h3 className="text-xl font-semibold mb-3">Real-time Updates</h3>
                <p className="text-gray-300">
                  To provide live order notifications and inventory updates, I integrated WebSocket
                  connections that maintain an efficient real-time link between the server and
                  client, reducing polling requests and server load.
                </p>
              </div>
            </div> */}
          </div>
          {/* Sidebar with Project Details */}
          <div className="md:col-span-1">
            {/* Technologies Used */}
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="space-y-4">
                {projectActived?.tech &&
                  Object.entries(projectActived?.tech).map(([category, tools]) => (
                    <div key={category}>
                      <h4 className="font-semibold mb-2 capitalize">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {tools.map((tool: string) => (
                          <span
                            key={tool}
                            className={`px-3 py-1 rounded-full text-sm ${
                              category === 'frontend'
                                ? 'bg-blue'
                                : category === 'backend'
                                ? 'bg-green-900'
                                : category === 'server'
                                ? 'bg-yellow-800'
                                : category === 'database'
                                ? 'bg-pink text-black'
                                : 'bg-none'
                            }`}>
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
