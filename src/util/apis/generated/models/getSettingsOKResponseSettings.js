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
 * Bugtracker specific settings
 *
 */
class GetSettingsOKResponseSettings {
  /**
   * Create a GetSettingsOKResponseSettings.
   * @property {string} [callbackUrl]
   * @property {string} ownerName
   * @property {string} type Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetSettingsOKResponseSettings
   *
   * @returns {object} metadata of GetSettingsOKResponseSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetSettingsOKResponse_settings',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'GetSettingsOKResponseSettings',
        className: 'GetSettingsOKResponseSettings',
        modelProperties: {
          callbackUrl: {
            required: false,
            serializedName: 'callback_url',
            type: {
              name: 'String'
            }
          },
          ownerName: {
            required: true,
            serializedName: 'owner_name',
            type: {
              name: 'String'
            }
          },
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

module.exports = GetSettingsOKResponseSettings;