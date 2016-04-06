/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview wait block for Selenium Blockly.
 * @author info@technikh.com (TechNikh)
 */
'use strict';

goog.provide('Blockly.Blocks.wait');

goog.require('Blockly.Blocks');

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait");
    this.appendDummyInput()
        .appendField("Element Locator")
        .appendField(new Blockly.FieldTextInput(".change-me"), "locator");
    this.appendDummyInput()
        .appendField("Seconds")
        .appendField(new Blockly.FieldTextInput("3"), "seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip("Wait for at most number of Seconds mentioned, for the specified Element to be present on the DOM of a page and visible. CSS selector like {#food span.dairy}");
    this.setHelpUrl('http://www.example.com/');
  }
};

