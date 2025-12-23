source "https://rubygems.org"

# Fix for OpenSSL 3.6.0 CRL checking issue on macOS
# See: https://github.com/ruby/openssl/issues/949
gem "openssl", "~> 3.1.2"

gem "github-pages", group: :jekyll_plugins

gem "tzinfo-data"
gem "wdm", "~> 0.1.0" if Gem.win_platform?

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-sitemap"
  gem "jekyll-gist"
  gem "jekyll-feed"
  gem "jemoji"
  gem "jekyll-include-cache"
  gem "jekyll-algolia"
end
