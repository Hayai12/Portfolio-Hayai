import { Section } from 'astro-boilerplate-components';

import AstroLogo from '../../public/assets/tecnologies/astro.svg'; // Asegúrate de tener este logo
import CSSLogo from '../../public/assets/tecnologies/css.svg'; // Asegúrate de tener este logo
import GitLogo from '../../public/assets/tecnologies/git.svg'; // Asegúrate de tener este logo
import HTMLLogo from '../../public/assets/tecnologies/html.svg'; // Asegúrate de tener este logo
import JavaScriptLogo from '../../public/assets/tecnologies/javascript.svg';
import NextLogo from '../../public/assets/tecnologies/next.svg';
import ReactLogo from '../../public/assets/tecnologies/react.svg';
import ReduxLogo from '../../public/assets/tecnologies/redux.svg'; // Asegúrate de tener este logo
import TailwindLogo from '../../public/assets/tecnologies/tailwind.svg';
import TypeScriptLogo from '../../public/assets/tecnologies/typescript.svg';
import ViteLogo from '../../public/assets/tecnologies/vite.svg';

const technologies = [
  {
    name: 'React',
    icon: <img src={ReactLogo.src} alt="React Logo" className="size-10" />,
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <img src={TailwindLogo.src} alt="Tailwind CSS Logo" className="size-10" />
    ),
  },
  {
    name: 'Vite',
    icon: <img src={ViteLogo.src} alt="Vite Logo" className="size-10" />,
  },
  {
    name: 'Next.js',
    icon: <img src={NextLogo.src} alt="Next.js Logo" className="size-10" />,
  },
  {
    name: 'TypeScript',
    icon: (
      <img src={TypeScriptLogo.src} alt="TypeScript Logo" className="size-10" />
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <img src={JavaScriptLogo.src} alt="JavaScript Logo" className="size-10" />
    ),
  },
  {
    name: 'Git',
    icon: <img src={GitLogo.src} alt="Git Logo" className="size-10" />,
  },
  {
    name: 'CSS',
    icon: <img src={CSSLogo.src} alt="CSS Logo" className="size-10" />,
  },
  {
    name: 'HTML',
    icon: <img src={HTMLLogo.src} alt="HTML Logo" className="size-10" />,
  },
  {
    name: 'Redux',
    icon: <img src={ReduxLogo.src} alt="Redux Logo" className="size-10" />,
  },
  {
    name: 'Astro',
    icon: <img src={AstroLogo.src} alt="Astro Logo" className="size-10" />,
  },
];

const Technologies = () => (
  <Section title="Technologies I Use">
    <div className="flex flex-wrap justify-center">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="m-4 flex size-32 flex-col items-center justify-center rounded-md bg-white p-6 text-black shadow-md" // Tamaño ajustado
        >
          {tech.icon}
          <h3 className="mt-2 text-center text-lg font-semibold">
            {tech.name}
          </h3>
        </div>
      ))}
    </div>
  </Section>
);

export { Technologies };
