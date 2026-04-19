export const URLS = {
  auth: 'https://functions.poehali.dev/9bcec818-155c-46d7-b8ac-becf1f5d86c0',
  me: 'https://functions.poehali.dev/74b388f7-8de0-4a77-863b-d17b2932b160',
  signup: 'https://functions.poehali.dev/c6c02d49-5e01-4742-adcb-707fc041740c',
};

export const SESSION_KEY = 'bookline_session';

export function getSession(): string | null {
  return localStorage.getItem(SESSION_KEY);
}

export function saveSession(id: string) {
  localStorage.setItem(SESSION_KEY, id);
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}
