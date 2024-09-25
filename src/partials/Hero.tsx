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
          <a className="text-cyan-400 hover:underline" href="#projects">
            projects
          </a>{' '}
          to see what I've created.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial src={GithubLogo.src} alt="Github icon" />
          </a>
          <a
            href="https://facebook.com/yourusername"
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
