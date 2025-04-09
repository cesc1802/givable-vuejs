const STORAGE_KEY = "theme"; // lưu vào localStorage key 'theme'

export const useDarkMode = () => {
  const isDark = ref(localStorage.getItem(STORAGE_KEY) === "dark");

  const toggleDark = () => {
    isDark.value = !isDark.value;
    applyTheme();
  };

  const applyTheme = () => {
    const root = document.documentElement;
    if (isDark.value) {
      root.classList.add("dark");
      localStorage.setItem(STORAGE_KEY, "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem(STORAGE_KEY, "light");
    }
  };

  watchEffect(() => {
    applyTheme();
  });

  return { isDark, toggleDark };
};
