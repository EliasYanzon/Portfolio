import React from 'react';

const TechSkills = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">TechSkills</h2>
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
          src="your-image-url"
          alt="Tech Skill"
        />
         <img
          className="w-32 h-32 md:w-24 md:h-24 object-cover"
          src="your-image-url"
          alt="Tech Skill"
        />
         <img
          className="w-32 h-32 md:w-24 md:h-24 object-cover"
          src="your-image-url"
          alt="Tech Skill"
        />
         <img
          className="w-32 h-32 md:w-24 md:h-24 object-cover"
          src="your-image-url"
          alt="Tech Skill"
        />
         <img
          className="w-32 h-32 md:w-24 md:h-24 object-cover"
          src="your-image-url"
          alt="Tech Skill"
        />
         <img
          className="w-32 h-32 md:w-24 md:h-24 object-cover"
          src="your-image-url"
          alt="Tech Skill"
        />
         <img
          className="w-32 h-32 md:w-24 md:h-24 object-cover"
          src="your-image-url"
          alt="Tech Skill"
        />
         <img
          className="w-32 h-32 md:w-24 md:h-24 object-cover"
          src="your-image-url"
          alt="Tech Skill"
        />
         <img
          className="w-32 h-32 md:w-24 md:h-24 object-cover"
          src="your-image-url"
          alt="Tech Skill"
        />
        {/* Repeat the above image element for a total of 9 images */}
      </div>
    </div>
  );
};

export default TechSkills;