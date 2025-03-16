import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  link?: string;
}

export function ProjectCard({ title, description, images, technologies, link }: ProjectProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-white/5 transition-all duration-300 hover:bg-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${title} screenshot ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            } ${isHovered ? 'scale-105' : 'scale-100'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="relative p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="text-sm text-white/60 mb-4">{description}</p>
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 -m-2 text-white/60 hover:text-white transition-colors"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2.5 py-1 bg-white/5 rounded-full text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}