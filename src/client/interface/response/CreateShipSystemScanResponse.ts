/**
 * This file was generated by st-open-api
 */
import { CreateShipSystemScanResponseData } from './CreateShipSystemScanResponseData'

/**
 * Open-api schema
 * {
 *   "description": "",
 *   "properties": {
 *     "data": {
 *       "properties": {
 *         "cooldown": {
 *           "$ref": "#/components/schemas/Cooldown"
 *         },
 *         "systems": {
 *           "items": {
 *             "$ref": "#/components/schemas/ScannedSystem"
 *           },
 *           "type": "array"
 *         }
 *       },
 *       "required": [
 *         "cooldown",
 *         "systems"
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
export interface CreateShipSystemScanResponse {

    data: CreateShipSystemScanResponseData;

}
