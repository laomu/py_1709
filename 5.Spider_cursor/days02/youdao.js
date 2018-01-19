this.seajs = {_seajs: this.seajs}, seajs.version = "1.3.1", seajs._util = {}, seajs._config = {
    debug: "",
    preload: []
}, function (e) {
    var t = Object.prototype.toString, n = Array.prototype;
    e.isString = function (e) {
        return "[object String]" === t.call(e)
    }, e.isFunction = function (e) {
        return "[object Function]" === t.call(e)
    }, e.isRegExp = function (e) {
        return "[object RegExp]" === t.call(e)
    }, e.isObject = function (e) {
        return e === Object(e)
    }, e.isArray = Array.isArray || function (e) {
        return "[object Array]" === t.call(e)
    }, e.indexOf = n.indexOf ? function (e, t) {
        return e.indexOf(t)
    } : function (e, t) {
        for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
        return -1
    };
    var r = e.forEach = n.forEach ? function (e, t) {
        e.forEach(t)
    } : function (e, t) {
        for (var n = 0; n < e.length; n++) t(e[n], n, e)
    };
    e.map = n.map ? function (e, t) {
        return e.map(t)
    } : function (e, t) {
        var n = [];
        return r(e, function (e, r, i) {
            n.push(t(e, r, i))
        }), n
    }, e.filter = n.filter ? function (e, t) {
        return e.filter(t)
    } : function (e, t) {
        var n = [];
        return r(e, function (e, r, i) {
            t(e, r, i) && n.push(e)
        }), n
    };
    var i = e.keys = Object.keys || function (e) {
        var t, n = [];
        for (t in e) e.hasOwnProperty(t) && n.push(t);
        return n
    };
    e.unique = function (e) {
        var t = {};
        return r(e, function (e) {
            t[e] = 1
        }), i(t)
    }, e.now = Date.now || function () {
        return (new Date).getTime()
    }
}(seajs._util), seajs._util.log = function () {
    if ("undefined" != typeof console) {
        var e = Array.prototype.slice.call(arguments), t = "log";
        if (console[e[e.length - 1]] && (t = e.pop()), "log" !== t || seajs.debug) if (console[t].apply) ; else e.length
    }
}, function (e, t, n) {
    function r(e) {
        return ((e = e.match(u)) ? e[0] : ".") + "/"
    }

    function i(e) {
        if (f.lastIndex = 0, f.test(e) && (e = e.replace(f, "$1/")), -1 === e.indexOf(".")) return e;
        for (var t, n = e.split("/"), r = [], i = 0; i < n.length; i++) if (".." === (t = n[i])) {
            if (0 === r.length) throw Error("The path is invalid: " + e);
            r.pop()
        } else "." !== t && r.push(t);
        return r.join("/")
    }

    function o(e) {
        var t = (e = i(e)).charAt(e.length - 1);
        return "/" === t ? e : ("#" === t ? e = e.slice(0, -1) : -1 === e.indexOf("?") && !d.test(e) && (e += ".js"), 0 < e.indexOf(":80/") && (e = e.replace(":80/", "/")), e)
    }

    function a(e) {
        if ("#" === e.charAt(0)) return e.substring(1);
        var n = t.alias;
        if (n && c(e)) {
            var r = e.split("/"), i = r[0];
            n.hasOwnProperty(i) && (r[0] = n[i], e = r.join("/"))
        }
        return e
    }

    function s(e) {
        return 0 < e.indexOf("://") || 0 === e.indexOf("//")
    }

    function l(e) {
        return "/" === e.charAt(0) && "/" !== e.charAt(1)
    }

    function c(e) {
        var t = e.charAt(0);
        return -1 === e.indexOf("://") && "." !== t && "/" !== t
    }

    var u = /.*(?=\/.*$)/, f = /([^:\/])\/\/+/g, d = /\.(?:css|js)$/, p = /^(.*?\w)(?:\/|$)/, h = {},
        m = (n = n.location).protocol + "//" + n.host + function (e) {
            return "/" !== e.charAt(0) && (e = "/" + e), e
        }(n.pathname);
    0 < m.indexOf("\\") && (m = m.replace(/\\/g, "/")), e.dirname = r, e.realpath = i, e.normalize = o, e.parseAlias = a, e.parseMap = function (n) {
        var o = t.map || [];
        if (!o.length) return n;
        for (var a = n, l = 0; l < o.length; l++) {
            var c = o[l];
            if (e.isArray(c) && 2 === c.length) {
                var u = c[0];
                (e.isString(u) && -1 < a.indexOf(u) || e.isRegExp(u) && u.test(a)) && (a = a.replace(u, c[1]))
            } else e.isFunction(c) && (a = c(a))
        }
        return s(a) || (a = i(r(m) + a)), a !== n && (h[a] = n), a
    }, e.unParseMap = function (e) {
        return h[e] || e
    }, e.id2Uri = function (e, n) {
        if (!e) return "";
        e = a(e), n || (n = m);
        var i;
        return s(e) ? i = e : 0 === e.indexOf("./") || 0 === e.indexOf("../") ? (0 === e.indexOf("./") && (e = e.substring(2)), i = r(n) + e) : i = l(e) ? n.match(p)[1] + e : t.base + "/" + e, o(i)
    }, e.isAbsolute = s, e.isRoot = l, e.isTopLevel = c, e.pageUri = m
}(seajs._util, seajs._config, this), function (e, t) {
    function n(e, n) {
        e.onload = e.onerror = e.onreadystatechange = function () {
            d.test(e.readyState) && (e.onload = e.onerror = e.onreadystatechange = null, e.parentNode && !t.debug && c.removeChild(e), e = void 0, n())
        }
    }

    function r(t, n) {
        h || m ? (e.log("Start poll to fetch css"), setTimeout(function () {
            i(t, n)
        }, 1)) : t.onload = t.onerror = function () {
            t.onload = t.onerror = null, t = void 0, n()
        }
    }

    function i(e, t) {
        var n;
        if (h) e.sheet && (n = !0); else if (e.sheet) try {
            e.sheet.cssRules && (n = !0)
        } catch (e) {
            "NS_ERROR_DOM_SECURITY_ERR" === e.name && (n = !0)
        }
        setTimeout(function () {
            n ? t() : i(e, t)
        }, 1)
    }

    function o() {
    }

    var a, s, l = document, c = l.head || l.getElementsByTagName("head")[0] || l.documentElement,
        u = c.getElementsByTagName("base")[0], f = /\.css(?:\?|$)/i, d = /loaded|complete|undefined/;
    e.fetch = function (t, i, s) {
        var l = f.test(t), d = document.createElement(l ? "link" : "script");
        s && (s = e.isFunction(s) ? s(t) : s) && (d.charset = s), i = i || o, "SCRIPT" === d.nodeName ? n(d, i) : r(d, i), l ? (d.rel = "stylesheet", d.href = t) : (d.async = "async", d.src = t), a = d, u ? c.insertBefore(d, u) : c.appendChild(d), a = null
    }, e.getCurrentScript = function () {
        if (a) return a;
        if (s && "interactive" === s.readyState) return s;
        for (var e = c.getElementsByTagName("script"), t = 0; t < e.length; t++) {
            var n = e[t];
            if ("interactive" === n.readyState) return s = n
        }
    }, e.getScriptAbsoluteSrc = function (e) {
        return e.hasAttribute ? e.src : e.getAttribute("src", 4)
    }, e.importStyle = function (e, t) {
        if (!t || !l.getElementById(t)) {
            var n = l.createElement("style");
            t && (n.id = t), c.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(l.createTextNode(e))
        }
    };
    var p = navigator.userAgent, h = 536 > Number(p.replace(/.*AppleWebKit\/(\d+)\..*/, "$1")),
        m = 0 < p.indexOf("Firefox") && !("onload" in document.createElement("link"))
}(seajs._util, seajs._config), function (e) {
    var t = /(?:^|[^.$])\brequire\s*\(\s*(["'])([^"'\s\)]+)\1\s*\)/g;
    e.parseDependencies = function (n) {
        var r, i = [], n = n.replace(/^\s*\/\*[\s\S]*?\*\/\s*$/gm, "").replace(/^\s*\/\/.*$/gm, "");
        for (t.lastIndex = 0; r = t.exec(n);) r[2] && i.push(r[2]);
        return e.unique(i)
    }
}(seajs._util), function (e, t, n) {
    function r(e, t) {
        this.uri = e, this.status = t || 0
    }

    function i(e, n) {
        return t.isString(e) ? r._resolve(e, n) : t.map(e, function (e) {
            return i(e, n)
        })
    }

    function o(e, i) {
        var o = t.parseMap(e);
        g[o] ? i() : m[o] ? y[o].push(i) : (m[o] = !0, y[o] = [i], r._fetch(o, function () {
            g[o] = !0;
            var n = f[e];
            n.status === h.FETCHING && (n.status = h.FETCHED), v && (r._save(e, v), v = null), b && n.status === h.FETCHED && (f[e] = b, b.realUri = e), b = null, m[o] && delete m[o], (n = y[o]) && (delete y[o], t.forEach(n, function (e) {
                e()
            }))
        }, n.charset))
    }

    function a(e, t) {
        var n = e(t.require, t.exports, t);
        void 0 !== n && (t.exports = n)
    }

    function s(e) {
        var n = e.realUri || e.uri, r = d[n];
        r && (t.forEach(r, function (t) {
            a(t, e)
        }), delete d[n])
    }

    function l(e) {
        var n = e.uri;
        return t.filter(e.dependencies, function (e) {
            return w = [n], (e = c(f[e])) && (w.push(n), t.log("Found circular dependencies:", w.join(" --\x3e "), void 0)), !e
        })
    }

    function c(e) {
        if (!e || e.status !== h.SAVED) return !1;
        if (w.push(e.uri), (e = e.dependencies).length) {
            var n = e.concat(w);
            if (n.length > t.unique(n).length) return !0;
            for (n = 0; n < e.length; n++) if (c(f[e[n]])) return !0
        }
        return w.pop(), !1
    }

    function u(e) {
        var t = n.preload.slice();
        n.preload = [], t.length ? x._use(t, e) : e()
    }

    var f = {}, d = {}, p = [], h = {FETCHING: 1, FETCHED: 2, SAVED: 3, READY: 4, COMPILING: 5, COMPILED: 6};
    r.prototype._use = function (e, n) {
        t.isString(e) && (e = [e]);
        var r = i(e, this.uri);
        this._load(r, function () {
            u(function () {
                var e = t.map(r, function (e) {
                    return e ? f[e]._compile() : null
                });
                n && n.apply(null, e)
            })
        })
    }, r.prototype._load = function (e, n) {
        function i(e) {
            (e || {}).status < h.READY && (e.status = h.READY), 0 == --c && n()
        }

        var a = t.filter(e, function (e) {
            return e && (!f[e] || f[e].status < h.READY)
        }), s = a.length;
        if (0 === s) n(); else for (var c = s, u = 0; u < s; u++) !function (e) {
            function t() {
                if ((n = f[e]).status >= h.SAVED) {
                    var t = l(n);
                    t.length ? r.prototype._load(t, function () {
                        i(n)
                    }) : i(n)
                } else i()
            }

            var n = f[e] || (f[e] = new r(e, h.FETCHING));
            n.status >= h.FETCHED ? t() : o(e, t)
        }(a[u])
    }, r.prototype._compile = function () {
        function e(e) {
            return e = i(e, n.uri), (e = f[e]) ? e.status === h.COMPILING ? e.exports : (e.parent = n, e._compile()) : null
        }

        var n = this;
        if (n.status === h.COMPILED) return n.exports;
        if (n.status < h.SAVED && !d[n.realUri || n.uri]) return null;
        n.status = h.COMPILING, e.async = function (e, t) {
            n._use(e, t)
        }, e.resolve = function (e) {
            return i(e, n.uri)
        }, e.cache = f, n.require = e, n.exports = {};
        var r = n.factory;
        return t.isFunction(r) ? (p.push(n), a(r, n), p.pop()) : void 0 !== r && (n.exports = r), n.status = h.COMPILED, s(n), n.exports
    }, r._define = function (e, n, o) {
        1 === (s = arguments.length) ? (o = e, e = void 0) : 2 === s && (o = n, n = void 0, t.isArray(e) && (n = e, e = void 0)), !t.isArray(n) && t.isFunction(o) && (n = t.parseDependencies(o.toString()));
        var a, s = {id: e, dependencies: n, factory: o};
        if (document.attachEvent) {
            var l = t.getCurrentScript();
            l && (a = t.unParseMap(t.getScriptAbsoluteSrc(l))), a || t.log("Failed to derive URI from interactive script for:", o.toString(), "warn")
        }
        if (l = e ? i(e) : a) {
            if (l === a) {
                var c = f[a];
                c && c.realUri && c.status === h.SAVED && (f[a] = null)
            }
            s = r._save(l, s), a ? (f[a] || {}).status === h.FETCHING && (f[a] = s, s.realUri = a) : b || (b = s)
        } else v = s
    }, r._getCompilingModule = function () {
        return p[p.length - 1]
    }, r._find = function (e) {
        var n = [];
        return t.forEach(t.keys(f), function (r) {
            (t.isString(e) && -1 < r.indexOf(e) || t.isRegExp(e) && e.test(r)) && (r = f[r]).exports && n.push(r.exports)
        }), n
    }, r._modify = function (t, n) {
        var r = i(t), o = f[r];
        return o && o.status === h.COMPILED ? a(n, o) : (d[r] || (d[r] = []), d[r].push(n)), e
    }, r.STATUS = h, r._resolve = t.id2Uri, r._fetch = t.fetch, r._save = function (e, n) {
        var o = f[e] || (f[e] = new r(e));
        return o.status < h.SAVED && (o.id = n.id || e, o.dependencies = i(t.filter(n.dependencies || [], function (e) {
            return !!e
        }), e), o.factory = n.factory, o.status = h.SAVED), o
    };
    var m = {}, g = {}, y = {}, v = null, b = null, w = [], x = new r(t.pageUri, h.COMPILED);
    e.use = function (t, n) {
        return u(function () {
            x._use(t, n)
        }), e
    }, e.define = r._define, e.cache = r.cache = f, e.find = r._find, e.modify = r._modify, r.fetchedList = g, e.pluginSDK = {
        Module: r,
        util: t,
        config: n
    }
}(seajs, seajs._util, seajs._config), function (e, t, n) {
    var r = "seajs-ts=" + t.now(), i = document.getElementById("seajsnode");
    i || (i = document.getElementsByTagName("script"), i = i[i.length - 1]);
    var o = i && t.getScriptAbsoluteSrc(i) || t.pageUri, o = t.dirname(function (e) {
        if (-1 === e.indexOf("??")) return e;
        var n = e.split("??");
        return (e = n[0]) + (n = t.filter(n[1].split(","), function (e) {
            return -1 !== e.indexOf("sea.js")
        }))[0]
    }(o));
    t.loaderDir = o;
    var a = o.match(/^(.+\/)seajs\/[\.\d]+(?:-dev)?\/$/);
    a && (o = a[1]), n.base = o, n.main = i && i.getAttribute("data-main"), n.charset = "utf-8", e.config = function (i) {
        for (var o in i) if (i.hasOwnProperty(o)) {
            var a = n[o], s = i[o];
            if (a && "alias" === o) {
                for (var l in s) if (s.hasOwnProperty(l)) {
                    var c = a[l], u = s[l];
                    /^\d+\.\d+\.\d+$/.test(u) && (u = l + "/" + u + "/" + l), c && c !== u && t.log("The alias config is conflicted:", "key =", '"' + l + '"', "previous =", '"' + c + '"', "current =", '"' + u + '"', "warn"), a[l] = u
                }
            } else !a || "map" !== o && "preload" !== o ? n[o] = s : (t.isString(s) && (s = [s]), t.forEach(s, function (e) {
                e && a.push(e)
            }))
        }
        return (i = n.base) && !t.isAbsolute(i) && (n.base = t.id2Uri((t.isRoot(i) ? "" : "./") + i + "/")), 2 === n.debug && (n.debug = 1, e.config({
            map: [[/^.*$/, function (e) {
                return -1 === e.indexOf("seajs-ts=") && (e = e + (-1 === e.indexOf("?") ? "?" : "&") + r), e
            }]]
        })), e.debug = !!n.debug, this
    }, e.debug = !!n.debug
}(seajs, seajs._util, seajs._config), function (e, t, n) {
    e.log = t.log, e.importStyle = t.importStyle, e.config({alias: {seajs: t.loaderDir}}), t.forEach(function () {
        var e = [], r = n.location.search;
        return (r = (r = r.replace(/(seajs-\w+)(&|$)/g, "$1=1$2")) + " " + document.cookie).replace(/seajs-(\w+)=[1-9]/g, function (t, n) {
            e.push(n)
        }), t.unique(e)
    }(), function (t) {
        e.use("seajs/plugin-" + t), "debug" === t && (e._use = e.use, e._useArgs = [], e.use = function () {
            return e._useArgs.push(arguments), e
        })
    })
}(seajs, seajs._util, this), function (e, t, n) {
    if ((r = e._seajs) && !r.args) n.seajs = e._seajs; else {
        if (n.define = e.define, t.main && e.use(t.main), t = (r || 0).args) for (var r = {
            0: "config",
            1: "use",
            2: "define"
        }, i = 0; i < t.length; i += 2) e[r[t[i]]].apply(e, t[i + 1]);
        n.define.cmd = {}, delete e.define, delete e._util, delete e._config, delete e._seajs
    }
}(seajs, seajs._config, this), define("newweb/common/TranslateState", [], function (e, t) {
    e("./jquery-1.7");
    var n = {
        smallFont: !1,
        originalText: "",
        originalTgt: "",
        updateEle: "",
        isUpdate: !1,
        isSelectLan: !1,
        translateResult: [],
        type: "ATUO",
        getFromTo: function () {
            var e = this.type;
            return "AUTO" == e ? ["AUTO", "AUTO"] : this.isSelectLan ? e.split("2") : ["AUTO", "AUTO"]
        },
        getDetectedFromTo: function () {
            var e = this.type;
            return "AUTO" == e ? ["AUTO", "AUTO"] : e.split("2")
        }
    };
    t.state = n
}), define("newweb/common/ZeroClipboard", [], function (e, t) {
    !function (e, t) {
        "use strict";
        var n, r, i, o = e, a = o.document, s = o.navigator, l = o.setTimeout, c = o.clearTimeout, u = o.setInterval,
            f = o.clearInterval, d = o.getComputedStyle, p = o.encodeURIComponent, h = o.ActiveXObject, m = o.Error,
            g = o.Number.parseInt || o.parseInt, y = o.Number.parseFloat || o.parseFloat, v = o.Number.isNaN || o.isNaN,
            b = o.Date.now, w = o.Object.keys, x = o.Object.prototype.hasOwnProperty, T = o.Array.prototype.slice,
            _ = function () {
                var e = function (e) {
                    return e
                };
                if ("function" == typeof o.wrap && "function" == typeof o.unwrap) try {
                    var t = a.createElement("div"), n = o.unwrap(t);
                    1 === t.nodeType && n && 1 === n.nodeType && (e = o.unwrap)
                } catch (e) {
                }
                return e
            }(), C = function (e) {
                return T.call(e, 0)
            }, E = function () {
                var e, t, n, r, i, o = C(arguments), a = o[0] || {};
                for (e = 1, t = o.length; e < t; e++) if (null != (n = o[e])) for (r in n) x.call(n, r) && (a[r], a !== (i = n[r]) && void 0 !== i && (a[r] = i));
                return a
            }, S = function (e) {
                var t, n, r, i;
                if ("object" != typeof e || null == e || "number" == typeof e.nodeType) t = e; else if ("number" == typeof e.length) for (t = [], n = 0, r = e.length; n < r; n++) x.call(e, n) && (t[n] = S(e[n])); else {
                    t = {};
                    for (i in e) x.call(e, i) && (t[i] = S(e[i]))
                }
                return t
            }, k = function (e, t) {
                for (var n = {}, r = 0, i = t.length; r < i; r++) t[r] in e && (n[t[r]] = e[t[r]]);
                return n
            }, N = function (e, t) {
                var n = {};
                for (var r in e) -1 === t.indexOf(r) && (n[r] = e[r]);
                return n
            }, A = function (e) {
                if (e) for (var t in e) x.call(e, t) && delete e[t];
                return e
            }, j = function (e, t) {
                if (e && 1 === e.nodeType && e.ownerDocument && t && (1 === t.nodeType && t.ownerDocument && t.ownerDocument === e.ownerDocument || 9 === t.nodeType && !t.ownerDocument && t === e.ownerDocument)) do {
                    if (e === t) return !0;
                    e = e.parentNode
                } while (e);
                return !1
            }, O = function (e) {
                var t;
                return "string" == typeof e && e && (t = e.split("#")[0].split("?")[0], t = e.slice(0, e.lastIndexOf("/") + 1)), t
            }, L = function (e) {
                var t, n;
                return "string" == typeof e && e && ((n = e.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/)) && n[1] ? t = n[1] : (n = e.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/)) && n[1] && (t = n[1])), t
            }, D = function () {
                var e, t;
                try {
                    throw new m
                } catch (e) {
                    t = e
                }
                return t && (e = t.sourceURL || t.fileName || L(t.stack)), e
            }, F = function () {
                var e, t, n;
                if (a.currentScript && (e = a.currentScript.src)) return e;
                if (1 === (t = a.getElementsByTagName("script")).length) return t[0].src || void 0;
                if ("readyState" in (t[0] || document.createElement("script"))) for (n = t.length; n--;) if ("interactive" === t[n].readyState && (e = t[n].src)) return e;
                return "loading" === a.readyState && (e = t[t.length - 1].src) ? e : (e = D()) ? e : void 0
            }, R = function () {
                var e, t, n, r = a.getElementsByTagName("script");
                for (e = r.length; e--;) {
                    if (!(n = r[e].src)) {
                        t = null;
                        break
                    }
                    if (n = O(n), null == t) t = n; else if (t !== n) {
                        t = null;
                        break
                    }
                }
                return t || void 0
            }, I = function () {
                var e = /win(dows|[\s]?(nt|me|ce|xp|vista|[\d]+))/i;
                return !!s && (e.test(s.appVersion || "") || e.test(s.platform || "") || -1 !== (s.userAgent || "").indexOf("Windows"))
            }, H = null == o.opener && (!!o.top && o != o.top || !!o.parent && o != o.parent),
            M = "html" === a.documentElement.nodeName, q = {
                bridge: null,
                version: "0.0.0",
                pluginType: "unknown",
                sandboxed: null,
                disabled: null,
                outdated: null,
                insecure: null,
                unavailable: null,
                degraded: null,
                deactivated: null,
                overdue: null,
                ready: null
            }, P = {}, B = {}, z = null, U = 0, $ = 0, W = {
                ready: "Flash communication is established",
                error: {
                    "flash-sandboxed": "Attempting to run Flash in a sandboxed iframe, which is impossible",
                    "flash-disabled": "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.",
                    "flash-outdated": "Flash is too outdated to support ZeroClipboard",
                    "flash-insecure": "Flash will be unable to communicate due to a protocol mismatch between your `swfPath` configuration and the page",
                    "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
                    "flash-degraded": "Flash is unable to preserve data fidelity when communicating with JavaScript",
                    "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.",
                    "flash-overdue": "Flash communication was established but NOT within the acceptable time limit",
                    "version-mismatch": "ZeroClipboard JS version number does not match ZeroClipboard SWF version number",
                    "clipboard-error": "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard",
                    "config-mismatch": "ZeroClipboard configuration does not match Flash's reality",
                    "swf-not-found": "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity",
                    "browser-unsupported": "The browser does not support the required HTML DOM and JavaScript features"
                }
            },
            V = ["flash-unavailable", "flash-degraded", "flash-overdue", "version-mismatch", "config-mismatch", "clipboard-error"],
            X = ["flash-sandboxed", "flash-disabled", "flash-outdated", "flash-insecure", "flash-unavailable", "flash-degraded", "flash-deactivated", "flash-overdue"],
            Y = new RegExp("^flash-(" + X.map(function (e) {
                return e.replace(/^flash-/, "")
            }).join("|") + ")$"), Z = new RegExp("^flash-(" + X.filter(function (e) {
                return "flash-disabled" !== e
            }).map(function (e) {
                return e.replace(/^flash-/, "")
            }).join("|") + ")$"), K = {
                swfPath: (O(F()) || R() || "") + "ZeroClipboard.swf",
                trustedDomains: o.location.host ? [o.location.host] : [],
                cacheBust: !0,
                forceEnhancedClipboard: !1,
                flashLoadTimeout: 3e4,
                autoActivate: !0,
                bubbleEvents: !0,
                fixLineEndings: !0,
                containerId: "global-zeroclipboard-html-bridge",
                containerClass: "global-zeroclipboard-container",
                swfObjectId: "global-zeroclipboard-flash-bridge",
                hoverClass: "zeroclipboard-is-hover",
                activeClass: "zeroclipboard-is-active",
                forceHandCursor: !1,
                title: null,
                zIndex: 999999999
            }, G = function (e) {
                "object" != typeof e || !e || "length" in e || w(e).forEach(function (t) {
                    if (/^(?:forceHandCursor|title|zIndex|bubbleEvents|fixLineEndings)$/.test(t)) K[t] = e[t]; else if (null == q.bridge) if ("containerId" === t || "swfObjectId" === t) {
                        if (!he(e[t])) throw new Error("The specified `" + t + "` value is not valid as an HTML4 Element ID");
                        K[t] = e[t]
                    } else K[t] = e[t]
                });
                {
                    if ("string" != typeof e || !e) return S(K);
                    if (x.call(K, e)) return K[e]
                }
            }, J = function () {
                return Ye(), {
                    browser: E(k(s, ["userAgent", "platform", "appName", "appVersion"]), {isSupported: Q()}),
                    flash: N(q, ["bridge"]),
                    zeroclipboard: {version: Ke.version, config: Ke.config()}
                }
            }, Q = function () {
                return !!(a.addEventListener && o.Object.keys && o.Array.prototype.map)
            }, ee = function () {
                return !!(q.sandboxed || q.disabled || q.outdated || q.unavailable || q.degraded || q.deactivated)
            }, te = function (e, t) {
                var r, i, o, a = {};
                if ("string" == typeof e && e ? o = e.toLowerCase().split(/\s+/) : "object" != typeof e || !e || "length" in e || void 0 !== t || w(e).forEach(function (t) {
                        var n = e[t];
                        "function" == typeof n && Ke.on(t, n)
                    }), o && o.length && t) {
                    for (r = 0, i = o.length; r < i; r++) a[e = o[r].replace(/^on/, "")] = !0, P[e] || (P[e] = []), P[e].push(t);
                    if (a.ready && q.ready && Ke.emit({type: "ready"}), a.error) {
                        for (Q() || Ke.emit({
                            type: "error",
                            name: "browser-unsupported"
                        }), r = 0, i = X.length; r < i; r++) if (!0 === q[X[r].replace(/^flash-/, "")]) {
                            Ke.emit({type: "error", name: X[r]});
                            break
                        }
                        void 0 !== n && Ke.version !== n && Ke.emit({
                            type: "error",
                            name: "version-mismatch",
                            jsVersion: Ke.version,
                            swfVersion: n
                        })
                    }
                }
                return Ke
            }, ne = function (e, t) {
                var n, r, i, o, a;
                if (0 === arguments.length ? o = w(P) : "string" == typeof e && e ? o = e.toLowerCase().split(/\s+/) : "object" != typeof e || !e || "length" in e || void 0 !== t || w(e).forEach(function (t) {
                        var n = e[t];
                        "function" == typeof n && Ke.off(t, n)
                    }), o && o.length) for (n = 0, r = o.length; n < r; n++) if (e = o[n].replace(/^on/, ""), (a = P[e]) && a.length) if (t) for (i = a.indexOf(t); -1 !== i;) a.splice(i, 1), i = a.indexOf(t, i); else a.length = 0;
                return Ke
            }, re = function (e) {
                return "string" == typeof e && e ? S(P[e]) || null : S(P)
            }, ie = function (e) {
                var t, n, r;
                if ((e = me(e)) && !Te(e)) return "ready" === e.type && !0 === q.overdue ? Ke.emit({
                    type: "error",
                    name: "flash-overdue"
                }) : (t = E({}, e), we.call(this, t), "copy" === e.type && (n = (r = Oe(B)).data, z = r.formatMap), n)
            }, oe = function () {
                var e = K.swfPath || "", t = e.slice(0, 2), n = e.slice(0, e.indexOf("://") + 1);
                return "\\\\" === t ? "file:" : "//" === t || "" === n ? o.location.protocol : n
            }, ae = function () {
                var e, t, n = q.sandboxed;
                if (!Q()) return q.ready = !1, void Ke.emit({type: "error", name: "browser-unsupported"});
                Ye(), "boolean" != typeof q.ready && (q.ready = !1), q.sandboxed !== n && !0 === q.sandboxed ? (q.ready = !1, Ke.emit({
                    type: "error",
                    name: "flash-sandboxed"
                })) : Ke.isFlashUnusable() || null !== q.bridge || ((t = oe()) && t !== o.location.protocol ? Ke.emit({
                    type: "error",
                    name: "flash-insecure"
                }) : ("number" == typeof(e = K.flashLoadTimeout) && e >= 0 && (U = l(function () {
                    "boolean" != typeof q.deactivated && (q.deactivated = !0), !0 === q.deactivated && Ke.emit({
                        type: "error",
                        name: "flash-deactivated"
                    })
                }, e)), q.overdue = !1, Ae()))
            }, se = function () {
                Ke.clearData(), Ke.blur(), Ke.emit("destroy"), je(), Ke.off()
            }, le = function (e, t) {
                var n;
                if ("object" == typeof e && e && void 0 === t) n = e, Ke.clearData(); else {
                    if ("string" != typeof e || !e) return;
                    (n = {})[e] = t
                }
                for (var r in n) "string" == typeof r && r && x.call(n, r) && "string" == typeof n[r] && n[r] && (B[r] = Xe(n[r]))
            }, ce = function (e) {
                void 0 === e ? (A(B), z = null) : "string" == typeof e && x.call(B, e) && delete B[e]
            }, ue = function (e) {
                return void 0 === e ? S(B) : "string" == typeof e && x.call(B, e) ? B[e] : void 0
            }, fe = function (e) {
                if (e && 1 === e.nodeType) {
                    r && (qe(r, K.activeClass), r !== e && qe(r, K.hoverClass)), r = e, Me(e, K.hoverClass);
                    var t = e.getAttribute("title") || K.title;
                    if ("string" == typeof t && t) {
                        var n = ke(q.bridge);
                        n && n.setAttribute("title", t)
                    }
                    var i = !0 === K.forceHandCursor || "pointer" === Pe(e, "cursor");
                    We(i), $e()
                }
            }, de = function () {
                var e = ke(q.bridge);
                e && (e.removeAttribute("title"), e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px"), r && (qe(r, K.hoverClass), qe(r, K.activeClass), r = null)
            }, pe = function () {
                return r || null
            }, he = function (e) {
                return "string" == typeof e && e && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)
            }, me = function (e) {
                var t;
                if ("string" == typeof e && e ? (t = e, e = {}) : "object" == typeof e && e && "string" == typeof e.type && e.type && (t = e.type), t) {
                    t = t.toLowerCase(), !e.target && (/^(copy|aftercopy|_click)$/.test(t) || "error" === t && "clipboard-error" === e.name) && (e.target = i), E(e, {
                        type: t,
                        target: e.target || r || null,
                        relatedTarget: e.relatedTarget || null,
                        currentTarget: q && q.bridge || null,
                        timeStamp: e.timeStamp || b() || null
                    });
                    var n = W[e.type];
                    return "error" === e.type && e.name && n && (n = n[e.name]), n && (e.message = n), "ready" === e.type && E(e, {
                        target: null,
                        version: q.version
                    }), "error" === e.type && (Y.test(e.name) && E(e, {
                        target: null,
                        minimumVersion: "11.0.0"
                    }), Z.test(e.name) && E(e, {version: q.version}), "flash-insecure" === e.name && E(e, {
                        pageProtocol: o.location.protocol,
                        swfProtocol: oe()
                    })), "copy" === e.type && (e.clipboardData = {
                        setData: Ke.setData,
                        clearData: Ke.clearData
                    }), "aftercopy" === e.type && (e = Le(e, z)), e.target && !e.relatedTarget && (e.relatedTarget = ge(e.target)), ye(e)
                }
            }, ge = function (e) {
                var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
                return t ? a.getElementById(t) : null
            }, ye = function (e) {
                if (e && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) {
                    var t = e.target, n = "_mouseover" === e.type && e.relatedTarget ? e.relatedTarget : void 0,
                        r = "_mouseout" === e.type && e.relatedTarget ? e.relatedTarget : void 0, i = Be(t),
                        s = o.screenLeft || o.screenX || 0, l = o.screenTop || o.screenY || 0,
                        c = a.body.scrollLeft + a.documentElement.scrollLeft,
                        u = a.body.scrollTop + a.documentElement.scrollTop,
                        f = i.left + ("number" == typeof e._stageX ? e._stageX : 0),
                        d = i.top + ("number" == typeof e._stageY ? e._stageY : 0), p = f - c, h = d - u, m = s + p,
                        g = l + h, y = "number" == typeof e.movementX ? e.movementX : 0,
                        v = "number" == typeof e.movementY ? e.movementY : 0;
                    delete e._stageX, delete e._stageY, E(e, {
                        srcElement: t,
                        fromElement: n,
                        toElement: r,
                        screenX: m,
                        screenY: g,
                        pageX: f,
                        pageY: d,
                        clientX: p,
                        clientY: h,
                        x: p,
                        y: h,
                        movementX: y,
                        movementY: v,
                        offsetX: 0,
                        offsetY: 0,
                        layerX: 0,
                        layerY: 0
                    })
                }
                return e
            }, ve = function (e) {
                var t = e && "string" == typeof e.type && e.type || "";
                return !/^(?:(?:before)?copy|destroy)$/.test(t)
            }, be = function (e, t, n, r) {
                r ? l(function () {
                    e.apply(t, n)
                }, 0) : e.apply(t, n)
            }, we = function (e) {
                if ("object" == typeof e && e && e.type) {
                    var t = ve(e), n = P["*"] || [], r = P[e.type] || [], i = n.concat(r);
                    if (i && i.length) {
                        var a, s, l, c, u, f = this;
                        for (a = 0, s = i.length; a < s; a++) c = f, "string" == typeof(l = i[a]) && "function" == typeof o[l] && (l = o[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (c = l, l = l.handleEvent), "function" == typeof l && (u = E({}, e), be(l, c, [u], t))
                    }
                    return this
                }
            }, xe = function (e) {
                var t = null;
                return (!1 === H || e && "error" === e.type && e.name && -1 !== V.indexOf(e.name)) && (t = !1), t
            }, Te = function (e) {
                var t = e.target || r || null, o = "swf" === e._source;
                switch (delete e._source, e.type) {
                    case"error":
                        var a = "flash-sandboxed" === e.name || xe(e);
                        "boolean" == typeof a && (q.sandboxed = a), "browser-unsupported" === e.name ? E(q, {
                            disabled: !1,
                            outdated: !1,
                            unavailable: !1,
                            degraded: !1,
                            deactivated: !1,
                            overdue: !1,
                            ready: !1
                        }) : -1 !== X.indexOf(e.name) ? E(q, {
                            disabled: "flash-disabled" === e.name,
                            outdated: "flash-outdated" === e.name,
                            insecure: "flash-insecure" === e.name,
                            unavailable: "flash-unavailable" === e.name,
                            degraded: "flash-degraded" === e.name,
                            deactivated: "flash-deactivated" === e.name,
                            overdue: "flash-overdue" === e.name,
                            ready: !1
                        }) : "version-mismatch" === e.name && (n = e.swfVersion, E(q, {
                            disabled: !1,
                            outdated: !1,
                            insecure: !1,
                            unavailable: !1,
                            degraded: !1,
                            deactivated: !1,
                            overdue: !1,
                            ready: !1
                        })), Ue();
                        break;
                    case"ready":
                        n = e.swfVersion;
                        var s = !0 === q.deactivated;
                        E(q, {
                            sandboxed: !1,
                            disabled: !1,
                            outdated: !1,
                            insecure: !1,
                            unavailable: !1,
                            degraded: !1,
                            deactivated: !1,
                            overdue: s,
                            ready: !s
                        }), Ue();
                        break;
                    case"beforecopy":
                        i = t;
                        break;
                    case"copy":
                        var l, c, u = e.relatedTarget;
                        !B["text/html"] && !B["text/plain"] && u && (c = u.value || u.outerHTML || u.innerHTML) && (l = u.value || u.textContent || u.innerText) ? (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", l), c !== l && e.clipboardData.setData("text/html", c)) : !B["text/plain"] && e.target && (l = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", l));
                        break;
                    case"aftercopy":
                        _e(e), Ke.clearData(), t && t !== He() && t.focus && t.focus();
                        break;
                    case"_mouseover":
                        Ke.focus(t), !0 === K.bubbleEvents && o && (t && t !== e.relatedTarget && !j(e.relatedTarget, t) && Ce(E({}, e, {
                            type: "mouseenter",
                            bubbles: !1,
                            cancelable: !1
                        })), Ce(E({}, e, {type: "mouseover"})));
                        break;
                    case"_mouseout":
                        Ke.blur(), !0 === K.bubbleEvents && o && (t && t !== e.relatedTarget && !j(e.relatedTarget, t) && Ce(E({}, e, {
                            type: "mouseleave",
                            bubbles: !1,
                            cancelable: !1
                        })), Ce(E({}, e, {type: "mouseout"})));
                        break;
                    case"_mousedown":
                        Me(t, K.activeClass), !0 === K.bubbleEvents && o && Ce(E({}, e, {type: e.type.slice(1)}));
                        break;
                    case"_mouseup":
                        qe(t, K.activeClass), !0 === K.bubbleEvents && o && Ce(E({}, e, {type: e.type.slice(1)}));
                        break;
                    case"_click":
                        i = null, !0 === K.bubbleEvents && o && Ce(E({}, e, {type: e.type.slice(1)}));
                        break;
                    case"_mousemove":
                        !0 === K.bubbleEvents && o && Ce(E({}, e, {type: e.type.slice(1)}))
                }
                if (/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) return !0
            }, _e = function (e) {
                if (e.errors && e.errors.length > 0) {
                    var t = S(e);
                    E(t, {type: "error", name: "clipboard-error"}), delete t.success, l(function () {
                        Ke.emit(t)
                    }, 0)
                }
            }, Ce = function (e) {
                if (e && "string" == typeof e.type && e) {
                    var t, n = e.target || null, r = n && n.ownerDocument || a, i = {
                        view: r.defaultView || o,
                        canBubble: !0,
                        cancelable: !0,
                        detail: "click" === e.type ? 1 : 0,
                        button: "number" == typeof e.which ? e.which - 1 : "number" == typeof e.button ? e.button : r.createEvent ? 0 : 1
                    }, s = E(i, e);
                    n && r.createEvent && n.dispatchEvent && (s = [s.type, s.canBubble, s.cancelable, s.view, s.detail, s.screenX, s.screenY, s.clientX, s.clientY, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.button, s.relatedTarget], (t = r.createEvent("MouseEvents")).initMouseEvent && (t.initMouseEvent.apply(t, s), t._source = "js", n.dispatchEvent(t)))
                }
            }, Ee = function () {
                var e = K.flashLoadTimeout;
                if ("number" == typeof e && e >= 0) {
                    var t = Math.min(1e3, e / 10), n = K.swfObjectId + "_fallbackContent";
                    $ = u(function () {
                        var e = a.getElementById(n);
                        ze(e) && (Ue(), q.deactivated = null, Ke.emit({type: "error", name: "swf-not-found"}))
                    }, t)
                }
            }, Se = function () {
                var e = a.createElement("div");
                return e.id = K.containerId, e.className = K.containerClass, e.style.position = "absolute", e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px", e.style.zIndex = "" + Ve(K.zIndex), e
            }, ke = function (e) {
                for (var t = e && e.parentNode; t && "OBJECT" === t.nodeName && t.parentNode;) t = t.parentNode;
                return t || null
            }, Ne = function (e) {
                return "string" == typeof e && e ? e.replace(/["&'<>]/g, function (e) {
                    switch (e) {
                        case'"':
                            return "&quot;";
                        case"&":
                            return "&amp;";
                        case"'":
                            return "&apos;";
                        case"<":
                            return "&lt;";
                        case">":
                            return "&gt;";
                        default:
                            return e
                    }
                }) : e
            }, Ae = function () {
                var e, t = q.bridge, n = ke(t);
                if (!t) {
                    var r = Ie(o.location.host, K), i = "never" === r ? "none" : "all",
                        s = Fe(E({jsVersion: Ke.version}, K)), l = K.swfPath + De(K.swfPath, K);
                    M && (l = Ne(l)), n = Se();
                    var c = a.createElement("div");
                    n.appendChild(c), a.body.appendChild(n);
                    var u = a.createElement("div"), f = "activex" === q.pluginType;
                    u.innerHTML = '<object id="' + K.swfObjectId + '" name="' + K.swfObjectId + '" width="100%" height="100%" ' + (f ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + l + '"') + ">" + (f ? '<param name="movie" value="' + l + '"/>' : "") + '<param name="allowScriptAccess" value="' + r + '"/><param name="allowNetworking" value="' + i + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + s + '"/><div id="' + K.swfObjectId + '_fallbackContent">&nbsp;</div></object>', t = u.firstChild, u = null, _(t).ZeroClipboard = Ke, n.replaceChild(t, c), Ee()
                }
                return t || ((t = a[K.swfObjectId]) && (e = t.length) && (t = t[e - 1]), !t && n && (t = n.firstChild)), q.bridge = t || null, t
            }, je = function () {
                var e = q.bridge;
                if (e) {
                    var t = ke(e);
                    t && ("activex" === q.pluginType && "readyState" in e ? (e.style.display = "none", function n() {
                        if (4 === e.readyState) {
                            for (var r in e) "function" == typeof e[r] && (e[r] = null);
                            e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t)
                        } else l(n, 10)
                    }()) : (e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t))), Ue(), q.ready = null, q.bridge = null, q.deactivated = null, q.insecure = null, n = void 0
                }
            }, Oe = function (e) {
                var t = {}, n = {};
                if ("object" == typeof e && e) {
                    for (var r in e) if (r && x.call(e, r) && "string" == typeof e[r] && e[r]) switch (r.toLowerCase()) {
                        case"text/plain":
                        case"text":
                        case"air:text":
                        case"flash:text":
                            t.text = e[r], n.text = r;
                            break;
                        case"text/html":
                        case"html":
                        case"air:html":
                        case"flash:html":
                            t.html = e[r], n.html = r;
                            break;
                        case"application/rtf":
                        case"text/rtf":
                        case"rtf":
                        case"richtext":
                        case"air:rtf":
                        case"flash:rtf":
                            t.rtf = e[r], n.rtf = r
                    }
                    return {data: t, formatMap: n}
                }
            }, Le = function (e, t) {
                if ("object" != typeof e || !e || "object" != typeof t || !t) return e;
                var n = {};
                for (var r in e) if (x.call(e, r)) if ("errors" === r) {
                    n[r] = e[r] ? e[r].slice() : [];
                    for (var i = 0, o = n[r].length; i < o; i++) n[r][i].format = t[n[r][i].format]
                } else if ("success" !== r && "data" !== r) n[r] = e[r]; else {
                    n[r] = {};
                    var a = e[r];
                    for (var s in a) s && x.call(a, s) && x.call(t, s) && (n[r][t[s]] = a[s])
                }
                return n
            }, De = function (e, t) {
                return null == t || t && !0 === t.cacheBust ? (-1 === e.indexOf("?") ? "?" : "&") + "noCache=" + b() : ""
            }, Fe = function (e) {
                var t, n, r, i, a = "", s = [];
                if (e.trustedDomains && ("string" == typeof e.trustedDomains ? i = [e.trustedDomains] : "object" == typeof e.trustedDomains && "length" in e.trustedDomains && (i = e.trustedDomains)), i && i.length) for (t = 0, n = i.length; t < n; t++) if (x.call(i, t) && i[t] && "string" == typeof i[t]) {
                    if (!(r = Re(i[t]))) continue;
                    if ("*" === r) {
                        s.length = 0, s.push(r);
                        break
                    }
                    s.push.apply(s, [r, "//" + r, o.location.protocol + "//" + r])
                }
                return s.length && (a += "trustedOrigins=" + p(s.join(","))), !0 === e.forceEnhancedClipboard && (a += (a ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof e.swfObjectId && e.swfObjectId && (a += (a ? "&" : "") + "swfObjectId=" + p(e.swfObjectId)), "string" == typeof e.jsVersion && e.jsVersion && (a += (a ? "&" : "") + "jsVersion=" + p(e.jsVersion)), a
            }, Re = function (e) {
                if (null == e || "" === e) return null;
                if ("" === (e = e.replace(/^\s+|\s+$/g, ""))) return null;
                var t = e.indexOf("//"), n = (e = -1 === t ? e : e.slice(t + 2)).indexOf("/");
                return (e = -1 === n ? e : -1 === t || 0 === n ? null : e.slice(0, n)) && ".swf" === e.slice(-4).toLowerCase() ? null : e || null
            }, Ie = function () {
                var e = function (e) {
                    var t, n, r, i = [];
                    if ("string" == typeof e && (e = [e]), "object" != typeof e || !e || "number" != typeof e.length) return i;
                    for (t = 0, n = e.length; t < n; t++) if (x.call(e, t) && (r = Re(e[t]))) {
                        if ("*" === r) {
                            i.length = 0, i.push("*");
                            break
                        }
                        -1 === i.indexOf(r) && i.push(r)
                    }
                    return i
                };
                return function (t, n) {
                    var r = Re(n.swfPath);
                    null === r && (r = t);
                    var i = e(n.trustedDomains), o = i.length;
                    if (o > 0) {
                        if (1 === o && "*" === i[0]) return "always";
                        if (-1 !== i.indexOf(t)) return 1 === o && t === r ? "sameDomain" : "always"
                    }
                    return "never"
                }
            }(), He = function () {
                try {
                    return a.activeElement
                } catch (e) {
                    return null
                }
            }, Me = function (e, t) {
                var n, r, i, o = [];
                if ("string" == typeof t && t && (o = t.split(/\s+/)), e && 1 === e.nodeType && o.length > 0) {
                    for (i = (" " + (e.className || "") + " ").replace(/[\t\r\n\f]/g, " "), n = 0, r = o.length; n < r; n++) -1 === i.indexOf(" " + o[n] + " ") && (i += o[n] + " ");
                    (i = i.replace(/^\s+|\s+$/g, "")) !== e.className && (e.className = i)
                }
                return e
            }, qe = function (e, t) {
                var n, r, i, o = [];
                if ("string" == typeof t && t && (o = t.split(/\s+/)), e && 1 === e.nodeType && o.length > 0 && e.className) {
                    for (i = (" " + e.className + " ").replace(/[\t\r\n\f]/g, " "), n = 0, r = o.length; n < r; n++) i = i.replace(" " + o[n] + " ", " ");
                    (i = i.replace(/^\s+|\s+$/g, "")) !== e.className && (e.className = i)
                }
                return e
            }, Pe = function (e, t) {
                var n = d(e, null).getPropertyValue(t);
                return "cursor" !== t || n && "auto" !== n || "A" !== e.nodeName ? n : "pointer"
            }, Be = function (e) {
                var t = {left: 0, top: 0, width: 0, height: 0};
                if (e.getBoundingClientRect) {
                    var n = e.getBoundingClientRect(), r = o.pageXOffset, i = o.pageYOffset,
                        s = a.documentElement.clientLeft || 0, l = a.documentElement.clientTop || 0, c = 0, u = 0;
                    if ("relative" === Pe(a.body, "position")) {
                        var f = a.body.getBoundingClientRect(), d = a.documentElement.getBoundingClientRect();
                        c = f.left - d.left || 0, u = f.top - d.top || 0
                    }
                    t.left = n.left + r - s - c, t.top = n.top + i - l - u, t.width = "width" in n ? n.width : n.right - n.left, t.height = "height" in n ? n.height : n.bottom - n.top
                }
                return t
            }, ze = function (e) {
                if (!e) return !1;
                var t = d(e, null);
                if (!t) return !1;
                var n = y(t.height) > 0, r = y(t.width) > 0, i = y(t.top) >= 0, o = y(t.left) >= 0, a = n && r && i && o,
                    s = a ? null : Be(e);
                return "none" !== t.display && "collapse" !== t.visibility && (a || !!s && (n || s.height > 0) && (r || s.width > 0) && (i || s.top >= 0) && (o || s.left >= 0))
            }, Ue = function () {
                c(U), U = 0, f($), $ = 0
            }, $e = function () {
                var e;
                if (r && (e = ke(q.bridge))) {
                    var t = Be(r);
                    E(e.style, {
                        width: t.width + "px",
                        height: t.height + "px",
                        top: t.top + "px",
                        left: t.left + "px",
                        zIndex: "" + Ve(K.zIndex)
                    })
                }
            }, We = function (e) {
                !0 === q.ready && (q.bridge && "function" == typeof q.bridge.setHandCursor ? q.bridge.setHandCursor(e) : q.ready = !1)
            }, Ve = function (e) {
                if (/^(?:auto|inherit)$/.test(e)) return e;
                var t;
                return "number" != typeof e || v(e) ? "string" == typeof e && (t = Ve(g(e, 10))) : t = e, "number" == typeof t ? t : "auto"
            }, Xe = function (e) {
                var t = /(\r\n|\r|\n)/g;
                return "string" == typeof e && !0 === K.fixLineEndings && (I() ? /((^|[^\r])\n|\r([^\n]|$))/.test(e) && (e = e.replace(t, "\r\n")) : /\r/.test(e) && (e = e.replace(t, "\n"))), e
            }, Ye = function (t) {
                var n, r, i, o = q.sandboxed, a = null;
                if (t = !0 === t, !1 === H) a = !1; else {
                    try {
                        r = e.frameElement || null
                    } catch (e) {
                        i = {name: e.name, message: e.message}
                    }
                    if (r && 1 === r.nodeType && "IFRAME" === r.nodeName) try {
                        a = r.hasAttribute("sandbox")
                    } catch (e) {
                        a = null
                    } else {
                        try {
                            n = document.domain || null
                        } catch (e) {
                            n = null
                        }
                        (null === n || i && "SecurityError" === i.name && /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(i.message.toLowerCase())) && (a = !0)
                    }
                }
                return q.sandboxed = a, o === a || t || Ze(h), a
            }, Ze = function (e) {
                function t(e) {
                    var t = e.match(/[\d]+/g);
                    return t.length = 3, t.join(".")
                }

                function n(e) {
                    return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || "chrome.plugin" === e.slice(-13))
                }

                function r(e) {
                    e && (a = !0, e.version && (u = t(e.version)), !u && e.description && (u = t(e.description)), e.filename && (c = n(e.filename)))
                }

                var i, o, a = !1, l = !1, c = !1, u = "";
                if (s.plugins && s.plugins.length) r(s.plugins["Shockwave Flash"]), s.plugins["Shockwave Flash 2.0"] && (a = !0, u = "2.0.0.11"); else if (s.mimeTypes && s.mimeTypes.length) r((o = s.mimeTypes["application/x-shockwave-flash"]) && o.enabledPlugin); else if (void 0 !== e) {
                    l = !0;
                    try {
                        i = new e("ShockwaveFlash.ShockwaveFlash.7"), a = !0, u = t(i.GetVariable("$version"))
                    } catch (n) {
                        try {
                            i = new e("ShockwaveFlash.ShockwaveFlash.6"), a = !0, u = "6.0.21"
                        } catch (n) {
                            try {
                                i = new e("ShockwaveFlash.ShockwaveFlash"), a = !0, u = t(i.GetVariable("$version"))
                            } catch (e) {
                                l = !1
                            }
                        }
                    }
                }
                q.disabled = !0 !== a, q.outdated = u && y(u) < y("11.0.0"), q.version = u || "0.0.0", q.pluginType = c ? "pepper" : l ? "activex" : a ? "netscape" : "unknown"
            };
        Ze(h), Ye(!0);
        var Ke = function () {
            if (!(this instanceof Ke)) return new Ke;
            "function" == typeof Ke._createClient && Ke._createClient.apply(this, C(arguments))
        };
        Ke.version = "2.4.0-beta.1", Ke.config = function () {
            return G.apply(this, C(arguments))
        }, Ke.state = function () {
            return J.apply(this, C(arguments))
        }, Ke.isFlashUnusable = function () {
            return ee.apply(this, C(arguments))
        }, Ke.on = function () {
            return te.apply(this, C(arguments))
        }, Ke.off = function () {
            return ne.apply(this, C(arguments))
        }, Ke.handlers = function () {
            return re.apply(this, C(arguments))
        }, Ke.emit = function () {
            return ie.apply(this, C(arguments))
        }, Ke.create = function () {
            return ae.apply(this, C(arguments))
        }, Ke.destroy = function () {
            return se.apply(this, C(arguments))
        }, Ke.setData = function () {
            return le.apply(this, C(arguments))
        }, Ke.clearData = function () {
            return ce.apply(this, C(arguments))
        }, Ke.getData = function () {
            return ue.apply(this, C(arguments))
        }, Ke.focus = Ke.activate = function () {
            return fe.apply(this, C(arguments))
        }, Ke.blur = Ke.deactivate = function () {
            return de.apply(this, C(arguments))
        }, Ke.activeElement = function () {
            return pe.apply(this, C(arguments))
        };
        var Ge = 0, Je = {}, Qe = 0, et = {}, tt = {};
        E(K, {autoActivate: !0});
        var nt = function (e) {
            var t, n = this;
            n.id = "" + Ge++, t = {
                instance: n, elements: [], handlers: {}, coreWildcardHandler: function (e) {
                    return n.emit(e)
                }
            }, Je[n.id] = t, e && n.clip(e), Ke.on("*", t.coreWildcardHandler), Ke.on("destroy", function () {
                n.destroy()
            }), Ke.create()
        }, rt = function (e, t) {
            var r, i, o, a = {}, s = this, l = Je[s.id], c = l && l.handlers;
            if (!l) throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");
            if ("string" == typeof e && e ? o = e.toLowerCase().split(/\s+/) : "object" != typeof e || !e || "length" in e || void 0 !== t || w(e).forEach(function (t) {
                    var n = e[t];
                    "function" == typeof n && s.on(t, n)
                }), o && o.length && t) {
                for (r = 0, i = o.length; r < i; r++) a[e = o[r].replace(/^on/, "")] = !0, c[e] || (c[e] = []), c[e].push(t);
                if (a.ready && q.ready && this.emit({type: "ready", client: this}), a.error) {
                    for (r = 0, i = X.length; r < i; r++) if (q[X[r].replace(/^flash-/, "")]) {
                        this.emit({type: "error", name: X[r], client: this});
                        break
                    }
                    void 0 !== n && Ke.version !== n && this.emit({
                        type: "error",
                        name: "version-mismatch",
                        jsVersion: Ke.version,
                        swfVersion: n
                    })
                }
            }
            return s
        }, it = function (e, t) {
            var n, r, i, o, a, s = this, l = Je[s.id], c = l && l.handlers;
            if (!c) return s;
            if (0 === arguments.length ? o = w(c) : "string" == typeof e && e ? o = e.split(/\s+/) : "object" != typeof e || !e || "length" in e || void 0 !== t || w(e).forEach(function (t) {
                    var n = e[t];
                    "function" == typeof n && s.off(t, n)
                }), o && o.length) for (n = 0, r = o.length; n < r; n++) if (e = o[n].toLowerCase().replace(/^on/, ""), (a = c[e]) && a.length) if (t) for (i = a.indexOf(t); -1 !== i;) a.splice(i, 1), i = a.indexOf(t, i); else a.length = 0;
            return s
        }, ot = function (e) {
            var t = null, n = Je[this.id] && Je[this.id].handlers;
            return n && (t = "string" == typeof e && e ? n[e] ? n[e].slice(0) : [] : S(n)), t
        }, at = function (e) {
            var t, n = this;
            return ft.call(n, e) && ("object" == typeof e && e && "string" == typeof e.type && e.type && (e = E({}, e)), t = E({}, me(e), {client: n}), dt.call(n, t)), n
        }, st = function (e) {
            if (!Je[this.id]) throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");
            e = pt(e);
            for (var t = 0; t < e.length; t++) if (x.call(e, t) && e[t] && 1 === e[t].nodeType) {
                e[t].zcClippingId ? -1 === et[e[t].zcClippingId].indexOf(this.id) && et[e[t].zcClippingId].push(this.id) : (e[t].zcClippingId = "zcClippingId_" + Qe++, et[e[t].zcClippingId] = [this.id], !0 === K.autoActivate && ht(e[t]));
                var n = Je[this.id] && Je[this.id].elements;
                -1 === n.indexOf(e[t]) && n.push(e[t])
            }
            return this
        }, lt = function (e) {
            var t = Je[this.id];
            if (!t) return this;
            for (var n, r = t.elements, i = (e = void 0 === e ? r.slice(0) : pt(e)).length; i--;) if (x.call(e, i) && e[i] && 1 === e[i].nodeType) {
                for (n = 0; -1 !== (n = r.indexOf(e[i], n));) r.splice(n, 1);
                var o = et[e[i].zcClippingId];
                if (o) {
                    for (n = 0; -1 !== (n = o.indexOf(this.id, n));) o.splice(n, 1);
                    0 === o.length && (!0 === K.autoActivate && mt(e[i]), delete e[i].zcClippingId)
                }
            }
            return this
        }, ct = function () {
            var e = Je[this.id];
            return e && e.elements ? e.elements.slice(0) : []
        }, ut = function () {
            var e = Je[this.id];
            e && (this.unclip(), this.off(), Ke.off("*", e.coreWildcardHandler), delete Je[this.id])
        }, ft = function (e) {
            if (!e || !e.type) return !1;
            if (e.client && e.client !== this) return !1;
            var t = Je[this.id], n = t && t.elements, r = !!n && n.length > 0,
                i = !e.target || r && -1 !== n.indexOf(e.target),
                o = e.relatedTarget && r && -1 !== n.indexOf(e.relatedTarget), a = e.client && e.client === this;
            return !(!t || !(i || o || a))
        }, dt = function (e) {
            var t = Je[this.id];
            if ("object" == typeof e && e && e.type && t) {
                var n = ve(e), r = t && t.handlers["*"] || [], i = t && t.handlers[e.type] || [], a = r.concat(i);
                if (a && a.length) {
                    var s, l, c, u, f, d = this;
                    for (s = 0, l = a.length; s < l; s++) u = d, "string" == typeof(c = a[s]) && "function" == typeof o[c] && (c = o[c]), "object" == typeof c && c && "function" == typeof c.handleEvent && (u = c, c = c.handleEvent), "function" == typeof c && (f = E({}, e), be(c, u, [f], n))
                }
            }
        }, pt = function (e) {
            return "string" == typeof e && (e = []), "number" != typeof e.length ? [e] : e
        }, ht = function (e) {
            if (e && 1 === e.nodeType) {
                var t = function (e) {
                    (e || (e = o.event)) && ("js" !== e._source && (e.stopImmediatePropagation(), e.preventDefault()), delete e._source)
                }, n = function (n) {
                    (n || (n = o.event)) && (t(n), Ke.focus(e))
                };
                e.addEventListener("mouseover", n, !1), e.addEventListener("mouseout", t, !1), e.addEventListener("mouseenter", t, !1), e.addEventListener("mouseleave", t, !1), e.addEventListener("mousemove", t, !1), tt[e.zcClippingId] = {
                    mouseover: n,
                    mouseout: t,
                    mouseenter: t,
                    mouseleave: t,
                    mousemove: t
                }
            }
        }, mt = function (e) {
            if (e && 1 === e.nodeType) {
                var t = tt[e.zcClippingId];
                if ("object" == typeof t && t) {
                    for (var n, r, i = ["move", "leave", "enter", "out", "over"], o = 0, a = i.length; o < a; o++) "function" == typeof(r = t[n = "mouse" + i[o]]) && e.removeEventListener(n, r, !1);
                    delete tt[e.zcClippingId]
                }
            }
        };
        Ke._createClient = function () {
            nt.apply(this, C(arguments))
        }, Ke.prototype.on = function () {
            return rt.apply(this, C(arguments))
        }, Ke.prototype.off = function () {
            return it.apply(this, C(arguments))
        }, Ke.prototype.handlers = function () {
            return ot.apply(this, C(arguments))
        }, Ke.prototype.emit = function () {
            return at.apply(this, C(arguments))
        }, Ke.prototype.clip = function () {
            return st.apply(this, C(arguments))
        }, Ke.prototype.unclip = function () {
            return lt.apply(this, C(arguments))
        }, Ke.prototype.elements = function () {
            return ct.apply(this, C(arguments))
        }, Ke.prototype.destroy = function () {
            return ut.apply(this, C(arguments))
        }, Ke.prototype.setText = function (e) {
            if (!Je[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ke.setData("text/plain", e), this
        }, Ke.prototype.setHtml = function (e) {
            if (!Je[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ke.setData("text/html", e), this
        }, Ke.prototype.setRichText = function (e) {
            if (!Je[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ke.setData("application/rtf", e), this
        }, Ke.prototype.setData = function () {
            if (!Je[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ke.setData.apply(this, C(arguments)), this
        }, Ke.prototype.clearData = function () {
            if (!Je[this.id]) throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ke.clearData.apply(this, C(arguments)), this
        }, Ke.prototype.getData = function () {
            if (!Je[this.id]) throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ke.getData.apply(this, C(arguments))
        }, "function" == typeof define && define.amd ? define(function () {
            return Ke
        }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = Ke : e.ZeroClipboard = Ke
    }(function () {
        return this || window
    }())
}), function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define("newweb/common/clipboard.min", [], e); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Clipboard = e()
    }
}(function () {
    return function e(t, n, r) {
        function i(a, s) {
            if (!n[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (o) return o(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = n[a] = {exports: {}};
                t[a][0].call(u.exports, function (e) {
                    return i(t[a][1][e] || e)
                }, u, u.exports, e, t, n, r)
            }
            return n[a].exports
        }

        for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
        return i
    }({
        1: [function (e, t, n) {
            var r = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var i = Element.prototype;
                i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
            }
            t.exports = function (e, t) {
                for (; e && e.nodeType !== r;) {
                    if ("function" == typeof e.matches && e.matches(t)) return e;
                    e = e.parentNode
                }
            }
        }, {}], 2: [function (e, t, n) {
            function r(e, t, n, r) {
                return function (n) {
                    n.delegateTarget = i(n.target, t), n.delegateTarget && r.call(e, n)
                }
            }

            var i = e("./closest");
            t.exports = function (e, t, n, i, o) {
                var a = r.apply(this, arguments);
                return e.addEventListener(n, a, o), {
                    destroy: function () {
                        e.removeEventListener(n, a, o)
                    }
                }
            }
        }, {"./closest": 1}], 3: [function (e, t, n) {
            n.node = function (e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, n.nodeList = function (e) {
                var t = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
            }, n.string = function (e) {
                return "string" == typeof e || e instanceof String
            }, n.fn = function (e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }
        }, {}], 4: [function (e, t, n) {
            function r(e, t, n) {
                return e.addEventListener(t, n), {
                    destroy: function () {
                        e.removeEventListener(t, n)
                    }
                }
            }

            function i(e, t, n) {
                return Array.prototype.forEach.call(e, function (e) {
                    e.addEventListener(t, n)
                }), {
                    destroy: function () {
                        Array.prototype.forEach.call(e, function (e) {
                            e.removeEventListener(t, n)
                        })
                    }
                }
            }

            function o(e, t, n) {
                return s(document.body, e, t, n)
            }

            var a = e("./is"), s = e("delegate");
            t.exports = function (e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!a.string(t)) throw new TypeError("Second argument must be a String");
                if (!a.fn(n)) throw new TypeError("Third argument must be a Function");
                if (a.node(e)) return r(e, t, n);
                if (a.nodeList(e)) return i(e, t, n);
                if (a.string(e)) return o(e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
        }, {"./is": 3, delegate: 2}], 5: [function (e, t, n) {
            t.exports = function (e) {
                var t;
                if ("SELECT" === e.nodeName) e.focus(), t = e.value; else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                    var n = e.hasAttribute("readonly");
                    n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
                } else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var r = window.getSelection(), i = document.createRange();
                    i.selectNodeContents(e), r.removeAllRanges(), r.addRange(i), t = r.toString()
                }
                return t
            }
        }, {}], 6: [function (e, t, n) {
            function r() {
            }

            r.prototype = {
                on: function (e, t, n) {
                    var r = this.e || (this.e = {});
                    return (r[e] || (r[e] = [])).push({fn: t, ctx: n}), this
                }, once: function (e, t, n) {
                    function r() {
                        i.off(e, r), t.apply(n, arguments)
                    }

                    var i = this;
                    return r._ = t, this.on(e, r, n)
                }, emit: function (e) {
                    var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0,
                        i = n.length;
                    for (r; r < i; r++) n[r].fn.apply(n[r].ctx, t);
                    return this
                }, off: function (e, t) {
                    var n = this.e || (this.e = {}), r = n[e], i = [];
                    if (r && t) for (var o = 0, a = r.length; o < a; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
                    return i.length ? n[e] = i : delete n[e], this
                }
            }, t.exports = r
        }, {}], 7: [function (e, t, n) {
            !function (r, i) {
                if (void 0 !== n) i(t, e("select")); else {
                    var o = {exports: {}};
                    i(o, r.select), r.clipboardAction = o.exports
                }
            }(this, function (e, t) {
                "use strict";

                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                var r = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(t), i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), a = function () {
                    function e(t) {
                        n(this, e), this.resolveOptions(t), this.initSelection()
                    }

                    return o(e, [{
                        key: "resolveOptions", value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                        }
                    }, {
                        key: "initSelection", value: function () {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake", value: function () {
                            var e = this, t = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function () {
                                return e.removeFake()
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                            var n = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, r.default)(this.fakeElem), this.copyText()
                        }
                    }, {
                        key: "removeFake", value: function () {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget", value: function () {
                            this.selectedText = (0, r.default)(this.target), this.copyText()
                        }
                    }, {
                        key: "copyText", value: function () {
                            var e = void 0;
                            try {
                                e = document.execCommand(this.action)
                            } catch (t) {
                                e = !1
                            }
                            this.handleResult(e)
                        }
                    }, {
                        key: "handleResult", value: function (e) {
                            this.emitter.emit(e ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection", value: function () {
                            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy", value: function () {
                            this.removeFake()
                        }
                    }, {
                        key: "action", set: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        }, get: function () {
                            return this._action
                        }
                    }, {
                        key: "target", set: function (e) {
                            if (void 0 !== e) {
                                if (!e || "object" !== (void 0 === e ? "undefined" : i(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = e
                            }
                        }, get: function () {
                            return this._target
                        }
                    }]), e
                }();
                e.exports = a
            })
        }, {select: 5}], 8: [function (e, t, n) {
            !function (r, i) {
                if (void 0 !== n) i(t, e("./clipboard-action"), e("tiny-emitter"), e("good-listener")); else {
                    var o = {exports: {}};
                    i(o, r.clipboardAction, r.tinyEmitter, r.goodListener), r.clipboard = o.exports
                }
            }(this, function (e, t, n, r) {
                "use strict";

                function i(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                function o(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function a(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function s(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                function l(e, t) {
                    var n = "data-clipboard-" + e;
                    if (t.hasAttribute(n)) return t.getAttribute(n)
                }

                var c = i(t), u = i(n), f = i(r),
                    d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, p = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }

                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(), h = function (e) {
                        function t(e, n) {
                            o(this, t);
                            var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return r.resolveOptions(n), r.listenClick(e), r
                        }

                        return s(t, u.default), p(t, [{
                            key: "resolveOptions", value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === d(e.container) ? e.container : document.body
                            }
                        }, {
                            key: "listenClick", value: function (e) {
                                var t = this;
                                this.listener = (0, f.default)(e, "click", function (e) {
                                    return t.onClick(e)
                                })
                            }
                        }, {
                            key: "onClick", value: function (e) {
                                var t = e.delegateTarget || e.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new c.default({
                                    action: this.action(t),
                                    target: this.target(t),
                                    text: this.text(t),
                                    container: this.container,
                                    trigger: t,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction", value: function (e) {
                                return l("action", e)
                            }
                        }, {
                            key: "defaultTarget", value: function (e) {
                                var t = l("target", e);
                                if (t) return document.querySelector(t)
                            }
                        }, {
                            key: "defaultText", value: function (e) {
                                return l("text", e)
                            }
                        }, {
                            key: "destroy", value: function () {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported", value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                    t = "string" == typeof e ? [e] : e, n = !!document.queryCommandSupported;
                                return t.forEach(function (e) {
                                    n = n && !!document.queryCommandSupported(e)
                                }), n
                            }
                        }]), t
                    }();
                e.exports = h
            })
        }, {"./clipboard-action": 7, "good-listener": 4, "tiny-emitter": 6}]
    }, {}, [8])(8)
}), define("newweb/common/copy", ["./ZeroClipboard", "./log", "./utils"], function (e, t) {
    var n = e("./jquery-1.7");
    e("./ZeroClipboard");
    var r = e("./log");
    e("./clipboard.min");
    var i = e("./utils");
    window.copyResult = function () {
        return n.trim(n("#transTarget").html().replace(/<br\s+.*?>/gi, "\n").replace(/<\/p>/gi, "\r\n").replace(/<p.*?>/gi, "").replace(/<span.*?>/gi, "").replace(/<\/span>/gi, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&copy;/g, "©"))
    };
    var o = function () {
        window.clipboardData && (window.clipboardData.clearData(), window.clipboardData.setData("Text", copyResult()) || alert("您的浏览器不支持直接复制功能，请手动复制。"))
    };
    t.init = function () {
        function e(e) {
            alert("您的浏览器不支持直接复制功能，请手动复制；或在浏览器设置中开启flash插件功能。")
        }

        if (document.oncopy = function (e) {
                var t = (e = e || event).clipboardData || window.clipboardData, n = i.getSelectionText();
                if (n) return t.setData("text", n), e.preventDefault(), !1
            }, !(n("#copyit").length > 0)) {
            if (Clipboard.isSupported()) {
                var t = new Clipboard("#targetCopy", {text: copyResult});
                return t.on("success", function (e) {
                    n("#targetCopy .tips__text--short").text("已复制"), r.clog("COPY_CLICK"), setTimeout(function () {
                        n("#targetCopy .tips__text--short").text("复制")
                    }, 1e3)
                }), void t.on("error", function (e) {
                    r.clog("COPY_CLICK"), alert("您的浏览器不支持直接复制功能，请手动复制。")
                })
            }
            if (n.browser.msie) n('<a id="copyit" href="javascript:;" title=""></a>').appendTo("#targetCopy").show().click(function () {
                return o(), r.clog("COPY_CLICK"), n("#targetCopy .tips__text--short").text("已复制"), n(this).text("").blur(), setTimeout(function () {
                    n("#targetCopy .tips__text--short").text("复制")
                }, 1e3), !1
            }); else {
                var a = new ZeroClipboard(document.getElementById("targetCopy"));
                n("#targetCopy").on("click", e), a.on("ready", function (t) {
                    a.on("copy", function (e) {
                        e.clipboardData.setData("text/plain", copyResult()), n("#targetCopy .tips__text--short").text("已复制"), r.clog("COPY_CLICK"), setTimeout(function () {
                            n("#targetCopy .tips__text--short").text("复制")
                        }, 1e3)
                    }), n("#targetCopy").on("mouseover", function (e) {
                        n(this).addClass("copy-hover"), n("#targetCopy .speaker__tips").css("display", "block")
                    }), n("#targetCopy").on("mouseout", function (e) {
                        n(this).removeClass("copy-hover"), n("#targetCopy .speaker__tips").css("display", "none")
                    }), n("#targetCopy").off("click", e)
                })
            }
        }
    }
}), define("newweb/common/download", ["./utils", "./log"], function (e, t) {
    function n() {
        o.on("click", function () {
            c.clog("AD_FULLBANNER_CLOSE"), i.cookie("fanyi-ad-closed", 1), u()
        }), s.on("click", function () {
            i.cookie("fanyi-ad-closed", 1), u(), c.clog("AD_FULLBANNER_CLOSE"), c.clog("AD_FULLBANNER_CLICK")
        })
    }

    var r = e("./jquery-1.7"), i = e("./utils"), o = r(".guide-close"), a = r(".dict-download-guide"),
        s = r(".download-guide-link"), l = r(".download-guide-img"), c = e("./log"), u = function () {
            a.hide()
        }, f = function (e) {
            r.ajax({
                type: "GET",
                url: "http://impservice.dictapp.youdao.com/imp/request.s",
                data: {
                    req: window.location.href,
                    rnd: (new Date).getTime(),
                    syndid: 58,
                    memberid: 311,
                    tn: "text_700_400",
                    width: r(".input__original").width(),
                    height: 400,
                    ref2: "http://www.youdao.com/"
                },
                dataType: "jsonp",
                success: function (t) {
                    t && "" != t.mimeSrc && e(t)
                },
                error: function (e) {
                }
            })
        }, d = function () {
            c.clog("AD_FULLBANNER_SHOW"), a.show()
        }, p = function () {
            f(function (e) {
                var t = e.advId, n = i.cookie("fanyi-ad-id"), r = i.cookie("fanyi-ad-closed"), o = e.link || "javascript:;",
                    a = e.mimeSrc;
                t == n && 1 == r || (i.cookie("fanyi-ad-id", t), i.cookie("fanyi-ad-closed", 0), s.attr("href", o), "" == e.link && s.css({cursor: "default"}), l.attr("src", a), d())
            })
        };
    t.init = function () {
        n(), p()
    }
}), define("newweb/common/hotLink", ["./log"], function (e, t) {
    var n = e("./jquery-1.7"), r = (e("./log"), n(".fanyi__popularize a")), i = function () {
        n.ajax({
            type: "GET",
            url: "http://impservice.dictapp.youdao.com/imp/request.s",
            data: {
                req: window.location.href,
                rnd: (new Date).getTime(),
                syndid: 58,
                memberid: 310,
                tn: "text_" + n(".input__original").width() + "_18",
                width: n(".input__original").width(),
                height: 18,
                ref2: "http://www.youdao.com/"
            },
            dataType: "jsonp",
            success: function (e) {
                e && e.title ? (r.text(e.title), r.attr("href", e.link), n(".fanyi__popularize").show()) : n(".fanyi__popularize").hide()
            },
            error: function (e) {
            }
        })
    };
    t.init = function () {
        i()
    }
}), define("newweb/common/jquery-1.7", [], function (e, t) {
    return function (e, t) {
        function n(e) {
            var t, n, r = I[e] = {};
            for (t = 0, n = (e = e.split(/\s+/)).length; t < n; t++) r[e[t]] = !0;
            return r
        }

        function r(e, n, r) {
            if (r === t && 1 === e.nodeType) {
                var i = "data-" + n.replace(q, "-$1").toLowerCase();
                if ("string" == typeof(r = e.getAttribute(i))) {
                    try {
                        r = "true" === r || "false" !== r && ("null" === r ? null : R.isNumeric(r) ? parseFloat(r) : M.test(r) ? R.parseJSON(r) : r)
                    } catch (e) {
                    }
                    R.data(e, n, r)
                } else r = t
            }
            return r
        }

        function i(e) {
            for (var t in e) if (("data" !== t || !R.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function o(e, t, n) {
            var r = t + "defer", i = t + "queue", o = t + "mark", a = R._data(e, r);
            !a || "queue" !== n && R._data(e, i) || "mark" !== n && R._data(e, o) || setTimeout(function () {
                R._data(e, i) || R._data(e, o) || (R.removeData(e, r, !0), a.fire())
            }, 0)
        }

        function a() {
            return !1
        }

        function s() {
            return !0
        }

        function l(e) {
            return !e || !e.parentNode || 11 === e.parentNode.nodeType
        }

        function c(e, t, n) {
            if (t = t || 0, R.isFunction(t)) return R.grep(e, function (e, r) {
                return !!t.call(e, r, e) === n
            });
            if (t.nodeType) return R.grep(e, function (e, r) {
                return e === t === n
            });
            if ("string" == typeof t) {
                var r = R.grep(e, function (e) {
                    return 1 === e.nodeType
                });
                if (ce.test(t)) return R.filter(t, r, !n);
                t = R.filter(t, r)
            }
            return R.grep(e, function (e, r) {
                return R.inArray(e, t) >= 0 === n
            })
        }

        function u(e) {
            var t = pe.split(" "), n = e.createDocumentFragment();
            if (n.createElement) for (; t.length;) n.createElement(t.pop());
            return n
        }

        function f(e, t) {
            return R.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function d(e, t) {
            if (1 === t.nodeType && R.hasData(e)) {
                var n, r, i, o = R._data(e), a = R._data(t, o), s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s) for (r = 0, i = s[n].length; r < i; r++) R.event.add(t, n + (s[n][r].namespace ? "." : "") + s[n][r].namespace, s[n][r], s[n][r].data)
                }
                a.data && (a.data = R.extend({}, a.data))
            }
        }

        function p(e, t) {
            var n;
            1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), "object" === (n = t.nodeName.toLowerCase()) ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(R.expando))
        }

        function h(e) {
            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName("*") : void 0 !== e.querySelectorAll ? e.querySelectorAll("*") : []
        }

        function m(e) {
            "checkbox" !== e.type && "radio" !== e.type || (e.defaultChecked = e.checked)
        }

        function g(e) {
            var t = (e.nodeName || "").toLowerCase();
            "input" === t ? m(e) : "script" !== t && void 0 !== e.getElementsByTagName && R.grep(e.getElementsByTagName("input"), m)
        }

        function y(e, t) {
            t.src ? R.ajax({
                url: t.src,
                async: !1,
                dataType: "script"
            }) : R.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ee, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
        }

        function v(e, t, n) {
            var r = "width" === t ? e.offsetWidth : e.offsetHeight, i = "width" === t ? Me : qe;
            return r > 0 ? ("border" !== n && R.each(i, function () {
                n || (r -= parseFloat(R.css(e, "padding" + this)) || 0), "margin" === n ? r += parseFloat(R.css(e, n + this)) || 0 : r -= parseFloat(R.css(e, "border" + this + "Width")) || 0
            }), r + "px") : (((r = Ne(e, t, t)) < 0 || null == r) && (r = e.style[t] || 0), r = parseFloat(r) || 0, n && R.each(i, function () {
                r += parseFloat(R.css(e, "padding" + this)) || 0, "padding" !== n && (r += parseFloat(R.css(e, "border" + this + "Width")) || 0), "margin" === n && (r += parseFloat(R.css(e, n + this)) || 0)
            }), r + "px")
        }

        function b(e) {
            return function (t, n) {
                if ("string" != typeof t && (n = t, t = "*"), R.isFunction(n)) for (var r, i, o = t.toLowerCase().split(et), a = 0, s = o.length; a < s; a++) r = o[a], (i = /^\+/.test(r)) && (r = r.substr(1) || "*"), (e[r] = e[r] || [])[i ? "unshift" : "push"](n)
            }
        }

        function w(e, n, r, i, o, a) {
            o = o || n.dataTypes[0], (a = a || {})[o] = !0;
            for (var s, l = e[o], c = 0, u = l ? l.length : 0, f = e === it; c < u && (f || !s); c++) "string" == typeof(s = l[c](n, r, i)) && (!f || a[s] ? s = t : (n.dataTypes.unshift(s), s = w(e, n, r, i, s, a)));
            return !f && s || a["*"] || (s = w(e, n, r, i, "*", a)), s
        }

        function x(e, n) {
            var r, i, o = R.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
            i && R.extend(!0, e, i)
        }

        function T(e, t, n, r) {
            if (R.isArray(t)) R.each(t, function (t, i) {
                n || Ue.test(e) ? r(e, i) : T(e + "[" + ("object" == typeof i || R.isArray(i) ? t : "") + "]", i, n, r)
            }); else if (n || null == t || "object" != typeof t) r(e, t); else for (var i in t) T(e + "[" + i + "]", t[i], n, r)
        }

        function _(e, n, r) {
            var i, o, a, s, l = e.contents, c = e.dataTypes, u = e.responseFields;
            for (o in u) o in r && (n[u[o]] = r[o]);
            for (; "*" === c[0];) c.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
            if (i) for (o in l) if (l[o] && l[o].test(i)) {
                c.unshift(o);
                break
            }
            if (c[0] in r) a = c[0]; else {
                for (o in r) {
                    if (!c[0] || e.converters[o + " " + c[0]]) {
                        a = o;
                        break
                    }
                    s || (s = o)
                }
                a = a || s
            }
            if (a) return a !== c[0] && c.unshift(a), r[a]
        }

        function C(e, n) {
            e.dataFilter && (n = e.dataFilter(n, e.dataType));
            var r, i, o, a, s, l, c, u, f = e.dataTypes, d = {}, p = f.length, h = f[0];
            for (r = 1; r < p; r++) {
                if (1 === r) for (i in e.converters) "string" == typeof i && (d[i.toLowerCase()] = e.converters[i]);
                if (a = h, "*" === (h = f[r])) h = a; else if ("*" !== a && a !== h) {
                    if (s = a + " " + h, !(l = d[s] || d["* " + h])) {
                        u = t;
                        for (c in d) if (((o = c.split(" "))[0] === a || "*" === o[0]) && (u = d[o[1] + " " + h])) {
                            !0 === (c = d[c]) ? l = u : !0 === u && (l = c);
                            break
                        }
                    }
                    l || u || R.error("No conversion from " + s.replace(" ", " to ")), !0 !== l && (n = l ? l(n) : u(c(n)))
                }
            }
            return n
        }

        function E() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {
            }
        }

        function S() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
            }
        }

        function k() {
            return setTimeout(N, 0), mt = R.now()
        }

        function N() {
            mt = t
        }

        function A(e, t) {
            var n = {};
            return R.each(bt.concat.apply([], bt.slice(0, t)), function () {
                n[this] = e
            }), n
        }

        function j(e) {
            if (!gt[e]) {
                var t = L.body, n = R("<" + e + ">").appendTo(t), r = n.css("display");
                n.remove(), "none" !== r && "" !== r || (dt || ((dt = L.createElement("iframe")).frameBorder = dt.width = dt.height = 0), t.appendChild(dt), pt && dt.createElement || ((pt = (dt.contentWindow || dt.contentDocument).document).write(("CSS1Compat" === L.compatMode ? "<!doctype html>" : "") + "<html><body>"), pt.close()), n = pt.createElement(e), pt.body.appendChild(n), r = R.css(n, "display"), t.removeChild(dt)), gt[e] = r
            }
            return gt[e]
        }

        function O(e) {
            return R.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }

        var L = e.document, D = e.navigator, F = e.location, R = function () {
            function n() {
                if (!s.isReady) {
                    try {
                        L.documentElement.doScroll("left")
                    } catch (e) {
                        return void setTimeout(n, 1)
                    }
                    s.ready()
                }
            }

            var r, i, o, a, s = function (e, t) {
                    return new s.fn.init(e, t, r)
                }, l = e.jQuery, c = e.$, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, f = /\S/, d = /^\s+/, p = /\s+$/,
                h = /\d/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, g = /^[\],:{}\s]*$/,
                y = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, b = /(?:^|:|,)(?:\s*\[)+/g,
                w = /(webkit)[ \/]([\w.]+)/, x = /(opera)(?:.*version)?[ \/]([\w.]+)/, T = /(msie) ([\w.]+)/,
                _ = /(mozilla)(?:.*? rv:([\w.]+))?/, C = /-([a-z]|[0-9])/gi, E = /^-ms-/, S = function (e, t) {
                    return (t + "").toUpperCase()
                }, k = D.userAgent, N = Object.prototype.toString, A = Object.prototype.hasOwnProperty,
                j = Array.prototype.push, O = Array.prototype.slice, F = String.prototype.trim,
                R = Array.prototype.indexOf, I = {};
            return s.fn = s.prototype = {
                constructor: s, init: function (e, n, r) {
                    var i, o, a, l;
                    if (!e) return this;
                    if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                    if ("body" === e && !n && L.body) return this.context = L, this[0] = L.body, this.selector = e, this.length = 1, this;
                    if ("string" == typeof e) {
                        if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : u.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                        if (i[1]) return n = n instanceof s ? n[0] : n, l = n ? n.ownerDocument || n : L, (a = m.exec(e)) ? s.isPlainObject(n) ? (e = [L.createElement(a[1])], s.fn.attr.call(e, n, !0)) : e = [l.createElement(a[1])] : e = ((a = s.buildFragment([i[1]], [l])).cacheable ? s.clone(a.fragment) : a.fragment).childNodes, s.merge(this, e);
                        if ((o = L.getElementById(i[2])) && o.parentNode) {
                            if (o.id !== i[2]) return r.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = L, this.selector = e, this
                    }
                    return s.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), s.makeArray(e, this))
                }, selector: "", jquery: "1.7", length: 0, size: function () {
                    return this.length
                }, toArray: function () {
                    return O.call(this, 0)
                }, get: function (e) {
                    return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                }, pushStack: function (e, t, n) {
                    var r = this.constructor();
                    return s.isArray(e) ? j.apply(r, e) : s.merge(r, e), r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
                }, each: function (e, t) {
                    return s.each(this, e, t)
                }, ready: function (e) {
                    return s.bindReady(), o.add(e), this
                }, eq: function (e) {
                    return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, slice: function () {
                    return this.pushStack(O.apply(this, arguments), "slice", O.call(arguments).join(","))
                }, map: function (e) {
                    return this.pushStack(s.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                }, end: function () {
                    return this.prevObject || this.constructor(null)
                }, push: j, sort: [].sort, splice: [].splice
            }, s.fn.init.prototype = s.fn, s.extend = s.fn.extend = function () {
                var e, n, r, i, o, a, l = arguments[0] || {}, c = 1, u = arguments.length, f = !1;
                for ("boolean" == typeof l && (f = l, l = arguments[1] || {}, c = 2), "object" == typeof l || s.isFunction(l) || (l = {}), u === c && (l = this, --c); c < u; c++) if (null != (e = arguments[c])) for (n in e) r = l[n], l !== (i = e[n]) && (f && i && (s.isPlainObject(i) || (o = s.isArray(i))) ? (o ? (o = !1, a = r && s.isArray(r) ? r : []) : a = r && s.isPlainObject(r) ? r : {}, l[n] = s.extend(f, a, i)) : i !== t && (l[n] = i));
                return l
            }, s.extend({
                noConflict: function (t) {
                    return e.$ === s && (e.$ = c), t && e.jQuery === s && (e.jQuery = l), s
                }, isReady: !1, readyWait: 1, holdReady: function (e) {
                    e ? s.readyWait++ : s.ready(!0)
                }, ready: function (e) {
                    if (!0 === e && !--s.readyWait || !0 !== e && !s.isReady) {
                        if (!L.body) return setTimeout(s.ready, 1);
                        if (s.isReady = !0, !0 !== e && --s.readyWait > 0) return;
                        o.fireWith(L, [s]), s.fn.trigger && s(L).trigger("ready").unbind("ready")
                    }
                }, bindReady: function () {
                    if (!o) {
                        if (o = s.Callbacks("once memory"), "complete" === L.readyState) return setTimeout(s.ready, 1);
                        if (L.addEventListener) L.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", s.ready, !1); else if (L.attachEvent) {
                            L.attachEvent("onreadystatechange", a), e.attachEvent("onload", s.ready);
                            var t = !1;
                            try {
                                t = null == e.frameElement
                            } catch (e) {
                            }
                            L.documentElement.doScroll && t && n()
                        }
                    }
                }, isFunction: function (e) {
                    return "function" === s.type(e)
                }, isArray: Array.isArray || function (e) {
                    return "array" === s.type(e)
                }, isWindow: function (e) {
                    return e && "object" == typeof e && "setInterval" in e
                }, isNumeric: function (e) {
                    return null != e && h.test(e) && !isNaN(e)
                }, type: function (e) {
                    return null == e ? String(e) : I[N.call(e)] || "object"
                }, isPlainObject: function (e) {
                    if (!e || "object" !== s.type(e) || e.nodeType || s.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !A.call(e, "constructor") && !A.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (e) {
                        return !1
                    }
                    var n;
                    for (n in e) ;
                    return n === t || A.call(e, n)
                }, isEmptyObject: function (e) {
                    for (var t in e) return !1;
                    return !0
                }, error: function (e) {
                    throw e
                }, parseJSON: function (t) {
                    return "string" == typeof t && t ? (t = s.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : g.test(t.replace(y, "@").replace(v, "]").replace(b, "")) ? new Function("return " + t)() : void s.error("Invalid JSON: " + t)) : null
                }, parseXML: function (n) {
                    var r, i;
                    try {
                        e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : ((r = new ActiveXObject("Microsoft.XMLDOM")).async = "false", r.loadXML(n))
                    } catch (e) {
                        r = t
                    }
                    return r && r.documentElement && !r.getElementsByTagName("parsererror").length || s.error("Invalid XML: " + n), r
                }, noop: function () {
                }, globalEval: function (t) {
                    t && f.test(t) && (e.execScript || function (t) {
                        e.eval.call(e, t)
                    })(t)
                }, camelCase: function (e) {
                    return e.replace(E, "ms-").replace(C, S)
                }, nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                }, each: function (e, n, r) {
                    var i, o = 0, a = e.length, l = a === t || s.isFunction(e);
                    if (r) if (l) {
                        for (i in e) if (!1 === n.apply(e[i], r)) break
                    } else for (; o < a && !1 !== n.apply(e[o++], r);) ; else if (l) {
                        for (i in e) if (!1 === n.call(e[i], i, e[i])) break
                    } else for (; o < a && !1 !== n.call(e[o], o, e[o++]);) ;
                    return e
                }, trim: F ? function (e) {
                    return null == e ? "" : F.call(e)
                } : function (e) {
                    return null == e ? "" : e.toString().replace(d, "").replace(p, "")
                }, makeArray: function (e, t) {
                    var n = t || [];
                    if (null != e) {
                        var r = s.type(e);
                        null == e.length || "string" === r || "function" === r || "regexp" === r || s.isWindow(e) ? j.call(n, e) : s.merge(n, e)
                    }
                    return n
                }, inArray: function (e, t, n) {
                    var r;
                    if (t) {
                        if (R) return R.call(t, e, n);
                        for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++) if (n in t && t[n] === e) return n
                    }
                    return -1
                }, merge: function (e, n) {
                    var r = e.length, i = 0;
                    if ("number" == typeof n.length) for (var o = n.length; i < o; i++) e[r++] = n[i]; else for (; n[i] !== t;) e[r++] = n[i++];
                    return e.length = r, e
                }, grep: function (e, t, n) {
                    var r = [];
                    n = !!n;
                    for (var i = 0, o = e.length; i < o; i++) n !== !!t(e[i], i) && r.push(e[i]);
                    return r
                }, map: function (e, n, r) {
                    var i, o, a = [], l = 0, c = e.length;
                    if (e instanceof s || c !== t && "number" == typeof c && (c > 0 && e[0] && e[c - 1] || 0 === c || s.isArray(e))) for (; l < c; l++) null != (i = n(e[l], l, r)) && (a[a.length] = i); else for (o in e) null != (i = n(e[o], o, r)) && (a[a.length] = i);
                    return a.concat.apply([], a)
                }, guid: 1, proxy: function (e, n) {
                    if ("string" == typeof n) {
                        var r = e[n];
                        n = e, e = r
                    }
                    if (!s.isFunction(e)) return t;
                    var i = O.call(arguments, 2), o = function () {
                        return e.apply(n, i.concat(O.call(arguments)))
                    };
                    return o.guid = e.guid = e.guid || o.guid || s.guid++, o
                }, access: function (e, n, r, i, o, a) {
                    var l = e.length;
                    if ("object" == typeof n) {
                        for (var c in n) s.access(e, c, n[c], i, o, r);
                        return e
                    }
                    if (r !== t) {
                        i = !a && i && s.isFunction(r);
                        for (var u = 0; u < l; u++) o(e[u], n, i ? r.call(e[u], u, o(e[u], n)) : r, a);
                        return e
                    }
                    return l ? o(e[0], n) : t
                }, now: function () {
                    return (new Date).getTime()
                }, uaMatch: function (e) {
                    e = e.toLowerCase();
                    var t = w.exec(e) || x.exec(e) || T.exec(e) || e.indexOf("compatible") < 0 && _.exec(e) || [];
                    return {browser: t[1] || "", version: t[2] || "0"}
                }, sub: function () {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }

                    s.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (n, r) {
                        return r && r instanceof s && !(r instanceof e) && (r = e(r)), s.fn.init.call(this, n, r, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e(L);
                    return e
                }, browser: {}
            }), s.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
                I["[object " + t + "]"] = t.toLowerCase()
            }), (i = s.uaMatch(k)).browser && (s.browser[i.browser] = !0, s.browser.version = i.version), s.browser.webkit && (s.browser.safari = !0), f.test(" ") && (d = /^[\s\xA0]+/, p = /[\s\xA0]+$/), r = s(L), L.addEventListener ? a = function () {
                L.removeEventListener("DOMContentLoaded", a, !1), s.ready()
            } : L.attachEvent && (a = function () {
                "complete" === L.readyState && (L.detachEvent("onreadystatechange", a), s.ready())
            }), "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
                return s
            }), s
        }(), I = {};
        R.Callbacks = function (e) {
            e = e ? I[e] || n(e) : {};
            var r, i, o, a, s, l = [], c = [], u = function (t) {
                var n, r, i, o;
                for (n = 0, r = t.length; n < r; n++) i = t[n], "array" === (o = R.type(i)) ? u(i) : "function" === o && (e.unique && d.has(i) || l.push(i))
            }, f = function (t, n) {
                for (n = n || [], r = !e.memory || [t, n], i = !0, s = o || 0, o = 0, a = l.length; l && s < a; s++) if (!1 === l[s].apply(t, n) && e.stopOnFalse) {
                    r = !0;
                    break
                }
                i = !1, l && (e.once ? !0 === r ? d.disable() : l = [] : c && c.length && (r = c.shift(), d.fireWith(r[0], r[1])))
            }, d = {
                add: function () {
                    if (l) {
                        var e = l.length;
                        u(arguments), i ? a = l.length : r && !0 !== r && (o = e, f(r[0], r[1]))
                    }
                    return this
                }, remove: function () {
                    if (l) for (var t = arguments, n = 0, r = t.length; n < r; n++) for (var o = 0; o < l.length && (t[n] !== l[o] || (i && o <= a && (a--, o <= s && s--), l.splice(o--, 1), !e.unique)); o++) ;
                    return this
                }, has: function (e) {
                    if (l) for (var t = 0, n = l.length; t < n; t++) if (e === l[t]) return !0;
                    return !1
                }, empty: function () {
                    return l = [], this
                }, disable: function () {
                    return l = c = r = t, this
                }, disabled: function () {
                    return !l
                }, lock: function () {
                    return c = t, r && !0 !== r || d.disable(), this
                }, locked: function () {
                    return !c
                }, fireWith: function (t, n) {
                    return c && (i ? e.once || c.push([t, n]) : e.once && r || f(t, n)), this
                }, fire: function () {
                    return d.fireWith(this, arguments), this
                }, fired: function () {
                    return !!r
                }
            };
            return d
        };
        var H = [].slice;
        R.extend({
            Deferred: function (e) {
                var t, n = R.Callbacks("once memory"), r = R.Callbacks("once memory"), i = R.Callbacks("memory"),
                    o = "pending", a = {resolve: n, reject: r, notify: i}, s = {
                        done: n.add, fail: r.add, progress: i.add, state: function () {
                            return o
                        }, isResolved: n.fired, isRejected: r.fired, then: function (e, t, n) {
                            return l.done(e).fail(t).progress(n), this
                        }, always: function () {
                            return l.done.apply(l, arguments).fail.apply(l, arguments)
                        }, pipe: function (e, t, n) {
                            return R.Deferred(function (r) {
                                R.each({
                                    done: [e, "resolve"],
                                    fail: [t, "reject"],
                                    progress: [n, "notify"]
                                }, function (e, t) {
                                    var n, i = t[0], o = t[1];
                                    R.isFunction(i) ? l[e](function () {
                                        (n = i.apply(this, arguments)) && R.isFunction(n.promise) ? n.promise().then(r.resolve, r.reject, r.notify) : r[o + "With"](this === l ? r : this, [n])
                                    }) : l[e](r[o])
                                })
                            }).promise()
                        }, promise: function (e) {
                            if (null == e) e = s; else for (var t in s) e[t] = s[t];
                            return e
                        }
                    }, l = s.promise({});
                for (t in a) l[t] = a[t].fire, l[t + "With"] = a[t].fireWith;
                return l.done(function () {
                    o = "resolved"
                }, r.disable, i.lock).fail(function () {
                    o = "rejected"
                }, n.disable, i.lock), e && e.call(l, l), l
            }, when: function (e) {
                var t = H.call(arguments, 0), n = 0, r = t.length, i = new Array(r), o = r,
                    a = r <= 1 && e && R.isFunction(e.promise) ? e : R.Deferred(), s = a.promise();
                if (r > 1) {
                    for (; n < r; n++) t[n] && t[n].promise && R.isFunction(t[n].promise) ? t[n].promise().then(function (e) {
                        return function (n) {
                            t[e] = arguments.length > 1 ? H.call(arguments, 0) : n, --o || a.resolveWith(a, t)
                        }
                    }(n), a.reject, function (e) {
                        return function (t) {
                            i[e] = arguments.length > 1 ? H.call(arguments, 0) : t, a.notifyWith(s, i)
                        }
                    }(n)) : --o;
                    o || a.resolveWith(a, t)
                } else a !== e && a.resolveWith(a, r ? [e] : []);
                return s
            }
        }), R.support = function () {
            var e, t, n, r, i, o, a, s, l, c, u, f, d, p, h, m, g = L.createElement("div"), y = L.documentElement;
            if (g.setAttribute("className", "t"), g.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>", e = g.getElementsByTagName("*"), t = g.getElementsByTagName("a")[0], !e || !e.length || !t) return {};
            r = (n = L.createElement("select")).appendChild(L.createElement("option")), i = g.getElementsByTagName("input")[0], a = {
                leadingWhitespace: 3 === g.firstChild.nodeType,
                tbody: !g.getElementsByTagName("tbody").length,
                htmlSerialize: !!g.getElementsByTagName("link").length,
                style: /top/.test(t.getAttribute("style")),
                hrefNormalized: "/a" === t.getAttribute("href"),
                opacity: /^0.55/.test(t.style.opacity),
                cssFloat: !!t.style.cssFloat,
                unknownElems: !!g.getElementsByTagName("nav").length,
                checkOn: "on" === i.value,
                optSelected: r.selected,
                getSetAttribute: "t" !== g.className,
                enctype: !!L.createElement("form").enctype,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0
            }, i.checked = !0, a.noCloneChecked = i.cloneNode(!0).checked, n.disabled = !0, a.optDisabled = !r.disabled;
            try {
                delete g.test
            } catch (e) {
                a.deleteExpando = !1
            }
            !g.addEventListener && g.attachEvent && g.fireEvent && (g.attachEvent("onclick", function () {
                a.noCloneEvent = !1
            }), g.cloneNode(!0).fireEvent("onclick")), (i = L.createElement("input")).value = "t", i.setAttribute("type", "radio"), a.radioValue = "t" === i.value, i.setAttribute("checked", "checked"), g.appendChild(i), (s = L.createDocumentFragment()).appendChild(g.lastChild), a.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, g.innerHTML = "", g.style.width = g.style.paddingLeft = "1px", l = L.getElementsByTagName("body")[0], u = L.createElement(l ? "div" : "body"), f = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, l && R.extend(f, {position: "absolute", left: "-999px", top: "-999px"});
            for (h in f) u.style[h] = f[h];
            if (u.appendChild(g), (c = l || y).insertBefore(u, c.firstChild), a.appendChecked = i.checked, a.boxModel = 2 === g.offsetWidth, "zoom" in g.style && (g.style.display = "inline", g.style.zoom = 1, a.inlineBlockNeedsLayout = 2 === g.offsetWidth, g.style.display = "", g.innerHTML = "<div style='width:4px;'></div>", a.shrinkWrapBlocks = 2 !== g.offsetWidth), g.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", d = g.getElementsByTagName("td"), m = 0 === d[0].offsetHeight, d[0].style.display = "", d[1].style.display = "none", a.reliableHiddenOffsets = m && 0 === d[0].offsetHeight, g.innerHTML = "", L.defaultView && L.defaultView.getComputedStyle && ((o = L.createElement("div")).style.width = "0", o.style.marginRight = "0", g.appendChild(o), a.reliableMarginRight = 0 === (parseInt((L.defaultView.getComputedStyle(o, null) || {marginRight: 0}).marginRight, 10) || 0)), g.attachEvent) for (h in{
                submit: 1,
                change: 1,
                focusin: 1
            }) (m = (p = "on" + h) in g) || (g.setAttribute(p, "return;"), m = "function" == typeof g[p]), a[h + "Bubbles"] = m;
            return R(function () {
                var e, t, n, r, i, o = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",
                    s = "visibility:hidden;border:0;";
                (l = L.getElementsByTagName("body")[0]) && ((e = L.createElement("div")).style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:1px", l.insertBefore(e, l.firstChild), (u = L.createElement("div")).style.cssText = o + s, u.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", e.appendChild(u), n = (t = u.firstChild).firstChild, r = t.nextSibling.firstChild.firstChild, i = {
                    doesNotAddBorder: 5 !== n.offsetTop,
                    doesAddBorderForTableAndCells: 5 === r.offsetTop
                }, n.style.position = "fixed", n.style.top = "20px", i.fixedPosition = 20 === n.offsetTop || 15 === n.offsetTop, n.style.position = n.style.top = "", t.style.overflow = "hidden", t.style.position = "relative", i.subtractsBorderForOverflowNotVisible = -5 === n.offsetTop, i.doesNotIncludeMarginInBodyOffset = 1 !== l.offsetTop, l.removeChild(e), u = e = null, R.extend(a, i))
            }), u && (u.innerHTML = "", c.removeChild(u)), u = s = n = r = l = o = g = i = null, a
        }(), R.boxModel = R.support.boxModel;
        var M = /^(?:\{.*\}|\[.*\])$/, q = /([A-Z])/g;
        R.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (R.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
            hasData: function (e) {
                return !!(e = e.nodeType ? R.cache[e[R.expando]] : e[R.expando]) && !i(e)
            },
            data: function (e, n, r, i) {
                if (R.acceptData(e)) {
                    R.expando;
                    var o, a, s, l = "string" == typeof n, c = e.nodeType, u = c ? R.cache : e,
                        f = c ? e[R.expando] : e[R.expando] && R.expando, d = "events" === n;
                    if (f && u[f] && (d || i || u[f].data) || !l || r !== t) return f || (c ? e[R.expando] = f = ++R.uuid : f = R.expando), u[f] || (u[f] = {}, c || (u[f].toJSON = R.noop)), "object" != typeof n && "function" != typeof n || (i ? u[f] = R.extend(u[f], n) : u[f].data = R.extend(u[f].data, n)), o = a = u[f], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[R.camelCase(n)] = r), d && !a[n] ? o.events : (l ? null == (s = a[n]) && (s = a[R.camelCase(n)]) : s = a, s)
                }
            },
            removeData: function (e, t, n) {
                if (R.acceptData(e)) {
                    R.expando;
                    var r, o, a, s = e.nodeType, l = s ? R.cache : e, c = s ? e[R.expando] : R.expando;
                    if (l[c]) {
                        if (t && (r = n ? l[c] : l[c].data)) {
                            for ((o = 0, a = (t = R.isArray(t) ? t : t in r ? [t] : (t = R.camelCase(t)) in r ? [t] : t.split(" ")).length); o < a; o++) delete r[t[o]];
                            if (!(n ? i : R.isEmptyObject)(r)) return
                        }
                        (n || (delete l[c].data, i(l[c]))) && (R.support.deleteExpando || !l.setInterval ? delete l[c] : l[c] = null, s && (R.support.deleteExpando ? delete e[R.expando] : e.removeAttribute ? e.removeAttribute(R.expando) : e[R.expando] = null))
                    }
                }
            },
            _data: function (e, t, n) {
                return R.data(e, t, n, !0)
            },
            acceptData: function (e) {
                if (e.nodeName) {
                    var t = R.noData[e.nodeName.toLowerCase()];
                    if (t) return !(!0 === t || e.getAttribute("classid") !== t)
                }
                return !0
            }
        }), R.fn.extend({
            data: function (e, n) {
                var i, o, a, s = null;
                if (void 0 === e) {
                    if (this.length && (s = R.data(this[0]), 1 === this[0].nodeType && !R._data(this[0], "parsedAttrs"))) {
                        for (var l = 0, c = (o = this[0].attributes).length; l < c; l++) 0 === (a = o[l].name).indexOf("data-") && (a = R.camelCase(a.substring(5)), r(this[0], a, s[a]));
                        R._data(this[0], "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof e ? this.each(function () {
                    R.data(this, e)
                }) : (i = e.split("."), i[1] = i[1] ? "." + i[1] : "", n === t ? ((s = this.triggerHandler("getData" + i[1] + "!", [i[0]])) === t && this.length && (s = R.data(this[0], e), s = r(this[0], e, s)), s === t && i[1] ? this.data(i[0]) : s) : this.each(function () {
                    var t = R(this), r = [i[0], n];
                    t.triggerHandler("setData" + i[1] + "!", r), R.data(this, e, n), t.triggerHandler("changeData" + i[1] + "!", r)
                }))
            }, removeData: function (e) {
                return this.each(function () {
                    R.removeData(this, e)
                })
            }
        }), R.extend({
            _mark: function (e, t) {
                e && (t = (t || "fx") + "mark", R._data(e, t, (R._data(e, t) || 0) + 1))
            }, _unmark: function (e, t, n) {
                if (!0 !== e && (n = t, t = e, e = !1), t) {
                    var r = (n = n || "fx") + "mark", i = e ? 0 : (R._data(t, r) || 1) - 1;
                    i ? R._data(t, r, i) : (R.removeData(t, r, !0), o(t, n, "mark"))
                }
            }, queue: function (e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = R._data(e, t), n && (!r || R.isArray(n) ? r = R._data(e, t, R.makeArray(n)) : r.push(n)), r || []
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = R.queue(e, t), r = n.shift(), i = {};
                "inprogress" === r && (r = n.shift()), r && ("fx" === t && n.unshift("inprogress"), R._data(e, t + ".run", i), r.call(e, function () {
                    R.dequeue(e, t)
                }, i)), n.length || (R.removeData(e, t + "queue " + t + ".run", !0), o(e, t, "queue"))
            }
        }), R.fn.extend({
            queue: function (e, n) {
                return "string" != typeof e && (n = e, e = "fx"), n === t ? R.queue(this[0], e) : this.each(function () {
                    var t = R.queue(this, e, n);
                    "fx" === e && "inprogress" !== t[0] && R.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    R.dequeue(this, e)
                })
            }, delay: function (e, t) {
                return e = R.fx ? R.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(r)
                    }
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, n) {
                function r() {
                    --l || o.resolveWith(a, [a])
                }

                "string" != typeof e && (e, e = t), e = e || "fx";
                for (var i, o = R.Deferred(), a = this, s = a.length, l = 1, c = e + "defer", u = e + "queue", f = e + "mark"; s--;) (i = R.data(a[s], c, t, !0) || (R.data(a[s], u, t, !0) || R.data(a[s], f, t, !0)) && R.data(a[s], c, R.Callbacks("once memory"), !0)) && (l++, i.add(r));
                return r(), o.promise()
            }
        });
        var P, B, z, U = /[\n\t\r]/g, $ = /\s+/, W = /\r/g, V = /^(?:button|input)$/i,
            X = /^(?:button|input|object|select|textarea)$/i, Y = /^a(?:rea)?$/i,
            Z = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            K = R.support.getSetAttribute;
        R.fn.extend({
            attr: function (e, t) {
                return R.access(this, e, t, !0, R.attr)
            }, removeAttr: function (e) {
                return this.each(function () {
                    R.removeAttr(this, e)
                })
            }, prop: function (e, t) {
                return R.access(this, e, t, !0, R.prop)
            }, removeProp: function (e) {
                return e = R.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = t, delete this[e]
                    } catch (e) {
                    }
                })
            }, addClass: function (e) {
                var t, n, r, i, o, a, s;
                if (R.isFunction(e)) return this.each(function (t) {
                    R(this).addClass(e.call(this, t, this.className))
                });
                if (e && "string" == typeof e) for (t = e.split($), n = 0, r = this.length; n < r; n++) if (1 === (i = this[n]).nodeType) if (i.className || 1 !== t.length) {
                    for (o = " " + i.className + " ", a = 0, s = t.length; a < s; a++) ~o.indexOf(" " + t[a] + " ") || (o += t[a] + " ");
                    i.className = R.trim(o)
                } else i.className = e;
                return this
            }, removeClass: function (e) {
                var n, r, i, o, a, s, l;
                if (R.isFunction(e)) return this.each(function (t) {
                    R(this).removeClass(e.call(this, t, this.className))
                });
                if (e && "string" == typeof e || e === t) for (n = (e || "").split($), r = 0, i = this.length; r < i; r++) if (1 === (o = this[r]).nodeType && o.className) if (e) {
                    for (a = (" " + o.className + " ").replace(U, " "), s = 0, l = n.length; s < l; s++) a = a.replace(" " + n[s] + " ", " ");
                    o.className = R.trim(a)
                } else o.className = "";
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e, r = "boolean" == typeof t;
                return R.isFunction(e) ? this.each(function (n) {
                    R(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function () {
                    if ("string" === n) for (var i, o = 0, a = R(this), s = t, l = e.split($); i = l[o++];) a[(s = r ? s : !a.hasClass(i)) ? "addClass" : "removeClass"](i); else "undefined" !== n && "boolean" !== n || (this.className && R._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : R._data(this, "__className__") || "")
                })
            }, hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) > -1) return !0;
                return !1
            }, val: function (e) {
                var n, r, i, o = this[0];
                return arguments.length ? (i = R.isFunction(e), this.each(function (r) {
                    var o, a = R(this);
                    1 === this.nodeType && (null == (o = i ? e.call(this, r, a.val()) : e) ? o = "" : "number" == typeof o ? o += "" : R.isArray(o) && (o = R.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), (n = R.valHooks[this.nodeName.toLowerCase()] || R.valHooks[this.type]) && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                })) : o ? (n = R.valHooks[o.nodeName.toLowerCase()] || R.valHooks[o.type]) && "get" in n && (r = n.get(o, "value")) !== t ? r : "string" == typeof(r = o.value) ? r.replace(W, "") : null == r ? "" : r : t
            }
        }), R.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                }, select: {
                    get: function (e) {
                        var t, n, r, i, o = e.selectedIndex, a = [], s = e.options, l = "select-one" === e.type;
                        if (o < 0) return null;
                        for (n = l ? o : 0, r = l ? o + 1 : s.length; n < r; n++) if ((i = s[n]).selected && (R.support.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !R.nodeName(i.parentNode, "optgroup"))) {
                            if (t = R(i).val(), l) return t;
                            a.push(t)
                        }
                        return l && !a.length && s.length ? R(s[o]).val() : a
                    }, set: function (e, t) {
                        var n = R.makeArray(t);
                        return R(e).find("option").each(function () {
                            this.selected = R.inArray(R(this).val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                    }
                }
            },
            attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0},
            attr: function (e, n, r, i) {
                var o, a, s, l = e.nodeType;
                return e && 3 !== l && 8 !== l && 2 !== l ? i && n in R.attrFn ? R(e)[n](r) : "getAttribute" in e ? ((s = 1 !== l || !R.isXMLDoc(e)) && (n = n.toLowerCase(), a = R.attrHooks[n] || (Z.test(n) ? B : P)), r !== t ? null === r ? (R.removeAttr(e, n), t) : a && "set" in a && s && (o = a.set(e, r, n)) !== t ? o : (e.setAttribute(n, "" + r), r) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : null === (o = e.getAttribute(n)) ? t : o) : R.prop(e, n, r) : t
            },
            removeAttr: function (e, t) {
                var n, r, i, o, a = 0;
                if (1 === e.nodeType) for (o = (r = (t || "").split($)).length; a < o; a++) i = r[a].toLowerCase(), n = R.propFix[i] || i, R.attr(e, i, ""), e.removeAttribute(K ? i : n), Z.test(i) && n in e && (e[n] = !1)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (V.test(e.nodeName) && e.parentNode) R.error("type property can't be changed"); else if (!R.support.radioValue && "radio" === t && R.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }, value: {
                    get: function (e, t) {
                        return P && R.nodeName(e, "button") ? P.get(e, t) : t in e ? e.value : null
                    }, set: function (e, t, n) {
                        if (P && R.nodeName(e, "button")) return P.set(e, t, n);
                        e.value = t
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                for: "htmlFor",
                class: "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function (e, n, r) {
                var i, o, a = e.nodeType;
                return e && 3 !== a && 8 !== a && 2 !== a ? ((1 !== a || !R.isXMLDoc(e)) && (n = R.propFix[n] || n, o = R.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]) : t
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : X.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }), R.attrHooks.tabindex = R.propHooks.tabIndex, B = {
            get: function (e, n) {
                var r, i = R.prop(e, n);
                return !0 === i || "boolean" != typeof i && (r = e.getAttributeNode(n)) && !1 !== r.nodeValue ? n.toLowerCase() : t
            }, set: function (e, t, n) {
                var r;
                return !1 === t ? R.removeAttr(e, n) : ((r = R.propFix[n] || n) in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
            }
        }, K || (z = {name: !0, id: !0}, P = R.valHooks.button = {
            get: function (e, n) {
                var r;
                return (r = e.getAttributeNode(n)) && (z[n] ? "" !== r.nodeValue : r.specified) ? r.nodeValue : t
            }, set: function (e, t, n) {
                var r = e.getAttributeNode(n);
                return r || (r = L.createAttribute(n), e.setAttributeNode(r)), r.nodeValue = t + ""
            }
        }, R.attrHooks.tabindex.set = P.set, R.each(["width", "height"], function (e, t) {
            R.attrHooks[t] = R.extend(R.attrHooks[t], {
                set: function (e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"), n
                }
            })
        }), R.attrHooks.contenteditable = {
            get: P.get, set: function (e, t, n) {
                "" === t && (t = "false"), P.set(e, t, n)
            }
        }), R.support.hrefNormalized || R.each(["href", "src", "width", "height"], function (e, n) {
            R.attrHooks[n] = R.extend(R.attrHooks[n], {
                get: function (e) {
                    var r = e.getAttribute(n, 2);
                    return null === r ? t : r
                }
            })
        }), R.support.style || (R.attrHooks.style = {
            get: function (e) {
                return e.style.cssText.toLowerCase() || t
            }, set: function (e, t) {
                return e.style.cssText = "" + t
            }
        }), R.support.optSelected || (R.propHooks.selected = R.extend(R.propHooks.selected, {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), R.support.enctype || (R.propFix.enctype = "encoding"), R.support.checkOn || R.each(["radio", "checkbox"], function () {
            R.valHooks[this] = {
                get: function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            }
        }), R.each(["radio", "checkbox"], function () {
            R.valHooks[this] = R.extend(R.valHooks[this], {
                set: function (e, t) {
                    if (R.isArray(t)) return e.checked = R.inArray(R(e).val(), t) >= 0
                }
            })
        });
        var G = /^(?:textarea|input|select)$/i, J = /^([^\.]*)?(?:\.(.+))?$/, Q = /\bhover(\.\S+)?/, ee = /^key/,
            te = /^(?:mouse|contextmenu)|click/, ne = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, re = function (e) {
                var t = ne.exec(e);
                return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
            }, ie = function (e, t) {
                return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || e.id === t[2]) && (!t[3] || t[3].test(e.className))
            }, oe = function (e) {
                return R.event.special.hover ? e : e.replace(Q, "mouseenter$1 mouseleave$1")
            };
        R.event = {
            add: function (e, n, r, i, o) {
                var a, s, l, c, u, f, d, p, h, m, g;
                if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (a = R._data(e))) {
                    for (r.handler && (r = (h = r).handler), r.guid || (r.guid = R.guid++), (l = a.events) || (a.events = l = {}), (s = a.handle) || (a.handle = s = function (e) {
                        return void 0 === R || e && R.event.triggered === e.type ? t : R.event.dispatch.apply(s.elem, arguments)
                    }, s.elem = e), n = oe(n).split(" "), c = 0; c < n.length; c++) f = (u = J.exec(n[c]) || [])[1], d = (u[2] || "").split(".").sort(), g = R.event.special[f] || {}, f = (o ? g.delegateType : g.bindType) || f, g = R.event.special[f] || {}, p = R.extend({
                        type: f,
                        origType: u[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: o,
                        namespace: d.join(".")
                    }, h), o && (p.quick = re(o), !p.quick && R.expr.match.POS.test(o) && (p.isPositional = !0)), (m = l[f]) || ((m = l[f] = []).delegateCount = 0, g.setup && !1 !== g.setup.call(e, i, d, s) || (e.addEventListener ? e.addEventListener(f, s, !1) : e.attachEvent && e.attachEvent("on" + f, s))), g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? m.splice(m.delegateCount++, 0, p) : m.push(p), R.event.global[f] = !0;
                    e = null
                }
            },
            global: {},
            remove: function (e, t, n, r) {
                var i, o, a, s, l, c, u, f, d, p, h, m = R.hasData(e) && R._data(e);
                if (m && (u = m.events)) {
                    for (t = oe(t || "").split(" "), i = 0; i < t.length; i++) {
                        if (o = J.exec(t[i]) || [], a = o[1], s = o[2], !a) {
                            s = s ? "." + s : "";
                            for (c in u) R.event.remove(e, c + s, n, r);
                            return
                        }
                        if (f = R.event.special[a] || {}, a = (r ? f.delegateType : f.bindType) || a, p = u[a] || [], l = p.length, s = s ? new RegExp("(^|\\.)" + s.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, n || s || r || f.remove) for (c = 0; c < p.length; c++) h = p[c], n && n.guid !== h.guid || s && !s.test(h.namespace) || (!r || r === h.selector || "**" === r && h.selector) && (p.splice(c--, 1), h.selector && p.delegateCount--, f.remove && f.remove.call(e, h)); else p.length = 0;
                        0 === p.length && l !== p.length && (f.teardown && !1 !== f.teardown.call(e, s) || R.removeEvent(e, a, m.handle), delete u[a])
                    }
                    R.isEmptyObject(u) && ((d = m.handle) && (d.elem = null), R.removeData(e, ["events", "handle"], !0))
                }
            },
            customEvent: {getData: !0, setData: !0, changeData: !0},
            trigger: function (n, r, i, o) {
                if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
                    var a, s, l, c, u, f, d, p, h, m, g = n.type || n, y = [];
                    if (g.indexOf("!") >= 0 && (g = g.slice(0, -1), s = !0), g.indexOf(".") >= 0 && (g = (y = g.split(".")).shift(), y.sort()), i && !R.event.customEvent[g] || R.event.global[g]) if (n = "object" == typeof n ? n[R.expando] ? n : new R.Event(g, n) : new R.Event(g), n.type = g, n.isTrigger = !0, n.exclusive = s, n.namespace = y.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, f = g.indexOf(":") < 0 ? "on" + g : "", !o && i || n.preventDefault(), i) {
                        if (n.result = t, n.target || (n.target = i), (r = null != r ? R.makeArray(r) : []).unshift(n), !(d = R.event.special[g] || {}).trigger || !1 !== d.trigger.apply(i, r)) {
                            if (h = [[i, d.bindType || g]], !o && !d.noBubble && !R.isWindow(i)) {
                                for (m = d.delegateType || g, u = null, c = i.parentNode; c; c = c.parentNode) h.push([c, m]), u = c;
                                u && u === i.ownerDocument && h.push([u.defaultView || u.parentWindow || e, m])
                            }
                            for (l = 0; l < h.length && (c = h[l][0], n.type = h[l][1], (p = (R._data(c, "events") || {})[n.type] && R._data(c, "handle")) && p.apply(c, r), (p = f && c[f]) && R.acceptData(c) && p.apply(c, r), !n.isPropagationStopped()); l++) ;
                            return n.type = g, n.isDefaultPrevented() || d._default && !1 !== d._default.apply(i.ownerDocument, r) || "click" === g && R.nodeName(i, "a") || !R.acceptData(i) || f && i[g] && ("focus" !== g && "blur" !== g || 0 !== n.target.offsetWidth) && !R.isWindow(i) && ((u = i[f]) && (i[f] = null), R.event.triggered = g, i[g](), R.event.triggered = t, u && (i[f] = u)), n.result
                        }
                    } else {
                        a = R.cache;
                        for (l in a) a[l].events && a[l].events[g] && R.event.trigger(n, r, a[l].handle.elem, !0)
                    }
                }
            },
            dispatch: function (n) {
                n = R.event.fix(n || e.event);
                var r, i, o, a, s, l, c, u, f, d, p = (R._data(this, "events") || {})[n.type] || [],
                    h = p.delegateCount, m = [].slice.call(arguments, 0), g = !n.exclusive && !n.namespace,
                    y = (R.event.special[n.type] || {}).handle, v = [];
                if (m[0] = n, n.delegateTarget = this, h && !n.target.disabled && (!n.button || "click" !== n.type)) for (o = n.target; o != this; o = o.parentNode || this) {
                    for (s = {}, c = [], r = 0; r < h; r++) d = s[f = (u = p[r]).selector], u.isPositional ? d = (d || (s[f] = R(f))).index(o) >= 0 : d === t && (d = s[f] = u.quick ? ie(o, u.quick) : R(o).is(f)), d && c.push(u);
                    c.length && v.push({elem: o, matches: c})
                }
                for (p.length > h && v.push({
                    elem: this,
                    matches: p.slice(h)
                }), r = 0; r < v.length && !n.isPropagationStopped(); r++) for (l = v[r], n.currentTarget = l.elem, i = 0; i < l.matches.length && !n.isImmediatePropagationStopped(); i++) u = l.matches[i], (g || !n.namespace && !u.namespace || n.namespace_re && n.namespace_re.test(u.namespace)) && (n.data = u.data, n.handleObj = u, (a = (y || u.handler).apply(l.elem, m)) !== t && (n.result = a, !1 === a && (n.preventDefault(), n.stopPropagation())));
                return n.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),
                filter: function (e, n) {
                    var r, i, o, a = n.button, s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = (r = e.target.ownerDocument || L).documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            fix: function (e) {
                if (e[R.expando]) return e;
                var n, r, i = e, o = R.event.fixHooks[e.type] || {},
                    a = o.props ? this.props.concat(o.props) : this.props;
                for (e = R.Event(i), n = a.length; n;) e[r = a[--n]] = i[r];
                return e.target || (e.target = i.srcElement || L), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), o.filter ? o.filter(e, i) : e
            },
            special: {
                ready: {setup: R.bindReady},
                focus: {delegateType: "focusin", noBubble: !0},
                blur: {delegateType: "focusout", noBubble: !0},
                beforeunload: {
                    setup: function (e, t, n) {
                        R.isWindow(this) && (this.onbeforeunload = n)
                    }, teardown: function (e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function (e, t, n, r) {
                var i = R.extend(new R.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
                r ? R.event.trigger(i, null, t) : R.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, R.event.handle = R.event.dispatch, R.removeEvent = L.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function (e, t, n) {
            e.detachEvent && e.detachEvent("on" + t, n)
        }, R.Event = function (e, t) {
            if (!(this instanceof R.Event)) return new R.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? s : a) : this.type = e, t && R.extend(this, t), this.timeStamp = e && e.timeStamp || R.now(), this[R.expando] = !0
        }, R.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = s;
                var e = this.originalEvent;
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            }, stopPropagation: function () {
                this.isPropagationStopped = s;
                var e = this.originalEvent;
                e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            }, stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = s, this.stopPropagation()
            }, isDefaultPrevented: a, isPropagationStopped: a, isImmediatePropagationStopped: a
        }, R.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
            R.event.special[e] = R.event.special[t] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var t, n, r = this, i = e.relatedTarget, o = e.handleObj;
                    o.selector;
                    return i && o.origType !== e.type && (i === r || R.contains(r, i)) || (t = e.type, e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), R.support.submitBubbles || (R.event.special.submit = {
            setup: function () {
                if (R.nodeName(this, "form")) return !1;
                R.event.add(this, "click._submit keypress._submit", function (e) {
                    var n = e.target, r = R.nodeName(n, "input") || R.nodeName(n, "button") ? n.form : t;
                    r && !r._submit_attached && (R.event.add(r, "submit._submit", function (e) {
                        this.parentNode && R.event.simulate("submit", this.parentNode, e, !0)
                    }), r._submit_attached = !0)
                })
            }, teardown: function () {
                if (R.nodeName(this, "form")) return !1;
                R.event.remove(this, "._submit")
            }
        }), R.support.changeBubbles || (R.event.special.change = {
            setup: function () {
                if (G.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (R.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), R.event.add(this, "click._change", function (e) {
                    this._just_changed && (this._just_changed = !1, R.event.simulate("change", this, e, !0))
                })), !1;
                R.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    G.test(t.nodeName) && !t._change_attached && (R.event.add(t, "change._change", function (e) {
                        this.parentNode && !e.isSimulated && R.event.simulate("change", this.parentNode, e, !0)
                    }), t._change_attached = !0)
                })
            }, handle: function (e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            }, teardown: function () {
                return R.event.remove(this, "._change"), G.test(this.nodeName)
            }
        }), R.support.focusinBubbles || R.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = 0, r = function (e) {
                R.event.simulate(t, e.target, R.event.fix(e), !0)
            };
            R.event.special[t] = {
                setup: function () {
                    0 == n++ && L.addEventListener(e, r, !0)
                }, teardown: function () {
                    0 == --n && L.removeEventListener(e, r, !0)
                }
            }
        }), R.fn.extend({
            on: function (e, n, r, i, o) {
                var s, l;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = n, n = t);
                    for (l in e) this.on(l, n, r, e[l], o);
                    return this
                }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), !1 === i) i = a; else if (!i) return this;
                return 1 === o && (s = i, (i = function (e) {
                    return R().off(e), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = R.guid++)), this.each(function () {
                    R.event.add(this, e, i, r, n)
                })
            }, one: function (e, t, n, r) {
                return this.on.call(this, e, t, n, r, 1)
            }, off: function (e, n, r) {
                if (e && e.preventDefault && e.handleObj) {
                    var i = e.handleObj;
                    return R(e.delegateTarget).off(i.namespace ? i.type + "." + i.namespace : i.type, i.selector, i.handler), this
                }
                if ("object" == typeof e) {
                    for (var o in e) this.off(o, n, e[o]);
                    return this
                }
                return !1 !== n && "function" != typeof n || (r = n, n = t), !1 === r && (r = a), this.each(function () {
                    R.event.remove(this, e, r, n)
                })
            }, bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, live: function (e, t, n) {
                return R(this.context).on(e, this.selector, t, n), this
            }, die: function (e, t) {
                return R(this.context).off(e, this.selector || "**", t), this
            }, delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            }, undelegate: function (e, t, n) {
                return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n)
            }, trigger: function (e, t) {
                return this.each(function () {
                    R.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                if (this[0]) return R.event.trigger(e, t, this[0], !0)
            }, toggle: function (e) {
                var t = arguments, n = e.guid || R.guid++, r = 0, i = function (n) {
                    var i = (R._data(this, "lastToggle" + e.guid) || 0) % r;
                    return R._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                };
                for (i.guid = n; r < t.length;) t[r++].guid = n;
                return this.click(i)
            }, hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), R.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            R.fn[t] = function (e, n) {
                return null == n && (n = e, e = null), arguments.length > 0 ? this.bind(t, e, n) : this.trigger(t)
            }, R.attrFn && (R.attrFn[t] = !0), ee.test(t) && (R.event.fixHooks[t] = R.event.keyHooks), te.test(t) && (R.event.fixHooks[t] = R.event.mouseHooks)
        }), function () {
            function e(e, t, n, r, o, a) {
                for (var s = 0, l = r.length; s < l; s++) {
                    var c = r[s];
                    if (c) {
                        var u = !1;
                        for (c = c[e]; c;) {
                            if (c[i] === n) {
                                u = r[c.sizset];
                                break
                            }
                            if (1 !== c.nodeType || a || (c[i] = n, c.sizset = s), c.nodeName.toLowerCase() === t) {
                                u = c;
                                break
                            }
                            c = c[e]
                        }
                        r[s] = u
                    }
                }
            }

            function n(e, t, n, r, o, a) {
                for (var s = 0, l = r.length; s < l; s++) {
                    var c = r[s];
                    if (c) {
                        var u = !1;
                        for (c = c[e]; c;) {
                            if (c[i] === n) {
                                u = r[c.sizset];
                                break
                            }
                            if (1 === c.nodeType) if (a || (c[i] = n, c.sizset = s), "string" != typeof t) {
                                if (c === t) {
                                    u = !0;
                                    break
                                }
                            } else if (d.filter(t, [c]).length > 0) {
                                u = c;
                                break
                            }
                            c = c[e]
                        }
                        r[s] = u
                    }
                }
            }

            var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                i = "sizcache" + (Math.random() + "").replace(".", ""), o = 0, a = Object.prototype.toString, s = !1,
                l = !0, c = /\\/g, u = /\r\n/g, f = /\W/;
            [0, 0].sort(function () {
                return l = !1, 0
            });
            var d = function (e, t, n, i) {
                n = n || [];
                var o = t = t || L;
                if (1 !== t.nodeType && 9 !== t.nodeType) return [];
                if (!e || "string" != typeof e) return n;
                var s, l, c, u, f, p, g, v, b = !0, x = d.isXML(t), T = [], _ = e;
                do {
                    if (r.exec(""), (s = r.exec(_)) && (_ = s[3], T.push(s[1]), s[2])) {
                        u = s[3];
                        break
                    }
                } while (s);
                if (T.length > 1 && m.exec(e)) if (2 === T.length && h.relative[T[0]]) l = w(T[0] + T[1], t, i); else for (l = h.relative[T[0]] ? [t] : d(T.shift(), t); T.length;) e = T.shift(), h.relative[e] && (e += T.shift()), l = w(e, l, i); else if (!i && T.length > 1 && 9 === t.nodeType && !x && h.match.ID.test(T[0]) && !h.match.ID.test(T[T.length - 1]) && (t = (f = d.find(T.shift(), t, x)).expr ? d.filter(f.expr, f.set)[0] : f.set[0]), t) for (l = (f = i ? {
                    expr: T.pop(),
                    set: y(i)
                } : d.find(T.pop(), 1 !== T.length || "~" !== T[0] && "+" !== T[0] || !t.parentNode ? t : t.parentNode, x)).expr ? d.filter(f.expr, f.set) : f.set, T.length > 0 ? c = y(l) : b = !1; T.length;) g = p = T.pop(), h.relative[p] ? g = T.pop() : p = "", null == g && (g = t), h.relative[p](c, g, x); else c = T = [];
                if (c || (c = l), c || d.error(p || e), "[object Array]" === a.call(c)) if (b) if (t && 1 === t.nodeType) for (v = 0; null != c[v]; v++) c[v] && (!0 === c[v] || 1 === c[v].nodeType && d.contains(t, c[v])) && n.push(l[v]); else for (v = 0; null != c[v]; v++) c[v] && 1 === c[v].nodeType && n.push(l[v]); else n.push.apply(n, c); else y(c, n);
                return u && (d(u, o, n, i), d.uniqueSort(n)), n
            };
            d.uniqueSort = function (e) {
                if (v && (s = l, e.sort(v), s)) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
                return e
            }, d.matches = function (e, t) {
                return d(e, null, null, t)
            }, d.matchesSelector = function (e, t) {
                return d(t, null, null, [e]).length > 0
            }, d.find = function (e, t, n) {
                var r, i, o, a, s, l;
                if (!e) return [];
                for (i = 0, o = h.order.length; i < o; i++) if (s = h.order[i], (a = h.leftMatch[s].exec(e)) && (l = a[1], a.splice(1, 1), "\\" !== l.substr(l.length - 1) && (a[1] = (a[1] || "").replace(c, ""), null != (r = h.find[s](a, t, n))))) {
                    e = e.replace(h.match[s], "");
                    break
                }
                return r || (r = void 0 !== t.getElementsByTagName ? t.getElementsByTagName("*") : []), {
                    set: r,
                    expr: e
                }
            }, d.filter = function (e, n, r, i) {
                for (var o, a, s, l, c, u, f, p, m, g = e, y = [], v = n, b = n && n[0] && d.isXML(n[0]); e && n.length;) {
                    for (s in h.filter) if (null != (o = h.leftMatch[s].exec(e)) && o[2]) {
                        if (u = h.filter[s], f = o[1], a = !1, o.splice(1, 1), "\\" === f.substr(f.length - 1)) continue;
                        if (v === y && (y = []), h.preFilter[s]) if (o = h.preFilter[s](o, v, r, y, i, b)) {
                            if (!0 === o) continue
                        } else a = l = !0;
                        if (o) for (p = 0; null != (c = v[p]); p++) c && (m = i ^ (l = u(c, o, p, v)), r && null != l ? m ? a = !0 : v[p] = !1 : m && (y.push(c), a = !0));
                        if (l !== t) {
                            if (r || (v = y), e = e.replace(h.match[s], ""), !a) return [];
                            break
                        }
                    }
                    if (e === g) {
                        if (null != a) break;
                        d.error(e)
                    }
                    g = e
                }
                return v
            }, d.error = function (e) {
                throw"Syntax error, unrecognized expression: " + e
            };
            var p = d.getText = function (e) {
                var t, n, r = e.nodeType, i = "";
                if (r) {
                    if (1 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        if ("string" == typeof e.innerText) return e.innerText.replace(u, "");
                        for (e = e.firstChild; e; e = e.nextSibling) i += p(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else for (t = 0; n = e[t]; t++) 8 !== n.nodeType && (i += p(n));
                return i
            }, h = d.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {class: "className", for: "htmlFor"},
                attrHandle: {
                    href: function (e) {
                        return e.getAttribute("href")
                    }, type: function (e) {
                        return e.getAttribute("type")
                    }
                },
                relative: {
                    "+": function (e, t) {
                        var n = "string" == typeof t, r = n && !f.test(t), i = n && !r;
                        r && (t = t.toLowerCase());
                        for (var o, a = 0, s = e.length; a < s; a++) if (o = e[a]) {
                            for (; (o = o.previousSibling) && 1 !== o.nodeType;) ;
                            e[a] = i || o && o.nodeName.toLowerCase() === t ? o || !1 : o === t
                        }
                        i && d.filter(t, e, !0)
                    }, ">": function (e, t) {
                        var n, r = "string" == typeof t, i = 0, o = e.length;
                        if (r && !f.test(t)) {
                            for (t = t.toLowerCase(); i < o; i++) if (n = e[i]) {
                                var a = n.parentNode;
                                e[i] = a.nodeName.toLowerCase() === t && a
                            }
                        } else {
                            for (; i < o; i++) (n = e[i]) && (e[i] = r ? n.parentNode : n.parentNode === t);
                            r && d.filter(t, e, !0)
                        }
                    }, "": function (t, r, i) {
                        var a, s = o++, l = n;
                        "string" != typeof r || f.test(r) || (a = r = r.toLowerCase(), l = e), l("parentNode", r, s, t, a, i)
                    }, "~": function (t, r, i) {
                        var a, s = o++, l = n;
                        "string" != typeof r || f.test(r) || (a = r = r.toLowerCase(), l = e), l("previousSibling", r, s, t, a, i)
                    }
                },
                find: {
                    ID: function (e, t, n) {
                        if (void 0 !== t.getElementById && !n) {
                            var r = t.getElementById(e[1]);
                            return r && r.parentNode ? [r] : []
                        }
                    }, NAME: function (e, t) {
                        if (void 0 !== t.getElementsByName) {
                            for (var n = [], r = t.getElementsByName(e[1]), i = 0, o = r.length; i < o; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                            return 0 === n.length ? null : n
                        }
                    }, TAG: function (e, t) {
                        if (void 0 !== t.getElementsByTagName) return t.getElementsByTagName(e[1])
                    }
                },
                preFilter: {
                    CLASS: function (e, t, n, r, i, o) {
                        if (e = " " + e[1].replace(c, "") + " ", o) return e;
                        for (var a, s = 0; null != (a = t[s]); s++) a && (i ^ (a.className && (" " + a.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(a) : n && (t[s] = !1));
                        return !1
                    }, ID: function (e) {
                        return e[1].replace(c, "")
                    }, TAG: function (e, t) {
                        return e[1].replace(c, "").toLowerCase()
                    }, CHILD: function (e) {
                        if ("nth" === e[1]) {
                            e[2] || d.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                            var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                            e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                        } else e[2] && d.error(e[0]);
                        return e[0] = o++, e
                    }, ATTR: function (e, t, n, r, i, o) {
                        var a = e[1] = e[1].replace(c, "");
                        return !o && h.attrMap[a] && (e[1] = h.attrMap[a]), e[4] = (e[4] || e[5] || "").replace(c, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
                    }, PSEUDO: function (e, t, n, i, o) {
                        if ("not" === e[1]) {
                            if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                                var a = d.filter(e[3], t, n, !0 ^ o);
                                return n || i.push.apply(i, a), !1
                            }
                            e[3] = d(e[3], null, null, t)
                        } else if (h.match.POS.test(e[0]) || h.match.CHILD.test(e[0])) return !0;
                        return e
                    }, POS: function (e) {
                        return e.unshift(!0), e
                    }
                },
                filters: {
                    enabled: function (e) {
                        return !1 === e.disabled && "hidden" !== e.type
                    }, disabled: function (e) {
                        return !0 === e.disabled
                    }, checked: function (e) {
                        return !0 === e.checked
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    }, parent: function (e) {
                        return !!e.firstChild
                    }, empty: function (e) {
                        return !e.firstChild
                    }, has: function (e, t, n) {
                        return !!d(n[3], e).length
                    }, header: function (e) {
                        return /h\d/i.test(e.nodeName)
                    }, text: function (e) {
                        var t = e.getAttribute("type"), n = e.type;
                        return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
                    }, radio: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                    }, checkbox: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                    }, file: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "file" === e.type
                    }, password: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "password" === e.type
                    }, submit: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && "submit" === e.type
                    }, image: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "image" === e.type
                    }, reset: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && "reset" === e.type
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, input: function (e) {
                        return /input|select|textarea|button/i.test(e.nodeName)
                    }, focus: function (e) {
                        return e === e.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (e, t) {
                        return 0 === t
                    }, last: function (e, t, n, r) {
                        return t === r.length - 1
                    }, even: function (e, t) {
                        return t % 2 == 0
                    }, odd: function (e, t) {
                        return t % 2 == 1
                    }, lt: function (e, t, n) {
                        return t < n[3] - 0
                    }, gt: function (e, t, n) {
                        return t > n[3] - 0
                    }, nth: function (e, t, n) {
                        return n[3] - 0 === t
                    }, eq: function (e, t, n) {
                        return n[3] - 0 === t
                    }
                },
                filter: {
                    PSEUDO: function (e, t, n, r) {
                        var i = t[1], o = h.filters[i];
                        if (o) return o(e, n, t, r);
                        if ("contains" === i) return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                        if ("not" === i) {
                            for (var a = t[3], s = 0, l = a.length; s < l; s++) if (a[s] === e) return !1;
                            return !0
                        }
                        d.error(i)
                    }, CHILD: function (e, t) {
                        var n, r, o, a, s, l, c = t[1], u = e;
                        switch (c) {
                            case"only":
                            case"first":
                                for (; u = u.previousSibling;) if (1 === u.nodeType) return !1;
                                if ("first" === c) return !0;
                                u = e;
                            case"last":
                                for (; u = u.nextSibling;) if (1 === u.nodeType) return !1;
                                return !0;
                            case"nth":
                                if (n = t[2], r = t[3], 1 === n && 0 === r) return !0;
                                if (o = t[0], (a = e.parentNode) && (a[i] !== o || !e.nodeIndex)) {
                                    for (s = 0, u = a.firstChild; u; u = u.nextSibling) 1 === u.nodeType && (u.nodeIndex = ++s);
                                    a[i] = o
                                }
                                return l = e.nodeIndex - r, 0 === n ? 0 === l : l % n == 0 && l / n >= 0
                        }
                    }, ID: function (e, t) {
                        return 1 === e.nodeType && e.getAttribute("id") === t
                    }, TAG: function (e, t) {
                        return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t
                    }, CLASS: function (e, t) {
                        return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                    }, ATTR: function (e, t) {
                        var n = t[1],
                            r = d.attr ? d.attr(e, n) : h.attrHandle[n] ? h.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n),
                            i = r + "", o = t[2], a = t[4];
                        return null == r ? "!=" === o : !o && d.attr ? null != r : "=" === o ? i === a : "*=" === o ? i.indexOf(a) >= 0 : "~=" === o ? (" " + i + " ").indexOf(a) >= 0 : a ? "!=" === o ? i !== a : "^=" === o ? 0 === i.indexOf(a) : "$=" === o ? i.substr(i.length - a.length) === a : "|=" === o && (i === a || i.substr(0, a.length + 1) === a + "-") : i && !1 !== r
                    }, POS: function (e, t, n, r) {
                        var i = t[2], o = h.setFilters[i];
                        if (o) return o(e, n, t, r)
                    }
                }
            }, m = h.match.POS;
            for (var g in h.match) h.match[g] = new RegExp(h.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source), h.leftMatch[g] = new RegExp(/(^(?:.|\r|\n)*?)/.source + h.match[g].source.replace(/\\(\d+)/g, function (e, t) {
                return "\\" + (t - 0 + 1)
            }));
            var y = function (e, t) {
                return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
            };
            try {
                Array.prototype.slice.call(L.documentElement.childNodes, 0)[0].nodeType
            } catch (e) {
                y = function (e, t) {
                    var n = 0, r = t || [];
                    if ("[object Array]" === a.call(e)) Array.prototype.push.apply(r, e); else if ("number" == typeof e.length) for (var i = e.length; n < i; n++) r.push(e[n]); else for (; e[n]; n++) r.push(e[n]);
                    return r
                }
            }
            var v, b;
            L.documentElement.compareDocumentPosition ? v = function (e, t) {
                return e === t ? (s = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : (v = function (e, t) {
                if (e === t) return s = !0, 0;
                if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                var n, r, i = [], o = [], a = e.parentNode, l = t.parentNode, c = a;
                if (a === l) return b(e, t);
                if (!a) return -1;
                if (!l) return 1;
                for (; c;) i.unshift(c), c = c.parentNode;
                for (c = l; c;) o.unshift(c), c = c.parentNode;
                n = i.length, r = o.length;
                for (var u = 0; u < n && u < r; u++) if (i[u] !== o[u]) return b(i[u], o[u]);
                return u === n ? b(e, o[u], -1) : b(i[u], t, 1)
            }, b = function (e, t, n) {
                if (e === t) return n;
                for (var r = e.nextSibling; r;) {
                    if (r === t) return -1;
                    r = r.nextSibling
                }
                return 1
            }), function () {
                var e = L.createElement("div"), n = "script" + (new Date).getTime(), r = L.documentElement;
                e.innerHTML = "<a name='" + n + "'/>", r.insertBefore(e, r.firstChild), L.getElementById(n) && (h.find.ID = function (e, n, r) {
                    if (void 0 !== n.getElementById && !r) {
                        var i = n.getElementById(e[1]);
                        return i ? i.id === e[1] || void 0 !== i.getAttributeNode && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t : []
                    }
                }, h.filter.ID = function (e, t) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return 1 === e.nodeType && n && n.nodeValue === t
                }), r.removeChild(e), r = e = null
            }(), function () {
                var e = L.createElement("div");
                e.appendChild(L.createComment("")), e.getElementsByTagName("*").length > 0 && (h.find.TAG = function (e, t) {
                    var n = t.getElementsByTagName(e[1]);
                    if ("*" === e[1]) {
                        for (var r = [], i = 0; n[i]; i++) 1 === n[i].nodeType && r.push(n[i]);
                        n = r
                    }
                    return n
                }), e.innerHTML = "<a href='#'></a>", e.firstChild && void 0 !== e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (h.attrHandle.href = function (e) {
                    return e.getAttribute("href", 2)
                }), e = null
            }(), L.querySelectorAll && function () {
                var e = d, t = L.createElement("div");
                if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                    d = function (t, n, r, i) {
                        if (n = n || L, !i && !d.isXML(n)) {
                            var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                            if (o && (1 === n.nodeType || 9 === n.nodeType)) {
                                if (o[1]) return y(n.getElementsByTagName(t), r);
                                if (o[2] && h.find.CLASS && n.getElementsByClassName) return y(n.getElementsByClassName(o[2]), r)
                            }
                            if (9 === n.nodeType) {
                                if ("body" === t && n.body) return y([n.body], r);
                                if (o && o[3]) {
                                    var a = n.getElementById(o[3]);
                                    if (!a || !a.parentNode) return y([], r);
                                    if (a.id === o[3]) return y([a], r)
                                }
                                try {
                                    return y(n.querySelectorAll(t), r)
                                } catch (e) {
                                }
                            } else if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                                var s = n, l = n.getAttribute("id"), c = l || "__sizzle__", u = n.parentNode,
                                    f = /^\s*[+~]/.test(t);
                                l ? c = c.replace(/'/g, "\\$&") : n.setAttribute("id", c), f && u && (n = n.parentNode);
                                try {
                                    if (!f || u) return y(n.querySelectorAll("[id='" + c + "'] " + t), r)
                                } catch (e) {
                                } finally {
                                    l || s.removeAttribute("id")
                                }
                            }
                        }
                        return e(t, n, r, i)
                    };
                    for (var n in e) d[n] = e[n];
                    t = null
                }
            }(), function () {
                var e = L.documentElement,
                    t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
                if (t) {
                    var n = !t.call(L.createElement("div"), "div"), r = !1;
                    try {
                        t.call(L.documentElement, "[test!='']:sizzle")
                    } catch (e) {
                        r = !0
                    }
                    d.matchesSelector = function (e, i) {
                        if (i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !d.isXML(e)) try {
                            if (r || !h.match.PSEUDO.test(i) && !/!=/.test(i)) {
                                var o = t.call(e, i);
                                if (o || !n || e.document && 11 !== e.document.nodeType) return o
                            }
                        } catch (e) {
                        }
                        return d(i, null, null, [e]).length > 0
                    }
                }
            }(), function () {
                var e = L.createElement("div");
                e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length && (e.lastChild.className = "e", 1 !== e.getElementsByClassName("e").length && (h.order.splice(1, 0, "CLASS"), h.find.CLASS = function (e, t, n) {
                    if (void 0 !== t.getElementsByClassName && !n) return t.getElementsByClassName(e[1])
                }, e = null))
            }(), L.documentElement.contains ? d.contains = function (e, t) {
                return e !== t && (!e.contains || e.contains(t))
            } : L.documentElement.compareDocumentPosition ? d.contains = function (e, t) {
                return !!(16 & e.compareDocumentPosition(t))
            } : d.contains = function () {
                return !1
            }, d.isXML = function (e) {
                var t = (e ? e.ownerDocument || e : 0).documentElement;
                return !!t && "HTML" !== t.nodeName
            };
            var w = function (e, t, n) {
                for (var r, i = [], o = "", a = t.nodeType ? [t] : t; r = h.match.PSEUDO.exec(e);) o += r[0], e = e.replace(h.match.PSEUDO, "");
                e = h.relative[e] ? e + "*" : e;
                for (var s = 0, l = a.length; s < l; s++) d(e, a[s], i, n);
                return d.filter(o, i)
            };
            d.attr = R.attr, d.selectors.attrMap = {}, R.find = d, R.expr = d.selectors, R.expr[":"] = R.expr.filters, R.unique = d.uniqueSort, R.text = d.getText, R.isXMLDoc = d.isXML, R.contains = d.contains
        }();
        var ae = /Until$/, se = /^(?:parents|prevUntil|prevAll)/, le = /,/, ce = /^.[^:#\[\.,]*$/,
            ue = Array.prototype.slice, fe = R.expr.match.POS, de = {children: !0, contents: !0, next: !0, prev: !0};
        R.fn.extend({
            find: function (e) {
                var t, n, r = this;
                if ("string" != typeof e) return R(e).filter(function () {
                    for (t = 0, n = r.length; t < n; t++) if (R.contains(r[t], this)) return !0
                });
                var i, o, a, s = this.pushStack("", "find", e);
                for (t = 0, n = this.length; t < n; t++) if (i = s.length, R.find(e, this[t], s), t > 0) for (o = i; o < s.length; o++) for (a = 0; a < i; a++) if (s[a] === s[o]) {
                    s.splice(o--, 1);
                    break
                }
                return s
            }, has: function (e) {
                var t = R(e);
                return this.filter(function () {
                    for (var e = 0, n = t.length; e < n; e++) if (R.contains(this, t[e])) return !0
                })
            }, not: function (e) {
                return this.pushStack(c(this, e, !1), "not", e)
            }, filter: function (e) {
                return this.pushStack(c(this, e, !0), "filter", e)
            }, is: function (e) {
                return !!e && ("string" == typeof e ? fe.test(e) ? R(e, this.context).index(this[0]) >= 0 : R.filter(e, this).length > 0 : this.filter(e).length > 0)
            }, closest: function (e, t) {
                var n, r, i = [], o = this[0];
                if (R.isArray(e)) {
                    for (var a = 1; o && o.ownerDocument && o !== t;) {
                        for (n = 0; n < e.length; n++) R(o).is(e[n]) && i.push({selector: e[n], elem: o, level: a});
                        o = o.parentNode, a++
                    }
                    return i
                }
                var s = fe.test(e) || "string" != typeof e ? R(e, t || this.context) : 0;
                for (n = 0, r = this.length; n < r; n++) for (o = this[n]; o;) {
                    if (s ? s.index(o) > -1 : R.find.matchesSelector(o, e)) {
                        i.push(o);
                        break
                    }
                    if (!(o = o.parentNode) || !o.ownerDocument || o === t || 11 === o.nodeType) break
                }
                return i = i.length > 1 ? R.unique(i) : i, this.pushStack(i, "closest", e)
            }, index: function (e) {
                return e ? "string" == typeof e ? R.inArray(this[0], R(e)) : R.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            }, add: function (e, t) {
                var n = "string" == typeof e ? R(e, t) : R.makeArray(e && e.nodeType ? [e] : e),
                    r = R.merge(this.get(), n);
                return this.pushStack(l(n[0]) || l(r[0]) ? r : R.unique(r))
            }, andSelf: function () {
                return this.add(this.prevObject)
            }
        }), R.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return R.dir(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return R.dir(e, "parentNode", n)
            }, next: function (e) {
                return R.nth(e, 2, "nextSibling")
            }, prev: function (e) {
                return R.nth(e, 2, "previousSibling")
            }, nextAll: function (e) {
                return R.dir(e, "nextSibling")
            }, prevAll: function (e) {
                return R.dir(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return R.dir(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return R.dir(e, "previousSibling", n)
            }, siblings: function (e) {
                return R.sibling(e.parentNode.firstChild, e)
            }, children: function (e) {
                return R.sibling(e.firstChild)
            }, contents: function (e) {
                return R.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : R.makeArray(e.childNodes)
            }
        }, function (e, t) {
            R.fn[e] = function (n, r) {
                var i = R.map(this, t, n), o = ue.call(arguments);
                return ae.test(e) || (r = n), r && "string" == typeof r && (i = R.filter(r, i)), i = this.length > 1 && !de[e] ? R.unique(i) : i, (this.length > 1 || le.test(r)) && se.test(e) && (i = i.reverse()), this.pushStack(i, e, o.join(","))
            }
        }), R.extend({
            filter: function (e, t, n) {
                return n && (e = ":not(" + e + ")"), 1 === t.length ? R.find.matchesSelector(t[0], e) ? [t[0]] : [] : R.find.matches(e, t)
            }, dir: function (e, n, r) {
                for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !R(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
                return i
            }, nth: function (e, t, n, r) {
                t = t || 1;
                for (var i = 0; e && (1 !== e.nodeType || ++i !== t); e = e[n]) ;
                return e
            }, sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var pe = "abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            he = / jQuery\d+="(?:\d+|null)"/g, me = /^\s+/,
            ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ye = /<([\w:]+)/,
            ve = /<tbody/i, be = /<|&#?\w+;/, we = /<(?:script|style)/i, xe = /<(?:script|object|embed|option|style)/i,
            Te = new RegExp("<(?:" + pe.replace(" ", "|") + ")", "i"), _e = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ce = /\/(java|ecma)script/i, Ee = /^\s*<!(?:\[CDATA\[|\-\-)/, Se = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            }, ke = u(L);
        Se.optgroup = Se.option, Se.tbody = Se.tfoot = Se.colgroup = Se.caption = Se.thead, Se.th = Se.td, R.support.htmlSerialize || (Se._default = [1, "div<div>", "</div>"]), R.fn.extend({
            text: function (e) {
                return R.isFunction(e) ? this.each(function (t) {
                    var n = R(this);
                    n.text(e.call(this, t, n.text()))
                }) : "object" != typeof e && e !== t ? this.empty().append((this[0] && this[0].ownerDocument || L).createTextNode(e)) : R.text(this)
            }, wrapAll: function (e) {
                if (R.isFunction(e)) return this.each(function (t) {
                    R(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = R(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            }, wrapInner: function (e) {
                return R.isFunction(e) ? this.each(function (t) {
                    R(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = R(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                return this.each(function () {
                    R(this).wrapAll(e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    R.nodeName(this, "body") || R(this).replaceWith(this.childNodes)
                }).end()
            }, append: function () {
                return this.domManip(arguments, !0, function (e) {
                    1 === this.nodeType && this.appendChild(e)
                })
            }, prepend: function () {
                return this.domManip(arguments, !0, function (e) {
                    1 === this.nodeType && this.insertBefore(e, this.firstChild)
                })
            }, before: function () {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                    this.parentNode.insertBefore(e, this)
                });
                if (arguments.length) {
                    var e = R(arguments[0]);
                    return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
                }
            }, after: function () {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
                if (arguments.length) {
                    var e = this.pushStack(this, "after", arguments);
                    return e.push.apply(e, R(arguments[0]).toArray()), e
                }
            }, remove: function (e, t) {
                for (var n, r = 0; null != (n = this[r]); r++) e && !R.filter(e, [n]).length || (t || 1 !== n.nodeType || (R.cleanData(n.getElementsByTagName("*")), R.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) for (1 === e.nodeType && R.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return R.clone(this, e, t)
                })
            }, html: function (e) {
                if (e === t) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(he, "") : null;
                if ("string" != typeof e || we.test(e) || !R.support.leadingWhitespace && me.test(e) || Se[(ye.exec(e) || ["", ""])[1].toLowerCase()]) R.isFunction(e) ? this.each(function (t) {
                    var n = R(this);
                    n.html(e.call(this, t, n.html()))
                }) : this.empty().append(e); else {
                    e = e.replace(ge, "<$1></$2>");
                    try {
                        for (var n = 0, r = this.length; n < r; n++) 1 === this[n].nodeType && (R.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = e)
                    } catch (t) {
                        this.empty().append(e)
                    }
                }
                return this
            }, replaceWith: function (e) {
                return this[0] && this[0].parentNode ? R.isFunction(e) ? this.each(function (t) {
                    var n = R(this), r = n.html();
                    n.replaceWith(e.call(this, t, r))
                }) : ("string" != typeof e && (e = R(e).detach()), this.each(function () {
                    var t = this.nextSibling, n = this.parentNode;
                    R(this).remove(), t ? R(t).before(e) : R(n).append(e)
                })) : this.length ? this.pushStack(R(R.isFunction(e) ? e() : e), "replaceWith", e) : this
            }, detach: function (e) {
                return this.remove(e, !0)
            }, domManip: function (e, n, r) {
                var i, o, a, s, l = e[0], c = [];
                if (!R.support.checkClone && 3 === arguments.length && "string" == typeof l && _e.test(l)) return this.each(function () {
                    R(this).domManip(e, n, r, !0)
                });
                if (R.isFunction(l)) return this.each(function (i) {
                    var o = R(this);
                    e[0] = l.call(this, i, n ? o.html() : t), o.domManip(e, n, r)
                });
                if (this[0]) {
                    if (s = l && l.parentNode, i = R.support.parentNode && s && 11 === s.nodeType && s.childNodes.length === this.length ? {fragment: s} : R.buildFragment(e, this, c), a = i.fragment, o = 1 === a.childNodes.length ? a = a.firstChild : a.firstChild) {
                        n = n && R.nodeName(o, "tr");
                        for (var u = 0, d = this.length, p = d - 1; u < d; u++) r.call(n ? f(this[u]) : this[u], i.cacheable || d > 1 && u < p ? R.clone(a, !0, !0) : a)
                    }
                    c.length && R.each(c, y)
                }
                return this
            }
        }), R.buildFragment = function (e, t, n) {
            var r, i, o, a, s = e[0];
            return t && t[0] && (a = t[0].ownerDocument || t[0]), a.createDocumentFragment || (a = L), 1 === e.length && "string" == typeof s && s.length < 512 && a === L && "<" === s.charAt(0) && !xe.test(s) && (R.support.checkClone || !_e.test(s)) && !R.support.unknownElems && Te.test(s) && (i = !0, (o = R.fragments[s]) && 1 !== o && (r = o)), r || (r = a.createDocumentFragment(), R.clean(e, a, r, n)), i && (R.fragments[s] = o ? r : 1), {
                fragment: r,
                cacheable: i
            }
        }, R.fragments = {}, R.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            R.fn[e] = function (n) {
                var r = [], i = R(n), o = 1 === this.length && this[0].parentNode;
                if (o && 11 === o.nodeType && 1 === o.childNodes.length && 1 === i.length) return i[t](this[0]), this;
                for (var a = 0, s = i.length; a < s; a++) {
                    var l = (a > 0 ? this.clone(!0) : this).get();
                    R(i[a])[t](l), r = r.concat(l)
                }
                return this.pushStack(r, e, i.selector)
            }
        }), R.extend({
            clone: function (e, t, n) {
                var r, i, o, a = e.cloneNode(!0);
                if (!(R.support.noCloneEvent && R.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || R.isXMLDoc(e))) for (p(e, a), r = h(e), i = h(a), o = 0; r[o]; ++o) i[o] && p(r[o], i[o]);
                if (t && (d(e, a), n)) for (r = h(e), i = h(a), o = 0; r[o]; ++o) d(r[o], i[o]);
                return r = i = null, a
            }, clean: function (e, t, n, r) {
                var i;
                void 0 === (t = t || L).createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || L);
                for (var o, a, s = [], l = 0; null != (a = e[l]); l++) if ("number" == typeof a && (a += ""), a) {
                    if ("string" == typeof a) if (be.test(a)) {
                        a = a.replace(ge, "<$1></$2>");
                        var c = (ye.exec(a) || ["", ""])[1].toLowerCase(), f = Se[c] || Se._default, d = f[0],
                            p = t.createElement("div");
                        for (t === L ? ke.appendChild(p) : u(t).appendChild(p), p.innerHTML = f[1] + a + f[2]; d--;) p = p.lastChild;
                        if (!R.support.tbody) {
                            var h = ve.test(a),
                                m = "table" !== c || h ? "<table>" !== f[1] || h ? [] : p.childNodes : p.firstChild && p.firstChild.childNodes;
                            for (o = m.length - 1; o >= 0; --o) R.nodeName(m[o], "tbody") && !m[o].childNodes.length && m[o].parentNode.removeChild(m[o])
                        }
                        !R.support.leadingWhitespace && me.test(a) && p.insertBefore(t.createTextNode(me.exec(a)[0]), p.firstChild), a = p.childNodes
                    } else a = t.createTextNode(a);
                    var y;
                    if (!R.support.appendChecked) if (a[0] && "number" == typeof(y = a.length)) for (o = 0; o < y; o++) g(a[o]); else g(a);
                    a.nodeType ? s.push(a) : s = R.merge(s, a)
                }
                if (n) for (i = function (e) {
                    return !e.type || Ce.test(e.type)
                }, l = 0; s[l]; l++) if (!r || !R.nodeName(s[l], "script") || s[l].type && "text/javascript" !== s[l].type.toLowerCase()) {
                    if (1 === s[l].nodeType) {
                        var v = R.grep(s[l].getElementsByTagName("script"), i);
                        s.splice.apply(s, [l + 1, 0].concat(v))
                    }
                    n.appendChild(s[l])
                } else r.push(s[l].parentNode ? s[l].parentNode.removeChild(s[l]) : s[l]);
                return s
            }, cleanData: function (e) {
                for (var t, n, r, i = R.cache, o = R.event.special, a = R.support.deleteExpando, s = 0; null != (r = e[s]); s++) if ((!r.nodeName || !R.noData[r.nodeName.toLowerCase()]) && (n = r[R.expando])) {
                    if ((t = i[n]) && t.events) {
                        for (var l in t.events) o[l] ? R.event.remove(r, l) : R.removeEvent(r, l, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    a ? delete r[R.expando] : r.removeAttribute && r.removeAttribute(R.expando), delete i[n]
                }
            }
        });
        var Ne, Ae, je, Oe = /alpha\([^)]*\)/i, Le = /opacity=([^)]*)/, De = /([A-Z]|^ms)/g, Fe = /^-?\d+(?:px)?$/i,
            Re = /^-?\d/, Ie = /^([\-+])=([\-+.\de]+)/,
            He = {position: "absolute", visibility: "hidden", display: "block"}, Me = ["Left", "Right"],
            qe = ["Top", "Bottom"];
        R.fn.css = function (e, n) {
            return 2 === arguments.length && n === t ? this : R.access(this, e, n, !0, function (e, n, r) {
                return r !== t ? R.style(e, n, r) : R.css(e, n)
            })
        }, R.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Ne(e, "opacity", "opacity");
                            return "" === n ? "1" : n
                        }
                        return e.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {float: R.support.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (e, n, r, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, s = R.camelCase(n), l = e.style, c = R.cssHooks[s];
                    if (n = R.cssProps[s] || s, r === t) return c && "get" in c && (o = c.get(e, !1, i)) !== t ? o : l[n];
                    if (!("string" == (a = typeof r) && (o = Ie.exec(r)) && (r = +(o[1] + 1) * +o[2] + parseFloat(R.css(e, n)), a = "number"), null == r || "number" === a && isNaN(r) || ("number" !== a || R.cssNumber[s] || (r += "px"), c && "set" in c && (r = c.set(e, r)) === t))) try {
                        l[n] = r
                    } catch (e) {
                    }
                }
            },
            css: function (e, n, r) {
                var i, o;
                return n = R.camelCase(n), o = R.cssHooks[n], "cssFloat" === (n = R.cssProps[n] || n) && (n = "float"), o && "get" in o && (i = o.get(e, !0, r)) !== t ? i : Ne ? Ne(e, n) : void 0
            },
            swap: function (e, t, n) {
                var r = {};
                for (var i in t) r[i] = e.style[i], e.style[i] = t[i];
                n.call(e);
                for (i in t) e.style[i] = r[i]
            }
        }), R.curCSS = R.css, R.each(["height", "width"], function (e, t) {
            R.cssHooks[t] = {
                get: function (e, n, r) {
                    var i;
                    if (n) return 0 !== e.offsetWidth ? v(e, t, r) : (R.swap(e, He, function () {
                        i = v(e, t, r)
                    }), i)
                }, set: function (e, t) {
                    return Fe.test(t) ? (t = parseFloat(t)) >= 0 ? t + "px" : void 0 : t
                }
            }
        }), R.support.opacity || (R.cssHooks.opacity = {
            get: function (e, t) {
                return Le.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
            }, set: function (e, t) {
                var n = e.style, r = e.currentStyle, i = R.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = r && r.filter || n.filter || "";
                n.zoom = 1, t >= 1 && "" === R.trim(o.replace(Oe, "")) && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = Oe.test(o) ? o.replace(Oe, i) : o + " " + i)
            }
        }), R(function () {
            R.support.reliableMarginRight || (R.cssHooks.marginRight = {
                get: function (e, t) {
                    var n;
                    return R.swap(e, {display: "inline-block"}, function () {
                        n = t ? Ne(e, "margin-right", "marginRight") : e.style.marginRight
                    }), n
                }
            })
        }), L.defaultView && L.defaultView.getComputedStyle && (Ae = function (e, n) {
            var r, i, o;
            return n = n.replace(De, "-$1").toLowerCase(), (i = e.ownerDocument.defaultView) ? ((o = i.getComputedStyle(e, null)) && ("" !== (r = o.getPropertyValue(n)) || R.contains(e.ownerDocument.documentElement, e) || (r = R.style(e, n))), r) : t
        }), L.documentElement.currentStyle && (je = function (e, t) {
            var n, r, i, o = e.currentStyle && e.currentStyle[t], a = e.style;
            return null === o && a && (i = a[t]) && (o = i), !Fe.test(o) && Re.test(o) && (n = a.left, (r = e.runtimeStyle && e.runtimeStyle.left) && (e.runtimeStyle.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : o || 0, o = a.pixelLeft + "px", a.left = n, r && (e.runtimeStyle.left = r)), "" === o ? "auto" : o
        }), Ne = Ae || je, R.expr && R.expr.filters && (R.expr.filters.hidden = function (e) {
            var t = e.offsetWidth, n = e.offsetHeight;
            return 0 === t && 0 === n || !R.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || R.css(e, "display"))
        }, R.expr.filters.visible = function (e) {
            return !R.expr.filters.hidden(e)
        });
        var Pe, Be, ze = /%20/g, Ue = /\[\]$/, $e = /\r?\n/g, We = /#.*$/, Ve = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Xe = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            Ye = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Ze = /^(?:GET|HEAD)$/, Ke = /^\/\//,
            Ge = /\?/, Je = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Qe = /^(?:select|textarea)/i,
            et = /\s+/, tt = /([?&])_=[^&]*/, nt = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, rt = R.fn.load,
            it = {}, ot = {}, at = ["*/"] + ["*"];
        try {
            Pe = F.href
        } catch (e) {
            (Pe = L.createElement("a")).href = "", Pe = Pe.href
        }
        Be = nt.exec(Pe.toLowerCase()) || [], R.fn.extend({
            load: function (e, n, r) {
                if ("string" != typeof e && rt) return rt.apply(this, arguments);
                if (!this.length) return this;
                var i = e.indexOf(" ");
                if (i >= 0) {
                    var o = e.slice(i, e.length);
                    e = e.slice(0, i)
                }
                var a = "GET";
                n && (R.isFunction(n) ? (r = n, n = t) : "object" == typeof n && (n = R.param(n, R.ajaxSettings.traditional), a = "POST"));
                var s = this;
                return R.ajax({
                    url: e, type: a, dataType: "html", data: n, complete: function (e, t, n) {
                        n = e.responseText, e.isResolved() && (e.done(function (e) {
                            n = e
                        }), s.html(o ? R("<div>").append(n.replace(Je, "")).find(o) : n)), r && s.each(r, [n, t, e])
                    }
                }), this
            }, serialize: function () {
                return R.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    return this.elements ? R.makeArray(this.elements) : this
                }).filter(function () {
                    return this.name && !this.disabled && (this.checked || Qe.test(this.nodeName) || Xe.test(this.type))
                }).map(function (e, t) {
                    var n = R(this).val();
                    return null == n ? null : R.isArray(n) ? R.map(n, function (e, n) {
                        return {name: t.name, value: e.replace($e, "\r\n")}
                    }) : {name: t.name, value: n.replace($e, "\r\n")}
                }).get()
            }
        }), R.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
            R.fn[t] = function (e) {
                return this.bind(t, e)
            }
        }), R.each(["get", "post"], function (e, n) {
            R[n] = function (e, r, i, o) {
                return R.isFunction(r) && (o = o || i, i = r, r = t), R.ajax({
                    type: n,
                    url: e,
                    data: r,
                    success: i,
                    dataType: o
                })
            }
        }), R.extend({
            getScript: function (e, n) {
                return R.get(e, t, n, "script")
            },
            getJSON: function (e, t, n) {
                return R.get(e, t, n, "json")
            },
            ajaxSetup: function (e, t) {
                return t ? x(e, R.ajaxSettings) : (t = e, e = R.ajaxSettings), x(e, t), e
            },
            ajaxSettings: {
                url: Pe,
                isLocal: Ye.test(Be[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": at
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText"},
                converters: {"* text": e.String, "text html": !0, "text json": R.parseJSON, "text xml": R.parseXML},
                flatOptions: {context: !0, url: !0}
            },
            ajaxPrefilter: b(it),
            ajaxTransport: b(ot),
            ajax: function (e, n) {
                function r(e, n, r, a) {
                    if (2 !== x) {
                        x = 2, l && clearTimeout(l), s = t, o = a || "", T.readyState = e > 0 ? 4 : 0;
                        var c, f, v, b, w, E = n, S = r ? _(d, T, r) : t;
                        if (e >= 200 && e < 300 || 304 === e) if (d.ifModified && ((b = T.getResponseHeader("Last-Modified")) && (R.lastModified[i] = b), (w = T.getResponseHeader("Etag")) && (R.etag[i] = w)), 304 === e) E = "notmodified", c = !0; else try {
                            f = C(d, S), E = "success", c = !0
                        } catch (e) {
                            E = "parsererror", v = e
                        } else v = E, E && !e || (E = "error", e < 0 && (e = 0));
                        T.status = e, T.statusText = "" + (n || E), c ? m.resolveWith(p, [f, E, T]) : m.rejectWith(p, [T, E, v]), T.statusCode(y), y = t, u && h.trigger("ajax" + (c ? "Success" : "Error"), [T, d, c ? f : v]), g.fireWith(p, [T, E]), u && (h.trigger("ajaxComplete", [T, d]), --R.active || R.event.trigger("ajaxStop"))
                    }
                }

                "object" == typeof e && (n = e, e = t), n = n || {};
                var i, o, a, s, l, c, u, f, d = R.ajaxSetup({}, n), p = d.context || d,
                    h = p !== d && (p.nodeType || p instanceof R) ? R(p) : R.event, m = R.Deferred(),
                    g = R.Callbacks("once memory"), y = d.statusCode || {}, v = {}, b = {}, x = 0, T = {
                        readyState: 0, setRequestHeader: function (e, t) {
                            if (!x) {
                                var n = e.toLowerCase();
                                e = b[n] = b[n] || e, v[e] = t
                            }
                            return this
                        }, getAllResponseHeaders: function () {
                            return 2 === x ? o : null
                        }, getResponseHeader: function (e) {
                            var n;
                            if (2 === x) {
                                if (!a) for (a = {}; n = Ve.exec(o);) a[n[1].toLowerCase()] = n[2];
                                n = a[e.toLowerCase()]
                            }
                            return n === t ? null : n
                        }, overrideMimeType: function (e) {
                            return x || (d.mimeType = e), this
                        }, abort: function (e) {
                            return e = e || "abort", s && s.abort(e), r(0, e), this
                        }
                    };
                if (m.promise(T), T.success = T.done, T.error = T.fail, T.complete = g.add, T.statusCode = function (e) {
                        if (e) {
                            var t;
                            if (x < 2) for (t in e) y[t] = [y[t], e[t]]; else t = e[T.status], T.then(t, t)
                        }
                        return this
                    }, d.url = ((e || d.url) + "").replace(We, "").replace(Ke, Be[1] + "//"), d.dataTypes = R.trim(d.dataType || "*").toLowerCase().split(et), null == d.crossDomain && (c = nt.exec(d.url.toLowerCase()), d.crossDomain = !(!c || c[1] == Be[1] && c[2] == Be[2] && (c[3] || ("http:" === c[1] ? 80 : 443)) == (Be[3] || ("http:" === Be[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = R.param(d.data, d.traditional)), w(it, d, n, T), 2 === x) return !1;
                if (u = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Ze.test(d.type), u && 0 == R.active++ && R.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (Ge.test(d.url) ? "&" : "?") + d.data, delete d.data), i = d.url, !1 === d.cache)) {
                    var E = R.now(), S = d.url.replace(tt, "$1_=" + E);
                    d.url = S + (S === d.url ? (Ge.test(d.url) ? "&" : "?") + "_=" + E : "")
                }
                (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), d.ifModified && (i = i || d.url, R.lastModified[i] && T.setRequestHeader("If-Modified-Since", R.lastModified[i]), R.etag[i] && T.setRequestHeader("If-None-Match", R.etag[i])), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + at + "; q=0.01" : "") : d.accepts["*"]);
                for (f in d.headers) T.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (!1 === d.beforeSend.call(p, T, d) || 2 === x)) return T.abort(), !1;
                for (f in{success: 1, error: 1, complete: 1}) T[f](d[f]);
                if (s = w(ot, d, n, T)) {
                    T.readyState = 1, u && h.trigger("ajaxSend", [T, d]), d.async && d.timeout > 0 && (l = setTimeout(function () {
                        T.abort("timeout")
                    }, d.timeout));
                    try {
                        x = 1, s.send(v, r)
                    } catch (e) {
                        x < 2 ? r(-1, e) : R.error(e)
                    }
                } else r(-1, "No Transport");
                return T
            },
            param: function (e, n) {
                var r = [], i = function (e, t) {
                    t = R.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (n === t && (n = R.ajaxSettings.traditional), R.isArray(e) || e.jquery && !R.isPlainObject(e)) R.each(e, function () {
                    i(this.name, this.value)
                }); else for (var o in e) T(o, e[o], n, i);
                return r.join("&").replace(ze, "+")
            }
        }), R.extend({active: 0, lastModified: {}, etag: {}});
        var st = R.now(), lt = /(\=)\?(&|$)|\?\?/i;
        R.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                return R.expando + "_" + st++
            }
        }), R.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i = "application/x-www-form-urlencoded" === t.contentType && "string" == typeof t.data;
            if ("jsonp" === t.dataTypes[0] || !1 !== t.jsonp && (lt.test(t.url) || i && lt.test(t.data))) {
                var o, a = t.jsonpCallback = R.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                    s = e[a], l = t.url, c = t.data, u = "$1" + a + "$2";
                return !1 !== t.jsonp && (l = l.replace(lt, u), t.url === l && (i && (c = c.replace(lt, u)), t.data === c && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + a))), t.url = l, t.data = c, e[a] = function (e) {
                    o = [e]
                }, r.always(function () {
                    e[a] = s, o && R.isFunction(s) && e[a](o[0])
                }), t.converters["script json"] = function () {
                    return o || R.error(a + " was not called"), o[0]
                }, t.dataTypes[0] = "json", "script"
            }
        }), R.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /javascript|ecmascript/},
            converters: {
                "text script": function (e) {
                    return R.globalEval(e), e
                }
            }
        }), R.ajaxPrefilter("script", function (e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), R.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var n, r = L.head || L.getElementsByTagName("head")[0] || L.documentElement;
                return {
                    send: function (i, o) {
                        (n = L.createElement("script")).async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
                            (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success"))
                        }, r.insertBefore(n, r.firstChild)
                    }, abort: function () {
                        n && n.onload(0, 1)
                    }
                }
            }
        });
        var ct, ut = !!e.ActiveXObject && function () {
            for (var e in ct) ct[e](0, 1)
        }, ft = 0;
        R.ajaxSettings.xhr = e.ActiveXObject ? function () {
            return !this.isLocal && E() || S()
        } : E, function (e) {
            R.extend(R.support, {ajax: !!e, cors: !!e && "withCredentials" in e})
        }(R.ajaxSettings.xhr()), R.support.ajax && R.ajaxTransport(function (n) {
            if (!n.crossDomain || R.support.cors) {
                var r;
                return {
                    send: function (i, o) {
                        var a, s, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in i) l.setRequestHeader(s, i[s])
                        } catch (e) {
                        }
                        l.send(n.hasContent && n.data || null), r = function (e, i) {
                            var s, c, u, f, d;
                            try {
                                if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = R.noop, ut && delete ct[a]), i) 4 !== l.readyState && l.abort(); else {
                                    s = l.status, u = l.getAllResponseHeaders(), f = {}, (d = l.responseXML) && d.documentElement && (f.xml = d), f.text = l.responseText;
                                    try {
                                        c = l.statusText
                                    } catch (e) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                }
                            } catch (e) {
                                i || o(-1, e)
                            }
                            f && o(s, c, f, u)
                        }, n.async && 4 !== l.readyState ? (a = ++ft, ut && (ct || (ct = {}, R(e).unload(ut)), ct[a] = r), l.onreadystatechange = r) : r()
                    }, abort: function () {
                        r && r(0, 1)
                    }
                }
            }
        });
        var dt, pt, ht, mt, gt = {}, yt = /^(?:toggle|show|hide)$/, vt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
            bt = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
        R.fn.extend({
            show: function (e, t, n) {
                var r, i;
                if (e || 0 === e) return this.animate(A("show", 3), e, t, n);
                for (var o = 0, a = this.length; o < a; o++) (r = this[o]).style && (i = r.style.display, R._data(r, "olddisplay") || "none" !== i || (i = r.style.display = ""), "" === i && "none" === R.css(r, "display") && R._data(r, "olddisplay", j(r.nodeName)));
                for (o = 0; o < a; o++) (r = this[o]).style && ("" !== (i = r.style.display) && "none" !== i || (r.style.display = R._data(r, "olddisplay") || ""));
                return this
            }, hide: function (e, t, n) {
                if (e || 0 === e) return this.animate(A("hide", 3), e, t, n);
                for (var r, i, o = 0, a = this.length; o < a; o++) (r = this[o]).style && ("none" === (i = R.css(r, "display")) || R._data(r, "olddisplay") || R._data(r, "olddisplay", i));
                for (o = 0; o < a; o++) this[o].style && (this[o].style.display = "none");
                return this
            }, _toggle: R.fn.toggle, toggle: function (e, t, n) {
                var r = "boolean" == typeof e;
                return R.isFunction(e) && R.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || r ? this.each(function () {
                    var t = r ? e : R(this).is(":hidden");
                    R(this)[t ? "show" : "hide"]()
                }) : this.animate(A("toggle", 3), e, t, n), this
            }, fadeTo: function (e, t, n, r) {
                return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
            }, animate: function (e, t, n, r) {
                function i() {
                    !1 === o.queue && R._mark(this);
                    var t, n, r, i, a, s, l, c, u, f = R.extend({}, o), d = 1 === this.nodeType,
                        p = d && R(this).is(":hidden");
                    f.animatedProperties = {};
                    for (r in e) {
                        if (t = R.camelCase(r), r !== t && (e[t] = e[r], delete e[r]), n = e[t], R.isArray(n) ? (f.animatedProperties[t] = n[1], n = e[t] = n[0]) : f.animatedProperties[t] = f.specialEasing && f.specialEasing[t] || f.easing || "swing", "hide" === n && p || "show" === n && !p) return f.complete.call(this);
                        !d || "height" !== t && "width" !== t || (f.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === R.css(this, "display") && "none" === R.css(this, "float") && (R.support.inlineBlockNeedsLayout && "inline" !== j(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                    }
                    null != f.overflow && (this.style.overflow = "hidden");
                    for (r in e) i = new R.fx(this, f, r), n = e[r], yt.test(n) ? (u = R._data(this, "toggle" + r) || ("toggle" === n ? p ? "show" : "hide" : 0)) ? (R._data(this, "toggle" + r, "show" === u ? "hide" : "show"), i[u]()) : i[n]() : (a = vt.exec(n), s = i.cur(), a ? (l = parseFloat(a[2]), "px" !== (c = a[3] || (R.cssNumber[r] ? "" : "px")) && (R.style(this, r, (l || 1) + c), s = (l || 1) / i.cur() * s, R.style(this, r, s + c)), a[1] && (l = ("-=" === a[1] ? -1 : 1) * l + s), i.custom(s, l, c)) : i.custom(s, n, ""));
                    return !0
                }

                var o = R.speed(t, n, r);
                return R.isEmptyObject(e) ? this.each(o.complete, [!1]) : (e = R.extend({}, e), !1 === o.queue ? this.each(i) : this.queue(o.queue, i))
            }, stop: function (e, n, r) {
                return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    function t(e, t, n) {
                        var i = t[n];
                        R.removeData(e, n, !0), i.stop(r)
                    }

                    var n, i = !1, o = R.timers, a = R._data(this);
                    if (r || R._unmark(!0, this), null == e) for (n in a) a[n].stop && n.indexOf(".run") === n.length - 4 && t(this, a, n); else a[n = e + ".run"] && a[n].stop && t(this, a, n);
                    for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (r ? o[n](!0) : o[n].saveState(), i = !0, o.splice(n, 1));
                    r && i || R.dequeue(this, e)
                })
            }
        }), R.each({
            slideDown: A("show", 1),
            slideUp: A("hide", 1),
            slideToggle: A("toggle", 1),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            R.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), R.extend({
            speed: function (e, t, n) {
                var r = e && "object" == typeof e ? R.extend({}, e) : {
                    complete: n || !n && t || R.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !R.isFunction(t) && t
                };
                return r.duration = R.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in R.fx.speeds ? R.fx.speeds[r.duration] : R.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function (e) {
                    R.isFunction(r.old) && r.old.call(this), r.queue ? R.dequeue(this, r.queue) : !1 !== e && R._unmark(this)
                }, r
            }, easing: {
                linear: function (e, t, n, r) {
                    return n + r * e
                }, swing: function (e, t, n, r) {
                    return (-Math.cos(e * Math.PI) / 2 + .5) * r + n
                }
            }, timers: [], fx: function (e, t, n) {
                this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
            }
        }), R.fx.prototype = {
            update: function () {
                this.options.step && this.options.step.call(this.elem, this.now, this), (R.fx.step[this.prop] || R.fx.step._default)(this)
            }, cur: function () {
                if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
                var e, t = R.css(this.elem, this.prop);
                return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
            }, custom: function (e, n, r) {
                function i(e) {
                    return o.step(e)
                }

                var o = this, a = R.fx;
                this.startTime = mt || k(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = r || this.unit || (R.cssNumber[this.prop] ? "" : "px"), i.queue = this.options.queue, i.elem = this.elem, i.saveState = function () {
                    o.options.hide && R._data(o.elem, "fxshow" + o.prop) === t && R._data(o.elem, "fxshow" + o.prop, o.start)
                }, i() && R.timers.push(i) && !ht && (ht = setInterval(a.tick, a.interval))
            }, show: function () {
                var e = R._data(this.elem, "fxshow" + this.prop);
                this.options.orig[this.prop] = e || R.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), R(this.elem).show()
            }, hide: function () {
                this.options.orig[this.prop] = R._data(this.elem, "fxshow" + this.prop) || R.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
            }, step: function (e) {
                var t, n, r, i = mt || k(), o = !0, a = this.elem, s = this.options;
                if (e || i >= s.duration + this.startTime) {
                    this.now = this.end, this.pos = this.state = 1, this.update(), s.animatedProperties[this.prop] = !0;
                    for (t in s.animatedProperties) !0 !== s.animatedProperties[t] && (o = !1);
                    if (o) {
                        if (null == s.overflow || R.support.shrinkWrapBlocks || R.each(["", "X", "Y"], function (e, t) {
                                a.style["overflow" + t] = s.overflow[e]
                            }), s.hide && R(a).hide(), s.hide || s.show) for (t in s.animatedProperties) R.style(a, t, s.orig[t]), R.removeData(a, "fxshow" + t, !0), R.removeData(a, "toggle" + t, !0);
                        (r = s.complete) && (s.complete = !1, r.call(a))
                    }
                    return !1
                }
                return s.duration == 1 / 0 ? this.now = i : (n = i - this.startTime, this.state = n / s.duration, this.pos = R.easing[s.animatedProperties[this.prop]](this.state, n, 0, 1, s.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
            }
        }, R.extend(R.fx, {
            tick: function () {
                for (var e, t = R.timers, n = 0; n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
                t.length || R.fx.stop()
            }, interval: 13, stop: function () {
                clearInterval(ht), ht = null
            }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
                opacity: function (e) {
                    R.style(e.elem, "opacity", e.now)
                }, _default: function (e) {
                    e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
                }
            }
        }), R.each(["width", "height"], function (e, t) {
            R.fx.step[t] = function (e) {
                R.style(e.elem, t, Math.max(0, e.now))
            }
        }), R.expr && R.expr.filters && (R.expr.filters.animated = function (e) {
            return R.grep(R.timers, function (t) {
                return e === t.elem
            }).length
        });
        var wt = /^t(?:able|d|h)$/i, xt = /^(?:body|html)$/i;
        "getBoundingClientRect" in L.documentElement ? R.fn.offset = function (e) {
            var t, n = this[0];
            if (e) return this.each(function (t) {
                R.offset.setOffset(this, e, t)
            });
            if (!n || !n.ownerDocument) return null;
            if (n === n.ownerDocument.body) return R.offset.bodyOffset(n);
            try {
                t = n.getBoundingClientRect()
            } catch (e) {
            }
            var r = n.ownerDocument, i = r.documentElement;
            if (!t || !R.contains(i, n)) return t ? {top: t.top, left: t.left} : {top: 0, left: 0};
            var o = r.body, a = O(r), s = i.clientTop || o.clientTop || 0, l = i.clientLeft || o.clientLeft || 0,
                c = a.pageYOffset || R.support.boxModel && i.scrollTop || o.scrollTop,
                u = a.pageXOffset || R.support.boxModel && i.scrollLeft || o.scrollLeft;
            return {top: t.top + c - s, left: t.left + u - l}
        } : R.fn.offset = function (e) {
            var t = this[0];
            if (e) return this.each(function (t) {
                R.offset.setOffset(this, e, t)
            });
            if (!t || !t.ownerDocument) return null;
            if (t === t.ownerDocument.body) return R.offset.bodyOffset(t);
            for (var n, r = t.offsetParent, i = t.ownerDocument, o = i.documentElement, a = i.body, s = i.defaultView, l = s ? s.getComputedStyle(t, null) : t.currentStyle, c = t.offsetTop, u = t.offsetLeft; (t = t.parentNode) && t !== a && t !== o && (!R.support.fixedPosition || "fixed" !== l.position);) n = s ? s.getComputedStyle(t, null) : t.currentStyle, c -= t.scrollTop, u -= t.scrollLeft, t === r && (c += t.offsetTop, u += t.offsetLeft, !R.support.doesNotAddBorder || R.support.doesAddBorderForTableAndCells && wt.test(t.nodeName) || (c += parseFloat(n.borderTopWidth) || 0, u += parseFloat(n.borderLeftWidth) || 0), r, r = t.offsetParent), R.support.subtractsBorderForOverflowNotVisible && "visible" !== n.overflow && (c += parseFloat(n.borderTopWidth) || 0, u += parseFloat(n.borderLeftWidth) || 0), l = n;
            return "relative" !== l.position && "static" !== l.position || (c += a.offsetTop, u += a.offsetLeft), R.support.fixedPosition && "fixed" === l.position && (c += Math.max(o.scrollTop, a.scrollTop), u += Math.max(o.scrollLeft, a.scrollLeft)), {
                top: c,
                left: u
            }
        }, R.offset = {
            bodyOffset: function (e) {
                var t = e.offsetTop, n = e.offsetLeft;
                return R.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(R.css(e, "marginTop")) || 0, n += parseFloat(R.css(e, "marginLeft")) || 0), {
                    top: t,
                    left: n
                }
            }, setOffset: function (e, t, n) {
                var r = R.css(e, "position");
                "static" === r && (e.style.position = "relative");
                var i, o, a = R(e), s = a.offset(), l = R.css(e, "top"), c = R.css(e, "left"), u = {}, f = {};
                ("absolute" === r || "fixed" === r) && R.inArray("auto", [l, c]) > -1 ? (i = (f = a.position()).top, o = f.left) : (i = parseFloat(l) || 0, o = parseFloat(c) || 0), R.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (u.top = t.top - s.top + i), null != t.left && (u.left = t.left - s.left + o), "using" in t ? t.using.call(e, u) : a.css(u)
            }
        }, R.fn.extend({
            position: function () {
                if (!this[0]) return null;
                var e = this[0], t = this.offsetParent(), n = this.offset(),
                    r = xt.test(t[0].nodeName) ? {top: 0, left: 0} : t.offset();
                return n.top -= parseFloat(R.css(e, "marginTop")) || 0, n.left -= parseFloat(R.css(e, "marginLeft")) || 0, r.top += parseFloat(R.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(R.css(t[0], "borderLeftWidth")) || 0, {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || L.body; e && !xt.test(e.nodeName) && "static" === R.css(e, "position");) e = e.offsetParent;
                    return e
                })
            }
        }), R.each(["Left", "Top"], function (e, n) {
            var r = "scroll" + n;
            R.fn[r] = function (n) {
                var i, o;
                return n === t ? (i = this[0]) ? (o = O(i)) ? "pageXOffset" in o ? o[e ? "pageYOffset" : "pageXOffset"] : R.support.boxModel && o.document.documentElement[r] || o.document.body[r] : i[r] : null : this.each(function () {
                    (o = O(this)) ? o.scrollTo(e ? R(o).scrollLeft() : n, e ? n : R(o).scrollTop()) : this[r] = n
                })
            }
        }), R.each(["Height", "Width"], function (e, n) {
            var r = n.toLowerCase();
            R.fn["inner" + n] = function () {
                var e = this[0];
                return e ? e.style ? parseFloat(R.css(e, r, "padding")) : this[r]() : null
            }, R.fn["outer" + n] = function (e) {
                var t = this[0];
                return t ? t.style ? parseFloat(R.css(t, r, e ? "margin" : "border")) : this[r]() : null
            }, R.fn[r] = function (e) {
                var i = this[0];
                if (!i) return null == e ? null : this;
                if (R.isFunction(e)) return this.each(function (t) {
                    var n = R(this);
                    n[r](e.call(this, t, n[r]()))
                });
                if (R.isWindow(i)) {
                    var o = i.document.documentElement["client" + n], a = i.document.body;
                    return "CSS1Compat" === i.document.compatMode && o || a && a["client" + n] || o
                }
                if (9 === i.nodeType) return Math.max(i.documentElement["client" + n], i.body["scroll" + n], i.documentElement["scroll" + n], i.body["offset" + n], i.documentElement["offset" + n]);
                if (e === t) {
                    var s = R.css(i, r), l = parseFloat(s);
                    return R.isNumeric(l) ? l : s
                }
                return this.css(r, "string" == typeof e ? e : e + "px")
            }
        }), e.jQuery = e.$ = R
    }(window), $.noConflict(!0)
}), define("newweb/common/jquery.selectRange", [], function (e, t) {
    var n = e("./jquery-1.7");
    n.fn.selectRange = function (e) {
        var t, r, i, o = n(this).get(0);
        return void 0 === e ? (t = o.selectionStart, r = o.selectionEnd, i = o.value.substring(t, r), {
            start: t,
            end: r,
            text: i
        }) : ("number" == typeof e && (e = {
            start: e,
            end: e
        }), o.selectionStart = e.start, o.selectionEnd = e.end, o.focus(), !1)
    }
}), define("newweb/common/log", [], function (e, t) {
    var n = e("./jquery-1.7");
    t.clog = function (e, t, n) {
        (new Image).src = n ? "/ctlog?pos=" + t + "&action=" + e + "&check=" + n : "/ctlog?pos=" + t + "&action=" + e
    }, t.init = function () {
        n(".clog-js").live("click", function () {
            var e = n(this), r = e.data("clog"), i = e.data("pos"), o = e.prop("checked");
            t.clog(r, i, o)
        })
    }
}), define("newweb/common/manTranslate", [], function (e, t) {
    function n() {
        i("#transMan")[0] && i("#transMan")[0].removeAttribute("target"), i("#transMan").on("click", function () {
            var e = document.getElementById("mapForm"), t = document.getElementById("mapInput"),
                n = i("#inputOriginal").val();
            n = i.trim(n), t.value = n, e.submit()
        })
    }

    function r() {
        i("#transMan").hover(function () {
            i(".fanyi__operations--man--tips").fadeIn()
        }, function () {
            i(".fanyi__operations--man--tips").fadeOut()
        })
    }

    var i = e("./jquery-1.7");
    t.init = function () {
        r(), n()
    }
}), define("newweb/common/md5", ["./jquery-1.7"], function (e, t) {
    var n = function (e, t) {
        return e << t | e >>> 32 - t
    }, r = function (e, t) {
        var n, r, i, o, a;
        return i = 2147483648 & e, o = 2147483648 & t, n = 1073741824 & e, r = 1073741824 & t, a = (1073741823 & e) + (1073741823 & t), n & r ? 2147483648 ^ a ^ i ^ o : n | r ? 1073741824 & a ? 3221225472 ^ a ^ i ^ o : 1073741824 ^ a ^ i ^ o : a ^ i ^ o
    }, i = function (e, t, n) {
        return e & t | ~e & n
    }, o = function (e, t, n) {
        return e & n | t & ~n
    }, a = function (e, t, n) {
        return e ^ t ^ n
    }, s = function (e, t, n) {
        return t ^ (e | ~n)
    }, l = function (e, t, o, a, s, l, c) {
        return e = r(e, r(r(i(t, o, a), s), c)), r(n(e, l), t)
    }, c = function (e, t, i, a, s, l, c) {
        return e = r(e, r(r(o(t, i, a), s), c)), r(n(e, l), t)
    }, u = function (e, t, i, o, s, l, c) {
        return e = r(e, r(r(a(t, i, o), s), c)), r(n(e, l), t)
    }, f = function (e, t, i, o, a, l, c) {
        return e = r(e, r(r(s(t, i, o), a), c)), r(n(e, l), t)
    }, d = function (e) {
        for (var t, n = e.length, r = n + 8, i = 16 * ((r - r % 64) / 64 + 1), o = Array(i - 1), a = 0, s = 0; s < n;) a = s % 4 * 8, o[t = (s - s % 4) / 4] = o[t] | e.charCodeAt(s) << a, s++;
        return t = (s - s % 4) / 4, a = s % 4 * 8, o[t] = o[t] | 128 << a, o[i - 2] = n << 3, o[i - 1] = n >>> 29, o
    }, p = function (e) {
        var t, n = "", r = "";
        for (t = 0; t <= 3; t++) n += (r = "0" + (e >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
        return n
    }, h = function (e) {
        e = e.replace(/\x0d\x0a/g, "\n");
        for (var t = "", n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) t += String.fromCharCode(r); else if (r > 127 && r < 2048) t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128); else if (r >= 55296 && r <= 56319) {
                if (n + 1 < e.length) {
                    var i = e.charCodeAt(n + 1);
                    if (i >= 56320 && i <= 57343) {
                        var o = 1024 * (r - 55296) + (i - 56320) + 65536;
                        t += String.fromCharCode(240 | o >> 18 & 7), t += String.fromCharCode(128 | o >> 12 & 63), t += String.fromCharCode(128 | o >> 6 & 63), t += String.fromCharCode(128 | 63 & o), n++
                    }
                }
            } else t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128)
        }
        return t
    };
    e("./jquery-1.7").extend({
        md5: function (e) {
            var t, n, i, o, a, s, m, g, y, v = Array();
            for (e = h(e), v = d(e), s = 1732584193, m = 4023233417, g = 2562383102, y = 271733878, t = 0; t < v.length; t += 16) n = s, i = m, o = g, a = y, s = l(s, m, g, y, v[t + 0], 7, 3614090360), y = l(y, s, m, g, v[t + 1], 12, 3905402710), g = l(g, y, s, m, v[t + 2], 17, 606105819), m = l(m, g, y, s, v[t + 3], 22, 3250441966), s = l(s, m, g, y, v[t + 4], 7, 4118548399), y = l(y, s, m, g, v[t + 5], 12, 1200080426), g = l(g, y, s, m, v[t + 6], 17, 2821735955), m = l(m, g, y, s, v[t + 7], 22, 4249261313), s = l(s, m, g, y, v[t + 8], 7, 1770035416), y = l(y, s, m, g, v[t + 9], 12, 2336552879), g = l(g, y, s, m, v[t + 10], 17, 4294925233), m = l(m, g, y, s, v[t + 11], 22, 2304563134), s = l(s, m, g, y, v[t + 12], 7, 1804603682), y = l(y, s, m, g, v[t + 13], 12, 4254626195), g = l(g, y, s, m, v[t + 14], 17, 2792965006), m = l(m, g, y, s, v[t + 15], 22, 1236535329), s = c(s, m, g, y, v[t + 1], 5, 4129170786), y = c(y, s, m, g, v[t + 6], 9, 3225465664), g = c(g, y, s, m, v[t + 11], 14, 643717713), m = c(m, g, y, s, v[t + 0], 20, 3921069994), s = c(s, m, g, y, v[t + 5], 5, 3593408605), y = c(y, s, m, g, v[t + 10], 9, 38016083), g = c(g, y, s, m, v[t + 15], 14, 3634488961), m = c(m, g, y, s, v[t + 4], 20, 3889429448), s = c(s, m, g, y, v[t + 9], 5, 568446438), y = c(y, s, m, g, v[t + 14], 9, 3275163606), g = c(g, y, s, m, v[t + 3], 14, 4107603335), m = c(m, g, y, s, v[t + 8], 20, 1163531501), s = c(s, m, g, y, v[t + 13], 5, 2850285829), y = c(y, s, m, g, v[t + 2], 9, 4243563512), g = c(g, y, s, m, v[t + 7], 14, 1735328473), m = c(m, g, y, s, v[t + 12], 20, 2368359562), s = u(s, m, g, y, v[t + 5], 4, 4294588738), y = u(y, s, m, g, v[t + 8], 11, 2272392833), g = u(g, y, s, m, v[t + 11], 16, 1839030562), m = u(m, g, y, s, v[t + 14], 23, 4259657740), s = u(s, m, g, y, v[t + 1], 4, 2763975236), y = u(y, s, m, g, v[t + 4], 11, 1272893353), g = u(g, y, s, m, v[t + 7], 16, 4139469664), m = u(m, g, y, s, v[t + 10], 23, 3200236656), s = u(s, m, g, y, v[t + 13], 4, 681279174), y = u(y, s, m, g, v[t + 0], 11, 3936430074), g = u(g, y, s, m, v[t + 3], 16, 3572445317), m = u(m, g, y, s, v[t + 6], 23, 76029189), s = u(s, m, g, y, v[t + 9], 4, 3654602809), y = u(y, s, m, g, v[t + 12], 11, 3873151461), g = u(g, y, s, m, v[t + 15], 16, 530742520), m = u(m, g, y, s, v[t + 2], 23, 3299628645), s = f(s, m, g, y, v[t + 0], 6, 4096336452), y = f(y, s, m, g, v[t + 7], 10, 1126891415), g = f(g, y, s, m, v[t + 14], 15, 2878612391), m = f(m, g, y, s, v[t + 5], 21, 4237533241), s = f(s, m, g, y, v[t + 12], 6, 1700485571), y = f(y, s, m, g, v[t + 3], 10, 2399980690), g = f(g, y, s, m, v[t + 10], 15, 4293915773), m = f(m, g, y, s, v[t + 1], 21, 2240044497), s = f(s, m, g, y, v[t + 8], 6, 1873313359), y = f(y, s, m, g, v[t + 15], 10, 4264355552), g = f(g, y, s, m, v[t + 6], 15, 2734768916), m = f(m, g, y, s, v[t + 13], 21, 1309151649), s = f(s, m, g, y, v[t + 4], 6, 4149444226), y = f(y, s, m, g, v[t + 11], 10, 3174756917), g = f(g, y, s, m, v[t + 2], 15, 718787259), m = f(m, g, y, s, v[t + 9], 21, 3951481745), s = r(s, n), m = r(m, i), g = r(g, o), y = r(y, a);
            return (p(s) + p(m) + p(g) + p(y)).toLowerCase()
        }
    })
}), define("newweb/common/requestMoreTrans", ["./md5", "./jquery-1.7", "./utils"], function (e, t) {
    var n = e("./jquery-1.7");
    e("./md5");
    e("./utils");
    var r = null;
    t.asyRequest = function (e) {
        var t = e.i, i = "" + ((new Date).getTime() + parseInt(10 * Math.random(), 10)),
            o = n.md5("fanyideskweb" + t + i + "aNPG!!u6sesA>hBAW1@(-");
        r && r.abort(), r = n.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "/bbk/translate_m.do",
            data: {
                i: e.i,
                client: "fanyideskweb",
                salt: i,
                sign: o,
                tgt: e.tgt,
                from: e.from,
                to: e.to,
                doctype: "json",
                version: "3.0",
                cache: !0
            },
            dataType: "json",
            success: function (t) {
                t && 0 == t.errorCode ? e.success && e.success(t) : e.error && e.error(t)
            },
            error: function (e) {
            }
        })
    }
}), define("newweb/common/select", [], function (e, t) {
    var n = e("./jquery-1.7");
    n.fn.select = function (e) {
        var t = this, r = (e = e || {}).changedCallback || function () {
        };
        t.click(function (e) {
            var t = n(this);
            t.removeClass("error-format"), t.find(".error-message").remove(), n(this).find(".select").is(":visible") ? (n(this).find(".select").slideUp("fast"), n(".item-select").removeClass("top")) : (n(".item-select").removeClass("top"), t.addClass("top"), n(".item-select .select").slideUp(), 0 != t.find(".select").children().length && t.find(".select").slideDown("fast")), e.stopPropagation(), e.cancelBubble = !0
        }), n("body").click(function (e) {
            t.find(".select").slideUp("fast")
        }), t.find(".select").click(function (e) {
            var i = n(e.target), o = i.text();
            if (i.hasClass("group")) return e.stopPropagation(), void(e.cancelBubble = !0);
            "LI" != i[0].tagName && (i = i.parents("li").eq(0)), i.hasClass("selected") || (n(this).find("li").removeClass("selected"), i.addClass("selected"), n(this).slideUp("fast"), n(this).parent().find(".select-text").text(o), n(this).parent().find(".select-input").val(o), r.call(t), e.stopPropagation(), e.cancelBubble = !0)
        })
    }, n.fn.selectValue = function (e) {
        var t = n('li[data-value="' + e + '"]'), r = t.text();
        n(this).find("li").removeClass("selected"), t.addClass("selected"), n(this).parent().find(".select-text").text(r), n(this).parent().find(".select-input").val(e)
    }
}), define("newweb/common/service", ["./utils", "./md5", "./jquery-1.7"], function (e, t) {
    var n = e("./jquery-1.7");
    e("./utils");
    e("./md5");
    var r = "" + ((new Date).getTime() + parseInt(10 * Math.random(), 10));
    t.recordUpdate = function (e) {
        var t = e.i, i = n.md5("fanyideskweb" + t + r + "aNPG!!u6sesA>hBAW1@(-");
        n.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "/bettertranslation",
            data: {
                i: e.i,
                client: "fanyideskweb",
                salt: r,
                sign: i,
                tgt: e.tgt,
                modifiedTgt: e.modifiedTgt,
                from: e.from,
                to: e.to
            },
            success: function (e) {
            },
            error: function (e) {
            }
        })
    }, t.recordMoreResultLog_get = function (e) {
        n.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "/ctlog",
            data: {i: e.i, action: "GET_MORE_TRANSLATION", from: e.from, to: e.to},
            success: function (e) {
            },
            error: function (e) {
            }
        })
    }, t.recordMoreResultLog_choose = function (e) {
        n.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "/ctlog",
            data: {
                i: e.i,
                tgt: e.tgt,
                systemName: e.systemName,
                pos: e.pos,
                action: "SELECT_OTHER_TRANSLATION",
                from: e.from,
                to: e.to
            },
            success: function (e) {
            },
            error: function (e) {
            }
        })
    }
}), define("newweb/common/smartResult", ["./TranslateState", "./log"], function (e, t) {
    var n = e("./jquery-1.7"), r = n(".input__target__dict"), i = n(".dict__relative"), o = e("./TranslateState"),
        a = e("./log"), s = {
            getLink: function (e, t) {
                var n = window.encodeURIComponent(t), r = o.state.type;
                return "zh-CHS2en" != r && "zh-CHS2ja" != r && "zh-CHS2ko" != r ? "javascript:;" : 1 == e ? "http://dict.youdao.com/search?q=" + n + "&keyfrom=fanyi.smartResult" : "javascript:;"
            }
        };
    n(".dict__relative").delegate("a", "click", function () {
        a.clog("RESULT_DICT_ITEM_CLICK")
    }), t.render = function (e, t) {
        var o = t.entries, a = !1;
        if (i.html(""), n(".dict__word--phonetic").html(""), t && o.length > 0) {
            r.find(".dict__word--letters").text(e);
            for (var l = 0; l < o.length; l++) if ("" != o[l]) {
                a = !0;
                var c = s.getLink(1, o[l]), u = "";
                "javascript:;" == c ? (u = "no-link", i.append('<span class="' + u + '">' + o[l].replace(/\r\n/, "") + "</span>")) : i.append('<a target="_blank" href="' + c + '">' + o[l].replace(/\r\n/, "") + "</a>")
            }
            a ? r.show() : r.hide();
            var f = "http://dict.youdao.com/search?q=" + e + "&keyfrom=new-fanyi.smartResult";
            n(".dict__more").attr("href", f), n(".dict__more").show()
        } else r.hide()
    }, t.hide = function () {
        r.hide()
    }
}), define("newweb/common/star", ["./TranslateState"], function (e, t) {
    function n(e) {
        for (var t = 0; t < e; t++) o("#targetStarTip .star-con span").eq(t).addClass("add-star")
    }

    function r(e) {
        !function (e) {
            o.ajax({
                type: "POST",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                url: "/score",
                data: e,
                dataType: "json"
            })
        }({
            src: i.state.originalText, tgt: function (e) {
                return o.trim(e).replace(/\r\n/g, "\n").replace(/\n/g, "\\n")
            }(o("#transTarget").text()), score: e, isSmartResult: !1, transType: function () {
                if ("AUTO" == i.state.type) return "AUTO";
                var e = i.state.type;
                return (e = e.split("2"))[0] + "-" + e[1]
            }()
        })
    }

    var i = e("./TranslateState"), o = e("./jquery-1.7"), a = o("#targetStarTip"), s = "", l = !1;
    o("#targetStar").hover(function () {
        s && (clearTimeout(s), s = ""), a.css("display", "block")
    }, function () {
        s = setTimeout(function () {
            a.hide()
        }, 500)
    }), a.hover(function (e) {
        return s && (clearTimeout(s), s = ""), a.show(), e.stopPropagation(), !1
    }, function (e) {
        return a.hide(), e.stopPropagation(), !1
    }), o("#targetStarTip .star-con span").hover(function () {
        l || n(o(this).index() + 1)
    }, function () {
        l || (o(this).removeClass("add-star"), o(this).siblings().removeClass("add-star"))
    }), o("#targetStarTip .star-con span").on("click", function () {
        var e = o(this).index() + 1;
        l || (n(e), r(e), l = !0)
    }), t.reset = function () {
        l = !1, o("#targetStarTip .star-con span").removeClass("add-star")
    }
}), define("newweb/common/textAuto", [], function (e, t) {
    var n = e("./jquery-1.7");
    t.resizeTextarea = function (e) {
        var t = e.value.length, r = e.offsetWidth;
        if (n(e).data("lastHeight", e.style.height), t !== e.valLength || r !== e.boxWidth) {
            (t < e.valLength || r !== e.boxWidth) && (e.style.height = "0");
            var i = Math.max(40, e.scrollHeight);
            e.style.overflow = "hidden", e.style.height = i + "px", e.valLength = t, e.boxWidth = r
        }
        return !0
    }
}), define("newweb/common/translate", ["./utils", "./voice", "./TranslateState", "./log", "./service", "./md5", "./jquery-1.7", "./smartResult", "./requestMoreTrans"], function (e, t) {
    function n() {
        u("#transTarget").css("height", "auto");
        var e = u("#inputOriginal").height(), t = u("#transTarget").height(), n = Math.max(e, t);
        u("#inputOriginal").css("height", n), u("#transTarget").css("height", n)
    }

    function r(e) {
        for (var t = e.translateResult, n = [], r = 0, i = L(j.state.type) ? " " : "", o = 0; o < t.length; o++) {
            var a = t[o], s = [];
            r += a.length;
            for (var l = 0; l < a.length; l++) {
                var c = a[l].tgt, u = a[l].src;
                c = '<span data-section="' + o + '" data-sentence="' + l + '">' + c + "</span>", l != a.length - 1 && (c += i), u = '<span data-section="' + o + '" data-sentence="' + l + '">' + u + "</span>", s.push(c)
            }
            n.push('<p data-section="' + o + '">' + s.join("") + "</p>")
        }
        y.clog("&sentence_number=" + r + "&type=" + j.state.type);
        var f = n.join("");
        w.html(f), j.state.originalTgt = w.text(), j.state.smallFont ? w.addClass("input__target__text--small") : w.removeClass("input__target__text--small")
    }

    function i() {
        var e = u.trim(b.val());
        e = e.replace(/\n/g, "").replace(/\r\n/g, ""), location.href = "http://fanyi.youdao.com/WebpageTranslate?keyfrom=fanyi.web.index&url=" + encodeURIComponent(e) + "&type=" + u("#customSelectVal").val()
    }

    function o(e) {
        if (0 == u('li[data-value="' + e + '"]').length) u("#langSelect").selectValue("AUTO"); else {
            u("#langSelect").selectValue(e);
            var t = u(".select-text").text();
            j.state.isSelectLan || u(".select-text").text("检测到：" + t)
        }
    }

    function a(e) {
        e && 0 == e.errorCode ? (j.state = u.extend(j.state, e), o(j.state.type), r(e), e.smartResult && e.translateResult.length > 0 && e.translateResult[0].length > 0 ? (y.clog("RESULT_DICT_SHOW"), g.render(e.translateResult[0][0].src, e.smartResult)) : g.hide(), d.showVoice(j.state.type)) : w.html(""), D()
    }

    function s(e, t) {
        if (j.state.originalText = e.i, "first" == e.action) return a(global.translatedJson), void t();
        p && (p.abort(), p = null), p = u.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "translate_o?smartresult=dict&smartresult=rule",
            data: e,
            dataType: "json",
            success: function (e) {
                a(e), t && t()
            },
            error: function (e) {
            }
        })
    }

    function l(e, t) {
        "zh-CHS2en" != j.state.type && "en2zh-CHS" != j.state.type || (u(e).hasClass("show-suggest") ? c() : (u(e).addClass("show-suggest"), N.hide(), v.asyRequest({
            i: t.i,
            client: E,
            tgt: t.tgt,
            from: t.from,
            to: t.to,
            success: function (t) {
                var n = e.position().top, r = e.position().left, i = e.height();
                u("#transTarget .will-update").removeClass("will-update");
                var o = t.translateResult, a = [];
                y.clog("&mul_result_number=" + o.length + "&type=" + j.state.type);
                for (var s = 0; s < o.length; s++) {
                    var l = o[s].tgt, c = o[s].systemName;
                    a.push('<li systemName="' + c + '">' + l + "</li>")
                }
                N.find("ul").html(a.join("")), N.css("top", n + i + 10), N.css("left", r), e.addClass("will-update"), N.show()
            },
            error: function () {
                N.hide()
            }
        })))
    }

    function c() {
        u(".show-suggest").removeClass("show-suggest"), N.hide()
    }

    var u = e("./jquery-1.7"), f = e("./utils"), d = e("./voice"), p = null, h = !1, m = e("./service"),
        g = e("./smartResult");
    e("./jquery.selectRange"), e("./md5");
    var y = e("./log"), v = e("./requestMoreTrans"), b = u("#inputOriginal"), w = u("#transTarget"),
        x = u(".fonts__over"), T = u("#language").val(), _ = "AUTO", C = "AUTO", E = "fanyideskweb", S = "", k = "",
        N = u("#fanyiSuggest"), A = navigator.userAgent.indexOf("Trident") > -1, j = e("./TranslateState"),
        O = "aNPG!!u6sesA>hBAW1@(-", L = function (e) {
            return "zh-CHS2en" === e || "zh-CHS2fr" === e || "zh-CHS2ru" === e || "zh-CHS2pt" === e || "zh-CHS2es" === e
        }, D = function () {
            var e = j.state.getFromTo();
            _ = e[0], C = e[1]
        };
    !function () {
        function e(e, t) {
            for (var n = 0, r = j.state.translateResult, i = 0; i <= e; i++) {
                var o = r[i].length;
                i == e && (o = t);
                for (var a = 0; a < o; a++) n += r[i][a].src.length
            }
            return n + parseInt(e, 10)
        }

        function t(e) {
            var t = e.position().top, n = e.position().left, i = e.width();
            "zh-CHS2en" != j.state.type && "en2zh-CHS" != j.state.type || (u(".fanyi__update__tip").css({
                top: t - u(".fanyi__update__tip").height() - 5,
                left: 10 + n + i / 2
            }), r(), S = setTimeout(function () {
                u(".fanyi__update__tip").fadeIn()
            }, 500))
        }

        function r() {
            S && (clearTimeout(S), S = "", u(".fanyi__update__tip").stop(!0, !0)), u(".fanyi__update__tip").hide()
        }

        function i() {
            k && (clearInterval(k), k = "")
        }

        function o() {
            i(), k = setInterval(function () {
                null == f.getSelectionText() && (i(), h = !1)
            }, 100)
        }

        w.delegate("span", "mouseover", function () {
            if (!h) {
                var n = u(this), r = n.attr("data-section"), i = n.attr("data-sentence"),
                    o = j.state.translateResult[r][i].src, a = e(r, i),
                    s = (a = Math.max(a, b.val().indexOf(o))) + o.length;
                A || b.selectRange({
                    start: a,
                    end: s
                }), t(n), u("#transTarget span.hover").removeClass("hover"), n.addClass("hover"), y.clog("MATCHING_HOVER&type=" + j.state.type)
            }
        }), w.delegate("span", "click", function () {
            if (!h) {
                var t = u(this), n = t.attr("data-section"), r = t.attr("data-sentence"),
                    i = j.state.translateResult[n][r].src, o = j.state.translateResult[n][r].tgt, a = e(n, r),
                    s = (a = Math.max(a, b.val().indexOf(i))) + i.length;
                A || b.selectRange({start: a, end: s}), y.clog("MUL_RESULT_CLICK&type=" + j.state.type);
                var c = j.state.getDetectedFromTo()[0], f = j.state.getDetectedFromTo()[1];
                l(t, {i: i, tgt: o, from: c, to: f}), m.recordMoreResultLog_get({
                    i: i,
                    from: c,
                    to: f
                }), j.state.updateEle = t
            }
        }), u("#fanyiSuggest").delegate("li", "click", function () {
            var e = j.state.updateEle, t = u(this).text(), r = u(this).attr("systemName"), i = u(this).index();
            j.state.isUpdate = !0, e.text(t), n(), e.addClass("updated");
            var o = j.state.updateEle, a = o.attr("data-section"), s = o.attr("data-sentence"),
                l = j.state.translateResult[a][s].src, c = j.state.translateResult[a][s].tgt,
                f = j.state.getDetectedFromTo()[0], d = j.state.getDetectedFromTo()[1];
            m.recordMoreResultLog_choose({i: l, tgt: c, systemName: r, pos: i, from: f, to: d})
        }), u("body").on("click", function (e) {
            var t = u(e.target);
            0 != t.parents("#transTarget").length && "SPAN" == t[0].tagName || (u("#transTarget .will-update").removeClass("will-update"), c())
        }), u(".suggest__title--close").on("click", function () {
            c()
        }), w.delegate("span", "mouseout", function () {
            h || (u("#transTarget span.hover").removeClass("hover"), A || b.selectRange({start: 0, end: 0}), r())
        }), u(".input__target").on("mousedown", function (e) {
            i(), h = !0, u("#transTarget span.hover").removeClass("hover"), r()
        }), u(".input__target").on("mouseup", function (e) {
            null == f.getSelectionText() && (h = !1), o()
        }), u(".suggest__update__btn").on("click", function () {
            y.clog("RESULT_SINGEL_MODIFY_CLICK"), u("#updateResult").trigger("click", [!0])
        })
    }(), t.translate = function (e, t) {
        T = u("#language").val();
        var n = b.val(), r = "" + ((new Date).getTime() + parseInt(10 * Math.random(), 10)),
            o = u.md5(E + n + r + O),
            a = n.length;
        if (D(), x.text(a), a > 5e3) {
            var l = n;
            n = l.substr(0, 5e3), o = u.md5(E + n + r + O);
            var c = l.substr(5e3);
            c = (c = c.trim()).substr(0, 3), u("#inputTargetError").text("有道翻译字数限制为5000字，“" + c + "”及其后面没有被翻译!").show(), x.addClass("fonts__overed")
        } else x.removeClass("fonts__overed"), u("#inputTargetError").hide();
        f.isWeb(n) ? i() : s({
            i: n,
            from: _,
            to: C,
            smartresult: "dict",
            client: E,
            salt: r,
            sign: o,
            doctype: "json",
            version: "2.1",
            keyfrom: "fanyi.web",
            action: e || "FY_BY_DEFAULT",
            typoResult: !1
        }, t)
    }, t.showResult = a
}), define("newweb/common/updateResult", ["./service", "./utils", "./md5", "./jquery-1.7", "./TranslateState", "./log"], function (e, t) {
    var n = e("./jquery-1.7"), r = n("#updateResult"), i = n("#transTarget"), o = n("#transTargetArea"),
        a = n(".download__area"), s = "", l = e("./service"), c = e("./TranslateState"), u = e("./log"), f = "", d = "",
        p = function () {
            for (var e = i.find("p"), t = "", n = 0; n < e.length; n++) t += e.eq(n).text() + "\r\n";
            return t
        }, h = function () {
            var e = n("#language").val(), t = "AUTO";
            -1 != e.indexOf("2") ? (t = e.split("2"), f = t[0], d = t[1]) : (f = "AUTO", d = "AUTO")
        };
    t.init = function () {
        r.click(function (e, t) {
            s = p(), t || u.clog("RESULT_MODIFY_CLICK"), i.hasClass("input__target__text--small") ? o.addClass("input__target__text--small") : o.removeClass("input__target__text--small"), o.css({
                height: i.height(),
                width: i.width()
            }), a.hide(), i.hide(), n(".input__target__bar").css("visibility", "hidden"), o.show(), o.focus(), o.val(s), n(".input__update__suggest").show(), n(".input__target__update").show()
        }), n(".update__cancel").on("click", function () {
            u.clog("MODIFY_CANCEL"), o.hide(), n(".input__update__suggest").hide(), n(".input__target__update").hide(), a.show(), i.show(), n(".input__target__bar").css("visibility", "visible")
        }), n(".update__sure").on("click", function () {
            if (!n(this).hasClass("update-disable")) {
                u.clog("MODIFY_SURE"), n(this).addClass("update-disable"), o.hide(), n(".input__update__suggest").hide(), n(".input__target__update").hide();
                var e = n("<p></p>").text(o.val());
                i.html("").append(e), i.addClass("input__target__text--updated"), a.show(), i.show(), n(".input__target__bar").css("visibility", "visible"), h(), "" !== o.val() && l.recordUpdate({
                    i: c.state.originalText,
                    tgt: c.state.originalTgt,
                    modifiedTgt: o.val(),
                    from: f,
                    to: d
                })
            }
        }), o.on("input", function () {
            "" != n(this).val() ? n(".update__sure").removeClass("update-disable") : n(".update__sure").addClass("update-disable")
        })
    }
}), define("newweb/common/utils", [], function (e) {
    var t = e("./jquery-1.7");
    return {
        utf8_decode: function (e) {
            return unescape(encodeURIComponent(e))
        }, isWeb: function (e) {
            var t = /^((http|https):\/\/)?([1-9]|([1-9][0-9])|((1[0-9]{2})|(2(([0-4][0-9])|(5[0-5])))))\.([0-9]|([1-9][0-9])|((1[0-9]{2})|(2(([0-4][0-9])|(5[0-5])))))\.([0-9]|([1-9][0-9])|((1[0-9]{2})|(2(([0-4][0-9])|(5[0-5])))))\.([0-9]|([1-9][0-9])|((1[0-9]{2})|(2(([0-4][0-9])|(5[0-5])))))(\:\d+)?(\/[^\s]+)?(\/)?$/;
            return !!/^((http|https):\/\/)?([\w\d\.]+)(\.)(com|edu|gov|int|mil|net|org|biz|info|pro|name|museum|coop|aero|xxx|idv|al|dz|af|ar|ae|aw|om|az|eg|et|ie|ee|ad|ao|ai|ag|at|au|mo|bb|pg|bs|pk|py|ps|bh|pa|br|by|bm|bg|mp|bj|be|is|pr|ba|pl|bo|bz|bw|bt|bf|bi|bv|kp|gq|dk|de|tl|tp|tg|dm|do|ru|ec|er|fr|fo|pf|gf|tf|va|ph|fj|fi|cv|fk|gm|cg|cd|co|cr|gg|gd|gl|ge|cu|gp|gu|gy|kz|ht|kr|nl|an|hm|hn|ki|dj|kg|gn|gw|ca|gh|ga|kh|cz|zw|cm|qa|ky|km|ci|kw|cc|hr|ke|ck|lv|ls|la|lb|lt|lr|ly|li|re|lu|rw|ro|mg|im|mv|mt|mw|my|ml|mk|mh|mq|yt|mu|mr|us|um|as|vi|mn|ms|bd|pe|fm|mm|md|ma|mc|mz|mx|nr|np|ni|ne|ng|nu|no|nf|na|za|zq|aq|gs|eu|pw|pn|pt|jp|se|ch|sv|ws|yu|sl|sn|cy|sc|sa|cx|st|sh|kn|lc|sm|pm|vc|lk|sk|si|sj|sz|sd|sr|sb|so|tj|tw|th|tz|to|tc|tt|tn|tv|tr|tm|tk|wf|vu|gt|ve|bn|ug|ua|uy|uz|es|eh|gr|hk|sg|nc|nz|hu|sy|jm|am|ac|ye|iq|ir|il|it|in|id|uk|vg|io|jo|vn|zm|je|td|gi|cl|cf|cn)(\/[^\s]+)?(\/)?$/.exec(e.toLowerCase()) || !!t.exec(e.toLowerCase())
        }, addToFav: function () {
            t.browser.msie ? window.external.addFavorite("http://fanyi.youdao.com/?keyfrom=favorite", "有道翻译 - 免费在线翻译") : alert("请使用Ctrl + D 手动加入收藏")
        }, cookie: function (e, t, n) {
            if (void 0 === t) return function (e) {
                var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
                return t ? decodeURIComponent(t[2]) : null
            }(e);
            !function (e, t, n) {
                n = n || 30;
                var r = new Date;
                r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), document.cookie = e + "=" + encodeURIComponent(t) + ";expires=" + r.toGMTString()
            }(e, t, n)
        }, timerProxy: function () {
            var e = function () {
                window.timerProxyTimeout && window.clearTimeout(window.timerProxyTimeout)
            };
            return function n(r, i) {
                this.timerProxy.clearProxy = n.clearProxy = e, e(), window.timerProxyTimeout = window.setTimeout(function () {
                    t.isFunction(r) && r()
                }, i)
            }
        }(), enEight: function (e) {
            var t, n = new Array;
            for (t = 0; t < e.length; t++) n += "\\" + e.charCodeAt(t).toString(8);
            return e = n
        }, deEight: function (e) {
            var t, n = new Array, r = e.split("\\");
            if (1 == r.length) return r[0];
            for (t = 1; t < r.length; t++) n += String.fromCharCode(parseInt(r[t], 8));
            return e = n
        }, getSelectionText: function () {
            var e = null;
            return window.getSelection && (e = window.getSelection().toString()), e || (document.selection ? "" == (e = document.selection.createRange().text) ? null : e : null)
        }, isSelectInTarget: function (e, t) {
            return !1
        }, storage: function (e, t) {
            return window.localStorage ? function (e, t) {
                var n = window.localStorage;
                return void 0 === t ? n.getItem(e) : void 0 !== e && void 0 !== t ? (n.setItem(e, t), t) : void 0
            }(e, t) : document.documentElement.addBehavior ? function (e, t) {
                var n = document.documentElement;
                return n.addBehavior("#default#userData"), void 0 === t ? (n.load("fanyiweb2"), n.getAttribute(e)) : void 0 !== e && void 0 !== t ? (n.setAttribute(e, t), n.save("fanyiweb2"), t) : void 0
            }(e, t) : void 0
        }
    }
}), define("newweb/common/voice", ["./TranslateState", "./log"], function (e, t) {
    var n = e("./jquery-1.7"), r = e("./TranslateState"), i = e("./log"), o = n("#transTarget"),
        a = n("#inputOriginal"), s = n("#targetSpeaker"),
        l = (n("#originalSpeaker"), !!document.createElement("audio").canPlayType), c = n("#playVoice")[0],
        u = function (e) {
            return -1 != navigator.appName.indexOf("Microsoft") ? window[e] : document[e]
        }, f = function () {
            n("#targetSpeaker").click(function () {
                if (!n(this).hasClass("speaker-disable")) {
                    var e = r.state.type, t = o.text();
                    return i.clog("RESULT_PRONOUNCE_CLICK"), m(h(t, d[e], "speaker-target")), n(this).blur(), !1
                }
            }), n("#originalSpeaker").click(function () {
                if (!n(this).hasClass("speaker-disable")) {
                    var e = r.state.type, t = a.val();
                    return m(h(t, p[e], "speaker-original")), n(this).blur(), !1
                }
            })
        }, d = {"zh-CHS2en": "eng", "zh-CHS2ja": "jap", "zh-CHS2ko": "ko", "zh-CHS2fr": "fr"},
        p = {"en2zh-CHS": "eng", "ja2zh-CHS": "jap", "ko2zh-CHS": "ko", "fr2zh-CHS": "fr"}, h = function (e, t, n) {
            var n = n || "fanyi.newweb.index";
            return "http://tts.youdao.com/fanyivoice?word=" + encodeURIComponent(e) + "&le=" + t + "&keyfrom=" + n
        }, m = function (e) {
            l && "" != c.canPlayType("audio/mpeg") && e ? (c.src = e, c.load(), c.play()) : e && u("fanyivoice") && !0 === jsReady && u("fanyivoice").playVoice(e)
        }, g = function () {
            return o.text().length
        };
    t.stopVoice = function () {
        u("fanyivoice") && u("fanyivoice").stopVoice && u("fanyivoice").stopVoice()
    }, t.showVoice = function (e) {
        d[e] && g() <= 300 ? (s.removeClass("speaker-disable").show(), s.find(".tips__text--short").text("朗读")) : d[e] && g() > 300 ? (s.addClass("speaker-disable").show(), s.find(".tips__text--short").text("文本过长，朗读关闭")) : s.hide()
    }, t.init = function () {
        window.swfReady = !1, window.jsReady = !1, window.isContainerReady = function () {
            return jsReady
        }, window.setSWFIsReady = function () {
            swfReady = !0
        }, window.setJSReady = function () {
            jsReady = !0
        }, setTimeout(function () {
            setJSReady(), n('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="fanyivoice" width="0" height="0" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"><param name="movie" value="scripts/fanyivoice.swf?onload=swfLoad&time=' + (new Date).getTime() + '"/><param name="quality" value="high"/><param name="bgcolor" value="#869ca7"/><param name="allowScriptAccess" value="sameDomain"/><embed src="scripts/fanyivoice.swf?onload=swfLoad&time=' + (new Date).getTime() + '" quality="high" bgcolor="#869ca7" width="0" height="0" name="fanyivoice" align="middle" play="true" loop="false" quality="high" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>').appendTo("body"), f()
        }, 200)
    }
}), define("newweb/index", ["./common/log", "./common/hotLink", "./common/download", "./common/utils", "./common/voice", "./common/TranslateState", "./operations", "./langSelect", "./common/star", "./common/select", "./common/manTranslate", "./input", "./common/textAuto", "./common/translate", "./common/service", "./common/md5", "./common/jquery-1.7", "./common/smartResult", "./common/requestMoreTrans", "./common/copy", "./common/ZeroClipboard", "./common/updateResult"], function (e) {
    e("./common/jquery-1.7")(function () {
        e("./common/log").init(), e("./common/hotLink").init(), e("./common/download").init(), e("./common/voice").init(), e("./common/TranslateState"), e("./operations").init(), e("./common/manTranslate").init(), e("./input"), e("./common/star"), e("./common/copy").init(), e("./common/updateResult").init()
    })
}), define("newweb/input", ["./common/textAuto", "./common/translate", "./common/utils", "./common/voice", "./common/TranslateState", "./common/log", "./common/service", "./common/md5", "./common/jquery-1.7", "./common/smartResult", "./common/requestMoreTrans", "./common/star"], function (e, t) {
    function n() {
        var e = u.val(), t = 0, n = 0, r = !1, i = !0;
        return f.text(e), t = f.height(), n = f[0].scrollHeight, i = "" == e, r = n - 2 > t, [r, i]
    }

    function r() {
        l.browser.msie && "10.0" == l.browser.version && u.css("height", "auto"), l("#transTarget").css("height", "auto");
        var e = l("#inputOriginal").height(), t = l("#transTarget").height(), n = Math.max(e, t);
        if (l("#inputOriginal").css("height", n), l("#transTarget").css("height", n), l.browser.msie && "10.0" == l.browser.version) {
            var r = u.val();
            u.val(""), u.val(r)
        }
    }

    function i() {
        var e = l(".inside__products")[0].offsetTop, t = l(window).height();
        e + 100 >= t ? l(".download__area").addClass("download__area--rengong") : l(".download__area").removeClass("download__area--rengong")
    }

    function o() {
        l(".input__original__bar").css("visibility", "visible"), l(".input__target__bar").css("visibility", "visible")
    }

    function a() {
        l(".input__original__bar").css("visibility", "hidden"), l(".input__target__bar").css("visibility", "hidden")
    }

    function s(e) {
        var t = u, s = u.val(), f = n();
        u[0].scrollTop = 0, f[0] ? (t.addClass("input__small__font"), t.css({
            "font-size": "14px",
            "line-height": "18px"
        }), h.state.smallFont = !0) : (t.removeClass("input__small__font"), t.css({
            "font-size": "24px",
            "line-height": "30px"
        }), h.state.smallFont = !1), f[1] ? c.hide() : c.show(), "" != l.trim(s) ? (o(), d.resizeTextarea(u[0]), l("#transTarget").removeClass("input__target__text--updated"), p.translate(e, function () {
            r()
        }), v.reset()) : (a(), m.showVoice("AUTO"), l("#transTarget").html(""), l("#transTarget").css("height", "auto"), u.css("height", "auto"), g.hide()), i()
    }

    var l = e("./common/jquery-1.7"), c = l("#inputDelete"), u = l("#inputOriginal"), f = l("#inputOriginalCopy"),
        d = e("./common/textAuto"), p = e("./common/translate"), h = e("./common/TranslateState"),
        m = e("./common/voice"), g = e("./common/smartResult"), y = e("./common/log"), v = e("./common/star"), b = "";
    u.on("input propertychange", function (e, t) {
        b && (clearTimeout(b), b = ""), b = setTimeout(function () {
            t || __rl_event("newweb_translate_text"), s("FY_BY_REALTIME")
        }, 500)
    }), u.on("focus", function () {
        l(".input__original .fanyi__input__bg").addClass("fanyi__input__bg--focus")
    }), u.on("blur", function () {
        l(".input__original .fanyi__input__bg").removeClass("fanyi__input__bg--focus")
    }), l("#transTargetArea").on("focus", function () {
        l(".input__target .fanyi__input__bg").addClass("fanyi__input__bg--focus")
    }), l("#transTargetArea").on("blur", function () {
        l(".input__target .fanyi__input__bg").removeClass("fanyi__input__bg--focus")
    }), c.on("click", function () {
        u.val(""), u.trigger("input", [!0]), u.css({
            height: "auto",
            overflow: "auto"
        }), u[0].valLength = 0, l("#transTarget").html(""), l("#transTarget").css("height", "auto"), u.focus(), l("#inputTargetError").hide(), y.clog("CLEAN_CLICK", "")
    }), l("#transMachine").on("click", function (e, t, n) {
        t ? (s(n), __rl_event(n)) : (y.clog("MT_BUTTON_CLICK", ""), __rl_event("translate_text_click"), s("FY_BY_CLICKBUTTION"))
    });
    var w = function () {
        s("first")
    }, x = function (e) {
        for (var t = e.translateResult, n = t.length, r = "", i = 0; i < n; i++) {
            for (var o = t[i].length, a = 0; a < o; a++) r += t[i][a].src;
            i != n - 1 && (r += "\r\n")
        }
        l("#inputOriginal").val(r)
    };
    u.focus(), n()[1] ? c.hide() : c.show(), function () {
        var e = {
            AUTO: "AUTO",
            EN2ZH_CN: "en2zh-CHS",
            ZH_CN2EN: "zh-CHS2en",
            JA2ZH_CN: "ja2zh-CHS",
            ZH_CN2JA: "zh-CHS2ja",
            FR2ZH_CN: "fr2zh-CHS",
            ZH_CN2FR: "zh-CHS2fr",
            KR2ZH_CN: "ko2zh-CHS",
            ZH_CN2KR: "zh-CHS2ko",
            RU2ZH_CN: "ru2zh-CHS",
            ZH_CN2RU: "zh-CHS2ru",
            SP2ZH_CN: "es2zh-CHS",
            ZH_CN2SP: "zh-CHS2es",
            PT2ZH_CN: "pt2zh-CHS",
            ZH_CN2PT: "zh-CHS2pt"
        };
        global && global.translatedJson && global.translatedJson.translateResult && global.translatedJson.translateResult.length > 0 && (global.translatedJson.type = e[global.translatedJson.type] || global.translatedJson.type, x(global.translatedJson), w())
    }()
}), define("newweb/langSelect", ["./common/TranslateState", "./common/star", "./common/select", "./common/log"], function (e, t) {
    var n = e("./common/jquery-1.7"), r = e("./common/TranslateState"), i = e("./common/star");
    e("./common/select");
    var o = e("./common/log");
    t.init = function () {
        n("#langSelect").select({
            changedCallback: function () {
                var e = n("#langSelect .selected").attr("data-value");
                n("#language").val(e), r.state.isSelectLan = "AUTO" != e, r.state.type = e, "" != n("#inputOriginal").val() && n("#transMachine").trigger("click", [!0, "lan-select"]), i.reset(), o.clog("LAN_SWITCH_CLICK", "")
            }
        })
    }
}), define("newweb/operations", ["./langSelect", "./common/TranslateState", "./common/star", "./common/select", "./common/log", "./common/utils"], function (e, t) {
    function n() {
        "ON" === f.cookie("YOUDAO_FANYI_SELECTOR") ? (c(".fanyi__operations--underline").addClass("fanyi__operations--underline--checked"), YoudaoSelector.Config.select = "on") : (c(".fanyi__operations--underline").removeClass("fanyi__operations--underline--checked"), YoudaoSelector.Config.select = "off"), c(".fanyi__operations--underline").on("click", function () {
            var e = c(this);
            e.hasClass("fanyi__operations--underline--checked") ? (e.removeClass("fanyi__operations--underline--checked"), YoudaoSelector.Config.select = "off", f.cookie("YOUDAO_FANYI_SELECTOR", "OFF"), d.clog("SELECT_OFF")) : (e.addClass("fanyi__operations--underline--checked"), YoudaoSelector.Config.select = "on", f.cookie("YOUDAO_FANYI_SELECTOR", "ON"), d.clog("SELECT_ON"))
        })
    }

    function r() {
        c(".side__nav__backtop").on("click", function () {
            c("html, body").animate({scrollTop: 0}, 100, "swing", function () {
                c(".side__nav__backtop").hide()
            })
        }), c(window).on("scroll", function () {
            c(document).scrollTop() > 0 ? c(".side__nav__backtop").css("display", "block") : c(".side__nav__backtop").hide()
        })
    }

    function i() {
        if (c(".login-link").length > 0) {
            var e = c(".login-link").attr("href");
            e += window.encodeURIComponent(window.location.href), c(".login-link").attr("href", e)
        }
    }

    function o() {
        c(".user-name").hover(function () {
            p && (clearTimeout(p), p = ""), c(".account-cover").show()
        }, function () {
            p = setTimeout(function () {
                c(".account-cover").hide()
            }, 500)
        }), c(".account-cover").hover(function () {
            p && (clearTimeout(p), p = "")
        }, function () {
            c(".account-cover").hide()
        })
    }

    function a() {
        c(".download__area--fanyiguan").hover(function () {
            c(".fanyiguan-code").show()
        }, function () {
            c(".fanyiguan-code").hide()
        })
    }

    function s() {
        var e = c(".fanyi__nav").outerHeight(!0), t = c(".fanyi"), n = c(".fanyi__footer").outerHeight(!0),
            r = c(window).height();
        t.css("min-height", r - n - e), c(".fanyi__footer").show()
    }

    function l() {
        var e = function () {
            c(".nav__rengong").hover(function () {
                c(".rengong__guide").show()
            }, function () {
                c(".rengong__guide").hide()
            })
        };
        "1" !== f.storage("rengongEntrance") ? (f.storage("rengongEntrance", "1"), c(".rengong__guide").show()) : (c(".rengong__guide").addClass("rengong__guide--nobtn"), c(".rengong__guide").hide(), e()), c(".i-know").on("click", function () {
            c(".rengong__guide").hide(), f.storage("rengongEntrance", "1"), c(".rengong__guide").addClass("rengong__guide--nobtn"), e()
        })
    }

    var c = e("./common/jquery-1.7"), u = e("./langSelect"), f = e("./common/utils"), d = e("./common/log"), p = "";
    t.init = function () {
        var e = "";
        s(), u.init(), n(), r(), i(), o(), a(), l(), c(window).on("resize", function () {
            e && (clearTimeout(e), e = ""), e = setTimeout(function () {
                s()
            }, 200)
        })
    }
}), seajs.config({debug: !1}), seajs.use("newweb/index");