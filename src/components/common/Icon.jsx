import {
  lucideIconMap,
  technologyIconMap,
  socialIconMap,
} from "../../utils/icons";

import { CircleDashed } from "lucide-react";

const iconMaps = {
  lucide: lucideIconMap,

  technology: technologyIconMap,
  si: technologyIconMap,

  social: socialIconMap,
  fa6: socialIconMap,
};

function Icon({ name, type = "lucide", size = 20, className = "", ...props }) {
  const IconComponent = iconMaps[type]?.[name] || CircleDashed;

  return <IconComponent size={size} className={className} {...props} />;
}

export default Icon;
