---
title: "博客"
layout: custom-archive
permalink: /blog/
author_profile: true
lang: "zh"
---

## 快速链接
- [内容类别](/blog/categories/)
- [标签分类](/blog/tags/)

## 所有文章

{% assign posts = site.posts | where: "lang", "zh" %}

{% for post in posts %}
  <article class="archive__item">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>{{ post.date | date: "%Y年%m月%d日" }}</p>
    {% if post.excerpt %}
      <p>{{ post.excerpt }}</p>
    {% endif %}
  </article>
  <hr>
{% endfor %}

{% if posts.size == 0 %}
  <p>暂时还没有文章。</p>
{% endif %}