!(function (e, r) {
  if ("object" === typeof exports && "object" === typeof module)
    module.exports = r();
  else if ("function" === typeof define && define.amd) define([], r);
  else {
    var n = r();
    for (var t in n) ("object" === typeof exports ? exports : e)[t] = n[t];
  }
})(self, function () {
  return (function () {
    var e = {
        757: function (e, r, n) {
          e.exports = n(671);
        },
        671: function (e) {
          "use strict";
          e.exports = require("regenerator-runtime");
        },
      },
      r = {};
    function n(t) {
      var o = r[t];
      if (void 0 !== o) return o.exports;
      var i = (r[t] = { exports: {} });
      return e[t](i, i.exports, n), i.exports;
    }
    (n.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(r, { a: r }), r;
    }),
      (n.d = function (e, r) {
        for (var t in r)
          n.o(r, t) &&
            !n.o(e, t) &&
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
      }),
      (n.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
      }),
      (n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var t = {};
    return (
      (function () {
        "use strict";
        function e(e, r, n, t, o, i, a) {
          try {
            var u = e[i](a),
              c = u.value;
          } catch (l) {
            return void n(l);
          }
          u.done ? r(c) : Promise.resolve(c).then(t, o);
        }
        function r(r) {
          return function () {
            var n = this,
              t = arguments;
            return new Promise(function (o, i) {
              var a = r.apply(n, t);
              function u(r) {
                e(a, o, i, u, c, "next", r);
              }
              function c(r) {
                e(a, o, i, u, c, "throw", r);
              }
              u(void 0);
            });
          };
        }
        function o(e, r) {
          (null == r || r > e.length) && (r = e.length);
          for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
          return t;
        }
        function i(e, r) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, r) {
              var n =
                null == e
                  ? null
                  : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var t,
                  o,
                  i = [],
                  a = !0,
                  u = !1;
                try {
                  for (
                    n = n.call(e);
                    !(a = (t = n.next()).done) &&
                    (i.push(t.value), !r || i.length !== r);
                    a = !0
                  );
                } catch (c) {
                  (u = !0), (o = c);
                } finally {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (u) throw o;
                  }
                }
                return i;
              }
            })(e, r) ||
            (function (e, r) {
              if (e) {
                if ("string" === typeof e) return o(e, r);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? o(e, r)
                    : void 0
                );
              }
            })(e, r) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        n.r(t),
          n.d(t, {
            default: function () {
              return ne;
            },
          });
        var a = n(757),
          u = n.n(a),
          c = require("antd"),
          l = require("react");
        function s(e, r, n) {
          return (
            r in e
              ? Object.defineProperty(e, r, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[r] = n),
            e
          );
        }
        function f(e, r) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(e);
            r &&
              (t = t.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable;
              })),
              n.push.apply(n, t);
          }
          return n;
        }
        function d(e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? f(Object(n), !0).forEach(function (r) {
                  s(e, r, n[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(n, r)
                  );
                });
          }
          return e;
        }
        function p(e, r) {
          if (null == e) return {};
          var n,
            t,
            o = (function (e, r) {
              if (null == e) return {};
              var n,
                t,
                o = {},
                i = Object.keys(e);
              for (t = 0; t < i.length; t++)
                (n = i[t]), r.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, r);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (t = 0; t < i.length; t++)
              (n = i[t]),
                r.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (o[n] = e[n]));
          }
          return o;
        }
        var b = require("antd/lib/input"),
          v = n.n(b),
          m = require("react/jsx-runtime");
        function x(e) {
          var r = Object.assign({}, e);
          return (0, m.jsx)(v(), d({}, r));
        }
        var h = require("antd/lib/input-number"),
          y = n.n(h);
        var j = require("antd/lib/checkbox"),
          g = n.n(j),
          O = ["label"];
        function P(e) {
          var r = e.innerForm,
            n = e.form;
          return (0, m.jsx)(m.Fragment, { children: Q(r, n) });
        }
        var w = ["form", "options", "direction"];
        var F = require("antd/lib/date-picker"),
          S = n.n(F),
          k = S().RangePicker;
        var q = require("antd/lib/cascader"),
          I = n.n(q);
        var C = require("antd/lib/select"),
          D = n.n(C),
          V = ["options", "optionsName", "optionsKey"],
          A = D().Option,
          E = function (e) {
            var r = e.options,
              n = e.optionsName,
              t = void 0 === n ? "label" : n,
              o = e.optionsKey,
              i = void 0 === o ? "value" : o,
              a = p(e, V);
            return (0, m.jsx)(
              D(),
              d(
                d({}, a),
                {},
                {
                  optionLabelProp: "label",
                  optionFilterProp: "children",
                  getPopupContainer: function (e) {
                    return e ? e.parentNode : document.body;
                  },
                  children: r.map(function (e) {
                    return (0,
                    m.jsx)(A, { disabled: Boolean(e.disabled), label: e[t], value: e[i], children: e[t] }, e[i]);
                  }),
                }
              )
            );
          },
          T = ["form", "options", "direction"];
        var z = require("antd/lib/upload"),
          N = n.n(z),
          G = require("antd/lib/button"),
          L = n.n(G),
          M = require("@ant-design/icons/UploadOutlined"),
          U = n.n(M),
          _ = ["name", "form", "maxLength", "text", "disabled"];
        var R = require("lodash/get"),
          B = n.n(R),
          K = require("lodash/isFunction"),
          $ = n.n(K),
          H = [
            "name",
            "type",
            "extraProps",
            "prefixIcon",
            "suffixIcon",
            "calIsVisible",
            "calIsDisabled",
          ],
          J = {
            upload: function (e) {
              var r = e.name,
                n = e.form,
                t = e.maxLength,
                o = void 0 === t ? 1 : t,
                i = e.text,
                a = e.disabled,
                u = p(e, _),
                c = (n.getFieldValue(r) || []).length >= o || a;
              return (0, m.jsx)(
                N(),
                d(
                  d({}, u),
                  {},
                  {
                    beforeUpload: function () {
                      return !1;
                    },
                    children: (0, m.jsx)(L(), {
                      disabled: c,
                      icon: (0, m.jsx)(U(), {}),
                      children: i,
                    }),
                  }
                )
              );
            },
            range: function (e) {
              var r = Object.assign({}, e);
              return (0, m.jsx)(k, d({}, r));
            },
            date: function (e) {
              var r = Object.assign({}, e);
              return (0, m.jsx)(S(), d({}, r));
            },
            number: function (e) {
              var r = Object.assign({}, e);
              return (0, m.jsx)(y(), d({}, r));
            },
            textarea: function (e) {
              var r = Object.assign({}, e);
              return (0, m.jsx)(v().TextArea, d({}, r));
            },
            text: x,
            checkbox: function (e) {
              var r = e.label,
                n = p(e, O);
              return (0, m.jsx)(g(), d(d({}, n), {}, { children: r }));
            },
            checkboxGroup: function (e) {
              var r = e.form,
                n = e.options,
                t = e.direction,
                o = void 0 === t ? "horizontal" : t,
                i = p(e, w);
              return (0, m.jsx)(
                c.Checkbox.Group,
                d(
                  d({}, i),
                  {},
                  {
                    children: (0, m.jsx)(c.Space, {
                      direction: o,
                      children: n.map(function (e, n) {
                        var t = e.direction,
                          o = void 0 === t ? "horizontal" : t,
                          i = e.value,
                          a = e.label,
                          u = e.suffix;
                        return (0,
                        m.jsxs)(c.Space, { direction: o, children: [(0, m.jsx)(c.Checkbox, { value: i, children: a }), u ? (0, m.jsx)(P, { form: r, innerForm: u }) : null] }, n);
                      }),
                    }),
                  }
                )
              );
            },
            complex: P,
            select: E,
            radioGroup: function (e) {
              var r = e.form,
                n = e.options,
                t = e.direction,
                o = void 0 === t ? "horizontal" : t,
                i = p(e, T);
              return (0, m.jsx)(
                c.Radio.Group,
                d(
                  d({}, i),
                  {},
                  {
                    children: (0, m.jsx)(c.Space, {
                      direction: o,
                      children: n.map(function (e, n) {
                        var t = e.direction,
                          o = void 0 === t ? "horizontal" : t,
                          i = e.value,
                          a = e.label,
                          u = e.suffix;
                        return (0,
                        m.jsxs)(c.Space, { direction: o, children: [(0, m.jsx)(c.Radio, { value: i, children: a }), u ? (0, m.jsx)(P, { form: r, innerForm: u }) : null] }, n);
                      }),
                    }),
                  }
                )
              );
            },
            cascader: function (e) {
              var r = Object.assign({}, e);
              return (0, m.jsx)(I(), d({}, r));
            },
          },
          Q = function (e, r) {
            return e.map(function (e, n) {
              var t = e.name,
                o = e.type,
                i = e.extraProps,
                a = void 0 === i ? {} : i,
                u = e.prefixIcon,
                l = e.suffixIcon,
                s = e.calIsVisible,
                f =
                  void 0 === s
                    ? function () {
                        return !0;
                      }
                    : s,
                b = e.calIsDisabled,
                v =
                  void 0 === b
                    ? function () {
                        return !1;
                      }
                    : b,
                h = p(e, H),
                y = c.Form.Item,
                j = d(
                  {
                    name: t,
                    type: o,
                    valuePropName: "checkbox" === o ? "checked" : "value",
                  },
                  h
                );
              "upload" === o &&
                ((j.valuePropName = "devil-file"),
                (j.getValueFromEvent = function (e) {
                  return e.fileList;
                }));
              var g = B()(J, o, x);
              return (0, m.jsx)(
                c.Form.Item,
                {
                  shouldUpdate: !0,
                  noStyle: !0,
                  children: function (e) {
                    var n = e.getFieldValue;
                    return f(n)
                      ? (0, m.jsxs)(m.Fragment, {
                          children: [
                            $()(u) ? u(r) : u,
                            (0, m.jsx)(
                              y,
                              d(
                                d({}, j),
                                {},
                                {
                                  children: (0, m.jsx)(
                                    g,
                                    d({ form: r, name: t, disabled: v(n) }, a)
                                  ),
                                }
                              )
                            ),
                            $()(l) ? l(r) : l,
                          ],
                        })
                      : null;
                  },
                },
                (t || n).toString()
              );
            });
          },
          W = require("lodash/set"),
          X = n.n(W),
          Y = require("lodash/omit"),
          Z = n.n(Y),
          ee = require("lodash/cloneDeep"),
          re = n.n(ee),
          ne = function (e) {
            var n = e.saveText,
              t = e.layout,
              o = void 0 === t ? "horizontal" : t,
              a = e.wrapperCol,
              s = void 0 === a ? {} : a,
              f = e.labelCol,
              d = void 0 === f ? {} : f,
              p = e.initialValues,
              b = e.onSubmit,
              v = e.fields,
              x = e.transformSubmitDataConfig,
              h = void 0 === x ? [] : x,
              y = i(c.Form.useForm(), 1)[0],
              j = i((0, l.useState)([]), 2),
              g = j[0],
              O = j[1],
              P = i((0, l.useState)(!1), 2),
              w = P[0],
              F = P[1];
            (0, l.useEffect)(
              function () {
                O(v);
              },
              [v]
            );
            var S = (0, l.useCallback)(
                (function () {
                  var e = r(
                    u().mark(function e(r) {
                      var n, t, o, i, a, c, l, s, f, d, p;
                      return u().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                n = re()(h);
                              case 1:
                                if (!(n.length > 0)) {
                                  e.next = 19;
                                  break;
                                }
                                return (
                                  (t = n.shift()),
                                  (o = t.from),
                                  (i = t.isDelete),
                                  (a = void 0 !== i && i),
                                  (c = t.to),
                                  (l = t.format),
                                  (s = B()(r, o)),
                                  (f = B()(r, c)),
                                  (e.prev = 5),
                                  (e.next = 8),
                                  l(s, f)
                                );
                              case 8:
                                (d = e.sent),
                                  X()(r, c, d),
                                  a && (r = Z()(r, o)),
                                  (e.next = 17);
                                break;
                              case 13:
                                throw (
                                  ((e.prev = 13),
                                  (e.t0 = e.catch(5)),
                                  (p =
                                    e.t0.message ||
                                    e.t0.msg ||
                                    "\u6570\u636e\u8f6c\u5316\u5931\u8d25"),
                                  new Error(p))
                                );
                              case 17:
                                e.next = 1;
                                break;
                              case 19:
                                return e.abrupt("return", r);
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[5, 13]]
                      );
                    })
                  );
                  return function (r) {
                    return e.apply(this, arguments);
                  };
                })(),
                [h]
              ),
              k = (0, l.useCallback)(
                (function () {
                  var e = r(
                    u().mark(function e(r) {
                      var n;
                      return u().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return F(!0), (e.prev = 1), (e.next = 4), S(r);
                              case 4:
                                (n = e.sent),
                                  b(
                                    n,
                                    function (e) {
                                      var r = y.setFieldsValue,
                                        n = y.getFieldsValue;
                                      F(!1), r(n()), e && c.message.success(e);
                                    },
                                    function () {
                                      F(!1);
                                    }
                                  ),
                                  (e.next = 12);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(1)),
                                  c.message.error(e.t0.message),
                                  F(!1);
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 8]]
                      );
                    })
                  );
                  return function (r) {
                    return e.apply(this, arguments);
                  };
                })(),
                [y, b, S]
              ),
              q = (0, l.useCallback)(
                function (e) {
                  var r = e.errorFields;
                  y.scrollToField(r[0].name);
                },
                [y]
              );
            return (0, m.jsxs)(c.Form, {
              layout: o,
              form: y,
              onFinish: k,
              onFinishFailed: q,
              initialValues: p,
              wrapperCol: s,
              labelCol: d,
              name: "basic",
              children: [
                Q(g, y),
                (0, m.jsx)(c.Form.Item, {
                  label: " ",
                  colon: !1,
                  children: (0, m.jsx)(m.Fragment, {
                    children:
                      n &&
                      (0, m.jsx)(c.Button, {
                        loading: w,
                        type: "primary",
                        htmlType: "submit",
                        children: n,
                      }),
                  }),
                }),
              ],
            });
          };
      })(),
      t
    );
  })();
});
//# sourceMappingURL=index.js.map
