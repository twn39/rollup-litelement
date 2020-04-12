import {html, LitElement, property} from "lit-element";

export class MyElement extends LitElement {

    @property( { type : String }  )
    greet = 'hello';

    handleClick(e) {
        console.log(e);
        this.greet = 'curry';
    }

    render(){
        return html`
            <button @click="${this.handleClick}">click</button>
            <p>Hello litElement with Rollup build. ${this.greet}</p>
        `;
    }
}
