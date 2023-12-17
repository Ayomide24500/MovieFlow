import { useState } from "react";
import { CiAlignRight, CiPalette, CiText } from "react-icons/ci";
import { TbDashboard } from "react-icons/tb";

const onSateChange = () => {
  const [state, setState] = useState(false);

  if (!document.startViewTransition) {
    setState(!state);
  } else {
    document.startViewTransition(() => {
      setState(!state);
    });
  }

  console.log(state);
};

export const navDatas = [
  {
    text: "Trending",
    icon: <CiText />,
    destination: "/genre",
  },
  {
    text: "Sport",
    icon: <CiPalette />,
    destination: "/text",
  },
  {
    text: "Songs",
    icon: <CiAlignRight />,
    destination: "/genre",
    onClick: () => {
      onSateChange();
    },
  },
];
export const navData = [
  {
    text: "Dashboard",
    content: "Dashboard",
    destination: "/",
    icon: <TbDashboard />,
  },
  {
    text: "Film Page",
    icon: <CiText />,
    destination: "/test",
  },
];
