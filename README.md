# 🚀 Vue3 + TailwindCSS 重构 50 个项目挑战

本项目是对 Brad Traversy 的经典挑战项目 [50 Projects in 50 Days](https://github.com/bradtraversy/50projects50days) 的 Vue3 + Tailwind CSS 重构版。

> 💡 原项目使用的是原生 HTML/CSS/JS，本项目将其重构为组件化、现代化的 Vue3 应用，配合 TailwindCSS 实现更高效的 UI 构建。

---

## 📁 项目结构

```bash
50-vue-projects/
├── public/                  # 静态资源
├── src/
│   ├── assets/              # 图片、图标等资源
│   ├── components/          # 公共组件
│   ├── projects/            # 每个项目一个独立目录
│   ├── router/              # 路由配置
│   ├── App.vue              # 根组件
│   └── main.js              # 入口文件
├── vite.config.js           # 构建配置
└── README.md
```

---

## 🛠️ 使用技术

- 💚 [Vue 3](https://vuejs.org/) + Composition API
- 💨 [Tailwind CSS](https://tailwindcss.com/)
- ⚡ [Vite](https://vitejs.dev/) 作为构建工具
- 🧩 按需拆分每个练习为一个 Vue 路由模块

---

## 🚦 使用说明

### 克隆项目

```bash
git clone https://github.com/your-username/50-vue-projects.git
cd 50-vue-projects
```

### 安装依赖

```bash
pnpm install  # 或 yarn / npm install
```

### 启动项目

```bash
pnpm dev  # 启动开发服务器
```

### 构建生产版本

```bash
pnpm build
```

---

## 📦 项目进度

| 编号  | 项目名称        | 状态        | 路由地址                    |
| ----- | --------------- | ----------- | --------------------------- |
| 1     | Expanding Cards | 🚧 开发中   | `/projects/expanding-cards` |
| 2     | Progress Steps  | 🚧 开发中   | `/projects/progress-steps`  |
| 3\~50 | ...             | 🔜 敬请期待 | -                           |

> 🧱 每个项目都将作为独立页面进行展示，可在首页查看项目列表跳转。

---

## 📢 贡献指南

如果你也想参与重构或提交优化：

1. Fork 本项目
2. 提交你的改动（建议一个项目一个 PR）
3. 发起 Pull Request，我们一起让这个项目更好！

---

## 📜 License

MIT License

---

## 🙌 鸣谢

- 原作者：[Brad Traversy](https://github.com/bradtraversy)
