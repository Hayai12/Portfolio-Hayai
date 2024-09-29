import BlogCard from './BlogCard';

const ProjectList = () => (
  <section id="projects" className="mx-auto max-w-screen-lg px-3 py-6">
    <div className="flex flex-col gap-6">
      <BlogCard
        imageUrl="/assets/images/jamming.png"
        title="Jamming"
        description="A fun and interactive application that lets you discover and save your favorite songs from Spotify, enhancing your music experience."
        link="https://jamming-hayai.netlify.app/"
        tags={['React', 'Redux', 'Tailwind CSS', 'TypeScript', 'Vite']}
        date="2 months ago"
      />
      <BlogCard
        imageUrl="/assets/images/reddit.png"
        title="Reddit-API"
        description="An engaging platform that connects to Reddit, allowing you to explore various subreddits and dive into trending posts based on your interests."
        link="https://reddit-appi.netlify.app/"
        tags={['React', 'Redux', 'Tailwind CSS', 'TypeScript']}
        date="3 months ago"
      />
      <BlogCard
        imageUrl="/assets/images/Tetris.png"
        title="Tetris"
        description="A classic Tetris game that brings back nostalgia, challenging you to fit falling blocks together and clear lines for a high score."
        link="https://tetris-hayai.netlify.app/"
        tags={['HTML', 'CSS', 'JavaScript']}
        date="8 months ago"
      />
    </div>
  </section>
);

export { ProjectList };
