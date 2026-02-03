import Image from "next/image";
import { SiAxios, SiDocker, SiStripe, SiDaisyui } from "react-icons/si";

export const SkillIcon = ({ icon, name, className }) => {
  if (!icon) return null;

  // If icon is a path to an image
  if (icon.startsWith("/") || icon.startsWith("http")) {
    return (
      <Image
        src={icon}
        alt={name}
        width={32}
        height={32}
        className={className}
      />
    );
  }

  // Map string names to React Icons
  const iconMap = {
    SiAxios: <SiAxios color="#5A29E4" size={32} />,
    SiStripe: <SiStripe color="#635BFF" size={30} />,
    SiDocker: <SiDocker color="#2496ED" size={32} />,
    SiDaisyui: <SiDaisyui size={32} />,
  };

  if (iconMap[icon]) {
    return <div className={className}>{iconMap[icon]}</div>;
  }

  return null;
};
