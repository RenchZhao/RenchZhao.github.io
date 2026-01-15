---
layout: custom-home
title: ""
author_profile: true
permalink: /
lang: en
---

# Hello, I'm RenchZhao 👋

A **Master's student** at South China University of Technology, passionate about technology and aspiring to become an AI algorithm engineer.
I focus on artificial intelligence and deep learning, such as large language models, Agent technologies. Here, I share my learning notes, technical blogs, and research findings.

## Latest Articles

{% for post in site.posts %}
  {% if post.lang == 'en' or post.path contains 'en/_posts/' %}
-  **[{{ post.title }}]({{ post.url }})**  - {{ post.date | date: "%Y-%m-%d" }}
  {% endif %}
{% endfor %}

## Quick Links

- [My CV](/en/cv/)
- [Publications](/en/publications/)
- [News](/en/news/)
- [Blog](/en/blog/)
- [GitHub](https://github.com/RenchZhao)
