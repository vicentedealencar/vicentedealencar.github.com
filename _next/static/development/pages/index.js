;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['static\\development\\pages\\index.js'],
  {
    /***/ './node_modules/@babel/runtime-corejs2/core-js/array/from.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/array/from */ './node_modules/core-js/library/fn/array/from.js',
        )

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/core-js/array/is-array.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/array/is-array */ './node_modules/core-js/library/fn/array/is-array.js',
        )

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/core-js/is-iterable.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/is-iterable */ './node_modules/core-js/library/fn/is-iterable.js',
        )

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/core-js/object/create.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/create */ './node_modules/core-js/library/fn/object/create.js',
        )

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/core-js/object/define-property.js':
      /*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/define-property */ './node_modules/core-js/library/fn/object/define-property.js',
        )

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js':
      /*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/get-prototype-of */ './node_modules/core-js/library/fn/object/get-prototype-of.js',
        )

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js':
      /*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/set-prototype-of */ './node_modules/core-js/library/fn/object/set-prototype-of.js',
        )

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/core-js/set.js':
      /*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/set */ './node_modules/core-js/library/fn/set.js',
        )

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/core-js/symbol.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/symbol */ './node_modules/core-js/library/fn/symbol/index.js',
        )

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/symbol/iterator */ './node_modules/core-js/library/fn/symbol/iterator.js',
        )

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js':
      /*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return _arrayWithoutHoles
          },
        )
        /* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/array/is-array */ './node_modules/@babel/runtime-corejs2/core-js/array/is-array.js',
        )
        /* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__,
        )

        function _arrayWithoutHoles(arr) {
          if (
            _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)
          ) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i]
            }

            return arr2
          }
        }

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js':
      /*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return _assertThisInitialized
          },
        )
        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            )
          }

          return self
        }

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js':
      /*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return _classCallCheck
          },
        )
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return _createClass
          },
        )
        /* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/define-property */ './node_modules/@babel/runtime-corejs2/core-js/object/define-property.js',
        )
        /* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__,
        )

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true

            _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(
              target,
              descriptor.key,
              descriptor,
            )
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps)
          if (staticProps) _defineProperties(Constructor, staticProps)
          return Constructor
        }

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js':
      /*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return _getPrototypeOf
          },
        )
        /* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/get-prototype-of */ './node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js',
        )
        /* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__,
        )
        /* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../core-js/object/set-prototype-of */ './node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js',
        )
        /* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__,
        )

        function _getPrototypeOf(o) {
          _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a
            ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a
            : function _getPrototypeOf(o) {
                return (
                  o.__proto__ ||
                  _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(
                    o,
                  )
                )
              }
          return _getPrototypeOf(o)
        }

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return _inherits
          },
        )
        /* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/create */ './node_modules/@babel/runtime-corejs2/core-js/object/create.js',
        )
        /* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__,
        )
        /* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./setPrototypeOf */ './node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js',
        )

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function',
            )
          }

          subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            },
          )
          if (superClass)
            Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__['default'])(
              subClass,
              superClass,
            )
        }

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return _iterableToArray
          },
        )
        /* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/array/from */ './node_modules/@babel/runtime-corejs2/core-js/array/from.js',
        )
        /* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__,
        )
        /* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../core-js/is-iterable */ './node_modules/@babel/runtime-corejs2/core-js/is-iterable.js',
        )
        /* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__,
        )

        function _iterableToArray(iter) {
          if (
            _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(
              Object(iter),
            ) ||
            Object.prototype.toString.call(iter) === '[object Arguments]'
          )
            return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(
              iter,
            )
        }

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js':
      /*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return _nonIterableSpread
          },
        )
        function _nonIterableSpread() {
          throw new TypeError('Invalid attempt to spread non-iterable instance')
        }

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js':
      /*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return _possibleConstructorReturn
          },
        )
        /* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../helpers/esm/typeof */ './node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js',
        )
        /* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./assertThisInitialized */ './node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js',
        )

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (Object(
              _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__['default'],
            )(call) === 'object' ||
              typeof call === 'function')
          ) {
            return call
          }

          return Object(
            _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__['default'],
          )(self)
        }

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js':
      /*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return _setPrototypeOf
          },
        )
        /* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/set-prototype-of */ './node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js',
        )
        /* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__,
        )

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p
              return o
            }

          return _setPrototypeOf(o, p)
        }

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js':
      /*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return _toConsumableArray
          },
        )
        /* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./arrayWithoutHoles */ './node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js',
        )
        /* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./iterableToArray */ './node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js',
        )
        /* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./nonIterableSpread */ './node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js',
        )

        function _toConsumableArray(arr) {
          return (
            Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__['default'])(
              arr,
            ) ||
            Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__['default'])(
              arr,
            ) ||
            Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__['default'])()
          )
        }

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return _typeof
          },
        )
        /* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/symbol/iterator */ './node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js',
        )
        /* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__,
        )
        /* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../core-js/symbol */ './node_modules/@babel/runtime-corejs2/core-js/symbol.js',
        )
        /* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__,
        )

        function _typeof2(obj) {
          if (
            typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a ===
              'function' &&
            typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a ===
              'symbol'
          ) {
            _typeof2 = function _typeof2(obj) {
              return typeof obj
            }
          } else {
            _typeof2 = function _typeof2(obj) {
              return obj &&
                typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a ===
                  'function' &&
                obj.constructor ===
                  _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a &&
                obj !==
                  _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a
                    .prototype
                ? 'symbol'
                : typeof obj
            }
          }
          return _typeof2(obj)
        }

        function _typeof(obj) {
          if (
            typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a ===
              'function' &&
            _typeof2(
              _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a,
            ) === 'symbol'
          ) {
            _typeof = function _typeof(obj) {
              return _typeof2(obj)
            }
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a ===
                  'function' &&
                obj.constructor ===
                  _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a &&
                obj !==
                  _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a
                    .prototype
                ? 'symbol'
                : _typeof2(obj)
            }
          }

          return _typeof(obj)
        }

        /***/
      },

    /***/ './node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js':
      /*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              }
        }

        module.exports = _interopRequireDefault

        /***/
      },

    /***/ './node_modules/core-js/library/fn/array/from.js':
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.string.iterator */ './node_modules/core-js/library/modules/es6.string.iterator.js',
        )
        __webpack_require__(
          /*! ../../modules/es6.array.from */ './node_modules/core-js/library/modules/es6.array.from.js',
        )
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ './node_modules/core-js/library/modules/_core.js',
        ).Array.from

        /***/
      },

    /***/ './node_modules/core-js/library/fn/array/is-array.js':
      /*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.array.is-array */ './node_modules/core-js/library/modules/es6.array.is-array.js',
        )
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ './node_modules/core-js/library/modules/_core.js',
        ).Array.isArray

        /***/
      },

    /***/ './node_modules/core-js/library/fn/is-iterable.js':
      /*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../modules/web.dom.iterable */ './node_modules/core-js/library/modules/web.dom.iterable.js',
        )
        __webpack_require__(
          /*! ../modules/es6.string.iterator */ './node_modules/core-js/library/modules/es6.string.iterator.js',
        )
        module.exports = __webpack_require__(
          /*! ../modules/core.is-iterable */ './node_modules/core-js/library/modules/core.is-iterable.js',
        )

        /***/
      },

    /***/ './node_modules/core-js/library/fn/object/create.js':
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.create */ './node_modules/core-js/library/modules/es6.object.create.js',
        )
        var $Object = __webpack_require__(
          /*! ../../modules/_core */ './node_modules/core-js/library/modules/_core.js',
        ).Object
        module.exports = function create(P, D) {
          return $Object.create(P, D)
        }

        /***/
      },

    /***/ './node_modules/core-js/library/fn/object/define-property.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.define-property */ './node_modules/core-js/library/modules/es6.object.define-property.js',
        )
        var $Object = __webpack_require__(
          /*! ../../modules/_core */ './node_modules/core-js/library/modules/_core.js',
        ).Object
        module.exports = function defineProperty(it, key, desc) {
          return $Object.defineProperty(it, key, desc)
        }

        /***/
      },

    /***/ './node_modules/core-js/library/fn/object/get-prototype-of.js':
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.get-prototype-of */ './node_modules/core-js/library/modules/es6.object.get-prototype-of.js',
        )
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ './node_modules/core-js/library/modules/_core.js',
        ).Object.getPrototypeOf

        /***/
      },

    /***/ './node_modules/core-js/library/fn/object/set-prototype-of.js':
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.set-prototype-of */ './node_modules/core-js/library/modules/es6.object.set-prototype-of.js',
        )
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ './node_modules/core-js/library/modules/_core.js',
        ).Object.setPrototypeOf

        /***/
      },

    /***/ './node_modules/core-js/library/fn/set.js':
      /*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/set.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../modules/es6.object.to-string */ './node_modules/core-js/library/modules/es6.object.to-string.js',
        )
        __webpack_require__(
          /*! ../modules/es6.string.iterator */ './node_modules/core-js/library/modules/es6.string.iterator.js',
        )
        __webpack_require__(
          /*! ../modules/web.dom.iterable */ './node_modules/core-js/library/modules/web.dom.iterable.js',
        )
        __webpack_require__(
          /*! ../modules/es6.set */ './node_modules/core-js/library/modules/es6.set.js',
        )
        __webpack_require__(
          /*! ../modules/es7.set.to-json */ './node_modules/core-js/library/modules/es7.set.to-json.js',
        )
        __webpack_require__(
          /*! ../modules/es7.set.of */ './node_modules/core-js/library/modules/es7.set.of.js',
        )
        __webpack_require__(
          /*! ../modules/es7.set.from */ './node_modules/core-js/library/modules/es7.set.from.js',
        )
        module.exports = __webpack_require__(
          /*! ../modules/_core */ './node_modules/core-js/library/modules/_core.js',
        ).Set

        /***/
      },

    /***/ './node_modules/core-js/library/fn/symbol/index.js':
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.symbol */ './node_modules/core-js/library/modules/es6.symbol.js',
        )
        __webpack_require__(
          /*! ../../modules/es6.object.to-string */ './node_modules/core-js/library/modules/es6.object.to-string.js',
        )
        __webpack_require__(
          /*! ../../modules/es7.symbol.async-iterator */ './node_modules/core-js/library/modules/es7.symbol.async-iterator.js',
        )
        __webpack_require__(
          /*! ../../modules/es7.symbol.observable */ './node_modules/core-js/library/modules/es7.symbol.observable.js',
        )
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ './node_modules/core-js/library/modules/_core.js',
        ).Symbol

        /***/
      },

    /***/ './node_modules/core-js/library/fn/symbol/iterator.js':
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.string.iterator */ './node_modules/core-js/library/modules/es6.string.iterator.js',
        )
        __webpack_require__(
          /*! ../../modules/web.dom.iterable */ './node_modules/core-js/library/modules/web.dom.iterable.js',
        )
        module.exports = __webpack_require__(
          /*! ../../modules/_wks-ext */ './node_modules/core-js/library/modules/_wks-ext.js',
        ).f('iterator')

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_a-function.js':
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(it) {
          if (typeof it != 'function')
            throw TypeError(it + ' is not a function!')
          return it
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_add-to-unscopables.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function() {
          /* empty */
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_an-instance.js':
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(it, Constructor, name, forbiddenField) {
          if (
            !(it instanceof Constructor) ||
            (forbiddenField !== undefined && forbiddenField in it)
          ) {
            throw TypeError(name + ': incorrect invocation!')
          }
          return it
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_an-object.js':
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ./_is-object */ './node_modules/core-js/library/modules/_is-object.js',
        )
        module.exports = function(it) {
          if (!isObject(it)) throw TypeError(it + ' is not an object!')
          return it
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_array-from-iterable.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var forOf = __webpack_require__(
          /*! ./_for-of */ './node_modules/core-js/library/modules/_for-of.js',
        )

        module.exports = function(iter, ITERATOR) {
          var result = []
          forOf(iter, false, result.push, result, ITERATOR)
          return result
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_array-includes.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ './node_modules/core-js/library/modules/_to-iobject.js',
        )
        var toLength = __webpack_require__(
          /*! ./_to-length */ './node_modules/core-js/library/modules/_to-length.js',
        )
        var toAbsoluteIndex = __webpack_require__(
          /*! ./_to-absolute-index */ './node_modules/core-js/library/modules/_to-absolute-index.js',
        )
        module.exports = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIObject($this)
            var length = toLength(O.length)
            var index = toAbsoluteIndex(fromIndex, length)
            var value
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++]
                // eslint-disable-next-line no-self-compare
                if (value != value) return true
                // Array#indexOf ignores holes, Array#includes - not
              }
            else
              for (; length > index; index++)
                if (IS_INCLUDES || index in O) {
                  if (O[index] === el) return IS_INCLUDES || index || 0
                }
            return !IS_INCLUDES && -1
          }
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_array-methods.js':
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 0 -> Array#forEach
        // 1 -> Array#map
        // 2 -> Array#filter
        // 3 -> Array#some
        // 4 -> Array#every
        // 5 -> Array#find
        // 6 -> Array#findIndex
        var ctx = __webpack_require__(
          /*! ./_ctx */ './node_modules/core-js/library/modules/_ctx.js',
        )
        var IObject = __webpack_require__(
          /*! ./_iobject */ './node_modules/core-js/library/modules/_iobject.js',
        )
        var toObject = __webpack_require__(
          /*! ./_to-object */ './node_modules/core-js/library/modules/_to-object.js',
        )
        var toLength = __webpack_require__(
          /*! ./_to-length */ './node_modules/core-js/library/modules/_to-length.js',
        )
        var asc = __webpack_require__(
          /*! ./_array-species-create */ './node_modules/core-js/library/modules/_array-species-create.js',
        )
        module.exports = function(TYPE, $create) {
          var IS_MAP = TYPE == 1
          var IS_FILTER = TYPE == 2
          var IS_SOME = TYPE == 3
          var IS_EVERY = TYPE == 4
          var IS_FIND_INDEX = TYPE == 6
          var NO_HOLES = TYPE == 5 || IS_FIND_INDEX
          var create = $create || asc
          return function($this, callbackfn, that) {
            var O = toObject($this)
            var self = IObject(O)
            var f = ctx(callbackfn, that, 3)
            var length = toLength(self.length)
            var index = 0
            var result = IS_MAP
              ? create($this, length)
              : IS_FILTER
              ? create($this, 0)
              : undefined
            var val, res
            for (; length > index; index++)
              if (NO_HOLES || index in self) {
                val = self[index]
                res = f(val, index, O)
                if (TYPE) {
                  if (IS_MAP) result[index] = res
                  // map
                  else if (res)
                    switch (TYPE) {
                      case 3:
                        return true // some
                      case 5:
                        return val // find
                      case 6:
                        return index // findIndex
                      case 2:
                        result.push(val) // filter
                    }
                  else if (IS_EVERY) return false // every
                }
              }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result
          }
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_array-species-constructor.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ./_is-object */ './node_modules/core-js/library/modules/_is-object.js',
        )
        var isArray = __webpack_require__(
          /*! ./_is-array */ './node_modules/core-js/library/modules/_is-array.js',
        )
        var SPECIES = __webpack_require__(
          /*! ./_wks */ './node_modules/core-js/library/modules/_wks.js',
        )('species')

        module.exports = function(original) {
          var C
          if (isArray(original)) {
            C = original.constructor
            // cross-realm fallback
            if (typeof C == 'function' && (C === Array || isArray(C.prototype)))
              C = undefined
            if (isObject(C)) {
              C = C[SPECIES]
              if (C === null) C = undefined
            }
          }
          return C === undefined ? Array : C
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_array-species-create.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
        var speciesConstructor = __webpack_require__(
          /*! ./_array-species-constructor */ './node_modules/core-js/library/modules/_array-species-constructor.js',
        )

        module.exports = function(original, length) {
          return new (speciesConstructor(original))(length)
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_classof.js':
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = __webpack_require__(
          /*! ./_cof */ './node_modules/core-js/library/modules/_cof.js',
        )
        var TAG = __webpack_require__(
          /*! ./_wks */ './node_modules/core-js/library/modules/_wks.js',
        )('toStringTag')
        // ES3 wrong here
        var ARG =
          cof(
            (function() {
              return arguments
            })(),
          ) == 'Arguments'

        // fallback for IE11 Script Access Denied error
        var tryGet = function(it, key) {
          try {
            return it[key]
          } catch (e) {
            /* empty */
          }
        }

        module.exports = function(it) {
          var O, T, B
          return it === undefined
            ? 'Undefined'
            : it === null
            ? 'Null'
            : // @@toStringTag case
            typeof (T = tryGet((O = Object(it)), TAG)) == 'string'
            ? T
            : // builtinTag case
            ARG
            ? cof(O)
            : // ES3 arguments fallback
            (B = cof(O)) == 'Object' && typeof O.callee == 'function'
            ? 'Arguments'
            : B
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_cof.js':
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var toString = {}.toString

        module.exports = function(it) {
          return toString.call(it).slice(8, -1)
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_collection-strong.js':
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var dP = __webpack_require__(
          /*! ./_object-dp */ './node_modules/core-js/library/modules/_object-dp.js',
        ).f
        var create = __webpack_require__(
          /*! ./_object-create */ './node_modules/core-js/library/modules/_object-create.js',
        )
        var redefineAll = __webpack_require__(
          /*! ./_redefine-all */ './node_modules/core-js/library/modules/_redefine-all.js',
        )
        var ctx = __webpack_require__(
          /*! ./_ctx */ './node_modules/core-js/library/modules/_ctx.js',
        )
        var anInstance = __webpack_require__(
          /*! ./_an-instance */ './node_modules/core-js/library/modules/_an-instance.js',
        )
        var forOf = __webpack_require__(
          /*! ./_for-of */ './node_modules/core-js/library/modules/_for-of.js',
        )
        var $iterDefine = __webpack_require__(
          /*! ./_iter-define */ './node_modules/core-js/library/modules/_iter-define.js',
        )
        var step = __webpack_require__(
          /*! ./_iter-step */ './node_modules/core-js/library/modules/_iter-step.js',
        )
        var setSpecies = __webpack_require__(
          /*! ./_set-species */ './node_modules/core-js/library/modules/_set-species.js',
        )
        var DESCRIPTORS = __webpack_require__(
          /*! ./_descriptors */ './node_modules/core-js/library/modules/_descriptors.js',
        )
        var fastKey = __webpack_require__(
          /*! ./_meta */ './node_modules/core-js/library/modules/_meta.js',
        ).fastKey
        var validate = __webpack_require__(
          /*! ./_validate-collection */ './node_modules/core-js/library/modules/_validate-collection.js',
        )
        var SIZE = DESCRIPTORS ? '_s' : 'size'

        var getEntry = function(that, key) {
          // fast case
          var index = fastKey(key)
          var entry
          if (index !== 'F') return that._i[index]
          // frozen object case
          for (entry = that._f; entry; entry = entry.n) {
            if (entry.k == key) return entry
          }
        }

        module.exports = {
          getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
            var C = wrapper(function(that, iterable) {
              anInstance(that, C, NAME, '_i')
              that._t = NAME // collection type
              that._i = create(null) // index
              that._f = undefined // first entry
              that._l = undefined // last entry
              that[SIZE] = 0 // size
              if (iterable != undefined)
                forOf(iterable, IS_MAP, that[ADDER], that)
            })
            redefineAll(C.prototype, {
              // 23.1.3.1 Map.prototype.clear()
              // 23.2.3.2 Set.prototype.clear()
              clear: function clear() {
                for (
                  var that = validate(this, NAME),
                    data = that._i,
                    entry = that._f;
                  entry;
                  entry = entry.n
                ) {
                  entry.r = true
                  if (entry.p) entry.p = entry.p.n = undefined
                  delete data[entry.i]
                }
                that._f = that._l = undefined
                that[SIZE] = 0
              },
              // 23.1.3.3 Map.prototype.delete(key)
              // 23.2.3.4 Set.prototype.delete(value)
              delete: function(key) {
                var that = validate(this, NAME)
                var entry = getEntry(that, key)
                if (entry) {
                  var next = entry.n
                  var prev = entry.p
                  delete that._i[entry.i]
                  entry.r = true
                  if (prev) prev.n = next
                  if (next) next.p = prev
                  if (that._f == entry) that._f = next
                  if (that._l == entry) that._l = prev
                  that[SIZE]--
                }
                return !!entry
              },
              // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
              // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
              forEach: function forEach(callbackfn /* , that = undefined */) {
                validate(this, NAME)
                var f = ctx(
                  callbackfn,
                  arguments.length > 1 ? arguments[1] : undefined,
                  3,
                )
                var entry
                while ((entry = entry ? entry.n : this._f)) {
                  f(entry.v, entry.k, this)
                  // revert to the last existing entry
                  while (entry && entry.r) entry = entry.p
                }
              },
              // 23.1.3.7 Map.prototype.has(key)
              // 23.2.3.7 Set.prototype.has(value)
              has: function has(key) {
                return !!getEntry(validate(this, NAME), key)
              },
            })
            if (DESCRIPTORS)
              dP(C.prototype, 'size', {
                get: function() {
                  return validate(this, NAME)[SIZE]
                },
              })
            return C
          },
          def: function(that, key, value) {
            var entry = getEntry(that, key)
            var prev, index
            // change existing entry
            if (entry) {
              entry.v = value
              // create new entry
            } else {
              that._l = entry = {
                i: (index = fastKey(key, true)), // <- index
                k: key, // <- key
                v: value, // <- value
                p: (prev = that._l), // <- previous entry
                n: undefined, // <- next entry
                r: false, // <- removed
              }
              if (!that._f) that._f = entry
              if (prev) prev.n = entry
              that[SIZE]++
              // add to index
              if (index !== 'F') that._i[index] = entry
            }
            return that
          },
          getEntry: getEntry,
          setStrong: function(C, NAME, IS_MAP) {
            // add .keys, .values, .entries, [@@iterator]
            // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
            $iterDefine(
              C,
              NAME,
              function(iterated, kind) {
                this._t = validate(iterated, NAME) // target
                this._k = kind // kind
                this._l = undefined // previous
              },
              function() {
                var that = this
                var kind = that._k
                var entry = that._l
                // revert to the last existing entry
                while (entry && entry.r) entry = entry.p
                // get next entry
                if (
                  !that._t ||
                  !(that._l = entry = entry ? entry.n : that._t._f)
                ) {
                  // or finish the iteration
                  that._t = undefined
                  return step(1)
                }
                // return step by kind
                if (kind == 'keys') return step(0, entry.k)
                if (kind == 'values') return step(0, entry.v)
                return step(0, [entry.k, entry.v])
              },
              IS_MAP ? 'entries' : 'values',
              !IS_MAP,
              true,
            )

            // add [@@species], 23.1.2.2, 23.2.2.2
            setSpecies(NAME)
          },
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_collection-to-json.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var classof = __webpack_require__(
          /*! ./_classof */ './node_modules/core-js/library/modules/_classof.js',
        )
        var from = __webpack_require__(
          /*! ./_array-from-iterable */ './node_modules/core-js/library/modules/_array-from-iterable.js',
        )
        module.exports = function(NAME) {
          return function toJSON() {
            if (classof(this) != NAME)
              throw TypeError(NAME + "#toJSON isn't generic")
            return from(this)
          }
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_collection.js':
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var global = __webpack_require__(
          /*! ./_global */ './node_modules/core-js/library/modules/_global.js',
        )
        var $export = __webpack_require__(
          /*! ./_export */ './node_modules/core-js/library/modules/_export.js',
        )
        var meta = __webpack_require__(
          /*! ./_meta */ './node_modules/core-js/library/modules/_meta.js',
        )
        var fails = __webpack_require__(
          /*! ./_fails */ './node_modules/core-js/library/modules/_fails.js',
        )
        var hide = __webpack_require__(
          /*! ./_hide */ './node_modules/core-js/library/modules/_hide.js',
        )
        var redefineAll = __webpack_require__(
          /*! ./_redefine-all */ './node_modules/core-js/library/modules/_redefine-all.js',
        )
        var forOf = __webpack_require__(
          /*! ./_for-of */ './node_modules/core-js/library/modules/_for-of.js',
        )
        var anInstance = __webpack_require__(
          /*! ./_an-instance */ './node_modules/core-js/library/modules/_an-instance.js',
        )
        var isObject = __webpack_require__(
          /*! ./_is-object */ './node_modules/core-js/library/modules/_is-object.js',
        )
        var setToStringTag = __webpack_require__(
          /*! ./_set-to-string-tag */ './node_modules/core-js/library/modules/_set-to-string-tag.js',
        )
        var dP = __webpack_require__(
          /*! ./_object-dp */ './node_modules/core-js/library/modules/_object-dp.js',
        ).f
        var each = __webpack_require__(
          /*! ./_array-methods */ './node_modules/core-js/library/modules/_array-methods.js',
        )(0)
        var DESCRIPTORS = __webpack_require__(
          /*! ./_descriptors */ './node_modules/core-js/library/modules/_descriptors.js',
        )

        module.exports = function(
          NAME,
          wrapper,
          methods,
          common,
          IS_MAP,
          IS_WEAK,
        ) {
          var Base = global[NAME]
          var C = Base
          var ADDER = IS_MAP ? 'set' : 'add'
          var proto = C && C.prototype
          var O = {}
          if (
            !DESCRIPTORS ||
            typeof C != 'function' ||
            !(
              IS_WEAK ||
              (proto.forEach &&
                !fails(function() {
                  new C().entries().next()
                }))
            )
          ) {
            // create collection constructor
            C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER)
            redefineAll(C.prototype, methods)
            meta.NEED = true
          } else {
            C = wrapper(function(target, iterable) {
              anInstance(target, C, NAME, '_c')
              target._c = new Base()
              if (iterable != undefined)
                forOf(iterable, IS_MAP, target[ADDER], target)
            })
            each(
              'add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(
                ',',
              ),
              function(KEY) {
                var IS_ADDER = KEY == 'add' || KEY == 'set'
                if (KEY in proto && !(IS_WEAK && KEY == 'clear'))
                  hide(C.prototype, KEY, function(a, b) {
                    anInstance(this, C, KEY)
                    if (!IS_ADDER && IS_WEAK && !isObject(a))
                      return KEY == 'get' ? undefined : false
                    var result = this._c[KEY](a === 0 ? 0 : a, b)
                    return IS_ADDER ? this : result
                  })
              },
            )
            IS_WEAK ||
              dP(C.prototype, 'size', {
                get: function() {
                  return this._c.size
                },
              })
          }

          setToStringTag(C, NAME)

          O[NAME] = C
          $export($export.G + $export.W + $export.F, O)

          if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP)

          return C
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_core.js':
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var core = (module.exports = { version: '2.6.9' })
        if (typeof __e == 'number') __e = core // eslint-disable-line no-undef

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_create-property.js':
      /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var $defineProperty = __webpack_require__(
          /*! ./_object-dp */ './node_modules/core-js/library/modules/_object-dp.js',
        )
        var createDesc = __webpack_require__(
          /*! ./_property-desc */ './node_modules/core-js/library/modules/_property-desc.js',
        )

        module.exports = function(object, index, value) {
          if (index in object)
            $defineProperty.f(object, index, createDesc(0, value))
          else object[index] = value
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_ctx.js':
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // optional / simple context binding
        var aFunction = __webpack_require__(
          /*! ./_a-function */ './node_modules/core-js/library/modules/_a-function.js',
        )
        module.exports = function(fn, that, length) {
          aFunction(fn)
          if (that === undefined) return fn
          switch (length) {
            case 1:
              return function(a) {
                return fn.call(that, a)
              }
            case 2:
              return function(a, b) {
                return fn.call(that, a, b)
              }
            case 3:
              return function(a, b, c) {
                return fn.call(that, a, b, c)
              }
          }
          return function(/* ...args */) {
            return fn.apply(that, arguments)
          }
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_defined.js':
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function(it) {
          if (it == undefined) throw TypeError("Can't call method on  " + it)
          return it
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_descriptors.js':
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__(
          /*! ./_fails */ './node_modules/core-js/library/modules/_fails.js',
        )(function() {
          return (
            Object.defineProperty({}, 'a', {
              get: function() {
                return 7
              },
            }).a != 7
          )
        })

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_dom-create.js':
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ./_is-object */ './node_modules/core-js/library/modules/_is-object.js',
        )
        var document = __webpack_require__(
          /*! ./_global */ './node_modules/core-js/library/modules/_global.js',
        ).document
        // typeof document.createElement is 'object' in old IE
        var is = isObject(document) && isObject(document.createElement)
        module.exports = function(it) {
          return is ? document.createElement(it) : {}
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_enum-bug-keys.js':
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // IE 8- don't enum bug keys
        module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
          ',',
        )

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_enum-keys.js':
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // all enumerable object keys, includes symbols
        var getKeys = __webpack_require__(
          /*! ./_object-keys */ './node_modules/core-js/library/modules/_object-keys.js',
        )
        var gOPS = __webpack_require__(
          /*! ./_object-gops */ './node_modules/core-js/library/modules/_object-gops.js',
        )
        var pIE = __webpack_require__(
          /*! ./_object-pie */ './node_modules/core-js/library/modules/_object-pie.js',
        )
        module.exports = function(it) {
          var result = getKeys(it)
          var getSymbols = gOPS.f
          if (getSymbols) {
            var symbols = getSymbols(it)
            var isEnum = pIE.f
            var i = 0
            var key
            while (symbols.length > i)
              if (isEnum.call(it, (key = symbols[i++]))) result.push(key)
          }
          return result
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_export.js':
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ./_global */ './node_modules/core-js/library/modules/_global.js',
        )
        var core = __webpack_require__(
          /*! ./_core */ './node_modules/core-js/library/modules/_core.js',
        )
        var ctx = __webpack_require__(
          /*! ./_ctx */ './node_modules/core-js/library/modules/_ctx.js',
        )
        var hide = __webpack_require__(
          /*! ./_hide */ './node_modules/core-js/library/modules/_hide.js',
        )
        var has = __webpack_require__(
          /*! ./_has */ './node_modules/core-js/library/modules/_has.js',
        )
        var PROTOTYPE = 'prototype'

        var $export = function(type, name, source) {
          var IS_FORCED = type & $export.F
          var IS_GLOBAL = type & $export.G
          var IS_STATIC = type & $export.S
          var IS_PROTO = type & $export.P
          var IS_BIND = type & $export.B
          var IS_WRAP = type & $export.W
          var exports = IS_GLOBAL ? core : core[name] || (core[name] = {})
          var expProto = exports[PROTOTYPE]
          var target = IS_GLOBAL
            ? global
            : IS_STATIC
            ? global[name]
            : (global[name] || {})[PROTOTYPE]
          var key, own, out
          if (IS_GLOBAL) source = name
          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined
            if (own && has(exports, key)) continue
            // export native or passed
            out = own ? target[key] : source[key]
            // prevent global pollution for namespaces
            exports[key] =
              IS_GLOBAL && typeof target[key] != 'function'
                ? source[key]
                : // bind timers to global for call from export context
                IS_BIND && own
                ? ctx(out, global)
                : // wrap global constructors for prevent change them in library
                IS_WRAP && target[key] == out
                ? (function(C) {
                    var F = function(a, b, c) {
                      if (this instanceof C) {
                        switch (arguments.length) {
                          case 0:
                            return new C()
                          case 1:
                            return new C(a)
                          case 2:
                            return new C(a, b)
                        }
                        return new C(a, b, c)
                      }
                      return C.apply(this, arguments)
                    }
                    F[PROTOTYPE] = C[PROTOTYPE]
                    return F
                    // make static versions for prototype methods
                  })(out)
                : IS_PROTO && typeof out == 'function'
                ? ctx(Function.call, out)
                : out
            // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
            if (IS_PROTO) {
              ;(exports.virtual || (exports.virtual = {}))[key] = out
              // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
              if (type & $export.R && expProto && !expProto[key])
                hide(expProto, key, out)
            }
          }
        }
        // type bitmap
        $export.F = 1 // forced
        $export.G = 2 // global
        $export.S = 4 // static
        $export.P = 8 // proto
        $export.B = 16 // bind
        $export.W = 32 // wrap
        $export.U = 64 // safe
        $export.R = 128 // real proto method for `library`
        module.exports = $export

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_fails.js':
      /*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(exec) {
          try {
            return !!exec()
          } catch (e) {
            return true
          }
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_for-of.js':
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var ctx = __webpack_require__(
          /*! ./_ctx */ './node_modules/core-js/library/modules/_ctx.js',
        )
        var call = __webpack_require__(
          /*! ./_iter-call */ './node_modules/core-js/library/modules/_iter-call.js',
        )
        var isArrayIter = __webpack_require__(
          /*! ./_is-array-iter */ './node_modules/core-js/library/modules/_is-array-iter.js',
        )
        var anObject = __webpack_require__(
          /*! ./_an-object */ './node_modules/core-js/library/modules/_an-object.js',
        )
        var toLength = __webpack_require__(
          /*! ./_to-length */ './node_modules/core-js/library/modules/_to-length.js',
        )
        var getIterFn = __webpack_require__(
          /*! ./core.get-iterator-method */ './node_modules/core-js/library/modules/core.get-iterator-method.js',
        )
        var BREAK = {}
        var RETURN = {}
        var exports = (module.exports = function(
          iterable,
          entries,
          fn,
          that,
          ITERATOR,
        ) {
          var iterFn = ITERATOR
            ? function() {
                return iterable
              }
            : getIterFn(iterable)
          var f = ctx(fn, that, entries ? 2 : 1)
          var index = 0
          var length, step, iterator, result
          if (typeof iterFn != 'function')
            throw TypeError(iterable + ' is not iterable!')
          // fast case for arrays with default iterator
          if (isArrayIter(iterFn))
            for (length = toLength(iterable.length); length > index; index++) {
              result = entries
                ? f(anObject((step = iterable[index]))[0], step[1])
                : f(iterable[index])
              if (result === BREAK || result === RETURN) return result
            }
          else
            for (
              iterator = iterFn.call(iterable);
              !(step = iterator.next()).done;

            ) {
              result = call(iterator, f, step.value, entries)
              if (result === BREAK || result === RETURN) return result
            }
        })
        exports.BREAK = BREAK
        exports.RETURN = RETURN

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_global.js':
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = (module.exports =
          typeof window != 'undefined' && window.Math == Math
            ? window
            : typeof self != 'undefined' && self.Math == Math
            ? self
            : // eslint-disable-next-line no-new-func
              Function('return this')())
        if (typeof __g == 'number') __g = global // eslint-disable-line no-undef

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_has.js':
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty
        module.exports = function(it, key) {
          return hasOwnProperty.call(it, key)
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_hide.js':
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(
          /*! ./_object-dp */ './node_modules/core-js/library/modules/_object-dp.js',
        )
        var createDesc = __webpack_require__(
          /*! ./_property-desc */ './node_modules/core-js/library/modules/_property-desc.js',
        )
        module.exports = __webpack_require__(
          /*! ./_descriptors */ './node_modules/core-js/library/modules/_descriptors.js',
        )
          ? function(object, key, value) {
              return dP.f(object, key, createDesc(1, value))
            }
          : function(object, key, value) {
              object[key] = value
              return object
            }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_html.js':
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var document = __webpack_require__(
          /*! ./_global */ './node_modules/core-js/library/modules/_global.js',
        ).document
        module.exports = document && document.documentElement

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_ie8-dom-define.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          !__webpack_require__(
            /*! ./_descriptors */ './node_modules/core-js/library/modules/_descriptors.js',
          ) &&
          !__webpack_require__(
            /*! ./_fails */ './node_modules/core-js/library/modules/_fails.js',
          )(function() {
            return (
              Object.defineProperty(
                __webpack_require__(
                  /*! ./_dom-create */ './node_modules/core-js/library/modules/_dom-create.js',
                )('div'),
                'a',
                {
                  get: function() {
                    return 7
                  },
                },
              ).a != 7
            )
          })

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_iobject.js':
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__(
          /*! ./_cof */ './node_modules/core-js/library/modules/_cof.js',
        )
        // eslint-disable-next-line no-prototype-builtins
        module.exports = Object('z').propertyIsEnumerable(0)
          ? Object
          : function(it) {
              return cof(it) == 'String' ? it.split('') : Object(it)
            }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_is-array-iter.js':
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // check on default Array iterator
        var Iterators = __webpack_require__(
          /*! ./_iterators */ './node_modules/core-js/library/modules/_iterators.js',
        )
        var ITERATOR = __webpack_require__(
          /*! ./_wks */ './node_modules/core-js/library/modules/_wks.js',
        )('iterator')
        var ArrayProto = Array.prototype

        module.exports = function(it) {
          return (
            it !== undefined &&
            (Iterators.Array === it || ArrayProto[ITERATOR] === it)
          )
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_is-array.js':
      /*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 7.2.2 IsArray(argument)
        var cof = __webpack_require__(
          /*! ./_cof */ './node_modules/core-js/library/modules/_cof.js',
        )
        module.exports =
          Array.isArray ||
          function isArray(arg) {
            return cof(arg) == 'Array'
          }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_is-object.js':
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(it) {
          return typeof it === 'object' ? it !== null : typeof it === 'function'
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_iter-call.js':
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // call something on iterator step with safe closing on error
        var anObject = __webpack_require__(
          /*! ./_an-object */ './node_modules/core-js/library/modules/_an-object.js',
        )
        module.exports = function(iterator, fn, value, entries) {
          try {
            return entries ? fn(anObject(value)[0], value[1]) : fn(value)
            // 7.4.6 IteratorClose(iterator, completion)
          } catch (e) {
            var ret = iterator['return']
            if (ret !== undefined) anObject(ret.call(iterator))
            throw e
          }
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_iter-create.js':
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var create = __webpack_require__(
          /*! ./_object-create */ './node_modules/core-js/library/modules/_object-create.js',
        )
        var descriptor = __webpack_require__(
          /*! ./_property-desc */ './node_modules/core-js/library/modules/_property-desc.js',
        )
        var setToStringTag = __webpack_require__(
          /*! ./_set-to-string-tag */ './node_modules/core-js/library/modules/_set-to-string-tag.js',
        )
        var IteratorPrototype = {}

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__(
          /*! ./_hide */ './node_modules/core-js/library/modules/_hide.js',
        )(
          IteratorPrototype,
          __webpack_require__(
            /*! ./_wks */ './node_modules/core-js/library/modules/_wks.js',
          )('iterator'),
          function() {
            return this
          },
        )

        module.exports = function(Constructor, NAME, next) {
          Constructor.prototype = create(IteratorPrototype, {
            next: descriptor(1, next),
          })
          setToStringTag(Constructor, NAME + ' Iterator')
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_iter-define.js':
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var LIBRARY = __webpack_require__(
          /*! ./_library */ './node_modules/core-js/library/modules/_library.js',
        )
        var $export = __webpack_require__(
          /*! ./_export */ './node_modules/core-js/library/modules/_export.js',
        )
        var redefine = __webpack_require__(
          /*! ./_redefine */ './node_modules/core-js/library/modules/_redefine.js',
        )
        var hide = __webpack_require__(
          /*! ./_hide */ './node_modules/core-js/library/modules/_hide.js',
        )
        var Iterators = __webpack_require__(
          /*! ./_iterators */ './node_modules/core-js/library/modules/_iterators.js',
        )
        var $iterCreate = __webpack_require__(
          /*! ./_iter-create */ './node_modules/core-js/library/modules/_iter-create.js',
        )
        var setToStringTag = __webpack_require__(
          /*! ./_set-to-string-tag */ './node_modules/core-js/library/modules/_set-to-string-tag.js',
        )
        var getPrototypeOf = __webpack_require__(
          /*! ./_object-gpo */ './node_modules/core-js/library/modules/_object-gpo.js',
        )
        var ITERATOR = __webpack_require__(
          /*! ./_wks */ './node_modules/core-js/library/modules/_wks.js',
        )('iterator')
        var BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
        var FF_ITERATOR = '@@iterator'
        var KEYS = 'keys'
        var VALUES = 'values'

        var returnThis = function() {
          return this
        }

        module.exports = function(
          Base,
          NAME,
          Constructor,
          next,
          DEFAULT,
          IS_SET,
          FORCED,
        ) {
          $iterCreate(Constructor, NAME, next)
          var getMethod = function(kind) {
            if (!BUGGY && kind in proto) return proto[kind]
            switch (kind) {
              case KEYS:
                return function keys() {
                  return new Constructor(this, kind)
                }
              case VALUES:
                return function values() {
                  return new Constructor(this, kind)
                }
            }
            return function entries() {
              return new Constructor(this, kind)
            }
          }
          var TAG = NAME + ' Iterator'
          var DEF_VALUES = DEFAULT == VALUES
          var VALUES_BUG = false
          var proto = Base.prototype
          var $native =
            proto[ITERATOR] || proto[FF_ITERATOR] || (DEFAULT && proto[DEFAULT])
          var $default = $native || getMethod(DEFAULT)
          var $entries = DEFAULT
            ? !DEF_VALUES
              ? $default
              : getMethod('entries')
            : undefined
          var $anyNative = NAME == 'Array' ? proto.entries || $native : $native
          var methods, key, IteratorPrototype
          // Fix native
          if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()))
            if (
              IteratorPrototype !== Object.prototype &&
              IteratorPrototype.next
            ) {
              // Set @@toStringTag to native iterators
              setToStringTag(IteratorPrototype, TAG, true)
              // fix for some old engines
              if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function')
                hide(IteratorPrototype, ITERATOR, returnThis)
            }
          }
          // fix Array#{values, @@iterator}.name in V8 / FF
          if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true
            $default = function values() {
              return $native.call(this)
            }
          }
          // Define iterator
          if (
            (!LIBRARY || FORCED) &&
            (BUGGY || VALUES_BUG || !proto[ITERATOR])
          ) {
            hide(proto, ITERATOR, $default)
          }
          // Plug for library
          Iterators[NAME] = $default
          Iterators[TAG] = returnThis
          if (DEFAULT) {
            methods = {
              values: DEF_VALUES ? $default : getMethod(VALUES),
              keys: IS_SET ? $default : getMethod(KEYS),
              entries: $entries,
            }
            if (FORCED)
              for (key in methods) {
                if (!(key in proto)) redefine(proto, key, methods[key])
              }
            else
              $export(
                $export.P + $export.F * (BUGGY || VALUES_BUG),
                NAME,
                methods,
              )
          }
          return methods
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_iter-detect.js':
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var ITERATOR = __webpack_require__(
          /*! ./_wks */ './node_modules/core-js/library/modules/_wks.js',
        )('iterator')
        var SAFE_CLOSING = false

        try {
          var riter = [7][ITERATOR]()
          riter['return'] = function() {
            SAFE_CLOSING = true
          }
          // eslint-disable-next-line no-throw-literal
          Array.from(riter, function() {
            throw 2
          })
        } catch (e) {
          /* empty */
        }

        module.exports = function(exec, skipClosing) {
          if (!skipClosing && !SAFE_CLOSING) return false
          var safe = false
          try {
            var arr = [7]
            var iter = arr[ITERATOR]()
            iter.next = function() {
              return { done: (safe = true) }
            }
            arr[ITERATOR] = function() {
              return iter
            }
            exec(arr)
          } catch (e) {
            /* empty */
          }
          return safe
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_iter-step.js':
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(done, value) {
          return { value: value, done: !!done }
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_iterators.js':
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = {}

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_library.js':
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = true

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_meta.js':
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var META = __webpack_require__(
          /*! ./_uid */ './node_modules/core-js/library/modules/_uid.js',
        )('meta')
        var isObject = __webpack_require__(
          /*! ./_is-object */ './node_modules/core-js/library/modules/_is-object.js',
        )
        var has = __webpack_require__(
          /*! ./_has */ './node_modules/core-js/library/modules/_has.js',
        )
        var setDesc = __webpack_require__(
          /*! ./_object-dp */ './node_modules/core-js/library/modules/_object-dp.js',
        ).f
        var id = 0
        var isExtensible =
          Object.isExtensible ||
          function() {
            return true
          }
        var FREEZE = !__webpack_require__(
          /*! ./_fails */ './node_modules/core-js/library/modules/_fails.js',
        )(function() {
          return isExtensible(Object.preventExtensions({}))
        })
        var setMeta = function(it) {
          setDesc(it, META, {
            value: {
              i: 'O' + ++id, // object ID
              w: {}, // weak collections IDs
            },
          })
        }
        var fastKey = function(it, create) {
          // return primitive with prefix
          if (!isObject(it))
            return typeof it == 'symbol'
              ? it
              : (typeof it == 'string' ? 'S' : 'P') + it
          if (!has(it, META)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return 'F'
            // not necessary to add metadata
            if (!create) return 'E'
            // add missing metadata
            setMeta(it)
            // return object ID
          }
          return it[META].i
        }
        var getWeak = function(it, create) {
          if (!has(it, META)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return true
            // not necessary to add metadata
            if (!create) return false
            // add missing metadata
            setMeta(it)
            // return hash weak collections IDs
          }
          return it[META].w
        }
        // add metadata on freeze-family methods calling
        var onFreeze = function(it) {
          if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META))
            setMeta(it)
          return it
        }
        var meta = (module.exports = {
          KEY: META,
          NEED: false,
          fastKey: fastKey,
          getWeak: getWeak,
          onFreeze: onFreeze,
        })

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_object-create.js':
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = __webpack_require__(
          /*! ./_an-object */ './node_modules/core-js/library/modules/_an-object.js',
        )
        var dPs = __webpack_require__(
          /*! ./_object-dps */ './node_modules/core-js/library/modules/_object-dps.js',
        )
        var enumBugKeys = __webpack_require__(
          /*! ./_enum-bug-keys */ './node_modules/core-js/library/modules/_enum-bug-keys.js',
        )
        var IE_PROTO = __webpack_require__(
          /*! ./_shared-key */ './node_modules/core-js/library/modules/_shared-key.js',
        )('IE_PROTO')
        var Empty = function() {
          /* empty */
        }
        var PROTOTYPE = 'prototype'

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var createDict = function() {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = __webpack_require__(
            /*! ./_dom-create */ './node_modules/core-js/library/modules/_dom-create.js',
          )('iframe')
          var i = enumBugKeys.length
          var lt = '<'
          var gt = '>'
          var iframeDocument
          iframe.style.display = 'none'
          __webpack_require__(
            /*! ./_html */ './node_modules/core-js/library/modules/_html.js',
          ).appendChild(iframe)
          iframe.src = 'javascript:' // eslint-disable-line no-script-url
          // createDict = iframe.contentWindow.Object;
          // html.removeChild(iframe);
          iframeDocument = iframe.contentWindow.document
          iframeDocument.open()
          iframeDocument.write(
            lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt,
          )
          iframeDocument.close()
          createDict = iframeDocument.F
          while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]]
          return createDict()
        }

        module.exports =
          Object.create ||
          function create(O, Properties) {
            var result
            if (O !== null) {
              Empty[PROTOTYPE] = anObject(O)
              result = new Empty()
              Empty[PROTOTYPE] = null
              // add "__proto__" for Object.getPrototypeOf polyfill
              result[IE_PROTO] = O
            } else result = createDict()
            return Properties === undefined ? result : dPs(result, Properties)
          }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_object-dp.js':
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ./_an-object */ './node_modules/core-js/library/modules/_an-object.js',
        )
        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ./_ie8-dom-define */ './node_modules/core-js/library/modules/_ie8-dom-define.js',
        )
        var toPrimitive = __webpack_require__(
          /*! ./_to-primitive */ './node_modules/core-js/library/modules/_to-primitive.js',
        )
        var dP = Object.defineProperty

        exports.f = __webpack_require__(
          /*! ./_descriptors */ './node_modules/core-js/library/modules/_descriptors.js',
        )
          ? Object.defineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O)
              P = toPrimitive(P, true)
              anObject(Attributes)
              if (IE8_DOM_DEFINE)
                try {
                  return dP(O, P, Attributes)
                } catch (e) {
                  /* empty */
                }
              if ('get' in Attributes || 'set' in Attributes)
                throw TypeError('Accessors not supported!')
              if ('value' in Attributes) O[P] = Attributes.value
              return O
            }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_object-dps.js':
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(
          /*! ./_object-dp */ './node_modules/core-js/library/modules/_object-dp.js',
        )
        var anObject = __webpack_require__(
          /*! ./_an-object */ './node_modules/core-js/library/modules/_an-object.js',
        )
        var getKeys = __webpack_require__(
          /*! ./_object-keys */ './node_modules/core-js/library/modules/_object-keys.js',
        )

        module.exports = __webpack_require__(
          /*! ./_descriptors */ './node_modules/core-js/library/modules/_descriptors.js',
        )
          ? Object.defineProperties
          : function defineProperties(O, Properties) {
              anObject(O)
              var keys = getKeys(Properties)
              var length = keys.length
              var i = 0
              var P
              while (length > i) dP.f(O, (P = keys[i++]), Properties[P])
              return O
            }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_object-gopd.js':
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var pIE = __webpack_require__(
          /*! ./_object-pie */ './node_modules/core-js/library/modules/_object-pie.js',
        )
        var createDesc = __webpack_require__(
          /*! ./_property-desc */ './node_modules/core-js/library/modules/_property-desc.js',
        )
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ './node_modules/core-js/library/modules/_to-iobject.js',
        )
        var toPrimitive = __webpack_require__(
          /*! ./_to-primitive */ './node_modules/core-js/library/modules/_to-primitive.js',
        )
        var has = __webpack_require__(
          /*! ./_has */ './node_modules/core-js/library/modules/_has.js',
        )
        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ./_ie8-dom-define */ './node_modules/core-js/library/modules/_ie8-dom-define.js',
        )
        var gOPD = Object.getOwnPropertyDescriptor

        exports.f = __webpack_require__(
          /*! ./_descriptors */ './node_modules/core-js/library/modules/_descriptors.js',
        )
          ? gOPD
          : function getOwnPropertyDescriptor(O, P) {
              O = toIObject(O)
              P = toPrimitive(P, true)
              if (IE8_DOM_DEFINE)
                try {
                  return gOPD(O, P)
                } catch (e) {
                  /* empty */
                }
              if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P])
            }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_object-gopn-ext.js':
      /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ './node_modules/core-js/library/modules/_to-iobject.js',
        )
        var gOPN = __webpack_require__(
          /*! ./_object-gopn */ './node_modules/core-js/library/modules/_object-gopn.js',
        ).f
        var toString = {}.toString

        var windowNames =
          typeof window == 'object' && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : []

        var getWindowNames = function(it) {
          try {
            return gOPN(it)
          } catch (e) {
            return windowNames.slice()
          }
        }

        module.exports.f = function getOwnPropertyNames(it) {
          return windowNames && toString.call(it) == '[object Window]'
            ? getWindowNames(it)
            : gOPN(toIObject(it))
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_object-gopn.js':
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
        var $keys = __webpack_require__(
          /*! ./_object-keys-internal */ './node_modules/core-js/library/modules/_object-keys-internal.js',
        )
        var hiddenKeys = __webpack_require__(
          /*! ./_enum-bug-keys */ './node_modules/core-js/library/modules/_enum-bug-keys.js',
        ).concat('length', 'prototype')

        exports.f =
          Object.getOwnPropertyNames ||
          function getOwnPropertyNames(O) {
            return $keys(O, hiddenKeys)
          }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_object-gops.js':
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        exports.f = Object.getOwnPropertySymbols

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_object-gpo.js':
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = __webpack_require__(
          /*! ./_has */ './node_modules/core-js/library/modules/_has.js',
        )
        var toObject = __webpack_require__(
          /*! ./_to-object */ './node_modules/core-js/library/modules/_to-object.js',
        )
        var IE_PROTO = __webpack_require__(
          /*! ./_shared-key */ './node_modules/core-js/library/modules/_shared-key.js',
        )('IE_PROTO')
        var ObjectProto = Object.prototype

        module.exports =
          Object.getPrototypeOf ||
          function(O) {
            O = toObject(O)
            if (has(O, IE_PROTO)) return O[IE_PROTO]
            if (
              typeof O.constructor == 'function' &&
              O instanceof O.constructor
            ) {
              return O.constructor.prototype
            }
            return O instanceof Object ? ObjectProto : null
          }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_object-keys-internal.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var has = __webpack_require__(
          /*! ./_has */ './node_modules/core-js/library/modules/_has.js',
        )
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ './node_modules/core-js/library/modules/_to-iobject.js',
        )
        var arrayIndexOf = __webpack_require__(
          /*! ./_array-includes */ './node_modules/core-js/library/modules/_array-includes.js',
        )(false)
        var IE_PROTO = __webpack_require__(
          /*! ./_shared-key */ './node_modules/core-js/library/modules/_shared-key.js',
        )('IE_PROTO')

        module.exports = function(object, names) {
          var O = toIObject(object)
          var i = 0
          var result = []
          var key
          for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key)
          // Don't enum bug & hidden keys
          while (names.length > i)
            if (has(O, (key = names[i++]))) {
              ~arrayIndexOf(result, key) || result.push(key)
            }
          return result
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_object-keys.js':
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = __webpack_require__(
          /*! ./_object-keys-internal */ './node_modules/core-js/library/modules/_object-keys-internal.js',
        )
        var enumBugKeys = __webpack_require__(
          /*! ./_enum-bug-keys */ './node_modules/core-js/library/modules/_enum-bug-keys.js',
        )

        module.exports =
          Object.keys ||
          function keys(O) {
            return $keys(O, enumBugKeys)
          }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_object-pie.js':
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        exports.f = {}.propertyIsEnumerable

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_object-sap.js':
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // most Object methods by ES6 should accept primitives
        var $export = __webpack_require__(
          /*! ./_export */ './node_modules/core-js/library/modules/_export.js',
        )
        var core = __webpack_require__(
          /*! ./_core */ './node_modules/core-js/library/modules/_core.js',
        )
        var fails = __webpack_require__(
          /*! ./_fails */ './node_modules/core-js/library/modules/_fails.js',
        )
        module.exports = function(KEY, exec) {
          var fn = (core.Object || {})[KEY] || Object[KEY]
          var exp = {}
          exp[KEY] = exec(fn)
          $export(
            $export.S +
              $export.F *
                fails(function() {
                  fn(1)
                }),
            'Object',
            exp,
          )
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_property-desc.js':
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value,
          }
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_redefine-all.js':
      /*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var hide = __webpack_require__(
          /*! ./_hide */ './node_modules/core-js/library/modules/_hide.js',
        )
        module.exports = function(target, src, safe) {
          for (var key in src) {
            if (safe && target[key]) target[key] = src[key]
            else hide(target, key, src[key])
          }
          return target
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_redefine.js':
      /*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./_hide */ './node_modules/core-js/library/modules/_hide.js',
        )

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_set-collection-from.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        // https://tc39.github.io/proposal-setmap-offrom/
        var $export = __webpack_require__(
          /*! ./_export */ './node_modules/core-js/library/modules/_export.js',
        )
        var aFunction = __webpack_require__(
          /*! ./_a-function */ './node_modules/core-js/library/modules/_a-function.js',
        )
        var ctx = __webpack_require__(
          /*! ./_ctx */ './node_modules/core-js/library/modules/_ctx.js',
        )
        var forOf = __webpack_require__(
          /*! ./_for-of */ './node_modules/core-js/library/modules/_for-of.js',
        )

        module.exports = function(COLLECTION) {
          $export($export.S, COLLECTION, {
            from: function from(source /* , mapFn, thisArg */) {
              var mapFn = arguments[1]
              var mapping, A, n, cb
              aFunction(this)
              mapping = mapFn !== undefined
              if (mapping) aFunction(mapFn)
              if (source == undefined) return new this()
              A = []
              if (mapping) {
                n = 0
                cb = ctx(mapFn, arguments[2], 2)
                forOf(source, false, function(nextItem) {
                  A.push(cb(nextItem, n++))
                })
              } else {
                forOf(source, false, A.push, A)
              }
              return new this(A)
            },
          })
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_set-collection-of.js':
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        // https://tc39.github.io/proposal-setmap-offrom/
        var $export = __webpack_require__(
          /*! ./_export */ './node_modules/core-js/library/modules/_export.js',
        )

        module.exports = function(COLLECTION) {
          $export($export.S, COLLECTION, {
            of: function of() {
              var length = arguments.length
              var A = new Array(length)
              while (length--) A[length] = arguments[length]
              return new this(A)
            },
          })
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_set-proto.js':
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */
        var isObject = __webpack_require__(
          /*! ./_is-object */ './node_modules/core-js/library/modules/_is-object.js',
        )
        var anObject = __webpack_require__(
          /*! ./_an-object */ './node_modules/core-js/library/modules/_an-object.js',
        )
        var check = function(O, proto) {
          anObject(O)
          if (!isObject(proto) && proto !== null)
            throw TypeError(proto + ": can't set as prototype!")
        }
        module.exports = {
          set:
            Object.setPrototypeOf ||
            ('__proto__' in {} // eslint-disable-line
              ? (function(test, buggy, set) {
                  try {
                    set = __webpack_require__(
                      /*! ./_ctx */ './node_modules/core-js/library/modules/_ctx.js',
                    )(
                      Function.call,
                      __webpack_require__(
                        /*! ./_object-gopd */ './node_modules/core-js/library/modules/_object-gopd.js',
                      ).f(Object.prototype, '__proto__').set,
                      2,
                    )
                    set(test, [])
                    buggy = !(test instanceof Array)
                  } catch (e) {
                    buggy = true
                  }
                  return function setPrototypeOf(O, proto) {
                    check(O, proto)
                    if (buggy) O.__proto__ = proto
                    else set(O, proto)
                    return O
                  }
                })({}, false)
              : undefined),
          check: check,
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_set-species.js':
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var global = __webpack_require__(
          /*! ./_global */ './node_modules/core-js/library/modules/_global.js',
        )
        var core = __webpack_require__(
          /*! ./_core */ './node_modules/core-js/library/modules/_core.js',
        )
        var dP = __webpack_require__(
          /*! ./_object-dp */ './node_modules/core-js/library/modules/_object-dp.js',
        )
        var DESCRIPTORS = __webpack_require__(
          /*! ./_descriptors */ './node_modules/core-js/library/modules/_descriptors.js',
        )
        var SPECIES = __webpack_require__(
          /*! ./_wks */ './node_modules/core-js/library/modules/_wks.js',
        )('species')

        module.exports = function(KEY) {
          var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY]
          if (DESCRIPTORS && C && !C[SPECIES])
            dP.f(C, SPECIES, {
              configurable: true,
              get: function() {
                return this
              },
            })
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_set-to-string-tag.js':
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var def = __webpack_require__(
          /*! ./_object-dp */ './node_modules/core-js/library/modules/_object-dp.js',
        ).f
        var has = __webpack_require__(
          /*! ./_has */ './node_modules/core-js/library/modules/_has.js',
        )
        var TAG = __webpack_require__(
          /*! ./_wks */ './node_modules/core-js/library/modules/_wks.js',
        )('toStringTag')

        module.exports = function(it, tag, stat) {
          if (it && !has((it = stat ? it : it.prototype), TAG))
            def(it, TAG, { configurable: true, value: tag })
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_shared-key.js':
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var shared = __webpack_require__(
          /*! ./_shared */ './node_modules/core-js/library/modules/_shared.js',
        )('keys')
        var uid = __webpack_require__(
          /*! ./_uid */ './node_modules/core-js/library/modules/_uid.js',
        )
        module.exports = function(key) {
          return shared[key] || (shared[key] = uid(key))
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_shared.js':
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var core = __webpack_require__(
          /*! ./_core */ './node_modules/core-js/library/modules/_core.js',
        )
        var global = __webpack_require__(
          /*! ./_global */ './node_modules/core-js/library/modules/_global.js',
        )
        var SHARED = '__core-js_shared__'
        var store = global[SHARED] || (global[SHARED] = {})

        ;(module.exports = function(key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {})
        })('versions', []).push({
          version: core.version,
          mode: __webpack_require__(
            /*! ./_library */ './node_modules/core-js/library/modules/_library.js',
          )
            ? 'pure'
            : 'global',
          copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
        })

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_string-at.js':
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ./_to-integer */ './node_modules/core-js/library/modules/_to-integer.js',
        )
        var defined = __webpack_require__(
          /*! ./_defined */ './node_modules/core-js/library/modules/_defined.js',
        )
        // true  -> String#at
        // false -> String#codePointAt
        module.exports = function(TO_STRING) {
          return function(that, pos) {
            var s = String(defined(that))
            var i = toInteger(pos)
            var l = s.length
            var a, b
            if (i < 0 || i >= l) return TO_STRING ? '' : undefined
            a = s.charCodeAt(i)
            return a < 0xd800 ||
              a > 0xdbff ||
              i + 1 === l ||
              (b = s.charCodeAt(i + 1)) < 0xdc00 ||
              b > 0xdfff
              ? TO_STRING
                ? s.charAt(i)
                : a
              : TO_STRING
              ? s.slice(i, i + 2)
              : ((a - 0xd800) << 10) + (b - 0xdc00) + 0x10000
          }
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_to-absolute-index.js':
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ./_to-integer */ './node_modules/core-js/library/modules/_to-integer.js',
        )
        var max = Math.max
        var min = Math.min
        module.exports = function(index, length) {
          index = toInteger(index)
          return index < 0 ? max(index + length, 0) : min(index, length)
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_to-integer.js':
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // 7.1.4 ToInteger
        var ceil = Math.ceil
        var floor = Math.floor
        module.exports = function(it) {
          return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it)
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_to-iobject.js':
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__(
          /*! ./_iobject */ './node_modules/core-js/library/modules/_iobject.js',
        )
        var defined = __webpack_require__(
          /*! ./_defined */ './node_modules/core-js/library/modules/_defined.js',
        )
        module.exports = function(it) {
          return IObject(defined(it))
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_to-length.js':
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 7.1.15 ToLength
        var toInteger = __webpack_require__(
          /*! ./_to-integer */ './node_modules/core-js/library/modules/_to-integer.js',
        )
        var min = Math.min
        module.exports = function(it) {
          return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0 // pow(2, 53) - 1 == 9007199254740991
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_to-object.js':
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__(
          /*! ./_defined */ './node_modules/core-js/library/modules/_defined.js',
        )
        module.exports = function(it) {
          return Object(defined(it))
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_to-primitive.js':
      /*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__(
          /*! ./_is-object */ './node_modules/core-js/library/modules/_is-object.js',
        )
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function(it, S) {
          if (!isObject(it)) return it
          var fn, val
          if (
            S &&
            typeof (fn = it.toString) == 'function' &&
            !isObject((val = fn.call(it)))
          )
            return val
          if (
            typeof (fn = it.valueOf) == 'function' &&
            !isObject((val = fn.call(it)))
          )
            return val
          if (
            !S &&
            typeof (fn = it.toString) == 'function' &&
            !isObject((val = fn.call(it)))
          )
            return val
          throw TypeError("Can't convert object to primitive value")
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_uid.js':
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var id = 0
        var px = Math.random()
        module.exports = function(key) {
          return 'Symbol('.concat(
            key === undefined ? '' : key,
            ')_',
            (++id + px).toString(36),
          )
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_validate-collection.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ./_is-object */ './node_modules/core-js/library/modules/_is-object.js',
        )
        module.exports = function(it, TYPE) {
          if (!isObject(it) || it._t !== TYPE)
            throw TypeError('Incompatible receiver, ' + TYPE + ' required!')
          return it
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_wks-define.js':
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ./_global */ './node_modules/core-js/library/modules/_global.js',
        )
        var core = __webpack_require__(
          /*! ./_core */ './node_modules/core-js/library/modules/_core.js',
        )
        var LIBRARY = __webpack_require__(
          /*! ./_library */ './node_modules/core-js/library/modules/_library.js',
        )
        var wksExt = __webpack_require__(
          /*! ./_wks-ext */ './node_modules/core-js/library/modules/_wks-ext.js',
        )
        var defineProperty = __webpack_require__(
          /*! ./_object-dp */ './node_modules/core-js/library/modules/_object-dp.js',
        ).f
        module.exports = function(name) {
          var $Symbol =
            core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {})
          if (name.charAt(0) != '_' && !(name in $Symbol))
            defineProperty($Symbol, name, { value: wksExt.f(name) })
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_wks-ext.js':
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports.f = __webpack_require__(
          /*! ./_wks */ './node_modules/core-js/library/modules/_wks.js',
        )

        /***/
      },

    /***/ './node_modules/core-js/library/modules/_wks.js':
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var store = __webpack_require__(
          /*! ./_shared */ './node_modules/core-js/library/modules/_shared.js',
        )('wks')
        var uid = __webpack_require__(
          /*! ./_uid */ './node_modules/core-js/library/modules/_uid.js',
        )
        var Symbol = __webpack_require__(
          /*! ./_global */ './node_modules/core-js/library/modules/_global.js',
        ).Symbol
        var USE_SYMBOL = typeof Symbol == 'function'

        var $exports = (module.exports = function(name) {
          return (
            store[name] ||
            (store[name] =
              (USE_SYMBOL && Symbol[name]) ||
              (USE_SYMBOL ? Symbol : uid)('Symbol.' + name))
          )
        })

        $exports.store = store

        /***/
      },

    /***/ './node_modules/core-js/library/modules/core.get-iterator-method.js':
      /*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var classof = __webpack_require__(
          /*! ./_classof */ './node_modules/core-js/library/modules/_classof.js',
        )
        var ITERATOR = __webpack_require__(
          /*! ./_wks */ './node_modules/core-js/library/modules/_wks.js',
        )('iterator')
        var Iterators = __webpack_require__(
          /*! ./_iterators */ './node_modules/core-js/library/modules/_iterators.js',
        )
        module.exports = __webpack_require__(
          /*! ./_core */ './node_modules/core-js/library/modules/_core.js',
        ).getIteratorMethod = function(it) {
          if (it != undefined)
            return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)]
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/core.is-iterable.js':
      /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var classof = __webpack_require__(
          /*! ./_classof */ './node_modules/core-js/library/modules/_classof.js',
        )
        var ITERATOR = __webpack_require__(
          /*! ./_wks */ './node_modules/core-js/library/modules/_wks.js',
        )('iterator')
        var Iterators = __webpack_require__(
          /*! ./_iterators */ './node_modules/core-js/library/modules/_iterators.js',
        )
        module.exports = __webpack_require__(
          /*! ./_core */ './node_modules/core-js/library/modules/_core.js',
        ).isIterable = function(it) {
          var O = Object(it)
          return (
            O[ITERATOR] !== undefined ||
            '@@iterator' in O ||
            // eslint-disable-next-line no-prototype-builtins
            Iterators.hasOwnProperty(classof(O))
          )
        }

        /***/
      },

    /***/ './node_modules/core-js/library/modules/es6.array.from.js':
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var ctx = __webpack_require__(
          /*! ./_ctx */ './node_modules/core-js/library/modules/_ctx.js',
        )
        var $export = __webpack_require__(
          /*! ./_export */ './node_modules/core-js/library/modules/_export.js',
        )
        var toObject = __webpack_require__(
          /*! ./_to-object */ './node_modules/core-js/library/modules/_to-object.js',
        )
        var call = __webpack_require__(
          /*! ./_iter-call */ './node_modules/core-js/library/modules/_iter-call.js',
        )
        var isArrayIter = __webpack_require__(
          /*! ./_is-array-iter */ './node_modules/core-js/library/modules/_is-array-iter.js',
        )
        var toLength = __webpack_require__(
          /*! ./_to-length */ './node_modules/core-js/library/modules/_to-length.js',
        )
        var createProperty = __webpack_require__(
          /*! ./_create-property */ './node_modules/core-js/library/modules/_create-property.js',
        )
        var getIterFn = __webpack_require__(
          /*! ./core.get-iterator-method */ './node_modules/core-js/library/modules/core.get-iterator-method.js',
        )

        $export(
          $export.S +
            $export.F *
              !__webpack_require__(
                /*! ./_iter-detect */ './node_modules/core-js/library/modules/_iter-detect.js',
              )(function(iter) {
                Array.from(iter)
              }),
          'Array',
          {
            // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
            from: function from(
              arrayLike /* , mapfn = undefined, thisArg = undefined */,
            ) {
              var O = toObject(arrayLike)
              var C = typeof this == 'function' ? this : Array
              var aLen = arguments.length
              var mapfn = aLen > 1 ? arguments[1] : undefined
              var mapping = mapfn !== undefined
              var index = 0
              var iterFn = getIterFn(O)
              var length, result, step, iterator
              if (mapping)
                mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2)
              // if object isn't iterable or it's array with default iterator - use simple case
              if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
                for (
                  iterator = iterFn.call(O), result = new C();
                  !(step = iterator.next()).done;
                  index++
                ) {
                  createProperty(
                    result,
                    index,
                    mapping
                      ? call(iterator, mapfn, [step.value, index], true)
                      : step.value,
                  )
                }
              } else {
                length = toLength(O.length)
                for (result = new C(length); length > index; index++) {
                  createProperty(
                    result,
                    index,
                    mapping ? mapfn(O[index], index) : O[index],
                  )
                }
              }
              result.length = index
              return result
            },
          },
        )

        /***/
      },

    /***/ './node_modules/core-js/library/modules/es6.array.is-array.js':
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
        var $export = __webpack_require__(
          /*! ./_export */ './node_modules/core-js/library/modules/_export.js',
        )

        $export($export.S, 'Array', {
          isArray: __webpack_require__(
            /*! ./_is-array */ './node_modules/core-js/library/modules/_is-array.js',
          ),
        })

        /***/
      },

    /***/ './node_modules/core-js/library/modules/es6.array.iterator.js':
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var addToUnscopables = __webpack_require__(
          /*! ./_add-to-unscopables */ './node_modules/core-js/library/modules/_add-to-unscopables.js',
        )
        var step = __webpack_require__(
          /*! ./_iter-step */ './node_modules/core-js/library/modules/_iter-step.js',
        )
        var Iterators = __webpack_require__(
          /*! ./_iterators */ './node_modules/core-js/library/modules/_iterators.js',
        )
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ './node_modules/core-js/library/modules/_to-iobject.js',
        )

        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module.exports = __webpack_require__(
          /*! ./_iter-define */ './node_modules/core-js/library/modules/_iter-define.js',
        )(
          Array,
          'Array',
          function(iterated, kind) {
            this._t = toIObject(iterated) // target
            this._i = 0 // next index
            this._k = kind // kind
            // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
          },
          function() {
            var O = this._t
            var kind = this._k
            var index = this._i++
            if (!O || index >= O.length) {
              this._t = undefined
              return step(1)
            }
            if (kind == 'keys') return step(0, index)
            if (kind == 'values') return step(0, O[index])
            return step(0, [index, O[index]])
          },
          'values',
        )

        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array

        addToUnscopables('keys')
        addToUnscopables('values')
        addToUnscopables('entries')

        /***/
      },

    /***/ './node_modules/core-js/library/modules/es6.object.create.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(
          /*! ./_export */ './node_modules/core-js/library/modules/_export.js',
        )
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        $export($export.S, 'Object', {
          create: __webpack_require__(
            /*! ./_object-create */ './node_modules/core-js/library/modules/_object-create.js',
          ),
        })

        /***/
      },

    /***/ './node_modules/core-js/library/modules/es6.object.define-property.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(
          /*! ./_export */ './node_modules/core-js/library/modules/_export.js',
        )
        // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
        $export(
          $export.S +
            $export.F *
              !__webpack_require__(
                /*! ./_descriptors */ './node_modules/core-js/library/modules/_descriptors.js',
              ),
          'Object',
          {
            defineProperty: __webpack_require__(
              /*! ./_object-dp */ './node_modules/core-js/library/modules/_object-dp.js',
            ).f,
          },
        )

        /***/
      },

    /***/ './node_modules/core-js/library/modules/es6.object.get-prototype-of.js':
      /*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.9 Object.getPrototypeOf(O)
        var toObject = __webpack_require__(
          /*! ./_to-object */ './node_modules/core-js/library/modules/_to-object.js',
        )
        var $getPrototypeOf = __webpack_require__(
          /*! ./_object-gpo */ './node_modules/core-js/library/modules/_object-gpo.js',
        )

        __webpack_require__(
          /*! ./_object-sap */ './node_modules/core-js/library/modules/_object-sap.js',
        )('getPrototypeOf', function() {
          return function getPrototypeOf(it) {
            return $getPrototypeOf(toObject(it))
          }
        })

        /***/
      },

    /***/ './node_modules/core-js/library/modules/es6.object.set-prototype-of.js':
      /*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.3.19 Object.setPrototypeOf(O, proto)
        var $export = __webpack_require__(
          /*! ./_export */ './node_modules/core-js/library/modules/_export.js',
        )
        $export($export.S, 'Object', {
          setPrototypeOf: __webpack_require__(
            /*! ./_set-proto */ './node_modules/core-js/library/modules/_set-proto.js',
          ).set,
        })

        /***/
      },

    /***/ './node_modules/core-js/library/modules/es6.object.to-string.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /***/
      },

    /***/ './node_modules/core-js/library/modules/es6.set.js':
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.set.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var strong = __webpack_require__(
          /*! ./_collection-strong */ './node_modules/core-js/library/modules/_collection-strong.js',
        )
        var validate = __webpack_require__(
          /*! ./_validate-collection */ './node_modules/core-js/library/modules/_validate-collection.js',
        )
        var SET = 'Set'

        // 23.2 Set Objects
        module.exports = __webpack_require__(
          /*! ./_collection */ './node_modules/core-js/library/modules/_collection.js',
        )(
          SET,
          function(get) {
            return function Set() {
              return get(this, arguments.length > 0 ? arguments[0] : undefined)
            }
          },
          {
            // 23.2.3.1 Set.prototype.add(value)
            add: function add(value) {
              return strong.def(
                validate(this, SET),
                (value = value === 0 ? 0 : value),
                value,
              )
            },
          },
          strong,
        )

        /***/
      },

    /***/ './node_modules/core-js/library/modules/es6.string.iterator.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var $at = __webpack_require__(
          /*! ./_string-at */ './node_modules/core-js/library/modules/_string-at.js',
        )(true)

        // 21.1.3.27 String.prototype[@@iterator]()
        __webpack_require__(
          /*! ./_iter-define */ './node_modules/core-js/library/modules/_iter-define.js',
        )(
          String,
          'String',
          function(iterated) {
            this._t = String(iterated) // target
            this._i = 0 // next index
            // 21.1.5.2.1 %StringIteratorPrototype%.next()
          },
          function() {
            var O = this._t
            var index = this._i
            var point
            if (index >= O.length) return { value: undefined, done: true }
            point = $at(O, index)
            this._i += point.length
            return { value: point, done: false }
          },
        )

        /***/
      },

    /***/ './node_modules/core-js/library/modules/es6.symbol.js':
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        // ECMAScript 6 symbols shim
        var global = __webpack_require__(
          /*! ./_global */ './node_modules/core-js/library/modules/_global.js',
        )
        var has = __webpack_require__(
          /*! ./_has */ './node_modules/core-js/library/modules/_has.js',
        )
        var DESCRIPTORS = __webpack_require__(
          /*! ./_descriptors */ './node_modules/core-js/library/modules/_descriptors.js',
        )
        var $export = __webpack_require__(
          /*! ./_export */ './node_modules/core-js/library/modules/_export.js',
        )
        var redefine = __webpack_require__(
          /*! ./_redefine */ './node_modules/core-js/library/modules/_redefine.js',
        )
        var META = __webpack_require__(
          /*! ./_meta */ './node_modules/core-js/library/modules/_meta.js',
        ).KEY
        var $fails = __webpack_require__(
          /*! ./_fails */ './node_modules/core-js/library/modules/_fails.js',
        )
        var shared = __webpack_require__(
          /*! ./_shared */ './node_modules/core-js/library/modules/_shared.js',
        )
        var setToStringTag = __webpack_require__(
          /*! ./_set-to-string-tag */ './node_modules/core-js/library/modules/_set-to-string-tag.js',
        )
        var uid = __webpack_require__(
          /*! ./_uid */ './node_modules/core-js/library/modules/_uid.js',
        )
        var wks = __webpack_require__(
          /*! ./_wks */ './node_modules/core-js/library/modules/_wks.js',
        )
        var wksExt = __webpack_require__(
          /*! ./_wks-ext */ './node_modules/core-js/library/modules/_wks-ext.js',
        )
        var wksDefine = __webpack_require__(
          /*! ./_wks-define */ './node_modules/core-js/library/modules/_wks-define.js',
        )
        var enumKeys = __webpack_require__(
          /*! ./_enum-keys */ './node_modules/core-js/library/modules/_enum-keys.js',
        )
        var isArray = __webpack_require__(
          /*! ./_is-array */ './node_modules/core-js/library/modules/_is-array.js',
        )
        var anObject = __webpack_require__(
          /*! ./_an-object */ './node_modules/core-js/library/modules/_an-object.js',
        )
        var isObject = __webpack_require__(
          /*! ./_is-object */ './node_modules/core-js/library/modules/_is-object.js',
        )
        var toObject = __webpack_require__(
          /*! ./_to-object */ './node_modules/core-js/library/modules/_to-object.js',
        )
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ './node_modules/core-js/library/modules/_to-iobject.js',
        )
        var toPrimitive = __webpack_require__(
          /*! ./_to-primitive */ './node_modules/core-js/library/modules/_to-primitive.js',
        )
        var createDesc = __webpack_require__(
          /*! ./_property-desc */ './node_modules/core-js/library/modules/_property-desc.js',
        )
        var _create = __webpack_require__(
          /*! ./_object-create */ './node_modules/core-js/library/modules/_object-create.js',
        )
        var gOPNExt = __webpack_require__(
          /*! ./_object-gopn-ext */ './node_modules/core-js/library/modules/_object-gopn-ext.js',
        )
        var $GOPD = __webpack_require__(
          /*! ./_object-gopd */ './node_modules/core-js/library/modules/_object-gopd.js',
        )
        var $GOPS = __webpack_require__(
          /*! ./_object-gops */ './node_modules/core-js/library/modules/_object-gops.js',
        )
        var $DP = __webpack_require__(
          /*! ./_object-dp */ './node_modules/core-js/library/modules/_object-dp.js',
        )
        var $keys = __webpack_require__(
          /*! ./_object-keys */ './node_modules/core-js/library/modules/_object-keys.js',
        )
        var gOPD = $GOPD.f
        var dP = $DP.f
        var gOPN = gOPNExt.f
        var $Symbol = global.Symbol
        var $JSON = global.JSON
        var _stringify = $JSON && $JSON.stringify
        var PROTOTYPE = 'prototype'
        var HIDDEN = wks('_hidden')
        var TO_PRIMITIVE = wks('toPrimitive')
        var isEnum = {}.propertyIsEnumerable
        var SymbolRegistry = shared('symbol-registry')
        var AllSymbols = shared('symbols')
        var OPSymbols = shared('op-symbols')
        var ObjectProto = Object[PROTOTYPE]
        var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f
        var QObject = global.QObject
        // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
        var setter =
          !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild

        // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
        var setSymbolDesc =
          DESCRIPTORS &&
          $fails(function() {
            return (
              _create(
                dP({}, 'a', {
                  get: function() {
                    return dP(this, 'a', { value: 7 }).a
                  },
                }),
              ).a != 7
            )
          })
            ? function(it, key, D) {
                var protoDesc = gOPD(ObjectProto, key)
                if (protoDesc) delete ObjectProto[key]
                dP(it, key, D)
                if (protoDesc && it !== ObjectProto)
                  dP(ObjectProto, key, protoDesc)
              }
            : dP

        var wrap = function(tag) {
          var sym = (AllSymbols[tag] = _create($Symbol[PROTOTYPE]))
          sym._k = tag
          return sym
        }

        var isSymbol =
          USE_NATIVE && typeof $Symbol.iterator == 'symbol'
            ? function(it) {
                return typeof it == 'symbol'
              }
            : function(it) {
                return it instanceof $Symbol
              }

        var $defineProperty = function defineProperty(it, key, D) {
          if (it === ObjectProto) $defineProperty(OPSymbols, key, D)
          anObject(it)
          key = toPrimitive(key, true)
          anObject(D)
          if (has(AllSymbols, key)) {
            if (!D.enumerable) {
              if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}))
              it[HIDDEN][key] = true
            } else {
              if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false
              D = _create(D, { enumerable: createDesc(0, false) })
            }
            return setSymbolDesc(it, key, D)
          }
          return dP(it, key, D)
        }
        var $defineProperties = function defineProperties(it, P) {
          anObject(it)
          var keys = enumKeys((P = toIObject(P)))
          var i = 0
          var l = keys.length
          var key
          while (l > i) $defineProperty(it, (key = keys[i++]), P[key])
          return it
        }
        var $create = function create(it, P) {
          return P === undefined
            ? _create(it)
            : $defineProperties(_create(it), P)
        }
        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
          var E = isEnum.call(this, (key = toPrimitive(key, true)))
          if (
            this === ObjectProto &&
            has(AllSymbols, key) &&
            !has(OPSymbols, key)
          )
            return false
          return E ||
            !has(this, key) ||
            !has(AllSymbols, key) ||
            (has(this, HIDDEN) && this[HIDDEN][key])
            ? E
            : true
        }
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(
          it,
          key,
        ) {
          it = toIObject(it)
          key = toPrimitive(key, true)
          if (
            it === ObjectProto &&
            has(AllSymbols, key) &&
            !has(OPSymbols, key)
          )
            return
          var D = gOPD(it, key)
          if (
            D &&
            has(AllSymbols, key) &&
            !(has(it, HIDDEN) && it[HIDDEN][key])
          )
            D.enumerable = true
          return D
        }
        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
          var names = gOPN(toIObject(it))
          var result = []
          var i = 0
          var key
          while (names.length > i) {
            if (
              !has(AllSymbols, (key = names[i++])) &&
              key != HIDDEN &&
              key != META
            )
              result.push(key)
          }
          return result
        }
        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
          var IS_OP = it === ObjectProto
          var names = gOPN(IS_OP ? OPSymbols : toIObject(it))
          var result = []
          var i = 0
          var key
          while (names.length > i) {
            if (
              has(AllSymbols, (key = names[i++])) &&
              (IS_OP ? has(ObjectProto, key) : true)
            )
              result.push(AllSymbols[key])
          }
          return result
        }

        // 19.4.1.1 Symbol([description])
        if (!USE_NATIVE) {
          $Symbol = function Symbol() {
            if (this instanceof $Symbol)
              throw TypeError('Symbol is not a constructor!')
            var tag = uid(arguments.length > 0 ? arguments[0] : undefined)
            var $set = function(value) {
              if (this === ObjectProto) $set.call(OPSymbols, value)
              if (has(this, HIDDEN) && has(this[HIDDEN], tag))
                this[HIDDEN][tag] = false
              setSymbolDesc(this, tag, createDesc(1, value))
            }
            if (DESCRIPTORS && setter)
              setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set })
            return wrap(tag)
          }
          redefine($Symbol[PROTOTYPE], 'toString', function toString() {
            return this._k
          })

          $GOPD.f = $getOwnPropertyDescriptor
          $DP.f = $defineProperty
          __webpack_require__(
            /*! ./_object-gopn */ './node_modules/core-js/library/modules/_object-gopn.js',
          ).f = gOPNExt.f = $getOwnPropertyNames
          __webpack_require__(
            /*! ./_object-pie */ './node_modules/core-js/library/modules/_object-pie.js',
          ).f = $propertyIsEnumerable
          $GOPS.f = $getOwnPropertySymbols

          if (
            DESCRIPTORS &&
            !__webpack_require__(
              /*! ./_library */ './node_modules/core-js/library/modules/_library.js',
            )
          ) {
            redefine(
              ObjectProto,
              'propertyIsEnumerable',
              $propertyIsEnumerable,
              true,
            )
          }

          wksExt.f = function(name) {
            return wrap(wks(name))
          }
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, {
          Symbol: $Symbol,
        })

        for (
          var es6Symbols = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split( // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
              ',',
            ),
            j = 0;
          es6Symbols.length > j;

        )
          wks(es6Symbols[j++])

        for (
          var wellKnownSymbols = $keys(wks.store), k = 0;
          wellKnownSymbols.length > k;

        )
          wksDefine(wellKnownSymbols[k++])

        $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
          // 19.4.2.1 Symbol.for(key)
          for: function(key) {
            return has(SymbolRegistry, (key += ''))
              ? SymbolRegistry[key]
              : (SymbolRegistry[key] = $Symbol(key))
          },
          // 19.4.2.5 Symbol.keyFor(sym)
          keyFor: function keyFor(sym) {
            if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!')
            for (var key in SymbolRegistry)
              if (SymbolRegistry[key] === sym) return key
          },
          useSetter: function() {
            setter = true
          },
          useSimple: function() {
            setter = false
          },
        })

        $export($export.S + $export.F * !USE_NATIVE, 'Object', {
          // 19.1.2.2 Object.create(O [, Properties])
          create: $create,
          // 19.1.2.4 Object.defineProperty(O, P, Attributes)
          defineProperty: $defineProperty,
          // 19.1.2.3 Object.defineProperties(O, Properties)
          defineProperties: $defineProperties,
          // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
          getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
          // 19.1.2.7 Object.getOwnPropertyNames(O)
          getOwnPropertyNames: $getOwnPropertyNames,
          // 19.1.2.8 Object.getOwnPropertySymbols(O)
          getOwnPropertySymbols: $getOwnPropertySymbols,
        })

        // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
        // https://bugs.chromium.org/p/v8/issues/detail?id=3443
        var FAILS_ON_PRIMITIVES = $fails(function() {
          $GOPS.f(1)
        })

        $export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
          getOwnPropertySymbols: function getOwnPropertySymbols(it) {
            return $GOPS.f(toObject(it))
          },
        })

        // 24.3.2 JSON.stringify(value [, replacer [, space]])
        $JSON &&
          $export(
            $export.S +
              $export.F *
                (!USE_NATIVE ||
                  $fails(function() {
                    var S = $Symbol()
                    // MS Edge converts symbol values to JSON as {}
                    // WebKit converts symbol values to JSON as null
                    // V8 throws on boxed symbols
                    return (
                      _stringify([S]) != '[null]' ||
                      _stringify({ a: S }) != '{}' ||
                      _stringify(Object(S)) != '{}'
                    )
                  })),
            'JSON',
            {
              stringify: function stringify(it) {
                var args = [it]
                var i = 1
                var replacer, $replacer
                while (arguments.length > i) args.push(arguments[i++])
                $replacer = replacer = args[1]
                if ((!isObject(replacer) && it === undefined) || isSymbol(it))
                  return // IE8 returns string on undefined
                if (!isArray(replacer))
                  replacer = function(key, value) {
                    if (typeof $replacer == 'function')
                      value = $replacer.call(this, key, value)
                    if (!isSymbol(value)) return value
                  }
                args[1] = replacer
                return _stringify.apply($JSON, args)
              },
            },
          )

        // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
        $Symbol[PROTOTYPE][TO_PRIMITIVE] ||
          __webpack_require__(
            /*! ./_hide */ './node_modules/core-js/library/modules/_hide.js',
          )($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf)
        // 19.4.3.5 Symbol.prototype[@@toStringTag]
        setToStringTag($Symbol, 'Symbol')
        // 20.2.1.9 Math[@@toStringTag]
        setToStringTag(Math, 'Math', true)
        // 24.3.3 JSON[@@toStringTag]
        setToStringTag(global.JSON, 'JSON', true)

        /***/
      },

    /***/ './node_modules/core-js/library/modules/es7.set.from.js':
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.from.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
        __webpack_require__(
          /*! ./_set-collection-from */ './node_modules/core-js/library/modules/_set-collection-from.js',
        )('Set')

        /***/
      },

    /***/ './node_modules/core-js/library/modules/es7.set.of.js':
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.of.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
        __webpack_require__(
          /*! ./_set-collection-of */ './node_modules/core-js/library/modules/_set-collection-of.js',
        )('Set')

        /***/
      },

    /***/ './node_modules/core-js/library/modules/es7.set.to-json.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.to-json.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var $export = __webpack_require__(
          /*! ./_export */ './node_modules/core-js/library/modules/_export.js',
        )

        $export($export.P + $export.R, 'Set', {
          toJSON: __webpack_require__(
            /*! ./_collection-to-json */ './node_modules/core-js/library/modules/_collection-to-json.js',
          )('Set'),
        })

        /***/
      },

    /***/ './node_modules/core-js/library/modules/es7.symbol.async-iterator.js':
      /*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ./_wks-define */ './node_modules/core-js/library/modules/_wks-define.js',
        )('asyncIterator')

        /***/
      },

    /***/ './node_modules/core-js/library/modules/es7.symbol.observable.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ./_wks-define */ './node_modules/core-js/library/modules/_wks-define.js',
        )('observable')

        /***/
      },

    /***/ './node_modules/core-js/library/modules/web.dom.iterable.js':
      /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ./es6.array.iterator */ './node_modules/core-js/library/modules/es6.array.iterator.js',
        )
        var global = __webpack_require__(
          /*! ./_global */ './node_modules/core-js/library/modules/_global.js',
        )
        var hide = __webpack_require__(
          /*! ./_hide */ './node_modules/core-js/library/modules/_hide.js',
        )
        var Iterators = __webpack_require__(
          /*! ./_iterators */ './node_modules/core-js/library/modules/_iterators.js',
        )
        var TO_STRING_TAG = __webpack_require__(
          /*! ./_wks */ './node_modules/core-js/library/modules/_wks.js',
        )('toStringTag')

        var DOMIterables = (
          'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
          'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
          'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
          'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
          'TextTrackList,TouchList'
        ).split(',')

        for (var i = 0; i < DOMIterables.length; i++) {
          var NAME = DOMIterables[i]
          var Collection = global[NAME]
          var proto = Collection && Collection.prototype
          if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME)
          Iterators[NAME] = Iterators.Array
        }

        /***/
      },

    /***/ './node_modules/next-server/dist/lib/amp.js':
      /*!**************************************************!*\
  !*** ./node_modules/next-server/dist/lib/amp.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var __importDefault =
          (void 0 && (void 0).__importDefault) ||
          function(mod) {
            return mod && mod.__esModule
              ? mod
              : {
                  default: mod,
                }
          }

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })

        var react_1 = __importDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js'),
        )

        var amphtml_context_1 = __webpack_require__(
          /*! ./amphtml-context */ './node_modules/next-server/dist/lib/amphtml-context.js',
        )

        function isAmp() {
          var _ref =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {},
            _ref$enabled = _ref.enabled,
            enabled = _ref$enabled === void 0 ? false : _ref$enabled,
            _ref$hybrid = _ref.hybrid,
            hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
            _ref$hasQuery = _ref.hasQuery,
            hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery

          return enabled && (!hybrid || (hybrid && hasQuery))
        }

        exports.isAmp = isAmp

        function useAmp() {
          var ampMode = react_1.default.useContext(
            amphtml_context_1.AmpModeContext,
          ) // un-comment below to not be considered AMP in dirty mode

          return isAmp(ampMode) // && ampMode.hasQuery
        }

        exports.useAmp = useAmp

        function withAmp(Component) {
          var _ref2 =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {},
            _ref2$hybrid = _ref2.hybrid,
            hybrid = _ref2$hybrid === void 0 ? false : _ref2$hybrid

          function WithAmpWrapper() {
            var props =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {}
            var ampMode = react_1.default.useContext(
              amphtml_context_1.AmpModeContext,
            )
            ampMode.enabled = true
            ampMode.hybrid = hybrid
            return react_1.default.createElement(Component, props)
          }

          WithAmpWrapper.__nextAmpOnly = !hybrid
          WithAmpWrapper.getInitialProps = Component.getInitialProps
          return WithAmpWrapper
        }

        exports.withAmp = withAmp

        /***/
      },

    /***/ './node_modules/next-server/dist/lib/amphtml-context.js':
      /*!**************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/amphtml-context.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var __importStar =
          (void 0 && (void 0).__importStar) ||
          function(mod) {
            if (mod && mod.__esModule) return mod
            var result = {}
            if (mod != null)
              for (var k in mod) {
                if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
              }
            result['default'] = mod
            return result
          }

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })

        var React = __importStar(
          __webpack_require__(/*! react */ './node_modules/react/index.js'),
        )

        exports.AmpModeContext = React.createContext({})

        /***/
      },

    /***/ './node_modules/next-server/dist/lib/head-manager-context.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/head-manager-context.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var __importStar =
          (void 0 && (void 0).__importStar) ||
          function(mod) {
            if (mod && mod.__esModule) return mod
            var result = {}
            if (mod != null)
              for (var k in mod) {
                if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
              }
            result['default'] = mod
            return result
          }

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })

        var React = __importStar(
          __webpack_require__(/*! react */ './node_modules/react/index.js'),
        )

        exports.HeadManagerContext = React.createContext(null)

        /***/
      },

    /***/ './node_modules/next-server/dist/lib/head.js':
      /*!***************************************************!*\
  !*** ./node_modules/next-server/dist/lib/head.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ './node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js',
        )

        var _set = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/core-js/set */ './node_modules/@babel/runtime-corejs2/core-js/set.js',
          ),
        )

        var __importDefault =
          (void 0 && (void 0).__importDefault) ||
          function(mod) {
            return mod && mod.__esModule
              ? mod
              : {
                  default: mod,
                }
          }

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })

        var react_1 = __importDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js'),
        )

        var side_effect_1 = __importDefault(
          __webpack_require__(
            /*! ./side-effect */ './node_modules/next-server/dist/lib/side-effect.js',
          ),
        )

        var amphtml_context_1 = __webpack_require__(
          /*! ./amphtml-context */ './node_modules/next-server/dist/lib/amphtml-context.js',
        )

        var head_manager_context_1 = __webpack_require__(
          /*! ./head-manager-context */ './node_modules/next-server/dist/lib/head-manager-context.js',
        )

        var amp_1 = __webpack_require__(
          /*! ./amp */ './node_modules/next-server/dist/lib/amp.js',
        )

        function defaultHead() {
          var className =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 'next-head'
          var isAmp =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : false
          var head = [
            react_1.default.createElement('meta', {
              key: 'charSet',
              charSet: 'utf-8',
              className: className,
            }),
          ]

          if (!isAmp) {
            head.push(
              react_1.default.createElement('meta', {
                key: 'viewport',
                name: 'viewport',
                content: 'width=device-width,minimum-scale=1,initial-scale=1',
                className: className,
              }),
            )
          }

          return head
        }

        exports.defaultHead = defaultHead

        function onlyReactElement(list, child) {
          // React children can be "string" or "number" in this case we ignore them for backwards compat
          if (typeof child === 'string' || typeof child === 'number') {
            return list
          } // Adds support for React.Fragment

          if (child.type === react_1.default.Fragment) {
            return list.concat(
              react_1.default.Children.toArray(child.props.children).reduce(
                function(fragmentList, fragmentChild) {
                  if (
                    typeof fragmentChild === 'string' ||
                    typeof fragmentChild === 'number'
                  ) {
                    return fragmentList
                  }

                  return fragmentList.concat(fragmentChild)
                },
                [],
              ),
            )
          }

          return list.concat(child)
        }

        var METATYPES = ['name', 'httpEquiv', 'charSet', 'viewport', 'itemProp']
        /*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

        function unique() {
          var keys = new _set.default()
          var tags = new _set.default()
          var metaTypes = new _set.default()
          var metaCategories = {}
          return function(h) {
            if (
              h.key &&
              typeof h.key !== 'number' &&
              h.key.indexOf('.$') === 0
            ) {
              if (keys.has(h.key)) return false
              keys.add(h.key)
              return true
            }

            switch (h.type) {
              case 'title':
              case 'base':
                if (tags.has(h.type)) return false
                tags.add(h.type)
                break

              case 'meta':
                for (var i = 0, len = METATYPES.length; i < len; i++) {
                  var metatype = METATYPES[i]
                  if (!h.props.hasOwnProperty(metatype)) continue

                  if (metatype === 'charSet' || metatype === 'viewport') {
                    if (metaTypes.has(metatype)) return false
                    metaTypes.add(metatype)
                  } else {
                    var category = h.props[metatype]
                    var categories =
                      metaCategories[metatype] || new _set.default()
                    if (categories.has(category)) return false
                    categories.add(category)
                    metaCategories[metatype] = categories
                  }
                }

                break
            }

            return true
          }
        }
        /**
         *
         * @param headElement List of multiple <Head> instances
         */

        function reduceComponents(headElements, props) {
          return headElements
            .reduce(function(list, headElement) {
              var headElementChildren = react_1.default.Children.toArray(
                headElement.props.children,
              )
              return list.concat(headElementChildren)
            }, [])
            .reduce(onlyReactElement, [])
            .reverse()
            .concat(defaultHead('', props.isAmp))
            .filter(unique())
            .reverse()
            .map(function(c, i) {
              var className =
                (c.props && c.props.className ? c.props.className + ' ' : '') +
                'next-head'
              var key = c.key || i
              return react_1.default.cloneElement(c, {
                key: key,
                className: className,
              })
            })
        }

        var Effect = side_effect_1.default()

        function Head(_ref) {
          var children = _ref.children
          return react_1.default.createElement(
            amphtml_context_1.AmpModeContext.Consumer,
            null,
            function(ampMode) {
              return react_1.default.createElement(
                head_manager_context_1.HeadManagerContext.Consumer,
                null,
                function(updateHead) {
                  return react_1.default.createElement(
                    Effect,
                    {
                      reduceComponentsToState: reduceComponents,
                      handleStateChange: updateHead,
                      isAmp: amp_1.isAmp(ampMode),
                    },
                    children,
                  )
                },
              )
            },
          )
        }

        Head.rewind = Effect.rewind
        exports.default = Head

        /***/
      },

    /***/ './node_modules/next-server/dist/lib/side-effect.js':
      /*!**********************************************************!*\
  !*** ./node_modules/next-server/dist/lib/side-effect.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ './node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js',
        )

        var _classCallCheck2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ './node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js',
          ),
        )

        var _possibleConstructorReturn2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ './node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js',
          ),
        )

        var _getPrototypeOf2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ './node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js',
          ),
        )

        var _assertThisInitialized2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ './node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js',
          ),
        )

        var _createClass2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/esm/createClass */ './node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js',
          ),
        )

        var _inherits2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/esm/inherits */ './node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js',
          ),
        )

        var _toConsumableArray2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ './node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js',
          ),
        )

        var _set = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/core-js/set */ './node_modules/@babel/runtime-corejs2/core-js/set.js',
          ),
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })

        var react_1 = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        )

        var isServer = typeof window === 'undefined'

        function withSideEffect() {
          var mountedInstances = new _set.default()
          var state

          function emitChange(component) {
            state = component.props.reduceComponentsToState(
              (0, _toConsumableArray2.default)(mountedInstances),
              component.props,
            )

            if (component.props.handleStateChange) {
              component.props.handleStateChange(state)
            }
          }

          var SideEffect =
            /*#__PURE__*/
            (function(_react_1$Component) {
              ;(0, _inherits2.default)(SideEffect, _react_1$Component)
              ;(0, _createClass2.default)(SideEffect, null, [
                {
                  key: 'rewind',
                  // Used when server rendering
                  value: function rewind() {
                    var recordedState = state
                    state = undefined
                    mountedInstances.clear()
                    return recordedState
                  },
                },
              ])

              function SideEffect(props) {
                var _this
                ;(0, _classCallCheck2.default)(this, SideEffect)
                _this = (0, _possibleConstructorReturn2.default)(
                  this,
                  (0, _getPrototypeOf2.default)(SideEffect).call(this, props),
                )

                if (isServer) {
                  mountedInstances.add(
                    (0, _assertThisInitialized2.default)(_this),
                  )
                  emitChange((0, _assertThisInitialized2.default)(_this))
                }

                return _this
              }

              ;(0, _createClass2.default)(SideEffect, [
                {
                  key: 'componentDidMount',
                  value: function componentDidMount() {
                    mountedInstances.add(this)
                    emitChange(this)
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function componentDidUpdate() {
                    emitChange(this)
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function componentWillUnmount() {
                    mountedInstances.delete(this)
                    emitChange(this)
                  },
                },
                {
                  key: 'render',
                  value: function render() {
                    return null
                  },
                },
              ])
              return SideEffect
            })(react_1.Component)

          return SideEffect
        }

        exports.default = withSideEffect

        /***/
      },

    /***/ './node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CVICENTE-PC%5CProjects%5Cvicentedealencar.github.com%5Cpackages%5Cgh-pages-app%5Cpages%5Cindex.js!./':
      /*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CVICENTE-PC%5CProjects%5Cvicentedealencar.github.com%5Cpackages%5Cgh-pages-app%5Cpages%5Cindex.js ***!
  \****************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        ;(window.__NEXT_P = window.__NEXT_P || []).push([
          '/',
          function() {
            var page = __webpack_require__(
              /*! ./pages/index.js */ './pages/index.js',
            )
            if (true) {
              module.hot.accept(
                /*! ./pages/index.js */ './pages/index.js',
                function() {
                  if (!next.router.components['/']) return
                  var updatedPage = __webpack_require__(
                    /*! ./pages/index.js */ './pages/index.js',
                  )
                  next.router.update('/', updatedPage.default || updatedPage)
                },
              )
            }
            return { page: page.default || page }
          },
        ])

        /***/
      },

    /***/ './node_modules/process/browser.js':
      /*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // shim for using process in browser
        var process = (module.exports = {})

        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout
        var cachedClearTimeout

        function defaultSetTimout() {
          throw new Error('setTimeout has not been defined')
        }
        function defaultClearTimeout() {
          throw new Error('clearTimeout has not been defined')
        }
        ;(function() {
          try {
            if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout
            } else {
              cachedSetTimeout = defaultSetTimout
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout
          }
          try {
            if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout
            } else {
              cachedClearTimeout = defaultClearTimeout
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout
          }
        })()
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0)
          }
          // if setTimeout wasn't available but was latter defined
          if (
            (cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
            setTimeout
          ) {
            cachedSetTimeout = setTimeout
            return setTimeout(fun, 0)
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0)
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0)
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0)
            }
          }
        }
        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker)
          }
          // if clearTimeout wasn't available but was latter defined
          if (
            (cachedClearTimeout === defaultClearTimeout ||
              !cachedClearTimeout) &&
            clearTimeout
          ) {
            cachedClearTimeout = clearTimeout
            return clearTimeout(marker)
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker)
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker)
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker)
            }
          }
        }
        var queue = []
        var draining = false
        var currentQueue
        var queueIndex = -1

        function cleanUpNextTick() {
          if (!draining || !currentQueue) {
            return
          }
          draining = false
          if (currentQueue.length) {
            queue = currentQueue.concat(queue)
          } else {
            queueIndex = -1
          }
          if (queue.length) {
            drainQueue()
          }
        }

        function drainQueue() {
          if (draining) {
            return
          }
          var timeout = runTimeout(cleanUpNextTick)
          draining = true

          var len = queue.length
          while (len) {
            currentQueue = queue
            queue = []
            while (++queueIndex < len) {
              if (currentQueue) {
                currentQueue[queueIndex].run()
              }
            }
            queueIndex = -1
            len = queue.length
          }
          currentQueue = null
          draining = false
          runClearTimeout(timeout)
        }

        process.nextTick = function(fun) {
          var args = new Array(arguments.length - 1)
          if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i]
            }
          }
          queue.push(new Item(fun, args))
          if (queue.length === 1 && !draining) {
            runTimeout(drainQueue)
          }
        }

        // v8 likes predictible objects
        function Item(fun, array) {
          this.fun = fun
          this.array = array
        }
        Item.prototype.run = function() {
          this.fun.apply(null, this.array)
        }
        process.title = 'browser'
        process.browser = true
        process.env = {}
        process.argv = []
        process.version = '' // empty string to avoid regexp issues
        process.versions = {}

        function noop() {}

        process.on = noop
        process.addListener = noop
        process.once = noop
        process.off = noop
        process.removeListener = noop
        process.removeAllListeners = noop
        process.emit = noop
        process.prependListener = noop
        process.prependOnceListener = noop

        process.listeners = function(name) {
          return []
        }

        process.binding = function(name) {
          throw new Error('process.binding is not supported')
        }

        process.cwd = function() {
          return '/'
        }
        process.chdir = function(dir) {
          throw new Error('process.chdir is not supported')
        }
        process.umask = function() {
          return 0
        }

        /***/
      },

    /***/ './node_modules/react/index.js':
      /*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_afa7b25a60452594c240 ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! dll-reference dll_afa7b25a60452594c240 */ 'dll-reference dll_afa7b25a60452594c240',
        )('./node_modules/react/index.js')

        /***/
      },

    /***/ './node_modules/string-hash/index.js':
      /*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        function hash(str) {
          var hash = 5381,
            i = str.length

          while (i) {
            hash = (hash * 33) ^ str.charCodeAt(--i)
          }

          /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
           * integers. Since we want the results to be always positive, convert the
           * signed int to an unsigned by doing an unsigned bitshift. */
          return hash >>> 0
        }

        module.exports = hash

        /***/
      },

    /***/ './node_modules/styled-jsx/dist/lib/stylesheet.js':
      /*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /* WEBPACK VAR INJECTION */
        ;(function(process) {
          Object.defineProperty(exports, '__esModule', {
            value: true,
          })
          exports.default = void 0

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i]
              descriptor.enumerable = descriptor.enumerable || false
              descriptor.configurable = true
              if ('value' in descriptor) descriptor.writable = true
              Object.defineProperty(target, descriptor.key, descriptor)
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps)
            if (staticProps) _defineProperties(Constructor, staticProps)
            return Constructor
          }

          /*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
          var isProd = process.env && 'development' === 'production'

          var isString = function isString(o) {
            return Object.prototype.toString.call(o) === '[object String]'
          }

          var StyleSheet =
            /*#__PURE__*/
            (function() {
              function StyleSheet() {
                var _ref =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : {},
                  _ref$name = _ref.name,
                  name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
                  _ref$optimizeForSpeed = _ref.optimizeForSpeed,
                  optimizeForSpeed =
                    _ref$optimizeForSpeed === void 0
                      ? isProd
                      : _ref$optimizeForSpeed,
                  _ref$isBrowser = _ref.isBrowser,
                  isBrowser =
                    _ref$isBrowser === void 0
                      ? typeof window !== 'undefined'
                      : _ref$isBrowser

                _classCallCheck(this, StyleSheet)

                invariant(isString(name), '`name` must be a string')
                this._name = name
                this._deletedRulePlaceholder = '#'.concat(
                  name,
                  '-deleted-rule____{}',
                )
                invariant(
                  typeof optimizeForSpeed === 'boolean',
                  '`optimizeForSpeed` must be a boolean',
                )
                this._optimizeForSpeed = optimizeForSpeed
                this._isBrowser = isBrowser
                this._serverSheet = undefined
                this._tags = []
                this._injected = false
                this._rulesCount = 0
                var node =
                  this._isBrowser &&
                  document.querySelector('meta[property="csp-nonce"]')
                this._nonce = node ? node.getAttribute('content') : null
              }

              _createClass(StyleSheet, [
                {
                  key: 'setOptimizeForSpeed',
                  value: function setOptimizeForSpeed(bool) {
                    invariant(
                      typeof bool === 'boolean',
                      '`setOptimizeForSpeed` accepts a boolean',
                    )
                    invariant(
                      this._rulesCount === 0,
                      'optimizeForSpeed cannot be when rules have already been inserted',
                    )
                    this.flush()
                    this._optimizeForSpeed = bool
                    this.inject()
                  },
                },
                {
                  key: 'isOptimizeForSpeed',
                  value: function isOptimizeForSpeed() {
                    return this._optimizeForSpeed
                  },
                },
                {
                  key: 'inject',
                  value: function inject() {
                    var _this = this

                    invariant(!this._injected, 'sheet already injected')
                    this._injected = true

                    if (this._isBrowser && this._optimizeForSpeed) {
                      this._tags[0] = this.makeStyleTag(this._name)
                      this._optimizeForSpeed = 'insertRule' in this.getSheet()

                      if (!this._optimizeForSpeed) {
                        if (!isProd) {
                          console.warn(
                            'StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.',
                          )
                        }

                        this.flush()
                        this._injected = true
                      }

                      return
                    }

                    this._serverSheet = {
                      cssRules: [],
                      insertRule: function insertRule(rule, index) {
                        if (typeof index === 'number') {
                          _this._serverSheet.cssRules[index] = {
                            cssText: rule,
                          }
                        } else {
                          _this._serverSheet.cssRules.push({
                            cssText: rule,
                          })
                        }

                        return index
                      },
                      deleteRule: function deleteRule(index) {
                        _this._serverSheet.cssRules[index] = null
                      },
                    }
                  },
                },
                {
                  key: 'getSheetForTag',
                  value: function getSheetForTag(tag) {
                    if (tag.sheet) {
                      return tag.sheet
                    } // this weirdness brought to you by firefox

                    for (var i = 0; i < document.styleSheets.length; i++) {
                      if (document.styleSheets[i].ownerNode === tag) {
                        return document.styleSheets[i]
                      }
                    }
                  },
                },
                {
                  key: 'getSheet',
                  value: function getSheet() {
                    return this.getSheetForTag(
                      this._tags[this._tags.length - 1],
                    )
                  },
                },
                {
                  key: 'insertRule',
                  value: function insertRule(rule, index) {
                    invariant(
                      isString(rule),
                      '`insertRule` accepts only strings',
                    )

                    if (!this._isBrowser) {
                      if (typeof index !== 'number') {
                        index = this._serverSheet.cssRules.length
                      }

                      this._serverSheet.insertRule(rule, index)

                      return this._rulesCount++
                    }

                    if (this._optimizeForSpeed) {
                      var sheet = this.getSheet()

                      if (typeof index !== 'number') {
                        index = sheet.cssRules.length
                      } // this weirdness for perf, and chrome's weird bug
                      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule

                      try {
                        sheet.insertRule(rule, index)
                      } catch (error) {
                        if (!isProd) {
                          console.warn(
                            'StyleSheet: illegal rule: \n\n'.concat(
                              rule,
                              '\n\nSee https://stackoverflow.com/q/20007992 for more info',
                            ),
                          )
                        }

                        return -1
                      }
                    } else {
                      var insertionPoint = this._tags[index]

                      this._tags.push(
                        this.makeStyleTag(this._name, rule, insertionPoint),
                      )
                    }

                    return this._rulesCount++
                  },
                },
                {
                  key: 'replaceRule',
                  value: function replaceRule(index, rule) {
                    if (this._optimizeForSpeed || !this._isBrowser) {
                      var sheet = this._isBrowser
                        ? this.getSheet()
                        : this._serverSheet

                      if (!rule.trim()) {
                        rule = this._deletedRulePlaceholder
                      }

                      if (!sheet.cssRules[index]) {
                        // @TBD Should we throw an error?
                        return index
                      }

                      sheet.deleteRule(index)

                      try {
                        sheet.insertRule(rule, index)
                      } catch (error) {
                        if (!isProd) {
                          console.warn(
                            'StyleSheet: illegal rule: \n\n'.concat(
                              rule,
                              '\n\nSee https://stackoverflow.com/q/20007992 for more info',
                            ),
                          )
                        } // In order to preserve the indices we insert a deleteRulePlaceholder

                        sheet.insertRule(this._deletedRulePlaceholder, index)
                      }
                    } else {
                      var tag = this._tags[index]
                      invariant(
                        tag,
                        'old rule at index `'.concat(index, '` not found'),
                      )
                      tag.textContent = rule
                    }

                    return index
                  },
                },
                {
                  key: 'deleteRule',
                  value: function deleteRule(index) {
                    if (!this._isBrowser) {
                      this._serverSheet.deleteRule(index)

                      return
                    }

                    if (this._optimizeForSpeed) {
                      this.replaceRule(index, '')
                    } else {
                      var tag = this._tags[index]
                      invariant(
                        tag,
                        'rule at index `'.concat(index, '` not found'),
                      )
                      tag.parentNode.removeChild(tag)
                      this._tags[index] = null
                    }
                  },
                },
                {
                  key: 'flush',
                  value: function flush() {
                    this._injected = false
                    this._rulesCount = 0

                    if (this._isBrowser) {
                      this._tags.forEach(function(tag) {
                        return tag && tag.parentNode.removeChild(tag)
                      })

                      this._tags = []
                    } else {
                      // simpler on server
                      this._serverSheet.cssRules = []
                    }
                  },
                },
                {
                  key: 'cssRules',
                  value: function cssRules() {
                    var _this2 = this

                    if (!this._isBrowser) {
                      return this._serverSheet.cssRules
                    }

                    return this._tags.reduce(function(rules, tag) {
                      if (tag) {
                        rules = rules.concat(
                          _this2
                            .getSheetForTag(tag)
                            .cssRules.map(function(rule) {
                              return rule.cssText ===
                                _this2._deletedRulePlaceholder
                                ? null
                                : rule
                            }),
                        )
                      } else {
                        rules.push(null)
                      }

                      return rules
                    }, [])
                  },
                },
                {
                  key: 'makeStyleTag',
                  value: function makeStyleTag(name, cssString, relativeToTag) {
                    if (cssString) {
                      invariant(
                        isString(cssString),
                        'makeStyleTag acceps only strings as second parameter',
                      )
                    }

                    var tag = document.createElement('style')
                    if (this._nonce) tag.setAttribute('nonce', this._nonce)
                    tag.type = 'text/css'
                    tag.setAttribute('data-'.concat(name), '')

                    if (cssString) {
                      tag.appendChild(document.createTextNode(cssString))
                    }

                    var head =
                      document.head || document.getElementsByTagName('head')[0]

                    if (relativeToTag) {
                      head.insertBefore(tag, relativeToTag)
                    } else {
                      head.appendChild(tag)
                    }

                    return tag
                  },
                },
                {
                  key: 'length',
                  get: function get() {
                    return this._rulesCount
                  },
                },
              ])

              return StyleSheet
            })()

          exports.default = StyleSheet

          function invariant(condition, message) {
            if (!condition) {
              throw new Error('StyleSheet: '.concat(message, '.'))
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../process/browser.js */ './node_modules/process/browser.js',
          ),
        ))

        /***/
      },

    /***/ './node_modules/styled-jsx/dist/style.js':
      /*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.flush = flush
        exports.default = void 0

        var _react = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        )

        var _stylesheetRegistry = _interopRequireDefault(
          __webpack_require__(
            /*! ./stylesheet-registry */ './node_modules/styled-jsx/dist/stylesheet-registry.js',
          ),
        )

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        function _typeof(obj) {
          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj
            }
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }
          }
          return _typeof(obj)
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true
            Object.defineProperty(target, descriptor.key, descriptor)
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps)
          if (staticProps) _defineProperties(Constructor, staticProps)
          return Constructor
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === 'object' || typeof call === 'function')
          ) {
            return call
          }
          return _assertThisInitialized(self)
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            )
          }
          return self
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o)
              }
          return _getPrototypeOf(o)
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function',
            )
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            },
          )
          if (superClass) _setPrototypeOf(subClass, superClass)
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p
              return o
            }
          return _setPrototypeOf(o, p)
        }

        var styleSheetRegistry = new _stylesheetRegistry.default()

        var JSXStyle =
          /*#__PURE__*/
          (function(_Component) {
            _inherits(JSXStyle, _Component)

            function JSXStyle(props) {
              var _this

              _classCallCheck(this, JSXStyle)

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(JSXStyle).call(this, props),
              )
              _this.prevProps = {}
              return _this
            }

            _createClass(
              JSXStyle,
              [
                {
                  key: 'shouldComponentUpdate',
                  // probably faster than PureComponent (shallowEqual)
                  value: function shouldComponentUpdate(otherProps) {
                    return (
                      this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
                      // These are the computed values for dynamic styles.
                      String(this.props.dynamic) !== String(otherProps.dynamic)
                    )
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function componentWillUnmount() {
                    styleSheetRegistry.remove(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function render() {
                    // This is a workaround to make the side effect async safe in the "render" phase.
                    // See https://github.com/zeit/styled-jsx/pull/484
                    if (this.shouldComponentUpdate(this.prevProps)) {
                      // Updates
                      if (this.prevProps.id) {
                        styleSheetRegistry.remove(this.prevProps)
                      }

                      styleSheetRegistry.add(this.props)
                      this.prevProps = this.props
                    }

                    return null
                  },
                },
              ],
              [
                {
                  key: 'dynamic',
                  value: function dynamic(info) {
                    return info
                      .map(function(tagInfo) {
                        var baseId = tagInfo[0]
                        var props = tagInfo[1]
                        return styleSheetRegistry.computeId(baseId, props)
                      })
                      .join(' ')
                  },
                },
              ],
            )

            return JSXStyle
          })(_react.Component)

        exports.default = JSXStyle

        function flush() {
          var cssRules = styleSheetRegistry.cssRules()
          styleSheetRegistry.flush()
          return cssRules
        }

        /***/
      },

    /***/ './node_modules/styled-jsx/dist/stylesheet-registry.js':
      /*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _stringHash = _interopRequireDefault(
          __webpack_require__(
            /*! string-hash */ './node_modules/string-hash/index.js',
          ),
        )

        var _stylesheet = _interopRequireDefault(
          __webpack_require__(
            /*! ./lib/stylesheet */ './node_modules/styled-jsx/dist/lib/stylesheet.js',
          ),
        )

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true
            Object.defineProperty(target, descriptor.key, descriptor)
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps)
          if (staticProps) _defineProperties(Constructor, staticProps)
          return Constructor
        }

        var sanitize = function sanitize(rule) {
          return rule.replace(/\/style/gi, '\\/style')
        }

        var StyleSheetRegistry =
          /*#__PURE__*/
          (function() {
            function StyleSheetRegistry() {
              var _ref =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {},
                _ref$styleSheet = _ref.styleSheet,
                styleSheet =
                  _ref$styleSheet === void 0 ? null : _ref$styleSheet,
                _ref$optimizeForSpeed = _ref.optimizeForSpeed,
                optimizeForSpeed =
                  _ref$optimizeForSpeed === void 0
                    ? false
                    : _ref$optimizeForSpeed,
                _ref$isBrowser = _ref.isBrowser,
                isBrowser =
                  _ref$isBrowser === void 0
                    ? typeof window !== 'undefined'
                    : _ref$isBrowser

              _classCallCheck(this, StyleSheetRegistry)

              this._sheet =
                styleSheet ||
                new _stylesheet.default({
                  name: 'styled-jsx',
                  optimizeForSpeed: optimizeForSpeed,
                })

              this._sheet.inject()

              if (styleSheet && typeof optimizeForSpeed === 'boolean') {
                this._sheet.setOptimizeForSpeed(optimizeForSpeed)

                this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()
              }

              this._isBrowser = isBrowser
              this._fromServer = undefined
              this._indices = {}
              this._instancesCounts = {}
              this.computeId = this.createComputeId()
              this.computeSelector = this.createComputeSelector()
            }

            _createClass(StyleSheetRegistry, [
              {
                key: 'add',
                value: function add(props) {
                  var _this = this

                  if (undefined === this._optimizeForSpeed) {
                    this._optimizeForSpeed = Array.isArray(props.children)

                    this._sheet.setOptimizeForSpeed(this._optimizeForSpeed)

                    this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()
                  }

                  if (this._isBrowser && !this._fromServer) {
                    this._fromServer = this.selectFromServer()
                    this._instancesCounts = Object.keys(
                      this._fromServer,
                    ).reduce(function(acc, tagName) {
                      acc[tagName] = 0
                      return acc
                    }, {})
                  }

                  var _this$getIdAndRules = this.getIdAndRules(props),
                    styleId = _this$getIdAndRules.styleId,
                    rules = _this$getIdAndRules.rules // Deduping: just increase the instances count.

                  if (styleId in this._instancesCounts) {
                    this._instancesCounts[styleId] += 1
                    return
                  }

                  var indices = rules
                    .map(function(rule) {
                      return _this._sheet.insertRule(rule)
                    }) // Filter out invalid rules
                    .filter(function(index) {
                      return index !== -1
                    })
                  this._indices[styleId] = indices
                  this._instancesCounts[styleId] = 1
                },
              },
              {
                key: 'remove',
                value: function remove(props) {
                  var _this2 = this

                  var _this$getIdAndRules2 = this.getIdAndRules(props),
                    styleId = _this$getIdAndRules2.styleId

                  invariant(
                    styleId in this._instancesCounts,
                    'styleId: `'.concat(styleId, '` not found'),
                  )
                  this._instancesCounts[styleId] -= 1

                  if (this._instancesCounts[styleId] < 1) {
                    var tagFromServer =
                      this._fromServer && this._fromServer[styleId]

                    if (tagFromServer) {
                      tagFromServer.parentNode.removeChild(tagFromServer)
                      delete this._fromServer[styleId]
                    } else {
                      this._indices[styleId].forEach(function(index) {
                        return _this2._sheet.deleteRule(index)
                      })

                      delete this._indices[styleId]
                    }

                    delete this._instancesCounts[styleId]
                  }
                },
              },
              {
                key: 'update',
                value: function update(props, nextProps) {
                  this.add(nextProps)
                  this.remove(props)
                },
              },
              {
                key: 'flush',
                value: function flush() {
                  this._sheet.flush()

                  this._sheet.inject()

                  this._fromServer = undefined
                  this._indices = {}
                  this._instancesCounts = {}
                  this.computeId = this.createComputeId()
                  this.computeSelector = this.createComputeSelector()
                },
              },
              {
                key: 'cssRules',
                value: function cssRules() {
                  var _this3 = this

                  var fromServer = this._fromServer
                    ? Object.keys(this._fromServer).map(function(styleId) {
                        return [styleId, _this3._fromServer[styleId]]
                      })
                    : []

                  var cssRules = this._sheet.cssRules()

                  return fromServer.concat(
                    Object.keys(this._indices)
                      .map(function(styleId) {
                        return [
                          styleId,
                          _this3._indices[styleId]
                            .map(function(index) {
                              return cssRules[index].cssText
                            })
                            .join(_this3._optimizeForSpeed ? '' : '\n'),
                        ]
                      }) // filter out empty rules
                      .filter(function(rule) {
                        return Boolean(rule[1])
                      }),
                  )
                },
                /**
                 * createComputeId
                 *
                 * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
                 */
              },
              {
                key: 'createComputeId',
                value: function createComputeId() {
                  var cache = {}
                  return function(baseId, props) {
                    if (!props) {
                      return 'jsx-'.concat(baseId)
                    }

                    var propsToString = String(props)
                    var key = baseId + propsToString // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

                    if (!cache[key]) {
                      cache[key] = 'jsx-'.concat(
                        (0, _stringHash.default)(
                          ''.concat(baseId, '-').concat(propsToString),
                        ),
                      )
                    }

                    return cache[key]
                  }
                },
                /**
                 * createComputeSelector
                 *
                 * Creates a function to compute and memoize dynamic selectors.
                 */
              },
              {
                key: 'createComputeSelector',
                value: function createComputeSelector() {
                  var selectoPlaceholderRegexp =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : /__jsx-style-dynamic-selector/g
                  var cache = {}
                  return function(id, css) {
                    // Sanitize SSR-ed CSS.
                    // Client side code doesn't need to be sanitized since we use
                    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
                    if (!this._isBrowser) {
                      css = sanitize(css)
                    }

                    var idcss = id + css

                    if (!cache[idcss]) {
                      cache[idcss] = css.replace(selectoPlaceholderRegexp, id)
                    }

                    return cache[idcss]
                  }
                },
              },
              {
                key: 'getIdAndRules',
                value: function getIdAndRules(props) {
                  var _this4 = this

                  var css = props.children,
                    dynamic = props.dynamic,
                    id = props.id

                  if (dynamic) {
                    var styleId = this.computeId(id, dynamic)
                    return {
                      styleId: styleId,
                      rules: Array.isArray(css)
                        ? css.map(function(rule) {
                            return _this4.computeSelector(styleId, rule)
                          })
                        : [this.computeSelector(styleId, css)],
                    }
                  }

                  return {
                    styleId: this.computeId(id),
                    rules: Array.isArray(css) ? css : [css],
                  }
                },
                /**
                 * selectFromServer
                 *
                 * Collects style tags from the document with id __jsx-XXX
                 */
              },
              {
                key: 'selectFromServer',
                value: function selectFromServer() {
                  var elements = Array.prototype.slice.call(
                    document.querySelectorAll('[id^="__jsx-"]'),
                  )
                  return elements.reduce(function(acc, element) {
                    var id = element.id.slice(2)
                    acc[id] = element
                    return acc
                  }, {})
                },
              },
            ])

            return StyleSheetRegistry
          })()

        exports.default = StyleSheetRegistry

        function invariant(condition, message) {
          if (!condition) {
            throw new Error('StyleSheetRegistry: '.concat(message, '.'))
          }
        }

        /***/
      },

    /***/ './node_modules/styled-jsx/style.js':
      /*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./dist/style */ './node_modules/styled-jsx/dist/style.js',
        )

        /***/
      },

    /***/ './pages/index.js':
      /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-jsx/style */ './node_modules/styled-jsx/style.js',
        )
        /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__,
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        )
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! next/head */ './node_modules/next-server/dist/lib/head.js',
        )
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_2__,
        )
        var _jsxFileName =
          'C:\\Users\\VICENTE-PC\\Projects\\vicentedealencar.github.com\\packages\\gh-pages-app\\pages\\index.js'

        // import Link from 'next/link'
        // import '../css/main.css'

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = function() {
          return (
            // <div>
            //   Hello World.{' '}
            //   <Link href='/about' as={process.env.BACKEND_URL + '/about'}>
            //     <a>About</a>
            //   </Link>
            // </div>
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                next_head__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'title',
                  {
                    className: 'jsx-820594134',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 14,
                    },
                    __self: this,
                  },
                  'Vicente de Alencar',
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                {
                  className: 'jsx-820594134' + ' ' + 'container',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'h1',
                  {
                    id: 'title',
                    className: 'jsx-820594134',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17,
                    },
                    __self: this,
                  },
                  'Vicente de Alencar',
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'img',
                  {
                    alt: 'avatar',
                    src:
                      'http://gravatar.com/avatar/6805968f8f0beb313a804c2c6133e5ba.png?s=200',
                    className: 'jsx-820594134',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19,
                    },
                    __self: this,
                  },
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-820594134',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'a',
                    {
                      href: 'http://www.github.com/vicentedealencar',
                      target: '_blank',
                      className: 'jsx-820594134' + ' ' + 'nav github',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27,
                      },
                      __self: this,
                    },
                    'GitHub',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'a',
                    {
                      href: 'http://twitter.com/vicentealencar',
                      target: '_blank',
                      className: 'jsx-820594134' + ' ' + 'nav twitter',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37,
                      },
                      __self: this,
                    },
                    'Twitter',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'a',
                    {
                      href:
                        'http://br.linkedin.com/pub/vicente-de-alencar/24/932/495',
                      target: '_blank',
                      className: 'jsx-820594134' + ' ' + 'nav linkedin',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44,
                      },
                      __self: this,
                    },
                    'LinkedIn',
                  ),
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'footer',
                {
                  className: 'jsx-820594134',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'p',
                  {
                    className: 'jsx-820594134',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                    },
                    __self: this,
                  },
                  '// Life runs on code',
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
                {
                  id: '1040946094',
                  __self: this,
                },
                "body{margin:0;background-color:#333;color:#eee;text-align:center;font-family:'Segoe UI Light','Helvetica Neue','Segoe UI','Segoe WP', sans-serif;text-rendering:optimizelegibility;text-transform:lowercase;}hr{margin:25px 0;border:0;border-top:1px solid #eee;border-bottom:1px solid #fff;}img{margin:25px;height:200px;width:200px;border-radius:100px;}.container{height:calc(100vh - 75px);}.nav{font-size:22px;padding:10px 20px;color:#eee;-webkit-text-decoration:underline;text-decoration:underline;}.nav:hover{color:#f55c3d;-webkit-animation:colors 57s linear infinite;animation:colors 57s linear infinite;}@media (max-width:319px){.nav{display:block;}}.nav.github:hover{color:#00aba9;}.nav.facebook:hover{color:#3d5cf5;}.nav.twitter:hover{color:#1ba1e2;}.nav.linkedin:hover{color:#993df5;}#title{margin:0;}footer{height:75px;background-color:#eee2;}footer p{border-top:2px solid #eee;color:#8cbf26;margin:0;padding:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVklDRU5URS1QQ1xcUHJvamVjdHNcXHZpY2VudGVkZWFsZW5jYXIuZ2l0aHViLmNvbVxccGFja2FnZXNcXGdoLXBhZ2VzLWFwcFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEdUIsQUFHa0IsQUFXSyxBQU9GLEFBT2MsQUFJWCxBQU9ELEFBTUUsQUFLRixBQUlBLEFBSUEsQUFJQSxBQUlMLEFBSUcsQUFLYyxTQXZFSixBQStEeEIsR0E3Q2UsQUFpRFUsRUF4RGQsQUF5QjRCLEFBTXJDLEFBS0YsQUFJQSxBQUlBLEFBSUEsQ0E5Qm9CLFFBakJRLEVBT2QsQ0FNZCxBQStDZ0IsS0F2RUgsRUE2QkEsRUFzQ2IsRUFoRHNCLEdBcURYLEVBdkVTLEVBNkJRLEtBbEJHLEFBNkRoQixRQXJEZixHQWpCYyxFQXVFZCxnQkE3REEsa0JBdUJBLFFBTEEsb0NBM0JvQyxrQ0FDVCx5QkFDM0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxWSUNFTlRFLVBDXFxQcm9qZWN0c1xcdmljZW50ZWRlYWxlbmNhci5naXRodWIuY29tXFxwYWNrYWdlc1xcZ2gtcGFnZXMtYXBwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgLy8gPGRpdj5cclxuICAvLyAgIEhlbGxvIFdvcmxkLnsnICd9XHJcbiAgLy8gICA8TGluayBocmVmPScvYWJvdXQnIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvYWJvdXQnfT5cclxuICAvLyAgICAgPGE+QWJvdXQ8L2E+XHJcbiAgLy8gICA8L0xpbms+XHJcbiAgLy8gPC9kaXY+XHJcbiAgPD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+VmljZW50ZSBkZSBBbGVuY2FyPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMSBpZD1cInRpdGxlXCI+VmljZW50ZSBkZSBBbGVuY2FyPC9oMT5cclxuXHJcbiAgICAgIDxpbWdcclxuICAgICAgICBhbHQ9XCJhdmF0YXJcIlxyXG4gICAgICAgIHNyYz1cImh0dHA6Ly9ncmF2YXRhci5jb20vYXZhdGFyLzY4MDU5NjhmOGYwYmViMzEzYTgwNGMyYzYxMzNlNWJhLnBuZz9zPTIwMFwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7LyogPGltZyBhbHQ9XCJzb21ld2hlcmVcIiBzcmM9XCJodHRwOi8vbWFwcy5nb29nbGUuY29tL21hcHMvYXBpL3N0YXRpY21hcD9jZW50ZXI9LTIyLjk2MjQ0OSwtNDMuMjAzNDUxJnpvb209MTMmc2l6ZT0yMDB4MjAwJnNlbnNvcj1mYWxzZVwiPiAqL31cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdiBnaXRodWJcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cuZ2l0aHViLmNvbS92aWNlbnRlZGVhbGVuY2FyXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgR2l0SHViXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIHsvKiA8YSBjbGFzc05hbWU9XCJuYXYgZmFjZWJvb2tcIiBocmVmPVwiaHR0cDovL2ZhY2Vib29rLmNvbS92aWNlbnRlZGVhbGVuY2FyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICBGYWNlYm9va1xyXG4gICAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXYgdHdpdHRlclwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cDovL3R3aXR0ZXIuY29tL3ZpY2VudGVhbGVuY2FyXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVHdpdHRlclxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2IGxpbmtlZGluXCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwOi8vYnIubGlua2VkaW4uY29tL3B1Yi92aWNlbnRlLWRlLWFsZW5jYXIvMjQvOTMyLzQ5NVwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIExpbmtlZEluXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgIDxwPi8vIExpZmUgcnVucyBvbiBjb2RlPC9wPlxyXG4gICAgPC9mb290ZXI+XHJcblxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgICAgY29sb3I6ICNlZWU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUkgTGlnaHQnLCAnSGVsdmV0aWNhIE5ldWUnLCAnU2Vnb2UgVUknLCAnU2Vnb2UgV1AnLFxyXG4gICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhyIHtcclxuICAgICAgICBtYXJnaW46IDI1cHggMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICBjb2xvcjogI2VlZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmNTVjM2Q7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBjb2xvcnMgNTdzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDMxOXB4KSB7XHJcbiAgICAgICAgLm5hdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXYuZ2l0aHViOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzAwYWJhOTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdi5mYWNlYm9vazpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMzZDVjZjU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXYudHdpdHRlcjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMxYmExZTI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXYubGlua2VkaW46aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjOTkzZGY1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9vdGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvb3RlciBwIHtcclxuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2VlZTtcclxuICAgICAgICBjb2xvcjogIzhjYmYyNjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIC8qICBodHRwOi8vY29kZXBlbi5pby9qYWNraWViYWNrd2FyZHMvcGVuL3ptcGdzICAqL1xyXG5cclxuICAgICAgQGtleWZyYW1lcyBjb2xvcnMge1xyXG4gICAgICAgIDUuMjYzMTYlIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjU1YzNkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgMTAuNTI2MzIlIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjU5OTNkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgMTUuNzg5NDclIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjVkNjNkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgMjEuMDUyNjMlIHtcclxuICAgICAgICAgIGNvbG9yOiAjZDZmNTNkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgMjYuMzE1NzklIHtcclxuICAgICAgICAgIGNvbG9yOiAjOTlmNTNkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgMzEuNTc4OTUlIHtcclxuICAgICAgICAgIGNvbG9yOiAjNWNmNTNkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgMzYuODQyMTElIHtcclxuICAgICAgICAgIGNvbG9yOiAjM2RmNTVjO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgNDIuMTA1MjYlIHtcclxuICAgICAgICAgIGNvbG9yOiAjM2RmNTk5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgNDcuMzY4NDIlIHtcclxuICAgICAgICAgIGNvbG9yOiAjM2RmNWQ2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgNTIuNjMxNTglIHtcclxuICAgICAgICAgIGNvbG9yOiAjM2RkNmY1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgNTcuODk0NzQlIHtcclxuICAgICAgICAgIGNvbG9yOiAjM2Q5OWY1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgNjMuMTU3ODklIHtcclxuICAgICAgICAgIGNvbG9yOiAjM2Q1Y2Y1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgNjguNDIxMDUlIHtcclxuICAgICAgICAgIGNvbG9yOiAjNWMzZGY1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgNzMuNjg0MjElIHtcclxuICAgICAgICAgIGNvbG9yOiAjOTkzZGY1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgNzguOTQ3MzclIHtcclxuICAgICAgICAgIGNvbG9yOiAjZDYzZGY1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgODQuMjEwNTMlIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjUzZGQ2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgODkuNDczNjglIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjUzZDk5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOTQuNzM2ODQlIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjUzZDVjO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogaWYgd2UncmUgbW92aW5nIG9uIHRvIHRoZSBsYXN0IHN0ZXAsIHJlc2V0IHRoZSBjb2xvciB0byBiZSB0aGUgc2FtZSBhcyB0aGUgc3RhcnRlciBjb2xvciBzbyB0aGF0IHRoZSBsb29wIGlzIHNtb290aCAqL1xyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgY29sb3I6ICNmNTVjM2Q7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgIC8qIGRlZmF1bHQgdGV4dCBjb2xvciB0byB0aGUgYW5pbWF0aW9uJ3MgZmlyc3QgY29sb3IgKi9cclxuICAgICAgICBjb2xvcjogI2Y1NWMzZDtcclxuICAgICAgICBhbmltYXRpb246IGNvbG9ycyA1N3MgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgey8qIDxzY3JpcHQgc3JjPVwianMvdmVuZG9yL2pxdWVyeS0xLjguMi5taW4uanNcIj48L3NjcmlwdD5cclxuICAgIDxzY3JpcHQgc3JjPVwianMvdmVuZG9yL2pxdWVyeS5maXR0ZXh0LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICA8c2NyaXB0IHNyYz1cImpzL3ZlbmRvci9hbmFseXRpY3MuanNcIj48L3NjcmlwdD5cclxuICAgIDxzY3JpcHQgc3JjPVwianMvbWFpbi5qc1wiPjwvc2NyaXB0PiAqL31cclxuICA8Lz5cclxuKVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\VICENTE-PC\\Projects\\vicentedealencar.github.com\\packages\\gh-pages-app\\pages\\index.js */",
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
                {
                  id: '4259558769',
                  __self: this,
                },
                '@-webkit-keyframes colors{5.26316%{color:#f55c3d;}10.52632%{color:#f5993d;}15.78947%{color:#f5d63d;}21.05263%{color:#d6f53d;}26.31579%{color:#99f53d;}31.57895%{color:#5cf53d;}36.84211%{color:#3df55c;}42.10526%{color:#3df599;}47.36842%{color:#3df5d6;}52.63158%{color:#3dd6f5;}57.89474%{color:#3d99f5;}63.15789%{color:#3d5cf5;}68.42105%{color:#5c3df5;}73.68421%{color:#993df5;}78.94737%{color:#d63df5;}84.21053%{color:#f53dd6;}89.47368%{color:#f53d99;}94.73684%{color:#f53d5c;}100%{color:#f55c3d;}}@keyframes colors{5.26316%{color:#f55c3d;}10.52632%{color:#f5993d;}15.78947%{color:#f5d63d;}21.05263%{color:#d6f53d;}26.31579%{color:#99f53d;}31.57895%{color:#5cf53d;}36.84211%{color:#3df55c;}42.10526%{color:#3df599;}47.36842%{color:#3df5d6;}52.63158%{color:#3dd6f5;}57.89474%{color:#3d99f5;}63.15789%{color:#3d5cf5;}68.42105%{color:#5c3df5;}73.68421%{color:#993df5;}78.94737%{color:#d63df5;}84.21053%{color:#f53dd6;}89.47368%{color:#f53d99;}94.73684%{color:#f53d5c;}100%{color:#f55c3d;}}h1{font-size:80px;color:#f55c3d;-webkit-animation:colors 57s linear infinite;animation:colors 57s linear infinite;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVklDRU5URS1QQ1xcUHJvamVjdHNcXHZpY2VudGVkZWFsZW5jYXIuZ2l0aHViLmNvbVxccGFja2FnZXNcXGdoLXBhZ2VzLWFwcFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBJdUIsQUFNeUIsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBS0EsQUFLRCxjQTdFZixBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFLQSxDQU1jLGNBQ3VCLGtGQUN2QyIsImZpbGUiOiJDOlxcVXNlcnNcXFZJQ0VOVEUtUENcXFByb2plY3RzXFx2aWNlbnRlZGVhbGVuY2FyLmdpdGh1Yi5jb21cXHBhY2thZ2VzXFxnaC1wYWdlcy1hcHBcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBpbXBvcnQgJy4uL2Nzcy9tYWluLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAvLyA8ZGl2PlxyXG4gIC8vICAgSGVsbG8gV29ybGQueycgJ31cclxuICAvLyAgIDxMaW5rIGhyZWY9Jy9hYm91dCcgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9hYm91dCd9PlxyXG4gIC8vICAgICA8YT5BYm91dDwvYT5cclxuICAvLyAgIDwvTGluaz5cclxuICAvLyA8L2Rpdj5cclxuICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5WaWNlbnRlIGRlIEFsZW5jYXI8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgxIGlkPVwidGl0bGVcIj5WaWNlbnRlIGRlIEFsZW5jYXI8L2gxPlxyXG5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGFsdD1cImF2YXRhclwiXHJcbiAgICAgICAgc3JjPVwiaHR0cDovL2dyYXZhdGFyLmNvbS9hdmF0YXIvNjgwNTk2OGY4ZjBiZWIzMTNhODA0YzJjNjEzM2U1YmEucG5nP3M9MjAwXCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiA8aW1nIGFsdD1cInNvbWV3aGVyZVwiIHNyYz1cImh0dHA6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcy9hcGkvc3RhdGljbWFwP2NlbnRlcj0tMjIuOTYyNDQ5LC00My4yMDM0NTEmem9vbT0xMyZzaXplPTIwMHgyMDAmc2Vuc29yPWZhbHNlXCI+ICovfVxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2IGdpdGh1YlwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5naXRodWIuY29tL3ZpY2VudGVkZWFsZW5jYXJcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBHaXRIdWJcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgey8qIDxhIGNsYXNzTmFtZT1cIm5hdiBmYWNlYm9va1wiIGhyZWY9XCJodHRwOi8vZmFjZWJvb2suY29tL3ZpY2VudGVkZWFsZW5jYXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIEZhY2Vib29rXHJcbiAgICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdiB0d2l0dGVyXCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwOi8vdHdpdHRlci5jb20vdmljZW50ZWFsZW5jYXJcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBUd2l0dGVyXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXYgbGlua2VkaW5cIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHA6Ly9ici5saW5rZWRpbi5jb20vcHViL3ZpY2VudGUtZGUtYWxlbmNhci8yNC85MzIvNDk1XCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTGlua2VkSW5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgPHA+Ly8gTGlmZSBydW5zIG9uIGNvZGU8L3A+XHJcbiAgICA8L2Zvb3Rlcj5cclxuXHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICBjb2xvcjogI2VlZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSBMaWdodCcsICdIZWx2ZXRpY2EgTmV1ZScsICdTZWdvZSBVSScsICdTZWdvZSBXUCcsXHJcbiAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaHIge1xyXG4gICAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXJnaW46IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2IHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2OmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2Y1NWMzZDtcclxuICAgICAgICBhbmltYXRpb246IGNvbG9ycyA1N3MgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzE5cHgpIHtcclxuICAgICAgICAubmF2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdi5naXRodWI6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMDBhYmE5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2LmZhY2Vib29rOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzNkNWNmNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdi50d2l0dGVyOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzFiYTFlMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdi5saW5rZWRpbjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICM5OTNkZjU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICN0aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb290ZXIge1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9vdGVyIHAge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgIGNvbG9yOiAjOGNiZjI2O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgLyogIGh0dHA6Ly9jb2RlcGVuLmlvL2phY2tpZWJhY2t3YXJkcy9wZW4vem1wZ3MgICovXHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIGNvbG9ycyB7XHJcbiAgICAgICAgNS4yNjMxNiUge1xyXG4gICAgICAgICAgY29sb3I6ICNmNTVjM2Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMC41MjYzMiUge1xyXG4gICAgICAgICAgY29sb3I6ICNmNTk5M2Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxNS43ODk0NyUge1xyXG4gICAgICAgICAgY29sb3I6ICNmNWQ2M2Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAyMS4wNTI2MyUge1xyXG4gICAgICAgICAgY29sb3I6ICNkNmY1M2Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAyNi4zMTU3OSUge1xyXG4gICAgICAgICAgY29sb3I6ICM5OWY1M2Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAzMS41Nzg5NSUge1xyXG4gICAgICAgICAgY29sb3I6ICM1Y2Y1M2Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAzNi44NDIxMSUge1xyXG4gICAgICAgICAgY29sb3I6ICMzZGY1NWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA0Mi4xMDUyNiUge1xyXG4gICAgICAgICAgY29sb3I6ICMzZGY1OTk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA0Ny4zNjg0MiUge1xyXG4gICAgICAgICAgY29sb3I6ICMzZGY1ZDY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA1Mi42MzE1OCUge1xyXG4gICAgICAgICAgY29sb3I6ICMzZGQ2ZjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA1Ny44OTQ3NCUge1xyXG4gICAgICAgICAgY29sb3I6ICMzZDk5ZjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA2My4xNTc4OSUge1xyXG4gICAgICAgICAgY29sb3I6ICMzZDVjZjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA2OC40MjEwNSUge1xyXG4gICAgICAgICAgY29sb3I6ICM1YzNkZjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA3My42ODQyMSUge1xyXG4gICAgICAgICAgY29sb3I6ICM5OTNkZjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA3OC45NDczNyUge1xyXG4gICAgICAgICAgY29sb3I6ICNkNjNkZjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA4NC4yMTA1MyUge1xyXG4gICAgICAgICAgY29sb3I6ICNmNTNkZDY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA4OS40NzM2OCUge1xyXG4gICAgICAgICAgY29sb3I6ICNmNTNkOTk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA5NC43MzY4NCUge1xyXG4gICAgICAgICAgY29sb3I6ICNmNTNkNWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBpZiB3ZSdyZSBtb3Zpbmcgb24gdG8gdGhlIGxhc3Qgc3RlcCwgcmVzZXQgdGhlIGNvbG9yIHRvIGJlIHRoZSBzYW1lIGFzIHRoZSBzdGFydGVyIGNvbG9yIHNvIHRoYXQgdGhlIGxvb3AgaXMgc21vb3RoICovXHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICBjb2xvcjogI2Y1NWMzZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICAgICAgLyogZGVmYXVsdCB0ZXh0IGNvbG9yIHRvIHRoZSBhbmltYXRpb24ncyBmaXJzdCBjb2xvciAqL1xyXG4gICAgICAgIGNvbG9yOiAjZjU1YzNkO1xyXG4gICAgICAgIGFuaW1hdGlvbjogY29sb3JzIDU3cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICB7LyogPHNjcmlwdCBzcmM9XCJqcy92ZW5kb3IvanF1ZXJ5LTEuOC4yLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgPHNjcmlwdCBzcmM9XCJqcy92ZW5kb3IvanF1ZXJ5LmZpdHRleHQuanNcIj48L3NjcmlwdD5cclxuICAgIDxzY3JpcHQgc3JjPVwianMvdmVuZG9yL2FuYWx5dGljcy5qc1wiPjwvc2NyaXB0PlxyXG4gICAgPHNjcmlwdCBzcmM9XCJqcy9tYWluLmpzXCI+PC9zY3JpcHQ+ICovfVxyXG4gIDwvPlxyXG4pXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\VICENTE-PC\\Projects\\vicentedealencar.github.com\\packages\\gh-pages-app\\pages\\index.js */',
              ),
            )
          )
        }

        /***/
      },

    /***/ 0:
      /*!********************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CVICENTE-PC%5CProjects%5Cvicentedealencar.github.com%5Cpackages%5Cgh-pages-app%5Cpages%5Cindex.js ***!
  \********************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CVICENTE-PC%5CProjects%5Cvicentedealencar.github.com%5Cpackages%5Cgh-pages-app%5Cpages%5Cindex.js! */ './node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CVICENTE-PC%5CProjects%5Cvicentedealencar.github.com%5Cpackages%5Cgh-pages-app%5Cpages%5Cindex.js!./',
        )

        /***/
      },

    /***/ 'dll-reference dll_afa7b25a60452594c240':
      /*!*******************************************!*\
  !*** external "dll_afa7b25a60452594c240" ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = dll_afa7b25a60452594c240

        /***/
      },
  },
  [[0, 'static/runtime/webpack.js']],
])
//# sourceMappingURL=index.js.map
