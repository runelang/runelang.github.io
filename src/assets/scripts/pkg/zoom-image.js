!(function () {
  function t(e) {
    return "IMG" === e.tagName;
  }
  function d(e) {
    function t() {
      for (
        var e = arguments, t = arguments.length, o = Array(t), n = 0;
        n < t;
        n++
      )
        o[n] = e[n];
      var i = o.reduce(function (e, t) {
        return [].concat(e, z(t));
      }, []);
      return (
        i
          .filter(function (e) {
            return -1 === m.indexOf(e);
          })
          .forEach(function (e) {
            m.push(e), e.classList.add("medium-zoom-image");
          }),
        r.forEach(function (e) {
          var t = e.type,
            o = e.listener,
            n = e.options;
          i.forEach(function (e) {
            e.addEventListener(t, o, n);
          });
        }),
        f
      );
    }
    function o() {
      var e = (
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      ).target;
      return s.original ? a() : i({ target: e });
    }
    var n =
        window.Promise ||
        function (e) {
          function t() {}
          e(t, t);
        },
      i = function () {
        function r() {
          var e = {
              width: document.documentElement.clientWidth,
              height: document.documentElement.clientHeight,
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
            },
            t = void 0,
            o = void 0;
          u.container &&
            (u.container instanceof Object
              ? ((t =
                  (e = g({}, e, u.container)).width -
                  e.left -
                  e.right -
                  2 * u.margin),
                (o = e.height - e.top - e.bottom - 2 * u.margin))
              : ((r = (i = (
                  h(u.container)
                    ? u.container
                    : document.querySelector(u.container)
                ).getBoundingClientRect()).width),
                (m = i.height),
                (d = i.left),
                (a = i.top),
                (e = g({}, e, { width: r, height: m, left: d, top: a }))));
          var t = t || e.width - 2 * u.margin,
            o = o || e.height - 2 * u.margin,
            n = s.zoomedHd || s.original,
            i = (!v(n) && n.naturalWidth) || t,
            r = (!v(n) && n.naturalHeight) || o,
            d = (m = n.getBoundingClientRect()).top,
            a = m.left,
            n = m.width,
            m = m.height,
            i = Math.min(Math.max(n, i), t) / n,
            r = Math.min(Math.max(m, r), o) / m,
            r =
              "scale(" +
              (r = Math.min(i, r)) +
              ") translate3d(" +
              ((t - n) / 2 - a + u.margin + e.left) / r +
              "px, " +
              ((o - m) / 2 - d + u.margin + e.top) / r +
              "px, 0)";
          (s.zoomed.style.transform = r),
            s.zoomedHd && (s.zoomedHd.style.transform = r);
        }
        var d = (
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
        ).target;
        return new n(function (e) {
          if (d && -1 === m.indexOf(d)) e(f);
          else {
            function t() {
              (c = !1),
                s.zoomed.removeEventListener("transitionend", t),
                s.original.dispatchEvent(
                  E("medium-zoom:opened", { detail: { zoom: f } })
                ),
                e(f);
            }
            var o, n;
            if (s.zoomed) e(f);
            else {
              if (d) s.original = d;
              else {
                if (!(0 < m.length)) return void e(f);
                var i = m;
                s.original = i[0];
              }
              s.original.dispatchEvent(
                E("medium-zoom:open", { detail: { zoom: f } })
              ),
                (l =
                  window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop ||
                  0),
                (c = !0),
                (s.zoomed = b(s.original)),
                document.body.appendChild(p),
                u.template &&
                  ((i = h(u.template)
                    ? u.template
                    : document.querySelector(u.template)),
                  (s.template = document.createElement("div")),
                  s.template.appendChild(i.content.cloneNode(!0)),
                  document.body.appendChild(s.template)),
                s.original.parentElement &&
                  "PICTURE" === s.original.parentElement.tagName &&
                  s.original.currentSrc &&
                  (s.zoomed.src = s.original.currentSrc),
                document.body.appendChild(s.zoomed),
                window.requestAnimationFrame(function () {
                  document.body.classList.add("medium-zoom--opened");
                }),
                s.original.classList.add("medium-zoom-image--hidden"),
                s.zoomed.classList.add("medium-zoom-image--opened"),
                s.zoomed.addEventListener("click", a),
                s.zoomed.addEventListener("transitionend", t),
                s.original.getAttribute("data-zoom-src")
                  ? ((s.zoomedHd = s.zoomed.cloneNode()),
                    s.zoomedHd.removeAttribute("srcset"),
                    s.zoomedHd.removeAttribute("sizes"),
                    s.zoomedHd.removeAttribute("loading"),
                    (s.zoomedHd.src = s.zoomed.getAttribute("data-zoom-src")),
                    (s.zoomedHd.onerror = function () {
                      clearInterval(o),
                        console.warn(
                          "Unable to reach the zoom image target " +
                            s.zoomedHd.src
                        ),
                        (s.zoomedHd = null),
                        r();
                    }),
                    (o = setInterval(function () {
                      s.zoomedHd.complete &&
                        (clearInterval(o),
                        s.zoomedHd.classList.add("medium-zoom-image--opened"),
                        s.zoomedHd.addEventListener("click", a),
                        document.body.appendChild(s.zoomedHd),
                        r());
                    }, 10)))
                  : s.original.hasAttribute("srcset")
                  ? ((s.zoomedHd = s.zoomed.cloneNode()),
                    s.zoomedHd.removeAttribute("sizes"),
                    s.zoomedHd.removeAttribute("loading"),
                    (n = s.zoomedHd.addEventListener("load", function () {
                      s.zoomedHd.removeEventListener("load", n),
                        s.zoomedHd.classList.add("medium-zoom-image--opened"),
                        s.zoomedHd.addEventListener("click", a),
                        document.body.appendChild(s.zoomedHd),
                        r();
                    })))
                  : r();
            }
          }
        });
      },
      a = function () {
        return new n(function (t) {
          var e;
          !c && s.original
            ? ((e = function e() {
                s.original.classList.remove("medium-zoom-image--hidden"),
                  document.body.removeChild(s.zoomed),
                  s.zoomedHd && document.body.removeChild(s.zoomedHd),
                  document.body.removeChild(p),
                  s.zoomed.classList.remove("medium-zoom-image--opened"),
                  s.template && document.body.removeChild(s.template),
                  (c = !1),
                  s.zoomed.removeEventListener("transitionend", e),
                  s.original.dispatchEvent(
                    E("medium-zoom:closed", { detail: { zoom: f } })
                  ),
                  (s.original = null),
                  (s.zoomed = null),
                  (s.zoomedHd = null),
                  (s.template = null),
                  t(f);
              }),
              (c = !0),
              document.body.classList.remove("medium-zoom--opened"),
              (s.zoomed.style.transform = ""),
              s.zoomedHd && (s.zoomedHd.style.transform = ""),
              s.template &&
                ((s.template.style.transition = "opacity 150ms"),
                (s.template.style.opacity = 0)),
              s.original.dispatchEvent(
                E("medium-zoom:close", { detail: { zoom: f } })
              ),
              s.zoomed.addEventListener("transitionend", e))
            : t(f);
        });
      },
      m = [],
      r = [],
      c = !1,
      l = 0,
      u = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
      s = { original: null, zoomed: null, zoomedHd: null, template: null };
    "[object Object]" === Object.prototype.toString.call(e)
      ? (u = e)
      : (!e && "string" != typeof e) || t(e);
    var u = g(
        {
          margin: 0,
          background: "#fff",
          scrollOffset: 40,
          container: null,
          template: null,
        },
        u
      ),
      p = y(u.background);
    document.addEventListener("click", function (e) {
      e = e.target;
      e !== p ? -1 !== m.indexOf(e) && o({ target: e }) : a();
    }),
      document.addEventListener("keyup", function (e) {
        e = e.key || e.keyCode;
        ("Escape" !== e && "Esc" !== e && 27 !== e) || a();
      }),
      document.addEventListener("scroll", function () {
        var e;
        !c &&
          s.original &&
          ((e =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0),
          Math.abs(l - e) > u.scrollOffset && setTimeout(a, 150));
      }),
      window.addEventListener("resize", a);
    var f = {
      open: i,
      close: a,
      toggle: o,
      update: function () {
        var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          t = e;
        return (
          e.background && (p.style.background = e.background),
          e.container &&
            e.container instanceof Object &&
            (t.container = g({}, u.container, e.container)),
          e.template &&
            ((e = h(e.template)
              ? e.template
              : document.querySelector(e.template)),
            (t.template = e)),
          (u = g({}, u, t)),
          m.forEach(function (e) {
            e.dispatchEvent(E("medium-zoom:update", { detail: { zoom: f } }));
          }),
          f
        );
      },
      clone: function () {
        return d(
          g(
            {},
            u,
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
          )
        );
      },
      attach: t,
      detach: function () {
        for (
          var e = arguments, t = arguments.length, o = Array(t), n = 0;
          n < t;
          n++
        )
          o[n] = e[n];
        s.zoomed && a();
        var i =
          0 < o.length
            ? o.reduce(function (e, t) {
                return [].concat(e, z(t));
              }, [])
            : m;
        return (
          i.forEach(function (e) {
            e.classList.remove("medium-zoom-image"),
              e.dispatchEvent(E("medium-zoom:detach", { detail: { zoom: f } }));
          }),
          (m = m.filter(function (e) {
            return -1 === i.indexOf(e);
          })),
          f
        );
      },
      on: function (t, o) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        return (
          m.forEach(function (e) {
            e.addEventListener("medium-zoom:" + t, o, n);
          }),
          r.push({ type: "medium-zoom:" + t, listener: o, options: n }),
          f
        );
      },
      off: function (t, o) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        return (
          m.forEach(function (e) {
            e.removeEventListener("medium-zoom:" + t, o, n);
          }),
          (r = r.filter(function (e) {
            return !(
              e.type === "medium-zoom:" + t &&
              e.listener.toString() === o.toString()
            );
          })),
          f
        );
      },
      getOptions: function () {
        return u;
      },
      getImages: function () {
        return m;
      },
      getZoomedImage: function () {
        return s.original;
      },
    };
    return f;
  }
  var g =
      Object.assign ||
      function (e) {
        for (var t = arguments, o = 1; o < arguments.length; o++) {
          var n,
            i = t[o];
          for (n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
        return e;
      },
    h = function (e) {
      return e && 1 === e.nodeType;
    },
    v = function (e) {
      return ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase();
    },
    z = function (e) {
      try {
        return Array.isArray(e)
          ? e.filter(t)
          : NodeList.prototype.isPrototypeOf(e)
          ? [].slice.call(e).filter(t)
          : h(e)
          ? [e].filter(t)
          : "string" == typeof e
          ? [].slice.call(document.querySelectorAll(e)).filter(t)
          : [];
      } catch (e) {
        throw new TypeError(
          "The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom"
        );
      }
    },
    y = function (e) {
      var t = document.createElement("div");
      return (
        t.classList.add("medium-zoom-overlay"), (t.style.background = e), t
      );
    },
    b = function (e) {
      var t = e.getBoundingClientRect(),
        o = t.top,
        n = t.left,
        i = t.width,
        r = t.height,
        d = e.cloneNode(),
        t =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0,
        e =
          window.pageXOffset ||
          document.documentElement.scrollLeft ||
          document.body.scrollLeft ||
          0;
      return (
        d.removeAttribute("id"),
        (d.style.position = "absolute"),
        (d.style.top = o + t + "px"),
        (d.style.left = n + e + "px"),
        (d.style.width = i + "px"),
        (d.style.height = r + "px"),
        (d.style.transform = ""),
        d
      );
    },
    E = function (e, t) {
      var o = g({ bubbles: !1, cancelable: !1, detail: void 0 }, t);
      if ("function" == typeof window.CustomEvent) return new CustomEvent(e, o);
      t = document.createEvent("CustomEvent");
      return t.initCustomEvent(e, o.bubbles, o.cancelable, o.detail), t;
    };
  var e, o, n, i;
  (e =
    ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),
    (i = (o = void 0 === o ? {} : o).insertAt),
    e &&
      "undefined" != typeof document &&
      ((n = document.head || document.getElementsByTagName("head")[0]),
      ((o = document.createElement("style")).type = "text/css"),
      "top" === i && n.firstChild
        ? n.insertBefore(o, n.firstChild)
        : n.appendChild(o),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(document.createTextNode(e)));
  var r =
    Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.msMatchesSelector;
  $docsify.plugins = [].concat(function (e) {
    var o;
    e.doneEach(function (e) {
      var t = (t = Array.apply(
        null,
        document.querySelectorAll(
          ".markdown-section img:not(.emoji):not([data-no-zoom])"
        )
      )).filter(function (e) {
        return !1 === r.call(e, "a img");
      });
      o && o.detach(), (o = d(t));
    });
  }, $docsify.plugins);
})();
