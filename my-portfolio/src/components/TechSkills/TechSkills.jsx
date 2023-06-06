import React from 'react';
import image1 from '../../Image/Techs/atom.png'
import image2 from '../../Image/Techs/css-3 (1).png'
import image3 from '../../Image/Techs/html.png'
import image4 from '../../Image/Techs/java-script.png'
import image5 from '../../Image/Techs/sql-server.png'
import image6 from '../../Image/Techs/pngwing.com.png'

const TechSkills = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl text-center mb-6">Tech Skills</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div>
          <img className="mx-auto w-20 h-auto md:w-40 h-auto" src={image1} alt="Tech Skill 1" />
          <p className="text-center mt-2">React</p>
        </div>
        <div>
          <img className="mx-auto w-20 h-auto md:w-40 h-auto" src={image2} alt="Tech Skill 2" />
          <p className="text-center mt-2">CSS</p>
        </div>
        <div>
          <img className="mx-auto w-20 h-auto md:w-40 h-auto" src={image3} alt="Tech Skill 3" />
          <p className="text-center mt-2">HTML</p>
        </div>
        <div>
          <img className="mx-auto w-20 h-auto md:w-40 h-auto"src={image4} alt="Tech Skill 4" />
          <p className="text-center mt-2">JavaScript</p>
        </div>
        <div>
          <img className="mx-auto w-20 h-auto md:w-40 h-auto" src={image5} alt="Tech Skill 5" />
          <p className="text-center mt-2">SQL</p>
        </div>
        <div>
          <img className="mx-auto w-20 h-auto md:w-40 h-auto" src={image6} alt="Tech Skill 6" />
          <p className="text-center mt-2">Redux</p>
        </div>
        <div>
          <img className="mx-auto w-20 h-auto md:w-40 h-auto" src="image7.jpg" alt="Tech Skill 7" />
          <p className="text-center mt-2">Tech Skill 7</p>
        </div>
        <div>
          <img className="mx-auto w-20 h-auto md:w-40 h-auto" src="image8.jpg" alt="Tech Skill 8" />
          <p className="text-center mt-2">Tech Skill 8</p>
        </div>
      </div>
    </div>
  );
};

export default TechSkills;