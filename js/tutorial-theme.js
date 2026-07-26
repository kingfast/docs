(function () {
  "use strict";

  var storageKey = "kingfast-tutorial-theme";
  var root = document.documentElement;
  var sunIcon =
    '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3.5"></circle><path stroke-linecap="round" d="M12 2.5v2M12 19.5v2M4.5 4.5l1.4 1.4M18.1 18.1l1.4 1.4M2.5 12h2M19.5 12h2M4.5 19.5l1.4-1.4M18.1 5.9l1.4-1.4"></path></svg>';
  var moonIcon =
    '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M20.2 15.4A8.8 8.8 0 0 1 8.6 3.8 8.8 8.8 0 1 0 20.2 15.4Z"></path></svg>';
  var infoIcon =
    '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"></circle><path stroke-linecap="round" d="M12 10.8v5.2M12 7.5h.01"></path></svg>';
  var scrollTopIcon =
    '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m6 15 6-6 6 6"></path></svg>';

  function preferredTheme() {
    var stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var button = document.querySelector(".theme-toggle");
    if (!button) return;
    var dark = theme === "dark";
    button.innerHTML = dark ? sunIcon : moonIcon;
    button.setAttribute("aria-label", dark ? "切换到浅色模式" : "切换到深色模式");
    button.setAttribute("title", dark ? "浅色模式" : "深色模式");
  }

  applyTheme(preferredTheme());

  function enhanceScrollToTop() {
    var button = document.querySelector(".scroll-to-top");
    if (!button) return;

    button.innerHTML = scrollTopIcon;
    button.setAttribute("aria-label", "返回顶部");
    button.setAttribute("role", "button");
    button.setAttribute("tabindex", "0");
    button.setAttribute("title", "返回顶部");

    var goTop = function (event) {
      event.preventDefault();
      event.stopPropagation();
      var previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      if (previousBehavior) {
        root.style.scrollBehavior = previousBehavior;
      } else {
        root.style.removeProperty("scroll-behavior");
      }
    };

    button.onclick = goTop;
    if (!button.dataset.tutorialScrollReady) {
      button.dataset.tutorialScrollReady = "true";
      button.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") goTop(event);
      });
    }
  }

  function ensureChrome() {
    if (!document.querySelector(".theme-toggle")) {
      var toggle = document.createElement("button");
      toggle.className = "theme-toggle";
      toggle.type = "button";
      toggle.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        localStorage.setItem(storageKey, next);
        applyTheme(next);
      });
      document.body.appendChild(toggle);
    }

    if (!document.querySelector(".reading-progress")) {
      var progress = document.createElement("div");
      progress.className = "reading-progress";
      progress.setAttribute("aria-hidden", "true");
      document.body.appendChild(progress);
    }

    var menu = document.querySelector(".sidebar-toggle");
    if (menu) {
      menu.setAttribute("aria-label", "打开或关闭教程目录");
      menu.setAttribute(
        "aria-expanded",
        document.body.classList.contains("close") ? "true" : "false"
      );
      if (!menu.dataset.tutorialMenuReady) {
        menu.dataset.tutorialMenuReady = "true";
        menu.addEventListener(
          "click",
          function (event) {
            if (window.innerWidth > 900) return;
            event.preventDefault();
            event.stopImmediatePropagation();
            document.body.classList.toggle("close");
            menu.setAttribute(
              "aria-expanded",
              document.body.classList.contains("close") ? "true" : "false"
            );
          },
          true
        );
      }
    }

    var search = document.querySelector(".sidebar .search input");
    if (search) search.setAttribute("aria-label", "搜索教程或问题");

    enhanceScrollToTop();
    applyTheme(root.getAttribute("data-theme") || preferredTheme());
  }

  function decorateArticle() {
    var article = document.querySelector(".markdown-section");
    if (!article) return;

    article.querySelectorAll("img").forEach(function (image) {
      image.loading = "lazy";
      image.decoding = "async";
      if (!image.alt) image.alt = "教程操作步骤截图";
    });

    article.querySelectorAll("h2, h3, h4").forEach(function (heading) {
      if (heading.querySelector(".step-number")) return;
      var text = heading.textContent.trim();
      var match = text.match(/^(?:步骤\s*)?(\d+)[、.，：:\s]/);
      if (!match) return;
      heading.classList.add("step-heading");
      var label = heading.querySelector(".anchor span");
      if (label) label.textContent = text.slice(match[0].length).trim();
      var badge = document.createElement("span");
      badge.className = "step-number";
      badge.textContent = match[1];
      heading.insertBefore(badge, heading.firstChild);
    });

    var page = document.body.getAttribute("data-page") || "";
    if (page === "README.md") return;

    var h1 = article.querySelector("h1");
    if (!h1) return;

    if (!article.querySelector(".page-context")) {
      var context = document.createElement("nav");
      context.className = "page-context";
      context.setAttribute("aria-label", "面包屑");
      context.innerHTML =
        '<a href="#/">教程首页</a><svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m7.5 4.5 5 5-5 5"></path></svg><span>当前教程</span>';
      article.insertBefore(context, h1);
    }

    if (!article.querySelector(".beginner-note")) {
      var note = document.createElement("div");
      note.className = "beginner-note";
      note.innerHTML =
        infoIcon +
        "<div><strong>第一次使用？</strong><p>按页面顺序一步一步操作即可。遇到结果与截图不同时，先停在当前步骤，不要连续修改多个设置。</p></div>";
      h1.insertAdjacentElement("afterend", note);
    }
  }

  function updateReadingProgress() {
    var bar = document.querySelector(".reading-progress");
    if (!bar) return;
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    bar.style.transform = "scaleX(" + ratio + ")";
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = (window.$docsify.plugins || []).concat(function (
    hook
  ) {
    hook.ready(function () {
      ensureChrome();
      decorateArticle();
      updateReadingProgress();
    });
    hook.doneEach(function () {
      ensureChrome();
      decorateArticle();
      updateReadingProgress();
      var main = document.querySelector("#main");
      if (main) main.setAttribute("tabindex", "-1");
    });
  });

  window.addEventListener("scroll", updateReadingProgress, { passive: true });
  window.addEventListener("resize", updateReadingProgress);
})();
