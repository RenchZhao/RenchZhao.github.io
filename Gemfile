# source "https://rubygems.org"

# 使用阿里云 RubyGems 镜像（解决 DNS 和速度问题）
source "https://mirrors.aliyun.com/rubygems/"


# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "github-pages", "~> 232", group: :jekyll_plugins
# gem "jekyll", "~> 4.4.1"
gem "jekyll-polyglot", group: :jekyll_plugins      # 添加 Polyglot
gem "jekyll-include-cache", group: :jekyll_plugins

# 主题（你用的是 minimal-mistakes-jekyll）
gem "minimal-mistakes-jekyll"


# 所有在 _config.yml 中 plugins 列出的插件，必须在这里声明！
gem "jemoji"
gem "jekyll-paginate"
gem "jekyll-sitemap"
gem "jekyll-gist"
gem "jekyll-feed", "~> 0.12"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins


# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
