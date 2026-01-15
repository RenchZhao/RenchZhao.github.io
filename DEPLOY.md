# GitHub Pages 部署配置指南

## 问题描述

使用 GitHub Pages 默认的 Jekyll 构建环境时，polyglot 插件无法正常工作，导致英文页面无法生成在 `/en/` 目录下。

## 解决方案

使用 GitHub Actions 自定义构建流程，确保使用正确的 Ruby 环境和插件。

## 配置步骤

### 1. 确保 workflow 文件已创建

检查 `.github/workflows/jekyll.yml` 文件是否存在。这个文件定义了自定义构建流程。

### 2. 配置 GitHub Pages 使用 GitHub Actions

1. 打开 GitHub 仓库页面
2. 点击 **Settings** > **Pages**
3. 在 **Build and deployment** 部分：
   - **Source**: 选择 "GitHub Actions"（而不是 "Deploy from a branch"）
4. 保存设置

### 3. 提交并推送 workflow 文件

```bash
git add .github/workflows/jekyll.yml
git commit -m "Add GitHub Actions workflow for Jekyll build"
git push origin main
```

### 4. 验证部署

1. 推送后，GitHub Actions 会自动触发构建
2. 查看构建进度：
   - 打开 GitHub 仓库页面
   - 点击 **Actions** 标签
   - 查看 "Deploy Jekyll site to Pages" 工作流
3. 构建成功后，访问网站验证：
   - 中文首页: `https://renchzhao.github.io/`
   - 英文首页: `https://renchzhao.github.io/en/`
   - 中文简历: `https://renchzhao.github.io/cv/`
   - 英文简历: `https://renchzhao.github.io/en/cv/`

## 工作原理

GitHub Actions workflow 会：

1. **检出代码**: 获取最新的仓库代码
2. **设置 Ruby 环境**: 安装指定版本的 Ruby 和 bundler
3. **安装依赖**: 运行 `bundle install` 安装所有 gem 包，包括 polyglot
4. **构建站点**: 运行 `bundle exec jekyll build` 构建静态网站
5. **部署**: 将构建结果上传到 GitHub Pages

## 故障排除

### 构建失败

如果构建失败：

1. 查看 Actions 日志，找出错误信息
2. 确保 Gemfile 中包含了所有必要的插件
3. 确保 _config.yml 配置正确

### 页面未生成

如果某些页面未生成：

1. 检查页面的 Front Matter 是否包含 `lang` 属性
2. 检查 permalink 配置是否正确（不应包含语言前缀）
3. 检查文件路径是否正确

### 构建失败：nokogiri 版本找不到

**错误信息**：
```
Your bundle is locked to nokogiri (1.19.0-x86_64-linux) from rubygems repository
https://mirrors.aliyun.com/rubygems/ or installed locally, but that version can
no longer be found in that source.
```

**解决方案**：

在本地删除并重新生成 Gemfile.lock：

```bash
# 删除 Gemfile.lock
rm Gemfile.lock

# 重新生成
bundle install

# 提交更改
git add Gemfile.lock
git commit -m "Update Gemfile.lock to fix nokogiri dependency"
git push origin main
```

### 构建冲突：两个部署流程同时运行

**问题描述**：GitHub Pages 默认构建和 GitHub Actions 同时运行，导致冲突。

**解决方案**：

1. 打开 GitHub 仓库页面
2. 点击 **Settings** > **Pages**
3. 在 **Build and deployment** 部分：
   - **Source**: 选择 **"GitHub Actions"**
   - 这会禁用默认的 Jekyll 构建
4. 保存设置

### 构建超时或依赖安装失败

**解决方案**：

检查 `.github/workflows/jekyll.yml` 中的 Ruby 版本是否与本地一致，必要时更新：

```yaml
- name: Setup Ruby
  uses: ruby/setup-ruby@v1
  with:
    ruby-version: '3.0.2p107'  # 或 '3.2'，根据你的本地版本
```

## 参考资料

- [GitHub Pages 官方文档](https://docs.github.com/zh/pages)
- [Jekyll 构建流程](https://jekyllrb.com/docs/continuous-integration/github-actions/)
- [polyglot 插件文档](https://github.com/untra/polyglot)

## 许可证

本项目基于 Jekyll 框架开发，Jekyll 采用 MIT 许可证。
原始版权信息如下：
> Copyright (c) 2008-present Tom Preston-Werner and Jekyll contributors