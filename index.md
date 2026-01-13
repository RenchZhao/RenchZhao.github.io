---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: ""
---

# 你好，我是RenchZhao 👋

一名华南理工大学的**在读硕士研究生**，热爱技术，梦想成为一名AI算法工程师。
我关注人工智能深度学习领域，比如大模型、Agent等技术。在这里，我会分享我的学习笔记、技术博客和研究成果。

## 最新文章

{% for post in site.posts limit:5 %}
-  **[{{ post.title }}]({{ post.url }})**  - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}

## 快速链接

- [我的简历](/cv/)
- [出版物](/publications/)
- [新闻动态](/news/)
- [GitHub](https://github.com/yourusername)

