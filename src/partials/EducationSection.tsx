import React from 'react';

import companyLogo from '../../public/assets/images/TEUNO.jpg';

interface Job {
  title: string;
  description: string;
  link: string;
}

interface EducationSectionProps {
  title: string;
  description: string;
  linkText: string;
  jobs: Job[];
  companyName: string;
}

const EducationSection: React.FC<EducationSectionProps> = ({
  title,
  description,
  linkText,
  jobs,
  companyName,
}) => {
  return (
    <section id="education" className="flex justify-center">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-10">
        <div className="grid w-full grid-cols-1 gap-y-6 lg:grid-cols-2 lg:items-center lg:gap-x-10">
          <div className="mx-auto max-w-lg text-center lg:flex lg:max-w-none lg:items-center lg:justify-between lg:space-x-8 lg:text-left">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
              <p className="mt-4 text-gray-600">{description}</p>
              <div className="mt-4 flex items-center justify-center lg:justify-start">
                <img
                  src={companyLogo.src}
                  alt={`${companyName} Logo`}
                  className="mr-2 size-8"
                />
                <p className="text-lg font-semibold">{companyName}</p>
              </div>
              <a
                href="https://www.linkedin.com/in/joseph-uyana-15b038306"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                {linkText}
              </a>
            </div>

            <div className="mt-8 lg:mt-0 lg:flex lg:w-1/2 lg:justify-end lg:pl-8">
              <img
                src="assets/images/ciberseguridad.png"
                alt="Demostración de trabajo"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, index) => (
              <a
                key={index}
                className="block rounded-xl border border-gray-100 p-6 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ minWidth: '200px' }}
              >
                <h2 className="mt-2 font-bold">{job.title}</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  {job.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
