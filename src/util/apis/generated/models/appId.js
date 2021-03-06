/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a AppId.
 */
class AppId {
  /**
   * Create a AppId.
   * @property {string} [id] the id of the app
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppId
   *
   * @returns {object} metadata of AppId
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppId',
      type: {
        name: 'Composite',
        className: 'AppId',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppId;
