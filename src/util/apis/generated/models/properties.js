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
 * Type of notification config (NotificationConfigAppleToken,
 * NotificationConfigGoogle, NotificationConfigWindows). The 'type' property
 * must be set to a valid value and the object must include the correct
 * properties for the specified type.
 *
 */
class Properties {
  /**
   * Create a Properties.
   * @property {string} type Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of Properties
   *
   * @returns {object} metadata of Properties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'properties',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'Properties',
        className: 'Properties',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Properties;
