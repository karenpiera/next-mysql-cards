import Image from "next/image";
import { useTheme } from "next-themes";

function DarkModeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleDarkMode = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      className={`${
        currentTheme === "dark"
          ? "bg-black-700 hover:bg-black"
          : "bg-gray-100 hover:bg-gray-300"
      } w-10 h-10 rounded-full flex items-center justify-center`}
      onClick={toggleDarkMode}>
      <Image
        src={currentTheme === "dark" ? "/sun.svg" : "/moon.svg"}
        alt="Dark Mode Toggle"
        width={24}
        height={24}
      />
    </button>
  );
}

export default DarkModeToggle;
