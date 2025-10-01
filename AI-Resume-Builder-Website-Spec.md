# AI Resume Builder 介绍官网（静态）——Website Spec

> 目标：用 **React + Tailwind CSS + shadcn/ui** 在 Cursor 中快速搭建一页式（Single Page）的静态介绍官网，仅包含展示与外链跳转按钮（CTA），不接后端。

---

## 1) 项目概述
- **产品名称**：Beedo Offical webpage
- **一句话价值**：用 AI 更快写出更专业的简历，并智能匹配职位。
- **主要信息来源**：/README.md（功能、技术栈、结构、部署等）
- **页面类型**：静态落地页（SPA/单页面），无登录、无表单提交，仅展示 + CTA 外链到实际平台
- **目标用户**：找工作/实习的学生与从业者
- **目标动作（CTA）**：
  - 主 CTA：**立即使用**（跳转到真实平台 URL，例如：`https://app.example.com`）
  - 次 CTA：**查看演示**（可留空/锚点到页面 Demo 区域）

---

## 2) 技术与约束
- **框架**：React 19（使用 Vite 初始化）
- **样式**：Tailwind CSS
- **UI 组件**：shadcn/ui（Button、Card、Tabs、Badge 等按需）
- **图标**：lucide-react
- **动效**：Framer Motion（轻度使用）
- **路由**：单页（不强制使用路由库）
- **国际化**：初版中文（可预留英文文案）
- **可访问性**：遵循 shadcn/ui 无障碍实践（语义化结构、可聚焦状态、aria-label）
- **性能**：静态资源打包，首屏轻量；图片懒加载；动效不过度
- **部署**：Vercel / Netlify / GitHub Pages 等静态托管

> 注：如果后续希望做 SSG/SEO 强化，可平滑迁移到 Next.js，但当前按 React + Vite 实现。

---

## 3) 信息架构（单页区块）
1. **Navbar**：左侧 Logo + 名称；右侧锚点导航（功能、职位匹配、界面、技术栈、FAQ）+ 主按钮「立即使用」
2. **Hero 英雄区**：标题、副标题、两枚 CTA（主用、次了解）。右侧产品 Mockup（或渐变玻璃卡片）
3. **功能区（Resume Building）**：四栅格 Card：AI 内容增强、实时预览、多模板、PDF 导出/上传解析

---

## 部署思路
1. **构建项目**：
   ```bash
   npm run build
   ```
   Vite 会生成 `dist/` 文件夹。

2. **选择托管平台**：
   - **Vercel**：一键导入 GitHub 仓库 → 自动部署 → 绑定域名。
   - **Netlify**：拖拽 `dist/` 文件夹 → 自动托管 → 可绑定域名。
   - **GitHub Pages**：启用 Pages → 指向 `dist/` → 自动上线。

3. **推荐路径**：
   - 如果你已有域名 → 用 Vercel/Netlify 绑定域名。
   - 如果仅测试 → GitHub Pages 免费够用。

4. **后续维护**：每次修改代码后 `npm run build` 并推送仓库，托管平台会自动重新部署。
