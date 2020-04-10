import {XButton} from './components/XButton';
import {MyElement} from './components/MyElement';

// Extend the LitElement base class
// Register the new element with the browser.
customElements.define('my-element', MyElement);
customElements.define('x-button', XButton);
