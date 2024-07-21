import { WebviewWindow } from "@tauri-apps/api/window";

export function openWindow(label: string) {
  const webview = new WebviewWindow(label, {
    url: "index.html",
  });
}
