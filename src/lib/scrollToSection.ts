export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (!section) return false;

  window.history.replaceState(window.history.state, "", `#${id}`);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
};
