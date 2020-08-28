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
import DataFields from './DataFields';

/**
 * The VerifyRequest model module.
 * @module model/VerifyRequest
 * @version 1.5
 */
class VerifyRequest {
    /**
     * Constructs a new <code>VerifyRequest</code>.
     * The verification call for the Normalized API is a POST method call
     * @alias module:model/VerifyRequest
     * @param countryCode {String} Country alpha2 code
     * @param dataFields {module:model/DataFields} 
     */
    constructor(countryCode, dataFields) { 
        
        VerifyRequest.initialize(this, countryCode, dataFields);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, countryCode, dataFields) { 
        obj['CountryCode'] = countryCode;
        obj['DataFields'] = dataFields;
    }

    /**
     * Constructs a <code>VerifyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerifyRequest} obj Optional instance to populate.
     * @return {module:model/VerifyRequest} The populated <code>VerifyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerifyRequest();

            if (data.hasOwnProperty('AcceptTruliooTermsAndConditions')) {
                obj['AcceptTruliooTermsAndConditions'] = ApiClient.convertToType(data['AcceptTruliooTermsAndConditions'], 'Boolean');
            }
            if (data.hasOwnProperty('CallBackUrl')) {
                obj['CallBackUrl'] = ApiClient.convertToType(data['CallBackUrl'], 'String');
            }
            if (data.hasOwnProperty('Timeout')) {
                obj['Timeout'] = ApiClient.convertToType(data['Timeout'], 'Number');
            }
            if (data.hasOwnProperty('CleansedAddress')) {
                obj['CleansedAddress'] = ApiClient.convertToType(data['CleansedAddress'], 'Boolean');
            }
            if (data.hasOwnProperty('ConfigurationName')) {
                obj['ConfigurationName'] = ApiClient.convertToType(data['ConfigurationName'], 'String');
            }
            if (data.hasOwnProperty('ConsentForDataSources')) {
                obj['ConsentForDataSources'] = ApiClient.convertToType(data['ConsentForDataSources'], ['String']);
            }
            if (data.hasOwnProperty('CountryCode')) {
                obj['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
            }
            if (data.hasOwnProperty('CustomerReferenceID')) {
                obj['CustomerReferenceID'] = ApiClient.convertToType(data['CustomerReferenceID'], 'String');
            }
            if (data.hasOwnProperty('DataFields')) {
                obj['DataFields'] = DataFields.constructFromObject(data['DataFields']);
            }
            if (data.hasOwnProperty('VerboseMode')) {
                obj['VerboseMode'] = ApiClient.convertToType(data['VerboseMode'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Indicate that Trulioo terms and conditions are accepted.\\nThe Verification request will be executed only if the value of this header is passed as 'true'.
 * @member {Boolean} AcceptTruliooTermsAndConditions
 */
VerifyRequest.prototype['AcceptTruliooTermsAndConditions'] = undefined;

/**
 * If set, the transaction will run asyncronously and trulioo will try to update the client with transaction state updates until completed.
 * @member {String} CallBackUrl
 */
VerifyRequest.prototype['CallBackUrl'] = undefined;

/**
 * If set, trulioo will try to update the client syncronously within the timeout in seconds. If failed to accomplish, the transaction will be canceled.
 * @member {Number} Timeout
 */
VerifyRequest.prototype['Timeout'] = undefined;

/**
 * Set to true if you want to receive address cleanse information. This will only change the response if you have address cleansing enabled for the country you are querying for.
 * @member {Boolean} CleansedAddress
 */
VerifyRequest.prototype['CleansedAddress'] = undefined;

/**
 * Indicate the configuration used for the verification. Currently only 'Identity Verification' is supported.\\nDefault value will be \"Identity Verification\"
 * @member {String} ConfigurationName
 */
VerifyRequest.prototype['ConfigurationName'] = undefined;

/**
 * Some datasources require your customer provide consent to access them. For each datasource that requires consent, send the requred string if your customer has provided it. A list of these required strings for a country can be gotten by the <a class=\"link-to-api\" href=\"#get-consents\">Get Consents</a> call. If consent is not provided the datasource will not be queried.
 * @member {Array.<String>} ConsentForDataSources
 */
VerifyRequest.prototype['ConsentForDataSources'] = undefined;

/**
 * Country alpha2 code
 * @member {String} CountryCode
 */
VerifyRequest.prototype['CountryCode'] = undefined;

/**
 * Use this field to send any internal reference ID to GlobalGateway. It will be contained in the response so it is simple to link Trulioo's API to your system.
 * @member {String} CustomerReferenceID
 */
VerifyRequest.prototype['CustomerReferenceID'] = undefined;

/**
 * @member {module:model/DataFields} DataFields
 */
VerifyRequest.prototype['DataFields'] = undefined;

/**
 * Verbose Mode Output Flag.
 * @member {Boolean} VerboseMode
 */
VerifyRequest.prototype['VerboseMode'] = undefined;






export default VerifyRequest;

