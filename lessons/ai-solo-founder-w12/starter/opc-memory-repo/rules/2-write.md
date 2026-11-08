# 第 2 步 · 生成：公众号文章 + 网页

## 先读
- `topics/<日期>.md` 的第 1 名。**第 1 步的状态不是 done，就不要做这一步**，回答 skipped。
- `memory/brand.md`（语气、不能说的话）、`memory/past-posts/`（我的经历和写法）
- 题目的来源 URL，重新打开核对事实

## 要写三个文件
1. `drafts/wechat/<日期>-<短名>.md`：公众号文章正文
   - 开头第一段直接给结论
   - 每个事实性说法后面写来源
   - 至少一处我自己的经历（从 past-posts 和 brand 里找，不许编）
   - 结尾一句话引导读者来找我，不承诺结果
2. `drafts/wechat/<日期>-<短名>.html`：同一篇文章的公众号排版版
   - 只用 `<section> <p> <h2> <strong> <ul> <li> <img>`
   - 样式全部写在标签的 style 里（例如 `<p style="font-size:16px;line-height:1.8;color:#333">`），不用 `<style>` 和 class，这样粘贴进公众号编辑器格式不会乱
3. `site/<短名>.html`：网页版本
   - 完整 HTML 页面，标题写清楚回答的是哪个问题
   - 内容和公众号版一致，文末链接到 brand.md 里的产品页

## 状态
- done：三个文件都写了
- skipped：第 1 步不是 done
- needs-human：核对时发现来源说法和题目对不上，写清是哪一句
