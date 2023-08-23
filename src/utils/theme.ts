const dark = 'dark';
const light = 'light';

const html = document.documentElement;

export function currentTheme(): SiteTheme {
  return html.getAttribute('theme') === dark ? dark : light;
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
    html.setAttribute('theme', dark);
  } else {
    html.removeAttribute('theme');
  }
}
