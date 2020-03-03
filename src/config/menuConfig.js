const menuList = [
  {
    title: '首页', // 菜单标题名称
    key: '/home', // 对应的path
    icon: 'home', // 图标名称
    public: true, // 公开的
  },
  {
    title: '商品',
    key: '/products',
    icon: 'AppstoreOutlined',
    children: [ // 子菜单列表
      {
        title: '品类管理',
        key: '/category',
        icon: 'AppstoreOutlined'
      },
      {
        title: '商品管理',
        key: '/product',
        icon: 'AppstoreOutlined'
      },
    ]
  },

  {
    title: '用户管理',
    key: '/user',
    icon: 'AppstoreOutlined'
  },
  {
    title: '角色管理',
    key: '/role',
    icon: 'AppstoreOutlined',
  },

  {
    title: '图形图表',
    key: '/charts',
    icon: 'AppstoreOutlined',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar',
        icon: 'AppstoreOutlined'
      },
      {
        title: '折线图',
        key: '/charts/line',
        icon: 'AppstoreOutlined'
      },
      {
        title: '饼图',
        key: '/charts/pie',
        icon: 'AppstoreOutlined'
      },
    ]
  },
]

export default menuList