// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/patrykswiatek/Opus/page_code/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/patrykswiatek/Opus/page_code/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/patrykswiatek/Opus/page_code/src/pages/contact.js")),
  "component---src-pages-home-js": preferDefault(require("/Users/patrykswiatek/Opus/page_code/src/pages/home.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/patrykswiatek/Opus/page_code/src/pages/index.js")),
  "component---src-pages-location-js": preferDefault(require("/Users/patrykswiatek/Opus/page_code/src/pages/location.js")),
  "component---src-pages-news-js": preferDefault(require("/Users/patrykswiatek/Opus/page_code/src/pages/news.js")),
  "component---src-pages-services-js": preferDefault(require("/Users/patrykswiatek/Opus/page_code/src/pages/services.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/patrykswiatek/Opus/page_code/.cache/json/dev-404-page.json"),
  "about.json": require("/Users/patrykswiatek/Opus/page_code/.cache/json/about.json"),
  "contact.json": require("/Users/patrykswiatek/Opus/page_code/.cache/json/contact.json"),
  "home.json": require("/Users/patrykswiatek/Opus/page_code/.cache/json/home.json"),
  "index.json": require("/Users/patrykswiatek/Opus/page_code/.cache/json/index.json"),
  "location.json": require("/Users/patrykswiatek/Opus/page_code/.cache/json/location.json"),
  "news.json": require("/Users/patrykswiatek/Opus/page_code/.cache/json/news.json"),
  "services.json": require("/Users/patrykswiatek/Opus/page_code/.cache/json/services.json")
}