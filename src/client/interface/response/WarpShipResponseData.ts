/**
 * This file was generated by st-open-api
 */
import { ShipFuel } from '../components/ShipFuel'
import { ShipNav } from '../components/ShipNav'

/**
 * Open-api schema
 * {
 *   "properties": {
 *     "fuel": {
 *       "$ref": "#/components/schemas/ShipFuel"
 *     },
 *     "nav": {
 *       "$ref": "#/components/schemas/ShipNav"
 *     }
 *   },
 *   "required": [
 *     "nav",
 *     "fuel"
 *   ],
 *   "type": "object"
 * }
 */
export interface WarpShipResponseData {

    fuel: ShipFuel;

    nav: ShipNav;

}