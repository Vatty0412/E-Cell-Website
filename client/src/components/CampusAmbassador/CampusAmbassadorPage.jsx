import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const CampusAmbassadorPage = () => {
  // Dummy data for campus ambassadors
  const ambassadors = [
    {
      name: "Pakhi rao",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE1/view?usp=sharing"
    },
    {
      name: "Shivang Saxena",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE2/view?usp=sharing"
    },
    {
      name: "Pavitra Arora",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE3/view?usp=sharing"
    },
    {
      name: "Thippireddy Mohan Reddy",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE4/view?usp=sharing"
    },
    {
      name: "Arihant Sinha",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Vanshit tyagi",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Shweta Singh",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Prashasti",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Aniket mishra",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "kshitij",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Nitin Chaudhary",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Shaifali Chaudhary",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Mukund Aggarwal",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Deepak Kumar",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Shivansh Dutt Tripathi ",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Shweta Mishra",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Nitin Shukla",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "smriti singh",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    ,
    {
      name: "Niharika Singh",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Afreen Hashmi",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Prateek mishra",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Kartik Sharma",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "shivanjali ojha",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Sajal Sharma",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Sakshi Dwivedi",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Navya Gupta",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Firdaus Fatima",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Saksham Negi",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Ragini Yadav",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Khushi Gupta",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Harshita Tiwari",
      college: "n/a",
      certificateId: "n/a",
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
    <div className="min-h-screen" style={{
      backgroundImage: "url('./assets/Background2.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center"
    }}>
      {/* Header */}
      <div className="xl:py-20 xl:pb-16 sm:py-10">
        <div className="xl:mx-40 md:mx-20 sm:mx-10">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="bg-stone-400 h-20 w-1 mx-auto mb-8"></div>
            <h1 className="text-6xl text-stone-300 mb-4">
              CAMPUS AMBASSADOR
            </h1>
            <h2 className="text-4xl text-stone-300 mb-8">
              CERTIFICATES
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="xl:mx-40 md:mx-20 sm:mx-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="bg-stone-300 rounded-3xl p-8 shadow-2xl"
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
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                    whileHover={{ scale: 1.02, backgroundColor: "#f5f5f4" }}
                    className="border-b border-gray-300 hover:bg-gray-100 cursor-pointer transition-all duration-300"
                    onClick={() => handleRowClick(ambassador.driveLink)}
                  >
                    <td className="py-4 px-2 text-black font-medium">{ambassador.name}</td>
                    <td className="py-4 px-2 text-black">{ambassador.college}</td>
                    <td className="py-4 px-2 text-black font-mono">{ambassador.certificateId}</td>
                    <td className="py-4 px-2 text-center text-black font-mono">
                      {/* <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => handleDownload(e, ambassador.driveLink)}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-300 flex items-center justify-center mx-auto"
                      >
                        <Download size={20} />
                      </motion.button> */}
                      Releasing Soon
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center pt-12 pb-8 text-stone-300 h-10">
        Copyright &copy; E-Cell 2025. All rights reserved
      </div>
    </div>
  );
};

export default CampusAmbassadorPage;
