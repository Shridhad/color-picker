import {ElementMixin} from "@polymer/polymer/lib/mixins/element-mixin";

window.Vaadin = window.Vaadin || {};

/**
 * @polymerBehaviour
 */
Vaadin.DisabledPropertyMixin =
  superClass => class VaadinDisabledPropertyMixin extends superClass {
    static get properties() {
      return {
        disabled: {
          type: Boolean,
          readOnly: true
        }
      };
    }

    attributeChangedCallback(name, oldValue, newValue) {
      super.attributeChangedCallback(name, oldValue, newValue);
      if (name === 'disabled') {
        this._setDisabled(newValue !== undefined && newValue !== null);
      }
    }
  };
