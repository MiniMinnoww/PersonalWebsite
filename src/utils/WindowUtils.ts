export function dispatchCustomEvent(type: string, detail: any) {
  window.dispatchEvent(new CustomEvent(type, {detail: detail}));
}