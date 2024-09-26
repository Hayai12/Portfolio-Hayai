import React from 'react';

interface Job {
  title: string;
  description: string;
  link: string; // Añadir la propiedad link para el enlace
}

interface EducationSectionProps {
  title: string;
  description: string;
  linkText: string; // Para el botón de LinkedIn
  jobs: Job[]; // Cambiar el tipo de jobs para incluir enlaces
}

const EducationSection: React.FC<EducationSectionProps> = ({
  title,
  description,
  linkText,
  jobs,
}) => {
  return (
    <section className="flex justify-center">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-10">
        <div className="grid w-full grid-cols-1 gap-y-6 lg:grid-cols-2 lg:items-center lg:gap-x-10">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left">
            <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="mt-4 text-gray-600">{description}</p>
            <a
              href="https://www.linkedin.com/in/joseph-uyana-15b038306" // Cambia esto por tu URL de LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              {linkText}
            </a>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, index) => (
              <a
                key={index}
                className="block rounded-xl border border-gray-100 p-6 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href={job.link} // Usa el enlace correspondiente
                target="_blank" // Abre en una nueva pestaña
                rel="noopener noreferrer" // Mejora la seguridad
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
