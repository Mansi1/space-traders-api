/**
 * This file was generated by st-open-api
 */
import { Faction } from '../components/Faction'
import { Meta } from '../components/Meta'

/**
 * Open-api schema
 * {
 *   "properties": {
 *     "data": {
 *       "items": {
 *         "$ref": "#/components/schemas/Faction"
 *       },
 *       "type": "array"
 *     },
 *     "meta": {
 *       "$ref": "#/components/schemas/Meta"
 *     }
 *   },
 *   "required": [
 *     "data",
 *     "meta"
 *   ],
 *   "type": "object"
 * }
 */
export interface GetFactionsResponse {

    data: Array<Faction>;

    meta: Meta;

}
