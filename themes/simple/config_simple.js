const CONFIG_SIMPLE = {

  LOGO_IMG: '/Logo.webp',
  TOP_BAR: true, // 显示顶栏
  TOP_BAR_CONTENT: process.env.NEXT_PUBLIC_THEME_SIMPLE_TOP_TIPS || 'The best way to predict the future is to create it',
  LOGO_DESCRIPTION: process.env.NEXT_PUBLIC_THEME_SIMPLE_LOGO_DESCRIPTION || '<div>Programer<br/>A Super Cool Daddy<br/>Passion for Life</div>',

  AUTHOR_LINK: process.env.NEXT_PUBLIC_AUTHOR_LINK || '#',

  // 菜单配置
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: false // 显示搜索
}
export default CONFIG_SIMPLE
