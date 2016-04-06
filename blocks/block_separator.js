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
 * @fileoverview block_separator block for Selenium Blockly.
 * @author info@technikh.com (TechNikh)
 */
'use strict';

goog.provide('Blockly.Blocks.block_separator');

goog.require('Blockly.Blocks');

Blockly.Blocks['block_separator'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("/* Comment me */"), "comment");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

