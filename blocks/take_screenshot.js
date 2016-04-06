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
 * @fileoverview take_screenshot block for Selenium Blockly.
 * @author info@technikh.com (TechNikh)
 */
'use strict';

goog.provide('Blockly.Blocks.take_screenshot');

goog.require('Blockly.Blocks');

Blockly.Blocks['take_screenshot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Take Screenshot");
    this.appendDummyInput()
        .appendField("Snapshot Type")
        .appendField(new Blockly.FieldDropdown([["Include", "include"], ["Exclude", "exclude"]]), "snapshot_mode");
    this.appendDummyInput()
        .appendField("Element Locator Type")
        .appendField(new Blockly.FieldDropdown([["ID", "id"], ["Name", "name"], ["CSS", "css"], ["XPath", "xpath"]]), "locator_type");
    this.appendDummyInput()
        .appendField("Element Locator")
        .appendField(new Blockly.FieldTextInput("#change-me"), "locator");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip('Choose "Include" to take the snapshot of only the specified HTML element. Choose "Exclude" to take snapshot of the whole page except the specified HTML elements. Multiple selectors can be coma separated for exclusion.');
    this.setHelpUrl('http://www.example.com/');
  }
};

