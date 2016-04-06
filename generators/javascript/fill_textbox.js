/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating JavaScript for fill_textbox block.
 * @author info@technikh.com (TechNikh)
 */
'use strict';

goog.provide('Blockly.JavaScript.fill_textbox');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['fill_textbox'] = function(block) {
  var text_locator = block.getFieldValue('locator');
  var text_text = block.getFieldValue('text');
  /*
   <tr>
   <td>type</td>
   <td>name=q</td>
   <td>123</td>
   </tr>
   */
  var code = '<tr>\n<td>type</td>\n<td>name='+text_locator+'</td>\n<td>'+text_text+'</td>\n</tr>';
  return code;
};

