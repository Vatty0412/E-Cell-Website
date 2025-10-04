import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const CampusAmbassador = () => {
  // Dummy data for campus ambassadors
  const ambassadors = [
    {
      name: "Alice Johnson",
      college: "XYZ University",
      certificateId: "CERT123",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE1/view?usp=sharing"
    },
    {
      name: "Rahul Sharma",
      college: "ABC Institute",
      certificateId: "CERT124",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE2/view?usp=sharing"
    },
    {
      name: "Priya Patel",
      college: "DEF College",
      certificateId: "CERT125",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE3/view?usp=sharing"
    },
    {
      name: "Michael Chen",
      college: "GHI University",
      certificateId: "CERT126",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE4/view?usp=sharing"
    },
    {
      name: "Sarah Williams",
      college: "JKL Institute",
      certificateId: "CERT127",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    }
  ];

  // Function to convert Google Drive view link to preview link
  const getPreviewLink = (driveLink) => {
    const fileId = driveLink.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId[1]}/preview`;
    }
    return driveLink;
  };

  // Function to convert Google Drive view link to download link
  const getDownloadLink = (driveLink) => {
    const fileId = driveLink.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileId) {
      return `https://drive.google.com/uc?export=download&id=${fileId[1]}`;
    }
    return driveLink;
  };

  // Function to handle row click for preview
  const handleRowClick = (driveLink) => {
    const previewLink = getPreviewLink(driveLink);
    window.open(previewLink, '_blank');
  };

  // Function to handle download button click
  const handleDownload = (e, driveLink) => {
    e.stopPropagation(); // Prevent row click
    const downloadLink = getDownloadLink(driveLink);
    const link = document.createElement('a');
    link.href = downloadLink;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="xl:py-20 xl:pb-16 sm:py-10" id="Campus Ambassadors">
      <div className="xl:mx-40 md:mx-20 sm:mx-10">
        {/* Title Section */}
        <div className="xl:flex xl:flex-row sm:flex sm:flex-col sm:items-center xl:mb-16 sm:mb-10">
          <div className="xl:w-2/5 sm:flex sm:flex-col sm:items-center xl:pb-20 sm:pb-10">
            <div className="bg-stone-400 h-20 w-1 xl:mb-4 sm:mb-8"></div>
            <motion.div
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 2, ease: "easeOut" }}
              whileTap={{ scale: 0.9 }}
              className="text-6xl text-stone-300"
            >
              CAMPUS AMBASSADOR
            </motion.div>
          </div>
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="xl:w-3/5 xl:ml-10"
          >
            <h2 className="text-4xl text-stone-300 text-center xl:text-left">
              CERTIFICATES
            </h2>
          </motion.div>
        </div>

        {/* Table Section */}
        <motion.div
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="bg-stone-300 rounded-3xl xl:p-8 md:p-6 sm:p-4"
        >
          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-400">
                  <th className="text-left py-4 px-2 text-black font-bold text-lg">Name</th>
                  <th className="text-left py-4 px-2 text-black font-bold text-lg">College</th>
                  <th className="text-left py-4 px-2 text-black font-bold text-lg">Certificate ID</th>
                  <th className="text-center py-4 px-2 text-black font-bold text-lg">Download Certificate</th>
                </tr>
              </thead>
              <tbody>
                {ambassadors.map((ambassador, index) => (
                  <motion.tr
                    key={ambassador.certificateId}
                    whileInView={{ y: [20, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                    whileHover={{ scale: 1.02, backgroundColor: "#f5f5f4" }}
                    className="border-b border-gray-300 hover:bg-gray-100 cursor-pointer transition-all duration-300"
                    onClick={() => handleRowClick(ambassador.driveLink)}
                  >
                    <td className="py-4 px-2 text-black font-medium">{ambassador.name}</td>
                    <td className="py-4 px-2 text-black">{ambassador.college}</td>
                    <td className="py-4 px-2 text-black font-mono">{ambassador.certificateId}</td>
                    <td className="py-4 px-2 text-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => handleDownload(e, ambassador.driveLink)}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-300 flex items-center justify-center mx-auto"
                      >
                        <Download size={20} />
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CampusAmbassador;
