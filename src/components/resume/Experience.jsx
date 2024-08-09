import React from 'react';
import cer from '../../assets/certificet/UI Engineer-certificate.pdf';
import cer1 from '../../assets/certificet/Mobile Application Developer-certificate.pdf';
import cer2 from '../../assets/certificet/Web Application Developer-certificate.pdf';
import cer3 from '../../assets/certificet/DevOps Engineer-certificate.pdf';
import cer4 from '../../assets/certificet/Backend Developer-certificate.pdf';

function Experience() {
  return (
    <div className="flex flex-col font-sans text-4xl mt-5 gap-10">
      <div className="flex justify-start font-bold">
      Plz Watch . . .
      </div>
      
      {/* First Row */}
      <div className="flex flex-col md:flex-row justify-center gap-5">
        <div className="w-fit p-3 flex justify-center items-center rounded-md  hover:bg-gray-700 shadow-lg">
          <a 
            href={cer} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lg text-#fff font-sans"
          >
            UI Engineer-certificate
          </a>
        </div>
        <div className="w-fit p-3 flex justify-center items-center rounded-md hover:bg-gray-700 shadow-lg">
          <a 
            href={cer1} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lg text-#fff"
          >
           React-Native -certificate
          </a>
        </div>
        <div className="w-fit p-3 flex justify-center items-center rounded-md hover:bg-gray-700 shadow-lg">
          <a 
            href={cer2} 
            target="_blank" 
            rel="noopener noreferrer" 
             className="text-lg text-#fff"
          >
            Web Application Developer-certificate
          </a>
        </div>
      </div>
      
      {/* Second Row */}
      <div className="flex flex-col md:flex-row justify-center gap-5">
        <div className="w-fit p-3 flex justify-center items-center rounded-md hover:bg-gray-700 shadow-lg">
          <a 
            href={cer3} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lg text-#fff"
          >
            DevOps Engineer-certificate
          </a>
        </div>
        <div className="w-fit p-3 flex justify-center items-center rounded-md hover:bg-gray-700 shadow-lg">
          <a 
            href={cer4} 
            target="_blank" 
            rel="noopener noreferrer" 
             className="text-lg text-#fff "
          >
            Backend Developer-certificate
          </a>
        </div>
      </div>
    </div>
  );
}

export default Experience;
