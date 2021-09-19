/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  // static get styles() {
  //   return css`
  //     :host {
  //       display: block;
  //       border: solid 1px gray;
  //       padding: 16px;
  //       max-width: 800px;
  //     }
  //   `;
  // }

  // static get properties() {
  //   return {
  //     /**
  //      * The name to say "Hello" to.
  //      */
  //     name: {type: String},

  //     /**
  //      * The number of times the button has been clicked.
  //      */
  //     count: {type: Number},
  //   };
  // }

  // constructor() {
  //   super();
  //   this.name = 'World';
  //   this.count = 0;
  // }

  // render() {
  //   return html`
  //     <h1>Hello, ${this.name}!</h1>
  //     <button @click=${this._onClick} part="button">
  //       Click Count: ${this.count}
  //     </button>
  //     <slot></slot>
  //   `;
  // }

  // _onClick() {
  //   this.count++;
  // }

  static get properties(){
    return {
        clicks:{
            type: Number
        },
    };
}

constructor(){
    super();
    this.clicks = 0;
}

counter(e){
    this.clicks++;
}

render(){
    return html`
        <button @click="${this.counter}">click me</button>
        <p>Click counter : ${this.clicks}</p>`;
}
}

window.customElements.define('my-element', MyElement);