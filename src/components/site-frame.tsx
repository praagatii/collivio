import Cursor from "./cursor";
import MenuPill from "./menu-pill";

function SideRules() {
  return (
    <>
      <div className="pointer-events-none fixed inset-y-0 left-6 z-[90] w-px bg-line/60 md:left-[5%]" />
      <div className="pointer-events-none fixed inset-y-0 right-6 z-[90] w-px bg-line/60 md:right-[5%]" />
    </>
  );
}

export default function SiteFrame() {
  return (
    <>
      <SideRules />
      <Cursor />
      <MenuPill />
    </>
  );
}