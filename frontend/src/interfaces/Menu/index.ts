export interface MenuListSubItem {
  id: number | string;
  title: string;
  url: string;
}

export interface MenuListItem {
  id: number | string;
  title: string;
  url: string;
  subMenuLinks: MenuListSubItem[] | null;
}