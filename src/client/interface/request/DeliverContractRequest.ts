/**
 * This file was generated by st-open-api
 */

/**
 * Open-api schema
 * {
 *   "properties": {
 *     "shipSymbol": {
 *       "type": "string"
 *     },
 *     "tradeSymbol": {
 *       "type": "string"
 *     },
 *     "units": {
 *       "type": "integer"
 *     }
 *   },
 *   "required": [
 *     "shipSymbol",
 *     "tradeSymbol",
 *     "units"
 *   ],
 *   "type": "object"
 * }
 */
export interface DeliverContractRequest {

    shipSymbol: string;

    tradeSymbol: string;

    units: number;

}