// CCoffeeIcon: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './c-coffee-icon.core.js';
import {
  CustomCoffeeIconComponent
} from './c-coffee-icon.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    CustomCoffeeIconComponent
  ], opts);
}