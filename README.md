# 电影品鉴官 · 我的电影手记

收藏好电影，留住看完的那一刻。片单、资源入口与影评，打开即用。

## 👉 点击这里打开网站

**[https://wangwang041030-svg.github.io/film-notebook/](https://wangwang041030-svg.github.io/film-notebook/)**

> 也可以点仓库页面右侧 **About** 区域的 **Website** 链接，效果相同。

## 现在里面有什么

录屏整理的第一批 + 手动追加的片单已内置，打开即可看到 **112 部影视记录**：

| 项目 | 数量 |
|---|---|
| 影视记录 | 112 条 |
| 带资源链接的记录 | 29 条 |
| 资源链接总数 | 30 条 |
| 资源索引入口（合集文档） | 1 个 |
| 待核条目（片名未确认） | 3 条 |

- **无海报的影片不再显示空白色块**，自动落到下方「无海报 · 列表视图」里，以文字行展示片名、年份、状态与入口。
- 新增的 9 条手动片单：白蛇三部曲（缘起 2019 / 青蛇劫起 2021 / 浮生 2024）、武林外传、明日战记 2022、731、挽救计划、好好先生、从21世纪安全撤离 2024。
- 每条记录都保留**来源备注**（群友说法，与「我的影评」严格分开）与**待核事项**。
- 只有片名、没有链接的记录显示「仅片名 · 待补链接」，不补造地址。
- 资源链接标注「未核验」，网盘有效性未逐一打开验证。

## 功能

- **片单浏览**：全部 / 想看 / 已看 / 影评四个视图，按类型筛选，按最近添加、年份、评分、片名排序。
- **搜索**：片名、外文名、导演、影评全文搜索。
- **电影手记**：收藏状态、10 分制评分、观看日期、影评正文；可打开资源链接、复制提取码。
- **导入 / 备份**：右上角「导入片单」读入新的 JSON（同名同年自动合并、链接去重、保留已有影评）；页脚「导出备份」下载 JSON，「导出影评」导出 Markdown。
- **影评整理**：可复制整理指令到你常用的 AI 网页；已保存的整理手记单独存放，原始影评不动。

## 数据保存位置

片单、影评、评分、整理手记都保存在**当前浏览器 localStorage**（键名 `film-notebook-v1`），不上传服务器，其他访客看不到你的笔记。清理浏览器数据会丢失，换设备前请先「导出备份」，到新设备再「导入片单」。

## 目录结构

```
index.html                        已构建的单文件站点（GitHub Pages 入口）
data/movie-group-import-20261119.json   主交付数据（导入用的原始备份）
data/movie-group-catalog-20261119.csv   人工检查清单
data/DS-handoff.md                本批抽取说明与限制
source-code/web/                  页面模板 index.html 与脚本 app.js
source-code/worker.js             Cloudflare Worker 版（含 /api/organize 同源接口）
source-code/scripts/build.mjs     构建脚本：把 app.js 内联进 index.html
source-code/tests/site.test.mjs   自动化测试
```

## 本地开发

需要 Node.js 20+，无第三方依赖。

```sh
cd source-code
npm run build        # 生成 dist/server/index.js（Worker 版）
npm test             # 运行自动化检查
node scripts/preview.mjs   # 本地预览 http://localhost:4173
```

修改数据后重新构建单文件站点的办法：编辑 `source-code/web/app.js` 顶部的 `EMBEDDED_MOVIES`，然后执行

```sh
node -e "const fs=require('fs');fs.writeFileSync('index.html',fs.readFileSync('source-code/web/index.html','utf8').replace('/*APP_SCRIPT*/',()=>fs.readFileSync('source-code/web/app.js','utf8')))"
```

## 关于 AI 整理功能

当前页面是**纯静态部署**（GitHub Pages），没有服务端转发接口，因此「开始整理」会提示改用「复制指令，去 AI 网页整理」。若需要同源代理，可把 `source-code/worker.js` 部署到 Cloudflare Workers（`/api/organize` 只转发到 DeepSeek / OpenAI / 硅基流动，密钥不入库、不落盘）。

## 说明

- 群友评论写在「来源备注」，不是个人观后感；`review` 初始为空、`rating` 为 0。
- 影视信息与 TMDB 无隶属或认证关系；海报缺失时显示文字封面。
- 后续录音频或新录屏，继续按 URL 去重增量合并，不覆盖已有的 review / rating / status。
