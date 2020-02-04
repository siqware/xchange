(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/MoneyExchange.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/MoneyExchange.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MoneyExchange",
  data: function data() {
    return {
      data: {
        input: '',
        currency_from: {
          val: 'from_riel',
          label: 'រៀល'
        },
        currency_to: {
          val: 'to_usd',
          label: 'ដុល្លារ'
        },
        get_money: 0,
        exchange_money: 0,
        result_remain: 0,
        result_get: 0,
        exchange_rate: 0,
        rate: {
          riel_baht: 0.00761,
          riel_usd: 0.00025,
          usd_riel: 4088.18,
          baht_riel: 131.277
        },
        from_type: [{
          val: 'from_riel',
          label: 'រៀល'
        }, {
          val: 'from_usd',
          label: 'ដុល្លារ'
        }, {
          val: 'from_baht',
          label: 'បាត'
        }],
        to_type: [{
          val: 'to_riel',
          label: 'រៀល'
        }, {
          val: 'to_usd',
          label: 'ដុល្លារ'
        }, {
          val: 'to_baht',
          label: 'បាត'
        }]
      }
    };
  },
  methods: {
    exchange_result: function exchange_result() {
      var self = this;

      if (self.data.currency_from && self.data.currency_to) {
        if (self.data.currency_from.val === 'from_riel' && self.data.currency_to.val === 'to_baht') {
          self.data.result_get = self.data.exchange_money * self.data.rate.riel_baht;
          self.data.exchange_rate = self.data.rate.riel_baht;
        } else if (self.data.currency_from.val === 'from_riel' && self.data.currency_to.val === 'to_usd') {
          self.data.result_get = self.data.exchange_money * self.data.rate.riel_usd;
          self.data.exchange_rate = self.data.rate.riel_usd;
        } else if (self.data.currency_from.val === 'from_usd' && self.data.currency_to.val === 'to_riel') {
          self.data.result_get = self.data.exchange_money * self.data.rate.usd_riel;
          self.data.exchange_rate = self.data.rate.usd_riel;
        } else if (self.data.currency_from.val === 'from_baht' && self.data.currency_to.val === 'to_riel') {
          self.data.result_get = self.data.exchange_money * self.data.rate.baht_riel;
          self.data.exchange_rate = self.data.rate.baht_riel;
        } else {
          self.$vs.notify({
            text: 'ខុសគោលការណ៍ប្តូរប្រាក់ហើយ! សូមជ្រើសរើសអោយបានត្រឹមត្រូវ!',
            color: 'warning',
            position: 'top-center'
          });
        }

        self.data.result_remain = self.data.get_money - self.data.exchange_money;
      } else {
        this.$vs.notify({
          text: 'សូមជ្រើសរើសការប្តូរអោយបានត្រឹមត្រូវ!',
          color: 'warning',
          position: 'top-center'
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/MoneyExchange.vue?vue&type=template&id=a37db26e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/MoneyExchange.vue?vue&type=template&id=a37db26e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vx-card", [
    _c(
      "div",
      { staticClass: "vx-row" },
      [
        _c(
          "div",
          { staticClass: "vx-col w-full" },
          [
            _c("vs-input", {
              staticClass: "w-full",
              attrs: {
                "icon-pack": "feather",
                icon: "icon-credit-card",
                "label-placeholder": "ប្រាក់ទទួល"
              },
              model: {
                value: _vm.data.get_money,
                callback: function($$v) {
                  _vm.$set(_vm.data, "get_money", $$v)
                },
                expression: "data.get_money"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-full mt-2" },
          [
            _c("vs-input", {
              staticClass: "w-full",
              attrs: {
                "icon-pack": "feather",
                icon: "icon-credit-card",
                "label-placeholder": "ប្រាក់ប្តូរ"
              },
              model: {
                value: _vm.data.exchange_money,
                callback: function($$v) {
                  _vm.$set(_vm.data, "exchange_money", $$v)
                },
                expression: "data.exchange_money"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-full mt-3" },
          [
            _c("v-select", {
              staticClass: "w-full",
              attrs: {
                placeholder: "ប្តូរពី",
                label: "label",
                options: _vm.data.from_type
              },
              model: {
                value: _vm.data.currency_from,
                callback: function($$v) {
                  _vm.$set(_vm.data, "currency_from", $$v)
                },
                expression: "data.currency_from"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "vx-col w-full mt-3 text-center" }, [
          _c("label", { staticClass: "my-3" }, [_vm._v("ទៅកាន់")])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-full mt-3" },
          [
            _c("v-select", {
              staticClass: "w-full",
              attrs: {
                placeholder: "ទៅកាន់",
                label: "label",
                options: _vm.data.to_type
              },
              model: {
                value: _vm.data.currency_to,
                callback: function($$v) {
                  _vm.$set(_vm.data, "currency_to", $$v)
                },
                expression: "data.currency_to"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-full mt-3" },
          [
            _c(
              "vs-button",
              {
                attrs: {
                  color: "primary",
                  type: "border",
                  "icon-pack": "feather",
                  icon: "icon-refresh-cw"
                },
                on: { click: _vm.exchange_result }
              },
              [_vm._v("ប្តូរ\n            ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("vs-divider", [_vm._v("លទ្ធផល")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-full" },
          [
            _c("vs-input", {
              staticClass: "w-full",
              attrs: {
                "icon-pack": "feather",
                icon: "icon-credit-card",
                "label-placeholder": "ប្រាក់ប្តូរ"
              },
              model: {
                value: _vm.data.result_get,
                callback: function($$v) {
                  _vm.$set(_vm.data, "result_get", $$v)
                },
                expression: "data.result_get"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-full mt-3" },
          [
            _c("vs-input", {
              staticClass: "w-full",
              attrs: {
                "icon-pack": "feather",
                icon: "icon-credit-card",
                "label-placeholder": "ប្រាក់អាប់"
              },
              model: {
                value: _vm.data.result_remain,
                callback: function($$v) {
                  _vm.$set(_vm.data, "result_remain", $$v)
                },
                expression: "data.result_remain"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "vx-col w-full mt-3" }, [
          _c("h5", { staticClass: "text-primary" }, [
            _vm._v("អត្រារប្តូរប្រាក់ : " + _vm._s(_vm.data.exchange_rate))
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/MoneyExchange.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/MoneyExchange.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MoneyExchange_vue_vue_type_template_id_a37db26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoneyExchange.vue?vue&type=template&id=a37db26e&scoped=true& */ "./resources/js/src/views/MoneyExchange.vue?vue&type=template&id=a37db26e&scoped=true&");
/* harmony import */ var _MoneyExchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoneyExchange.vue?vue&type=script&lang=js& */ "./resources/js/src/views/MoneyExchange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MoneyExchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MoneyExchange_vue_vue_type_template_id_a37db26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MoneyExchange_vue_vue_type_template_id_a37db26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a37db26e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/MoneyExchange.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/MoneyExchange.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/MoneyExchange.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoneyExchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MoneyExchange.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/MoneyExchange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoneyExchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/MoneyExchange.vue?vue&type=template&id=a37db26e&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/MoneyExchange.vue?vue&type=template&id=a37db26e&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoneyExchange_vue_vue_type_template_id_a37db26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MoneyExchange.vue?vue&type=template&id=a37db26e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/MoneyExchange.vue?vue&type=template&id=a37db26e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoneyExchange_vue_vue_type_template_id_a37db26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoneyExchange_vue_vue_type_template_id_a37db26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);