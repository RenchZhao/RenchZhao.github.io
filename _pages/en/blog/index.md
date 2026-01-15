---
title: "Blog"
layout: custom-archive
permalink: /blog/
author_profile: true
lang: "en"
---

## 快速链接
- [Categories](/blog/categories/)
- [Tags](/blog/tags/)


## All Posts

{% assign posts = site.posts | where: "lang", "en" %}

{% for post in posts %}
  <article class="archive__item">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>{{ post.date | date: "%B %d, %Y" }}</p>
    {% if post.excerpt %}
      <p>{{ post.excerpt }}</p>
    {% endif %}
  </article>
  <hr>
{% endfor %}

{% if posts.size == 0 %}
  <p>No posts yet.</p>
{% endif %}