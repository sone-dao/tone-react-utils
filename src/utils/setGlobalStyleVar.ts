export const setGlobalStyleVar = (key: string, value: string) =>
  document.documentElement.style.setProperty(`--${key}`, value)

export default setGlobalStyleVar
