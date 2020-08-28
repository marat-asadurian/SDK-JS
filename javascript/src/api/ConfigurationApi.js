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


import ApiClient from "../ApiClient";
import Consent from '../model/Consent';
import CountrySubdivision from '../model/CountrySubdivision';
import DataFields from '../model/DataFields';
import NormalizedDatasourceGroupCountry from '../model/NormalizedDatasourceGroupCountry';

/**
* Configuration service.
* @module api/ConfigurationApi
* @version 1.5
*/
export default class ConfigurationApi {

    /**
    * Constructs a new ConfigurationApi. 
    * @alias module:api/ConfigurationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getConsents operation.
     * @callback module:api/ConfigurationApi~getConsentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Consents
     * This method retrieves the consents required for the data sources currently configured in your account configuration.   The response for this method contains a collection of string that Verify method's ConsentForDataSources field expects to perform a verification using those data sources.   Failure to provide an element from the string collection will lead to a 1005 service error
     * @param {String} countryCode Country alpha2 code
     * @param {String} configurationName The product configuration. Currently \"Identity Verification\" for all products.
     * @param {module:api/ConfigurationApi~getConsentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    getConsents(countryCode, configurationName, callback) {
      let postBody = null;
      // verify the required parameter 'countryCode' is set
      if (countryCode === undefined || countryCode === null) {
        throw new Error("Missing the required parameter 'countryCode' when calling getConsents");
      }
      // verify the required parameter 'configurationName' is set
      if (configurationName === undefined || configurationName === null) {
        throw new Error("Missing the required parameter 'configurationName' when calling getConsents");
      }

      let pathParams = {
        'countryCode': countryCode,
        'configurationName': configurationName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json'];
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/configuration/v1/consents/{configurationName}/{countryCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCountryCodes operation.
     * @callback module:api/ConfigurationApi~getCountryCodesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Country Codes
     * This method retrieves all the countries that are available to perform a verification. It returns an array of Alpha2 Country Codes
     * @param {String} configurationName The product configuration. Currently \"Identity Verification\" for all products.
     * @param {module:api/ConfigurationApi~getCountryCodesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    getCountryCodes(configurationName, callback) {
      let postBody = null;
      // verify the required parameter 'configurationName' is set
      if (configurationName === undefined || configurationName === null) {
        throw new Error("Missing the required parameter 'configurationName' when calling getCountryCodes");
      }

      let pathParams = {
        'configurationName': configurationName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json'];
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/configuration/v1/countrycodes/{configurationName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCountrySubdivisions operation.
     * @callback module:api/ConfigurationApi~getCountrySubdivisionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CountrySubdivision>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Country Subdivisions
     * Gets the provinces states or other subdivisions for a country, mostly matches ISO 3166-2
     * @param {String} countryCode Country alpha2 code
     * @param {module:api/ConfigurationApi~getCountrySubdivisionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CountrySubdivision>}
     */
    getCountrySubdivisions(countryCode, callback) {
      let postBody = null;
      // verify the required parameter 'countryCode' is set
      if (countryCode === undefined || countryCode === null) {
        throw new Error("Missing the required parameter 'countryCode' when calling getCountrySubdivisions");
      }

      let pathParams = {
        'countryCode': countryCode
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json'];
      let returnType = [CountrySubdivision];
      return this.apiClient.callApi(
        '/configuration/v1/countrysubdivisions/{countryCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDatasources operation.
     * @callback module:api/ConfigurationApi~getDatasourcesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/NormalizedDatasourceGroupCountry>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Datasources
     * Gets datasource groups configured for your product and country.
     * @param {String} configurationName The product configuration. Currently \"Identity Verification\" for all products.
     * @param {String} countryCode Country alpha2 code
     * @param {module:api/ConfigurationApi~getDatasourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/NormalizedDatasourceGroupCountry>}
     */
    getDatasources(configurationName, countryCode, callback) {
      let postBody = null;
      // verify the required parameter 'configurationName' is set
      if (configurationName === undefined || configurationName === null) {
        throw new Error("Missing the required parameter 'configurationName' when calling getDatasources");
      }
      // verify the required parameter 'countryCode' is set
      if (countryCode === undefined || countryCode === null) {
        throw new Error("Missing the required parameter 'countryCode' when calling getDatasources");
      }

      let pathParams = {
        'configurationName': configurationName,
        'countryCode': countryCode
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json'];
      let returnType = [NormalizedDatasourceGroupCountry];
      return this.apiClient.callApi(
        '/configuration/v1/datasources/{configurationName}/{countryCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDetailedConsents operation.
     * @callback module:api/ConfigurationApi~getDetailedConsentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Consent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Detailed Consents
     * This method retrieves details about consents required for data sources currently configured in your account configuration.   The response for this method contains a collection of objects.  Each object contains the Name of the data source, Text outlining what the user is consenting to, and optionally a Url where the user can find more information about how their data will be used.    Failure to provide a Name from the object collection will lead to a 1005 service error.
     * @param {String} countryCode Call CountryCodes to get the countries available to you.
     * @param {String} configurationName Identity Verification
     * @param {module:api/ConfigurationApi~getDetailedConsentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Consent>}
     */
    getDetailedConsents(countryCode, configurationName, callback) {
      let postBody = null;
      // verify the required parameter 'countryCode' is set
      if (countryCode === undefined || countryCode === null) {
        throw new Error("Missing the required parameter 'countryCode' when calling getDetailedConsents");
      }
      // verify the required parameter 'configurationName' is set
      if (configurationName === undefined || configurationName === null) {
        throw new Error("Missing the required parameter 'configurationName' when calling getDetailedConsents");
      }

      let pathParams = {
        'countryCode': countryCode,
        'configurationName': configurationName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json'];
      let returnType = [Consent];
      return this.apiClient.callApi(
        '/configuration/v1/detailedConsents/{configurationName}/{countryCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFields operation.
     * @callback module:api/ConfigurationApi~getFieldsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Fields
     * Generates json schema for the API, the schema is dynamic based on the country and configuration you are using json-schema.org
     * @param {String} countryCode Country alpha2 code
     * @param {String} configurationName The product configuration. Currently \"Identity Verification\" for all products.
     * @param {module:api/ConfigurationApi~getFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getFields(countryCode, configurationName, callback) {
      let postBody = null;
      // verify the required parameter 'countryCode' is set
      if (countryCode === undefined || countryCode === null) {
        throw new Error("Missing the required parameter 'countryCode' when calling getFields");
      }
      // verify the required parameter 'configurationName' is set
      if (configurationName === undefined || configurationName === null) {
        throw new Error("Missing the required parameter 'configurationName' when calling getFields");
      }

      let pathParams = {
        'countryCode': countryCode,
        'configurationName': configurationName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/configuration/v1/fields/{configurationName}/{countryCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRecommendedFields operation.
     * @callback module:api/ConfigurationApi~getRecommendedFieldsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Recommended Fields
     * Generates json schema for the API, the schema is dynamic based on the recommendedFields country and account you are using.  http://json-schema.org/documentation.html
     * @param {String} countryCode Country alpha2 code
     * @param {String} configurationName The product configuration. Currently \"Identity Verification\" for all products.
     * @param {module:api/ConfigurationApi~getRecommendedFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getRecommendedFields(countryCode, configurationName, callback) {
      let postBody = null;
      // verify the required parameter 'countryCode' is set
      if (countryCode === undefined || countryCode === null) {
        throw new Error("Missing the required parameter 'countryCode' when calling getRecommendedFields");
      }
      // verify the required parameter 'configurationName' is set
      if (configurationName === undefined || configurationName === null) {
        throw new Error("Missing the required parameter 'configurationName' when calling getRecommendedFields");
      }

      let pathParams = {
        'countryCode': countryCode,
        'configurationName': configurationName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/configuration/v1/recommendedfields/{configurationName}/{countryCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTestEntities operation.
     * @callback module:api/ConfigurationApi~getTestEntitiesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DataFields>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Test Entities
     * Gets the test entities configured for your product and country.
     * @param {String} configurationName The product configuration. Currently \"Identity Verification\" for all products.
     * @param {String} countryCode Country alpha2 code
     * @param {module:api/ConfigurationApi~getTestEntitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DataFields>}
     */
    getTestEntities(configurationName, countryCode, callback) {
      let postBody = null;
      // verify the required parameter 'configurationName' is set
      if (configurationName === undefined || configurationName === null) {
        throw new Error("Missing the required parameter 'configurationName' when calling getTestEntities");
      }
      // verify the required parameter 'countryCode' is set
      if (countryCode === undefined || countryCode === null) {
        throw new Error("Missing the required parameter 'countryCode' when calling getTestEntities");
      }

      let pathParams = {
        'configurationName': configurationName,
        'countryCode': countryCode
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DataFields];
      return this.apiClient.callApi(
        '/configuration/v1/testentities/{configurationName}/{countryCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
