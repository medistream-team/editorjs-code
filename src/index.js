/**
 * Build styles
 */
import './index.css';
import { getLineStartPosition } from './utils/string';

const IconBrackets = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.06482 3.01899V3.93038C8.98457 3.92405 8.90432 3.92089 8.82407 3.92089C8.75 3.91456 8.67901 3.91139 8.61111 3.91139C7.16049 3.91139 6.41049 5.02215 6.36111 7.24367C6.36111 7.37658 6.36111 7.47785 6.36111 7.54747L6.34259 8.18354C6.3179 9.47468 6.12963 10.3861 5.77778 10.9177C5.42593 11.443 4.82407 11.7848 3.97222 11.943V12.057C4.81173 12.2215 5.40741 12.5633 5.75926 13.0823C6.11111 13.5949 6.30556 14.5063 6.34259 15.8165L6.36111 16.4525C6.36111 16.6297 6.3642 16.8038 6.37037 16.9747C6.37654 17.0127 6.37963 17.0348 6.37963 17.0411C6.37963 18.3133 6.53086 19.1392 6.83333 19.519C7.14198 19.8987 7.74691 20.0886 8.64815 20.0886C8.71605 20.0886 8.78395 20.0854 8.85185 20.0791C8.92593 20.0791 8.99691 20.076 9.06482 20.0696V20.981C9.03395 20.981 8.91667 20.9842 8.71296 20.9905C8.50926 20.9968 8.32407 21 8.15741 21C6.74383 21 5.76852 20.7373 5.23148 20.212C4.70062 19.693 4.41358 18.4937 4.37037 16.6139L4.32407 15.3418C4.29321 14.1709 4.13272 13.3892 3.84259 12.9968C3.55864 12.6044 3.05556 12.4082 2.33333 12.4082C2.2963 12.4082 2.24074 12.4114 2.16667 12.4177C2.09259 12.4241 2.03704 12.4272 2 12.4272V11.5728C2.04321 11.5728 2.10494 11.5759 2.18519 11.5823C2.26543 11.5886 2.32099 11.5918 2.35185 11.5918C3.07407 11.5918 3.57716 11.3892 3.86111 10.9842C4.15123 10.5728 4.30556 9.79747 4.32407 8.65823L4.35185 7.38608C4.38272 5.53797 4.66667 4.34494 5.2037 3.80696C5.74691 3.26899 6.73765 3 8.17593 3C8.26852 3 8.41358 3.00316 8.61111 3.00949C8.81482 3.01582 8.96605 3.01899 9.06482 3.01899Z" fill="black"/><path d="M19.6481 7.38608L19.6667 8.64873C19.6914 9.80696 19.8488 10.5886 20.1389 10.9937C20.429 11.3924 20.9414 11.5918 21.6759 11.5918C21.7068 11.5918 21.7593 11.5886 21.8333 11.5823C21.9074 11.5759 21.963 11.5728 22 11.5728V12.4272C21.9568 12.4272 21.892 12.4241 21.8056 12.4177C21.7191 12.4114 21.6574 12.4082 21.6204 12.4082C20.9105 12.4082 20.4136 12.6139 20.1296 13.0253C19.8457 13.4304 19.6914 14.2057 19.6667 15.3513L19.6481 16.6139C19.6111 18.4747 19.321 19.6709 18.7778 20.2025C18.2407 20.7342 17.2407 21 15.7778 21C15.6296 21 15.4599 20.9968 15.2685 20.9905C15.0833 20.9842 14.9753 20.981 14.9444 20.981V20.0696C15.0247 20.076 15.0988 20.0791 15.1667 20.0791C15.2407 20.0854 15.3117 20.0886 15.3796 20.0886C16.8364 20.0886 17.5895 18.962 17.6389 16.7089C17.6389 16.5949 17.6389 16.5095 17.6389 16.4525L17.6574 15.8165C17.6821 14.5253 17.8704 13.6108 18.2222 13.0728C18.5802 12.5348 19.1821 12.1899 20.0278 12.038V11.943C19.1821 11.7848 18.5802 11.443 18.2222 10.9177C17.8704 10.3861 17.6821 9.47468 17.6574 8.18354L17.6389 7.52848C17.6327 7.30063 17.6265 7.08228 17.6204 6.87342C17.6204 6.66456 17.6204 6.42405 17.6204 6.1519C17.6204 5.33544 17.4537 4.75949 17.1204 4.42405C16.787 4.08228 16.2006 3.91139 15.3611 3.91139C15.3056 3.91139 15.2407 3.91456 15.1667 3.92089C15.0988 3.92089 15.0247 3.92405 14.9444 3.93038V3.01899C14.9815 3.01899 15.0988 3.01582 15.2963 3.00949C15.5 3.00316 15.6821 3 15.8426 3C17.287 3 18.2747 3.26899 18.8056 3.80696C19.3364 4.34494 19.6173 5.53797 19.6481 7.38608Z" fill="black"/></svg>';

