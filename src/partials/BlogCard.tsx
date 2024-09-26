import React from 'react';

interface BlogCardProps {
  imageUrl: string;
  date: string; // Se espera un formato legible como "2 months ago"
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  date,
  title,
  description,
  link,
  tags,
}) => {
  const tagColors: { [key: string]: string } = {
    TypeScript: 'border-blue-500',
    Astro: 'border-purple-600',
    Next: 'border-gray-800',
    React: 'border-teal-500',
    Vite: 'border-orange-400',
    JavaScript: 'border-yellow-500',
    HTML: 'border-red-500',
    Tailwind: 'border-green-500',
    CSS: 'border-blue-400',
    Git: 'border-black',
    GitHub: 'border-gray-600',
  };

  return (
    <a
      href={link}
      target="_blank" // Abre en una nueva pestaña
      rel="noopener noreferrer" // Mejora la seguridad
      className="flex overflow-hidden rounded-lg shadow transition hover:shadow-lg" // Mueve la clase a la etiqueta <a>
    >
      <div className="w-3/6 overflow-hidden">
        <img alt={title} src={imageUrl} className="w-full object-cover" />
      </div>
      <div className="w-3/6 bg-white p-4 sm:p-6">
        <time className="block text-xs text-gray-500">{date}</time>
        <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {description}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`border ${
                tagColors[tag] || 'border-gray-300'
              } rounded-full px-2 py-0.5 text-xs font-semibold text-zinc-600`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
