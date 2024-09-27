import { Section } from 'astro-boilerplate-components';

import AstroLogo from '../../public/assets/tecnologies/astro.svg';
import CSSLogo from '../../public/assets/tecnologies/css.svg';
import GitLogo from '../../public/assets/tecnologies/git.svg';
import HTMLLogo from '../../public/assets/tecnologies/html.svg';
import JavaScriptLogo from '../../public/assets/tecnologies/javascript.svg';
import NextLogo from '../../public/assets/tecnologies/next.svg';
import ReactLogo from '../../public/assets/tecnologies/react.svg';
import ReduxLogo from '../../public/assets/tecnologies/redux.svg';
import TailwindLogo from '../../public/assets/tecnologies/tailwind.svg';
import TypeScriptLogo from '../../public/assets/tecnologies/typescript.svg';
import ViteLogo from '../../public/assets/tecnologies/vite.svg';

const technologies = [
  {
    name: 'React',
    icon: <img src={ReactLogo.src} alt="React Logo" className="size-10" />,
    link: 'https://react.dev/blog/2023/03/16/introducing-react-dev', // Enlace a la documentación de React
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <img src={TailwindLogo.src} alt="Tailwind CSS Logo" className="size-10" />
    ),
    link: 'https://tailwindcss.com/docs', // Enlace a la documentación de Tailwind CSS
  },
  {
    name: 'Vite',
    icon: <img src={ViteLogo.src} alt="Vite Logo" className="size-10" />,
    link: 'https://vitejs.dev/guide/', // Enlace a la documentación de Vite
  },
  {
    name: 'Next.js',
    icon: <img src={NextLogo.src} alt="Next.js Logo" className="size-10" />,
    link: 'https://nextjs.org/docs', // Enlace a la documentación de Next.js
  },
  {
    name: 'TypeScript',
    icon: (
      <img src={TypeScriptLogo.src} alt="TypeScript Logo" className="size-10" />
    ),
    link: 'https://www.typescriptlang.org/docs/', // Enlace a la documentación de TypeScript
  },
  {
    name: 'JavaScript',
    icon: (
      <img src={JavaScriptLogo.src} alt="JavaScript Logo" className="size-10" />
    ),
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', // Enlace a la documentación de JavaScript
  },
  {
    name: 'Git',
    icon: <img src={GitLogo.src} alt="Git Logo" className="size-10" />,
    link: 'https://git-scm.com/doc', // Enlace a la documentación de Git
  },
  {
    name: 'CSS',
    icon: <img src={CSSLogo.src} alt="CSS Logo" className="size-10" />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', // Enlace a la documentación de CSS
  },
  {
    name: 'HTML',
    icon: <img src={HTMLLogo.src} alt="HTML Logo" className="size-10" />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', // Enlace a la documentación de HTML
  },
  {
    name: 'Redux',
    icon: <img src={ReduxLogo.src} alt="Redux Logo" className="size-10" />,
    link: 'https://redux.js.org/introduction/getting-started', // Enlace a la documentación de Redux
  },
  {
    name: 'Astro',
    icon: <img src={AstroLogo.src} alt="Astro Logo" className="size-10" />,
    link: 'https://astro.build/docs', // Enlace a la documentación de Astro
  },
];

const Technologies = () => (
  <Section>
    <div className="flex flex-wrap justify-center">
      {technologies.map((tech) => (
        <a
          key={tech.name}
          href={tech.link}
          target="_blank" // Abre en una nueva pestaña
          rel="noopener noreferrer" // Mejora la seguridad
          className="m-4 flex size-32 flex-col items-center justify-center rounded-md bg-white p-6 text-black shadow-md transition-transform hover:scale-105 hover:bg-gray-100" // Agregadas propiedades de transición y hover
        >
          {tech.icon}
          <h3 className="mt-2 text-center text-lg font-semibold">
            {tech.name}
          </h3>
        </a>
      ))}
    </div>
  </Section>
);

export { Technologies };
