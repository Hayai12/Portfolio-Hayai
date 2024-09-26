import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

import GithubLogo from '../../public/assets/networks/github.svg';
import LinkedinLogo from '../../public/assets/networks/linkedin.svg';

const Hero = () => (
  <Section>
    {' '}
    {/* Usa la propiedad id aquí */}
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Joseph</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a frontend developer specializing in React, passionate about
          building fast and responsive web applications. I've worked on personal
          projects that showcase my skills in modern web development. Check out
          my{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://github.com/Hayai12"
          >
            projects
          </a>{' '}
          to see what I've created.
        </>
      }
      avatar={
        <img
          className="h-80 rounded-full"
          src="/assets/images/Joseph2.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://github.com/Hayai12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial src={GithubLogo.src} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-uyana-15b038306/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial src={LinkedinLogo.src} alt="Linkedin icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
