"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPenNib } from '@fortawesome/free-solid-svg-icons'

export default function InfoCardSmall(
  {
    iconName
  }: {
    iconName: string;
  }
) {
  const handleClick = () => {
    const urls: { [key: string]: string } = {
      github: `https://github.com/kmankan`,
      linkedin: `https://www.linkedin.com/in/mkankanamge/`,
      twitter: `https://twitter.com/mahlenr`,
      email: `mailto:malin.kankanamge@gmail.com`,
      blog: `https://mkan.xyz/`,
      calendar: 'https://cal.com/malin-kankanamge-vpw5pl'
    };
    window.open(urls[iconName], '_blank');
  }
  return (
    <div
      id="info-card"
      className="relative w-24 h-24 rounded-xl bg-slate-100 pt-7 shadow-lg border-2 border-gray-800
        transition-all duration-200 
        hover:scale-105 hover:shadow-md 
        active:scale-95 active:bg-gray-100 
        cursor-pointer"
      onClick={handleClick}>
      <div className="">
        <div className="flex items-center justify-center">
          {iconName === 'github' && <FontAwesomeIcon icon={faGithub} />}
          {iconName === 'linkedin' && (
            <div className="">
              <img
                src="https://static.licdn.com/aero-v1/sc/h/eahiplrwoq61f4uan012ia17i"
                alt="linkedin.com"
                className="w-8 h-8" // Increased size to match container
              />
            </div>
          )}
          {iconName === 'twitter' && <FontAwesomeIcon icon={faXTwitter} />}
          {iconName === 'email' && <FontAwesomeIcon icon={faEnvelope} size="2x" />}
          {iconName === 'blog' && <FontAwesomeIcon icon={faPenNib} />}
          {iconName === 'calendar' && (
            <div className="">
              <img
                src="https://cal.com/apple-touch-icon.png"
                alt="Cal.com"
                className="w-8 h-8 rounded-sm" // Increased size to match container
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
