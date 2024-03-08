// Docsify Configuration
window.$docsify = {
  name: "RuneLang Documentation",
  logo: "../assets/images/logo_white.svg",
  basePath: "/pages",
  coverpage: "../structure/_cover.md",
  autoHeader: true,
  auto2top: true,
  loadSidebar: "../structure/_sidebar.md",
  loadNavbar: "../structure/_navbar.md",
  maxLevel: 3,
  subMaxLevel: 3,
  tabs: {
    persist: true,
    sync: true,
    theme: "classic",
    tabComments: true,
    tabHeadings: true,
  },
  executeScript: true,
  onlyCover: true,
  plugins: [
    // Restores initial <title>
    function persistTitle(hook, vm) {
      var titleElm = document.querySelector("title");
      var rootTitle = titleElm && titleElm.textContent;
      var pageTitlePrefix = window.$docsify.name
        ? window.$docsify.name + " - "
        : "";

      if (rootTitle) {
        hook.doneEach(function () {
          var currentTitle = titleElm.textContent;
          var isRoot = !/\/[a-z]/.test(location.hash);
          var newTitle = isRoot ? rootTitle : pageTitlePrefix + currentTitle;

          titleElm.textContent = newTitle;
        });
      }
    },
  ],
};
