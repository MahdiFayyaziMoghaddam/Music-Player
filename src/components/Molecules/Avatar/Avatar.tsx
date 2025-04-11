import { Avatar as A, Divider, Dropdown, Select, Space } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import Button from "../../Atoms/Button/Button";
import { TbLogin } from "react-icons/tb";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Menu from "../../Atoms/Menu/Menu";

interface IAvatarProps {
  size?: number;
  src?: string;
}

export default function Avatar({ size = 44, src }: IAvatarProps) {
  const menuItems = [
    { title: "Panel" },
    { title: "Playlists" },
    { title: "Favorite", icon: <MdOutlineFavoriteBorder /> },
    { title: "Sign In", icon: <TbLogin /> },
  ];
  return (
    <>
      <Menu items={menuItems} className="mt-1 mr-6 ">
        <Button
          variant="dark"
          className="p-0! rounded-full! border-primary active:opacity-100!"
        >
          <A
            size={size}
            icon={<AiOutlineUser />}
            style={{
              background: "transparent",
              color: "var(--color-dark-200)",
              fontSize: `${(+size / 9) * 5.5}px`,
              cursor: "pointer",
            }}
            src={src}
          />
        </Button>
      </Menu>
    </>
  );
}
