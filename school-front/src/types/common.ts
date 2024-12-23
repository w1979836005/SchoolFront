export interface HeaderMenuItem {
    id: number;            // 菜单项的唯一标识
    label: string;         // 菜单项显示的文本
    link: string;          // 菜单项的链接
    children?: HeaderMenuItem[]; // 可选：子菜单项（用于多级菜单）
}

export interface Header {
    title: string;         // Header 的标题
    menu: HeaderMenuItem[]; // 菜单项数组
}