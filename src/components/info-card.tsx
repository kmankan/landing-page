"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPenNib } from '@fortawesome/free-solid-svg-icons'


type IconComponent = React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<'svg'> & {
    'aria-hidden'?: boolean;
    'data-state'?: string;
    children?: never;
  }
>;

export default function InfoCard(
  {
    title,
    handle,
    iconName
  }: {
    title: string;
    handle: string;
    iconName: string;
  }
) {
  const handleClick = () => {
    const urls: { [key: string]: string } = {
      github: `https://github.com/kmankan`,
      linkedin: `https://www.linkedin.com/in/mkankanamge/`,
      twitter: `https://twitter.com/mahlenr`,
      email: `mailto:malin.kankanamge@gmail.com`
    };
    window.open(urls[iconName], '_blank');
  }
  return (
    <div
      id="info-card"
      className="relative w-80 h-24 rounded-xl bg-white p-6 shadow-lg border-2 border-gray-800
        transition-all duration-200 
        hover:scale-105 hover:shadow-md 
        active:scale-95 active:bg-gray-100 
        cursor-pointer"
      onClick={handleClick}>
      <div className="flex flex-row absolute top-6 left-6 gap-4 items-center">
        <div className="flex border-2 border-gray-800 rounded-full p-2 ">
          {iconName === 'github' && <FontAwesomeIcon icon={faGithub} />}
          {iconName === 'linkedin' && <FontAwesomeIcon icon={faLinkedin} />}
          {iconName === 'twitter' && <FontAwesomeIcon icon={faXTwitter} />}
          {iconName === 'email' && <FontAwesomeIcon icon={faEnvelope} />}
          {iconName === 'blog' && <FontAwesomeIcon icon={faPenNib} />}
        </div>
        <div className="flex">
          {handle}
        </div>
      </div>
    </div>
  );
}
