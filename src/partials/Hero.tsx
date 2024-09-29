import GithubLogo from '../../public/assets/networks/github.svg';
import LinkedinLogo from '../../public/assets/networks/linkedin.svg';
import MailLogo from '../../public/assets/networks/mail.svg';

const Hero = () => (
  <section
    id="about"
    className=" mx-auto flex max-w-screen-lg items-center justify-center rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-6  text-base  text-white"
  >
    <div className="flex flex-col items-center justify-center px-4">
      <div className="mb-1 text-4xl font-bold">
        {' '}
        Hi there, I'm <span className="text-cyan-400">Joseph</span> 👋
      </div>

      <p className="my-4 max-w-lg ">
        {' '}
        I'm a frontend developer specializing in React, passionate about
        building fast and responsive web applications. I've worked on personal
        projects that showcase my skills in modern web development. Check out my{' '}
        <a
          className="text-cyan-400 hover:underline"
          href="https://github.com/Hayai12"
          target="_blank"
          rel="noopener noreferrer"
        >
          projects
        </a>{' '}
        to see what I've created.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://github.com/Hayai12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-8" src={GithubLogo.src} alt="Github icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/joseph-uyana-15b038306/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-8" src={LinkedinLogo.src} alt="Linkedin icon" />
        </a>
        <a
          href="mailto:juyana@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-8" src={MailLogo.src} alt="Linkedin icon" />
        </a>
      </div>
    </div>

    <div className="m-0 flex items-center justify-center p-0">
      <img
        className="h-64 rounded-full"
        src="/assets/images/Joseph2.jpg"
        loading="lazy"
      />
    </div>
  </section>
);

export { Hero };
