/**
 * This file was generated by st-open-api
 */
import { AcceptContractResponseData } from './AcceptContractResponseData'

/**
 * Open-api schema
 * {
 *   "properties": {
 *     "data": {
 *       "properties": {
 *         "agent": {
 *           "$ref": "#/components/schemas/Agent"
 *         },
 *         "contract": {
 *           "$ref": "#/components/schemas/Contract"
 *         }
 *       },
 *       "required": [
 *         "contract",
 *         "agent"
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
export interface AcceptContractResponse {

    data: AcceptContractResponseData;

}