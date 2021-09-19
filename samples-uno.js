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
 export class SamplesUno extends LitElement {
    static get properties(){
        return {
            numbers:{
                type: Array
            },
        };
      }
    
      constructor(){
        super();
        this.numbers = [1,2,3,4,5];
      }
    
      handleClick(e){
        console.log('Origin: ', e.composedPath()[0]);
      }
    
      render(){
        return html`
        ${this.numbers.map(n => html`
            <button id="button-${n}" @click="${this.handleClick}">${n}</button>
       `)}`;
      }
 }

// Regresa un arreglo de botones del 1 al 5, esto gracias al return que regresa numbers de tipo Array,
// en el constructor declara ese array del 1-5, se pintan como botónes vracias al código html declarado en render, 
// ese manda a llamar el metodo handleClick que es el que pinta en consola  Origin: Elemento del DOM sobre el que ocurre el click, 
// en este caso el número de botón.

 window.customElements.define('samples-uno', SamplesUno);