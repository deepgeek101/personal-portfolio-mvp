const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='about'
      className='py-16 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-300'
    >
      <div className='container mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white'>
          About <span className='text-blue-600 dark:text-blue-400'>Me</span>
        </h2>

        <div className='max-w-3xl mx-auto'>
          <div className='bg-blue-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg border-l-4 border-blue-500'>
            <h3 className='text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200'>
              My Journey
            </h3>
            <p className='text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>
              My journey began with the fundamentals — sketching, model-making, and learning to see space the way architects do. 
              Those early disciplines gave me a strong foundation in both the technical and creative sides of design.
            </p>
            <p className='text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>
              Over time, my passion deepened toward the intersection of architecture, technology, and sustainability.
              I've been exploring parametric design tools, practicing spatial analysis, and strengthening my understanding of structural principles — a subject that challenges and excites me in equal measure.
            </p>
            <p className='text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>
              I'm particularly drawn to how built environments shape human experience — how light, material, and form come together to tell a story. I'm constantly expanding my knowledge in areas like urban design, adaptive reuse, and the role of AI in architectural visualization.
              My path has also introduced me to project management and client communication, reminding me that great architecture is as much about people as it is about buildings.
            </p>
            <p className='text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>
              Beyond the studio, I'm passionate about photography, travel, literature, dancing, music and exploring cities on foot.
              I approach both my creative work and my personal life with the same curiosity — always looking closer, always asking why, always finding beauty in the details.
            </p>
            
            <div className='text-center'>
              <button
                onClick={() => scrollToSection('#contact')}
                className='inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md'
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
