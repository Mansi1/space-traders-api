/**
 * This file was generated by st-open-api
 */

/**
 * Open-api schema
 * {
 *   "title": "Purchase Cargo Request",
 *   "properties": {
 *     "symbol": {
 *       "type": "string"
 *     },
 *     "units": {
 *       "type": "integer"
 *     }
 *   },
 *   "required": [
 *     "symbol",
 *     "units"
 *   ],
 *   "type": "object"
 * }
 */
export interface PurchaseCargoRequest {

    symbol: string;

    units: number;

}