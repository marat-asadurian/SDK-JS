/**
 * Trulioo SDK
 * Trulioo SDK 
 *
 * The version of the OpenAPI document: 1.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DataField model module.
 * @module model/DataField
 * @version 1.5
 */
class DataField {
    /**
     * Constructs a new <code>DataField</code>.
     * @alias module:model/DataField
     */
    constructor() { 
        
        DataField.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataField} obj Optional instance to populate.
     * @return {module:model/DataField} The populated <code>DataField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataField();

            if (data.hasOwnProperty('FieldName')) {
                obj['FieldName'] = ApiClient.convertToType(data['FieldName'], 'String');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
            if (data.hasOwnProperty('FieldGroup')) {
                obj['FieldGroup'] = ApiClient.convertToType(data['FieldGroup'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} FieldName
 */
DataField.prototype['FieldName'] = undefined;

/**
 * @member {String} Value
 */
DataField.prototype['Value'] = undefined;

/**
 * @member {String} FieldGroup
 */
DataField.prototype['FieldGroup'] = undefined;






export default DataField;

