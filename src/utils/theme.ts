const dark = 'dark';
const light = 'light';
const darkCN = 'bp5-dark';

export function currentTheme():SiteTheme {
  return document.body.classList.contains(darkCN) ? dark : light;
}

export function toggleTheme(theme?: SiteTheme) {
  let nextTheme = dark;

  if (theme !== undefined) {
    nextTheme = theme === 'dark' ? dark : light;
  } else {
    const current = currentTheme();
    nextTheme = current === dark ? light : dark;
  }

  if (nextTheme === dark) {
    document.body.classList.add(darkCN);
  } else {
    document.body.classList.remove(darkCN);
  }
}
