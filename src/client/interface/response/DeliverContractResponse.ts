/**
 * This file was generated by st-open-api
 */
import { DeliverContractResponseData } from './DeliverContractResponseData'

/**
 * Open-api schema
 * {
 *   "description": "",
 *   "properties": {
 *     "data": {
 *       "properties": {
 *         "contract": {
 *           "$ref": "#/components/schemas/Contract"
 *         },
 *         "cargo": {
 *           "$ref": "#/components/schemas/ShipCargo"
 *         }
 *       },
 *       "required": [
 *         "contract",
 *         "cargo"
 *       ],
 *       "type": "object"
 *     }
 *   },
 *   "required": [
 *     "data"
 *   ],
 *   "type": "object"
 * }
 */
export interface DeliverContractResponse {

    data: DeliverContractResponseData;

}