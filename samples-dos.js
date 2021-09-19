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
 export class SamplesDos extends LitElement {
    static get properties(){
        return {
            title:{
                type: String
            },
        };
    }
    
    constructor(){
        super();
        this.title = "Este es mi componente";
    }
    
    render(){
        return html`
            <p>${this.title}</p>
      `;
    }
    
    createRenderRoot(){
        return this;
    }
 }
//  Crea un componente en el lightDOM ya que de no ser por 
// el createRenderRoot sobrescribiría lo que hay en la etiqueta 
// definida en el index

 
 window.customElements.define('samples-dos', SamplesDos);