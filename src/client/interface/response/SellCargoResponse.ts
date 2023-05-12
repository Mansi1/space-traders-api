/**
 * This file was generated by st-open-api
 */
import { SellCargoResponseData } from './SellCargoResponseData'

/**
 * Open-api schema
 * {
 *   "title": "Sell Cargo 201 Response",
 *   "description": "",
 *   "properties": {
 *     "data": {
 *       "properties": {
 *         "agent": {
 *           "$ref": "#/components/schemas/Agent"
 *         },
 *         "cargo": {
 *           "$ref": "#/components/schemas/ShipCargo"
 *         },
 *         "transaction": {
 *           "$ref": "#/components/schemas/MarketTransaction"
 *         }
 *       },
 *       "required": [
 *         "cargo",
 *         "transaction",
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
export interface SellCargoResponse {

    data: SellCargoResponseData;

}