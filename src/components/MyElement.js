import {html, LitElement} from "lit-element";

export class MyElement extends LitElement {

    /**
     * Implement `render` to define a template for your element.
     *
     * You must provide an implementation of `render` for any element
     * that uses LitElement as a base class.
     */
    render(){
        /**
         * `render` must return a lit-html `TemplateResult`.
         *
         * To create a `TemplateResult`, tag a JavaScript template literal
         * with the `html` helper function:
         */
        return html`
      <!-- template content -->
      <p>Hello litElement with Rollup build.</p>
    `;
    }
}
