# 电影群录屏整理 · 第一批

本批包含 103 条影视记录，29 条带完整资源地址，共 30 个影视资源链接；另有 1 个文档合集入口和 3 条待核记录。

录屏约14分9秒。详细抽取范围与限制见 JSON 的 source。没有打开网盘验证有效性；群友反馈内容不符/失效已分别标为 reported_mismatch / reported_unavailable。仅有片名的记录不补造链接。

## 给 DS 的使用说明

1. 网站点击“导入片单”，选择 movie-group-import-20261119.json。
2. source_notes 是群友说法，不能放进“我的影评”。个人 review/rating/status 已留空或设为默认。
3. 完整保留 evidence、needs_review、resource verification 和资源来源时间；显示问题链接标记。
4. 同片多条资源已合并；未知片名的链接在 pending_items，不与邻近标题强行绑定。合集索引在 resource_collections。
5. 后续文件夹继续增量合并，按URL去重，保留个人影评与评分。
6. source-code 中附原网站第一版（无账户、无云同步，笔记存浏览器）；本包不代表网站已上线。部署由 DS 处理。

## 文件

- movie-group-import-20261119.json：网站导入数据，主交付。
- movie-group-catalog-20261119.csv：人工检查清单。
- film-notebook.html：可直接用浏览器打开的原网站，选择JSON导入；AI接口功能需DS部署后接通。
- source-code：网页、服务端与构建脚本。

当前网站v1会忽略部分来源扩展字段；DS应接入这些字段再导出，避免来源丢失。JSON主文件应保留作为原始导入备份。
