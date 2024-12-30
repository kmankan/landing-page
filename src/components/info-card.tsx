"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


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
  //const { theme } = useTheme();
  return (
    <div id="info-card" className="relative w-72 h-36 rounded-xl bg-white p-6 shadow-lg border-2 border-gray-800">
      <div className="flex flex-row absolute top-6 left-6 gap-4 items-center">
        <div className="flex border-2 border-gray-800 rounded-full p-2">
          {iconName === 'github' && <FontAwesomeIcon icon={faGithub} />}
          {iconName === 'linkedin' && <FontAwesomeIcon icon={faLinkedin} />}
          {iconName === 'twitter' && <FontAwesomeIcon icon={faXTwitter} />}
          {iconName === 'email' && <FontAwesomeIcon icon={faEnvelope} />}
        </div>
        <div className="flex">
          {title}
        </div>
      </div>
      <div className="absolute bottom-6 left-6 p-2">
        <p className="text-gray-800">{handle}</p>
      </div>
    </div>
  );
}