/**
 * CodeTool for Editor.js
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */

/* global PasteEvent */

/**
 * Code Tool for the Editor.js allows to include code examples in your articles.
 */
export default class CodeTool {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * Allow to press Enter inside the CodeTool textarea
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return true;
  }

  /**
   * @typedef {object} CodeData — plugin saved data
   * @property {string} code - previously saved plugin code
   */

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} options - tool constricting options
   * @param {CodeData} options.data — previously saved plugin code
   * @param {object} options.config - user config for Tool
   * @param {object} options.api - Editor.js API
   * @param {boolean} options.readOnly - read only mode flag
   */
  constructor({ data, config, api, readOnly }) {
    this.api = api;
    this.readOnly = readOnly;

    this.placeholder = this.api.i18n.t(config.placeholder || CodeTool.DEFAULT_PLACEHOLDER);

    this.CSS = {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      wrapper: 'ce-code',
      textarea: 'ce-code__textarea',
    };

    this.nodes = {
      holder: null,
      textarea: null,
    };

    this.data = {
      code: data.code || '',
    };

    this.nodes.holder = this.drawView();
  }

  /**
   * Create Tool's view
   *
   * @returns {HTMLElement}
   * @private
   */
  drawView() {
    const wrapper = document.createElement('div'),
        textarea = document.createElement('textarea');

    wrapper.classList.add(this.CSS.baseClass, this.CSS.wrapper);
    textarea.classList.add(this.CSS.textarea, this.CSS.input);
    textarea.textContent = this.data.code;

    textarea.placeholder = this.placeholder;

    if (this.readOnly) {
      textarea.disabled = true;
    }

    wrapper.appendChild(textarea);

    /**
     * Enable keydown handlers
     */
    textarea.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'Tab':
          this.tabHandler(event);
          break;
      }
    });

    this.nodes.textarea = textarea;

    return wrapper;
  }

  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement} this.nodes.holder - Code's wrapper
   * @public
   */
  render() {
    return this.nodes.holder;
  }

  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} codeWrapper - CodeTool's wrapper, containing textarea with code
   * @returns {CodeData} - saved plugin code
   * @public
   */
  save(codeWrapper) {
    return {
      code: codeWrapper.querySelector('textarea').value,
    };
  }

  /**
   * onPaste callback fired from Editor`s core
   *
   * @param {PasteEvent} event - event with pasted content
   */
  onPaste(event) {
    const content = event.detail.data;

    this.data = {
      code: content.textContent,
    };
  }

  /**
   * Returns Tool`s data from private property
   *
   * @returns {CodeData}
   */
  get data() {
    return this._data;
  }

  /**
   * Set Tool`s data to private property and update view
   *
   * @param {CodeData} data - saved tool data
   */
  set data(data) {
    this._data = data;

    if (this.nodes.textarea) {
      this.nodes.textarea.textContent = data.code;
    }
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: IconBrackets,
      title: 'Code',
    };
  }

  /**
   * Default placeholder for CodeTool's textarea
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_PLACEHOLDER() {
    return 'Enter a code';
  }

  /**
   *  Used by Editor.js paste handling API.
   *  Provides configuration to handle CODE tag.
   *
   * @static
   * @returns {{tags: string[]}}
   */
  static get pasteConfig() {
    return {
      tags: [ 'pre' ],
    };
  }

  /**
   * Automatic sanitize config
   *
   * @returns {{code: boolean}}
   */
  static get sanitize() {
    return {
      code: true, // Allow HTML tags
    };
  }

  /**
   * Handles Tab key pressing (adds/removes indentations)
   *
   * @private
   * @param {KeyboardEvent} event - keydown
   * @returns {void}
   */
  tabHandler(event) {
    /**
     * Prevent editor.js tab handler
     */
    event.stopPropagation();

    /**
     * Prevent native tab behaviour
     */
    event.preventDefault();

    const textarea = event.target;
    const isShiftPressed = event.shiftKey;
    const caretPosition = textarea.selectionStart;
    const value = textarea.value;
    const indentation = '  ';

    let newCaretPosition;

    /**
     * For Tab pressing, just add an indentation to the caret position
     */
    if (!isShiftPressed) {
      newCaretPosition = caretPosition + indentation.length;

      textarea.value = value.substring(0, caretPosition) + indentation + value.substring(caretPosition);
    } else {
      /**
       * For Shift+Tab pressing, remove an indentation from the start of line
       */
      const currentLineStart = getLineStartPosition(value, caretPosition);
      const firstLineChars = value.substr(currentLineStart, indentation.length);

      if (firstLineChars !== indentation) {
        return;
      }

      /**
       * Trim the first two chars from the start of line
       */
      textarea.value = value.substring(0, currentLineStart) + value.substring(currentLineStart + indentation.length);
      newCaretPosition = caretPosition - indentation.length;
    }

    /**
     * Restore the caret
     */
    textarea.setSelectionRange(newCaretPosition, newCaretPosition);
  }
}
