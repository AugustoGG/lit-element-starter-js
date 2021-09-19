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
 export class SamplesTres extends LitElement {
    static get properties(){
        return {
            message:{type: String},
            myArray:{type: Array},
            myBool:{type: Boolean},
            myString:{type: String}
        };
    }
    
    static get styles(){
        return css`
        p{
          font-family: Roboto;
          font-size: 20px;
          font-weight: 500;
          color: greenyellow;
          background-color: black;
         }
         .fuchsia{
           color: fuchsia;
         }
         .cyan{
           color: cyan;
         }
         .amarillo{
           color: yellow;
         }
        `;
    }
    
    constructor(){
        super();
        this.myBool = false;
        this.myString = 'amarillo';
    }
    
    render(){
        return html`
            <p>Soy texto uno</p>
            
            <p class="${this.myBool?'fuchsia':'cyan'}">Soy texto dos</p>
            
            <p class="${this.myString}">Soy texto tres</p>
            
            <button @click="${this.clickHandler}">Click</button>
      `;
    }
    clickHandler(event){
        this.myBool = !this.myBool;
    }
 }

//  El primer parrafo por defecto tiene el texto "Soy texto uno" y es color verde definido en styles.

//  El segundo parrafo con texto "Soy texto dos" tiene por defecto la clase cyan ya que la propiedad myBool se setea como false en el constructor,
//  en el primer clic myBool = true esto gracias al clickHandler por lo tanto la clase es = fuchsia, con el segundo clic pasa a ser myBool = false,
//   por lo que la clase cambia nuevamente a cyan, con el tercer clic myBool = true por lo tanto la clase termina en fuchsia.

//  El tercer parrado  con texto "Soy texto tres" el color es amarillo, la clase se setea en el constructor
//  la clase "amarillo" se declara en styles();




 window.customElements.define('samples-tres', SamplesTres);