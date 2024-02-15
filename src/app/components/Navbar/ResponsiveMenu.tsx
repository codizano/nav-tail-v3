import React from "react";
import Image from "next/image";
// 1.Typescript
type ResponsiveMenuProps = {
  showMenu: boolean;
};
// 2. Creación del componente ResponsiveMenu
const ResponsiveMenu = ({ showMenu }: ResponsiveMenuProps) => {
  return (
    // 3. clase left
    <div
      className={`${
        showMenu ? "left-[0]" : "-left-[100%]"
      } h-screen w-[75%] bg-blue-900 fixed top-0 z-50
transition-all duration-500
pt-24 pb-6 px-8 flex flex-col justify-between text-white`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          <Image
            src="/icons/circle-user.svg"
            alt="user"
            width={35}
            height={35}
          />
          <div className="">
            <h1>Yupock</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li>
              <a href="#">Principal</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Acerca de Nosotros</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>© 2024 All Rights Reserved</h1>
      </div>
    </div>
  );
};
export default ResponsiveMenu;
