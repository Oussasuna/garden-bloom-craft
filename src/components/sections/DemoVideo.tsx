import React from 'react';

const DemoVideo = () => {
  return (
    <section className="bg-white flex flex-col items-center justify-center py-8">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="w-full max-w-[800px]">
          <div className="relative overflow-hidden rounded-[24px] shadow-soft" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/cBSt6MmDXXY?rel=0&controls=1&autoplay=0&mute=1&start=0"
              title="Introducing Firstresume - The AI Job Hunt Agent"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
