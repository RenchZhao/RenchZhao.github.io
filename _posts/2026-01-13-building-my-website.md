---
layout: single
title: "我如何在一天内用黑客马拉松精神搭建这个网站"
date: 2026-01-13 22:22:00 +0800
categories: 学习笔记
tags: [Jekyll, 博客, Vibe Coding, 前端]
---

本网站源代码已在[github仓库](https://github.com/RenchZhao/RenchZhao.github.io)开源了，欢迎借鉴

## 动机
每当我看到大牛博主，我的师兄还有我的老师拥有自己的个人网页，我就非常羡慕。
做一个自己的网站看起来是一件很酷的事情。仔细想来，这不仅是一种学习内容留痕，帮助更多人学习，更是个人能力展示平台和品牌架构。
习惯建立起来之后有很多输出的博客。可以帮助其他学习者。
同时面试官查看你的博客和网页，就是对你的技术最好的肯定。

但是我一直觉得我的相关技术学的不好，没有开始自己的实践，而是仅仅在远处看看。
直到2026年，Vibe Coding火热了，许多不会编程的人也可以迅速搭起一个网站。
我还有编程技术基础，那就更应该尝试一下了？想到这一点，我尝试改变行为方式，先去做而不是先去学。事实证明这对我来说是更成功的策略。

## 搭建过程
我以黑客马拉松精神在一天之内完成这一个网站的雏形。
或者简单的说，就是心无旁骛地全心全意投入一天时间，尽可能快速完成一个原型。不管技术会不会，先动手去做，在做中学习。
我是从[数字游牧人](https://space.bilibili.com/4848323)视频这里第一次接触到"黑客马拉松"这一精神。
你的潜力像水下的冰山，有时候你并不是做不到，只不过是你没有让脑中的潜意识认为这个任务是可能完成的罢了。
不开始想具体怎么做，你的潜意识会认为这目标是不可能的，因此一直不去做。永远未能开始，又怎么能够完成？

我合作的对象是中国字节跳动公司开发的“扣子空间”Agent与中国阿里巴巴公司的千问AI。
在2026年1月12日晚至2026年1月13日下午的过程中，我们合作完成了这个网站项目，或者说，我在这两个AI的指导下完成了这个项目。
因为我希望作为开发维护者，了解实现的细节，因此我没有让AI完全自主以Agent模式设计所有代码，而是要求它们提供模板，我在上面改进。
因此我花1天时间也许还算久的，如果您只是需要一个网站成品，也许更快，一个上午就行。

此前，我对Jekyll和Ruby语言一无所知。我只有一点点Html和Java Script基础。
"扣子空间"Agent和我交流之后根据我既想放简历又想要贴博客的需求，向我推荐了Ruby语言的Jekyll框架。
Jekyll框架能从MarkDown翻译成Html，让我专注于内容即可。这是很吸引我的，我因此上了这艘船。

其实上手Jekyll框架并不困难，2个小时我就完成了全部功能。
事实证明，即使不会Ruby语言，也不会所有的前端知识，你同样可以在1天内完成这个网站。
时间大头是环境调试，开发的这一天里，有80%时间是环境配置debug，详见下方的踩坑总结部分。

有时候强如扣子AI，也不可能一次性考虑到所有事情。它能ReAct慢慢找到解决方案是最好的，但是这次我没有使用。
因为我想边搭建网站边学习，因此仍然采取自己撰写大部分代码的方式。
不过如果自己搭，还是会有一定的坑会踩到的。我一边学习一边踩坑debug。
如果有bug，我先自己尝试解决，找到解决方案就让我的AI导师判断我的修改是否正确。在debug过程中理解代码是如何工作的。
如果我感觉报的错误是细节问题和扣子AI上下文没这么接近，我就会复制报错信息给千问AI，它也是一个不错的反馈迅速的导师。
还是需要去官网先搜索Quick Start等类似的代码，读懂之后AI判断解决方案，然后有bug再输回给AI进行反馈迭代。

## 踩坑总结
我主要踩了3个坑：include，layout，remote-theme这三个。
如果你没有动手使用Jekyll框架搭建过网站，可能难以理解。建议你先上手尝试过后再看这一部分。

### _config.yml中的include
Jekyll在将MarkDown转换成Html时候默认只搜寻根目录。我听从扣子AI建议用Minimal-Mistakes风格将一些页面放在_page文件夹下面，这导致无法生成_site文件夹下Html时没有被搜寻到，然后页面404。
扣子AI排查了6-7轮才找到这个原因。

### md页面的Front Matter中的Layout
扣子AI的模板代码生成时候有时候我没有给_config.yml中theme的上下文，导致md页面的Front Matter中的Layout是theme中没有定义的。
这导致theme找不到对应的Layout按照无Layout生成,页面是朴素的Html页面，只有内容没有好的组织格式。
后来我自己意识到这个问题，询问扣子AI我的theme有哪些Layout才解决这个问题。

不过后来还有一些内容字体格式等等没解决。我想在theme的Layout上面微调，但是没成功。
扣子AI最后也没有找到解决方案，就是自己写的CSS样式微调的部分可能被theme的CSS覆盖掉。
因此可能还得是全部CSS自己写。

下面列出了我使用的theme:Minimal-Mistakes-Jekyll的各种可用Layout
|场景|推荐Layout|说明|
| ----------- | ----------- | ----------- |
|个人简介、CV、Projects|single|单页内容，带作者头像|
|博客文章列表|archive|时间线样式，适合列表；例如博客首页，显示所有文章|
|首页|home|首页专用布局，支持更多配置|
|分类归档|categories|按分类显示文章，便于读者查看特定分类下的文章|
|标签归档|tags|按标签显示文章，便于读者查看特定标签下的文章|
|欢迎页|splash|大图背景，适合着陆页|
|搜索页|search|搜索功能页面|


### github.io第三方网页部署环境和本地不一样
这个算是较有心理准备而且容易解决的坑了。因为不同机器环境不一样跑不起来的事情简直太多了。
本地的网页调试是正常的，但是传到github就无法build，报错找不到theme。
扣子AI好几轮对话都没能找到真正的问题。我自己搜索官方教程就能很快解决。
原因是我本地调试用theme能够调用本地环境gem加载内容，正确生成网页。
但是在github上不能这样，需要使用remote-theme代替theme。修改其实很容易。

首先Gemfile的gem "jekyll"换成gem "github-pages"加上对应github教程版本；
后面加上gem "jekyll-include-cache", group: :jekyll_plugins即可。
```
gem "github-pages", "~> 232", group: :jekyll_plugins
# gem "jekyll", "~> 4.4.1"
gem "jekyll-include-cache", group: :jekyll_plugins
```

然后_config.yml将theme改成remote_theme。@字符后面是版本号或者是可以追踪到特定提交版本的哈希值。
```
# theme: minimal-mistakes-jekyll
remote_theme: "mmistakes/minimal-mistakes@4.27.3"
```

参考这两个官方教程就能很快掌握：
- [https://docs.github.com/zh/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll](https://docs.github.com/zh/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll)

- [https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)

