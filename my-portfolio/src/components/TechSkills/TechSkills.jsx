import React from 'react';
import image1 from "../../Image/Techs/82127.png"
import image2 from "../../Image/Techs/brand_javascript_icon_157913.png"
import image3 from "../../Image/Techs/icone-html-noir.png"
import image4 from "../../Image/Techs/kisspng-node-js-javascript-computer-icons-computer-softwar-5b07e5fe360929.6486995715272442862213.jpg"
import image5 from "../../Image/Techs/png-transparent-microsoft-sql-server-microsoft-azure-sql-database-computer-icons-others-text-rectangle-logo.png"
import image6 from "../../Image/Techs/react-1-logo-black-and-white.png"
import image7 from "../../Image/Techs/redux-logo-black-and-white.png"

const TechSkills = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <h2 className="text-2xl font-bold mb-4 ">TechSkills</h2>
      <div className="md:w-1/2">
        <ul className="list-disc pl-6">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
          <li>Item 7</li>
          <li>Item 8</li>
          <li>Item 9</li>
        </ul>
      </div>
      <div className="md:w-1/2 flex flex-wrap justify-center">
        <img
          className="w-32 h-32 md:w-24 md:h-24 object-cover"
          src={image1}
          alt="Tech Skill"
        />
         <img
          className="w-32 h-32 md:w-24 md:h-24 object-cover"
          src={image2}
          alt="Tech Skill"
        />
         <img
          className="w-32 h-32 md:w-24 md:h-24 object-cover"
          src={image3}
          alt="Tech Skill"
        />
         <img
          className="w-32 h-32 md:w-24 md:h-24 object-cover"
          src={image4}
          alt="Tech Skill"
        />
         <img
          className="w-32 h-32 md:w-24 md:h-24 object-cover"
          src={image5}
          alt="Tech Skill"
        />
         <img
          className="w-32 h-32 md:w-24 md:h-24 object-cover"
          src={image6}
          alt="Tech Skill"
        />
         <img
          className="w-32 h-32 md:w-24 md:h-24 object-cover"
          src={image7}
          alt="Tech Skill"
        />
        
        {/* Repeat the above image element for a total of 9 images */}
      </div>
    </div>
  );
};

export default TechSkills;