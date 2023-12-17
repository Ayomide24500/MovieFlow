import { useRef, useState } from "react";
import { navData, navDatas } from "./SidebarNavData";
import SideNav from "./SideNav";
import { Nav } from "./Dropdown";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [state, setState] = useState(false);
  const parent = useRef(null);
  const navigate = useNavigate();

  const navigateTo = (destination: string) => {
    navigate(destination);
  };
  return (
    <div>
      {/* <Router> */}
      <div
        ref={parent}
        className="w-[250px] h-screen shadow-lg hidden md:block fixed"
      >
        <div className="w-[95%] pt-10 gap-4">
          <div className="border-b py-2 ml-3">
            {navData.map((props: any) => (
              <SideNav
                icon={props.icon}
                text={props.text}
                present={undefined}
                destination={props.destination}
                onClick={() =>
                  props.destination && navigateTo(props.destination)
                }
              />
            ))}
          </div>
          <div className="border-b py-10 ml-3">
            {navDatas.map((props: any) => (
              <SideNav
                icon={props.icon}
                text={props.text}
                // onClick={props?.onClick}
                present={true}
                destination={props.destination}
                onClick={() =>
                  props.destination && navigateTo(props.destination)
                }
              />
            ))}
          </div>

          {state && (
            <div>
              <Nav text="Tabler" />
              <Nav text="Tabler" />
              <Nav text="Tabler" />
            </div>
          )}
        </div>
      </div>
      {/* </Router> */}
    </div>
  );
};

export default Sidebar;
