// mui
import { Tooltip } from "@mui/material";

// react
import { FC } from "react";

interface SocialMediaIconProps {
  imgSrc: string;
  title: string;
  website?: string;
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ imgSrc, title, website}) => {
  return (
    <Tooltip title={title} placement="bottom" arrow>
      <div className="flex items-center justify-center h-12 w-12 rounded-full cursor-pointer hover:bg-secondary transition-all ease-linear duration-300">
        <a href={website}>
        <img src={imgSrc} alt=""/>
        </a>
      </div>
    </Tooltip>
  )
};

export default SocialMediaIcon;
