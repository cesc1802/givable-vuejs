import { PageKey, TITLE_MAP } from "@/router/type";

export const total = (a: string, b: string) => {
  return a + b;
};

export function getPageTitle(pageKey: string): string {
  return TITLE_MAP[pageKey as PageKey] || "Trang không xác định";
}
