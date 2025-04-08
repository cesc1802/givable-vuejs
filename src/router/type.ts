export enum PageKey {
  AccountManagement = "AccountManagementPage",
  ProductManagement = "ProductManagementPage",
}

export const TITLE_MAP: Record<PageKey, string> = {
  [PageKey.AccountManagement]: "Quản lý tài khoản",
  [PageKey.ProductManagement]: "Quản lý vật phẩm",
};
