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
 * Class representing a ListDeviceSetsOfOwnerOKResponseItemDeviceConfigurationsItemImage.
 */
class ListDeviceSetsOfOwnerOKResponseItemDeviceConfigurationsItemImage {
  /**
   * Create a ListDeviceSetsOfOwnerOKResponseItemDeviceConfigurationsItemImage.
   * @property {string} [thumb]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListDeviceSetsOfOwnerOKResponseItemDeviceConfigurationsItemImage
   *
   * @returns {object} metadata of ListDeviceSetsOfOwnerOKResponseItemDeviceConfigurationsItemImage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListDeviceSetsOfOwnerOKResponseItem_deviceConfigurationsItem_image',
      type: {
        name: 'Composite',
        className: 'ListDeviceSetsOfOwnerOKResponseItemDeviceConfigurationsItemImage',
        modelProperties: {
          thumb: {
            required: false,
            serializedName: 'thumb',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ListDeviceSetsOfOwnerOKResponseItemDeviceConfigurationsItemImage;