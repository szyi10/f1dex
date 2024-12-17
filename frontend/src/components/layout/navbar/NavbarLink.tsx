import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface Props {
  label: string;
  href: string;
  icon: string;
  disabled: boolean;
}

const NavbarLink = ({ data }: { data: Props }) => {
  if (data.disabled) {
    data.href = "/";
  }

  return (
    <Link
      to={data.href}
      className={twMerge(
        "group/navlink relative flex items-center h-full px-5",
        data.disabled && " cursor-not-allowed"
      )}
    >
      <p
        className={twMerge(
          "font-medium transition-colors group-hover/navlink:text-blue-500",
          data.disabled &&
            "text-neutral-400 group-hover/navlink:text-neutral-300"
        )}
      >
        {data.label}
      </p>
      <div
        className={twMerge(
          "absolute bottom-0 left-0 right-0 h-1 rounded-xl bg-blue-500 transition-opacity opacity-0 group-hover/navlink:opacity-100",
          data.disabled && "bg-neutral-300"
        )}
      ></div>
    </Link>
  );
};

export default NavbarLink;
