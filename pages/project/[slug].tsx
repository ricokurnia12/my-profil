import { Navbar } from '@shared-components';
import React from 'react';

const Detail = () => {
  return (
    <div className="bg-blue">
      <Navbar />
      <div className="container mx-auto py-24 px-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Project Images */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            {/* Main Project Image */}
            <div className="mb-8">
              <img
                src="/api/placeholder/800/400"
                alt="E-Commerce Dashboard Main View"
                className="w-full rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-400">
                Main dashboard interface showing sales analytics
              </p>
            </div>
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <img
                  src="/api/placeholder/400/300"
                  alt="User Management Screen"
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-2"
                />
                <p className="text-sm text-gray-400">User management interface</p>
              </div>
              <div>
                <img
                  src="/api/placeholder/400/300"
                  alt="Product Catalog"
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-2"
                />
                <p className="text-sm text-gray-400">Product catalog management</p>
              </div>
              <div>
                <img
                  src="/api/placeholder/400/300"
                  alt="Order Processing"
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-2"
                />
                <p className="text-sm text-gray-400">Order processing workflow</p>
              </div>
              <div>
                <img
                  src="/api/placeholder/400/300"
                  alt="Analytics Dashboard"
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-2"
                />
                <p className="text-sm text-gray-400">Advanced analytics features</p>
              </div>
            </div>
            {/* Project Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Project Description</h2>
              <p className="text-gray-300 mb-4">
                This e-commerce dashboard provides store owners with a comprehensive solution to
                manage their online business. The project focuses on delivering a seamless user
                experience while offering powerful tools for inventory management, order processing,
                customer analytics, and sales reporting.
              </p>
              <p className="text-gray-300 mb-4">
                The interface was designed with both usability and aesthetics in mind, featuring
                intuitive navigation, customizable widgets, and real-time data updates. The
                dashboard adapts to various screen sizes, ensuring a consistent experience across
                devices.
              </p>
              <p className="text-gray-300">
                Key features include customizable reporting, inventory alerts, customer segmentation
                tools, and integration capabilities with popular payment gateways and shipping
                providers. The system also includes robust security measures to protect sensitive
                customer and business data.
              </p>
            </div>
            {/* Project Challenges */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Challenges &amp; Solutions</h2>
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
            </div>
          </div>
          {/* Sidebar with Project Details */}
          <div className="md:col-span-1">
            {/* Technologies Used */}
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">Redux</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-900 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-green-900 rounded-full text-sm">Express</span>
                    <span className="px-3 py-1 bg-green-900 rounded-full text-sm">MongoDB</span>
                    <span className="px-3 py-1 bg-green-900 rounded-full text-sm">GraphQL</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">Docker</span>
                    <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">AWS</span>
                    <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">CI/CD</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-900 rounded-full text-sm">Figma</span>
                    <span className="px-3 py-1 bg-indigo-900 rounded-full text-sm">Git</span>
                    <span className="px-3 py-1 bg-indigo-900 rounded-full text-sm">Jira</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
