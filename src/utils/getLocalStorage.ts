export function getLocalStorage() {
  try {
    const localStorage = window.localStorage;
    const temp = "__storage_test__";
    localStorage.setItem(temp, temp);
    localStorage.removeItem(temp);
    return localStorage;
  } catch {
    return undefined;
  }
}
