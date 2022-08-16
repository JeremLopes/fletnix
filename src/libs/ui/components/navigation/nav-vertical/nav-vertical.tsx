import { NavLink } from "react-router-dom";
import Icon from "../../icon/icon";

export interface NavVerticalProps {
  navigation: { icon: string; link: string }[];
}

export function NavVertical(props: NavVerticalProps) {
  const { navigation } = props;

  return (
    <nav className="h-screen max-h-screen w-[72px] bg-dark-500 border-r border-dark-300 fixed top-0 left-0 flex flex-col justify-between items-center py-3">
      <div>
        <div className="w-10 h-10 bg-dark-100 rounded-full mb-3"></div>
        <div className="flex flex-col gap-1">
          {navigation.map((item) => (
            <NavLink
              to={item.link}
              key={item.link}
              className={({ isActive }) =>
                `${isActive ? "bg-primary-500" : "bg-dark-500"} 
                w-10 h-10 flex justify-center items-center rounded-md text-white hover:bg-primary-100 hover:text-primary-500 transition-colors duration-200`
              }
            >
              <Icon name={item.icon} />
            </NavLink>
          ))}
        </div>
      </div>
      <div className="text-2xl">
        <Icon name="user-line" />
      </div>
    </nav>
  );
}

export default NavVertical;
