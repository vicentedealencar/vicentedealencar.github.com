;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['0556'],
  {
    '/a9y': function(e, t, n) {
      'use strict'
      var a = n('KI45'),
        r = a(n('/HRN')),
        l = a(n('WaGi')),
        i = a(n('ZDA2')),
        o = a(n('/+P4')),
        d = a(n('N9n2')),
        u = function(e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var s = u(n('q1tI')),
        c = u(n('PgRs')),
        f = {
          400: 'Bad Request',
          404: 'This page could not be found',
          500: 'Internal Server Error',
          501: 'Not Implemented',
        },
        p = (function(e) {
          function t() {
            return (
              (0, r.default)(this, t),
              (0, i.default)(this, (0, o.default)(t).apply(this, arguments))
            )
          }
          return (
            (0, d.default)(t, e),
            (0, l.default)(
              t,
              [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props.statusCode,
                      t = f[e] || 'An unexpected error has occurred'
                    return s.default.createElement(
                      'div',
                      { style: g.error },
                      s.default.createElement(
                        c.default,
                        null,
                        s.default.createElement('title', null, e, ': ', t),
                      ),
                      s.default.createElement(
                        'div',
                        null,
                        s.default.createElement('style', {
                          dangerouslySetInnerHTML: {
                            __html: 'body { margin: 0 }',
                          },
                        }),
                        e
                          ? s.default.createElement('h1', { style: g.h1 }, e)
                          : null,
                        s.default.createElement(
                          'div',
                          { style: g.desc },
                          s.default.createElement(
                            'h2',
                            { style: g.h2 },
                            t,
                            '.',
                          ),
                        ),
                      ),
                    )
                  },
                },
              ],
              [
                {
                  key: 'getInitialProps',
                  value: function(e) {
                    var t = e.res,
                      n = e.err
                    return {
                      statusCode:
                        t && t.statusCode
                          ? t.statusCode
                          : n
                          ? n.statusCode
                          : 404,
                    }
                  },
                },
              ],
            ),
            t
          )
        })(s.default.Component)
      ;(p.displayName = 'ErrorPage'), (t.default = p)
      var g = {
        error: {
          color: '#000',
          background: '#fff',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
          height: '100vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        desc: {
          display: 'inline-block',
          textAlign: 'left',
          lineHeight: '49px',
          height: '49px',
          verticalAlign: 'middle',
        },
        h1: {
          display: 'inline-block',
          borderRight: '1px solid rgba(0, 0, 0,.3)',
          margin: 0,
          marginRight: '20px',
          padding: '10px 23px 10px 0',
          fontSize: '24px',
          fontWeight: 500,
          verticalAlign: 'top',
        },
        h2: {
          fontSize: '14px',
          fontWeight: 'normal',
          lineHeight: 'inherit',
          margin: 0,
          padding: 0,
        },
      }
    },
    '04ac': function(e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_error',
        function() {
          var e = n('/a9y')
          return { page: e.default || e }
        },
      ])
    },
    PgRs: function(e, t, n) {
      e.exports = n('m/Pd')
    },
  },
  [['04ac', '5d41', '9da1']],
])
