"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function InfoCardLarge(
  {
    handle,
    iconName
  }: {
    handle?: string;
    iconName: string;
  }
) {
  const handleClick = () => {
    const urls: { [key: string]: string } = {
      github: `https://github.com/kmankan`,
      linkedin: `https://www.linkedin.com/in/mkankanamge/`,
      twitter: `https://twitter.com/mahlenr`,
      email: `mailto:malin.kankanamge@gmail.com`,
      blog: `https://mkan.xyz/`
    };
    window.open(urls[iconName], '_blank');
  }
  return (
    <div
      id="info-card"
      className="relative w-80 h-24 rounded-xl bg-slate-100 p-6 shadow-lg border-2 border-gray-800
        transition-all duration-200 
        hover:scale-105 hover:shadow-md 
        active:scale-95 active:bg-gray-100 
        cursor-pointer"
      onClick={handleClick}>
      <div className="flex flex-row absolute gap-4 items-center">
        <div className="flex  items-center justify-center">
          {iconName === 'github' && <FontAwesomeIcon icon={faGithub} className="w-10 h-10" />}
          {iconName === 'twitter' && <FontAwesomeIcon icon={faXTwitter} className="w-10 h-10" />}
          {iconName === 'blog' && (
            <img
              src="https://mkan.xyz/static/icon.png"
              alt="mkan.xyz icon"
              className="w-10 h-10 object-contain border-2"
            />
          )}
        </div>
        <div className="flex">
          {handle}
        </div>
      </div>
    </div>
  );
}
