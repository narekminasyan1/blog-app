import Buttons from "./components/Buttons";
import Logo from "./components/Logo";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-4 py-[12px]">
      <Logo />
      <Buttons />
    </header>
  )
}

export default Header
