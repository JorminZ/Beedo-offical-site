# Beedo Official Webpage

这是一个基于 React + Vite + Tailwind CSS 构建的静态官网项目。

## 技术栈

- **React 18** - 前端框架
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **shadcn/ui** - UI 组件库（待安装）
- **lucide-react** - 图标库
- **framer-motion** - 动画库

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
src/
├── App.jsx          # 主应用组件
├── main.jsx         # 应用入口
└── index.css        # 全局样式
```

## 部署

项目支持部署到以下平台：

- **Vercel** - 推荐，一键部署
- **Netlify** - 拖拽 dist 文件夹
- **GitHub Pages** - 免费静态托管

构建后的文件在 `dist/` 目录中。

