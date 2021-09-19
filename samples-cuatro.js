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
 export class SamplesCuatro extends LitElement {
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
            <p>Click counter : ${this.clicks}</p>
      `;
    }
 }

// clicks definido en el return y seteado como 0 en el constructor.
// cada que se da clic en el botón el cual ejecuta el método conter,
// se suma un más uno el cual se muestra el el parrafo
 
window.customElements.define('samples-cuatro', SamplesCuatro);