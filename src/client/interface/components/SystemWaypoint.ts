/**
 * This file was generated by st-open-api
 */
import { WaypointType } from './WaypointType'

/**
 * Open-api schema
 * {
 *   "type": "object",
 *   "properties": {
 *     "symbol": {
 *       "type": "string"
 *     },
 *     "type": {
 *       "$ref": "#/components/schemas/WaypointType"
 *     },
 *     "x": {
 *       "type": "integer"
 *     },
 *     "y": {
 *       "type": "integer"
 *     }
 *   },
 *   "required": [
 *     "symbol",
 *     "type",
 *     "x",
 *     "y"
 *   ]
 * }
 */
export interface SystemWaypoint {

    symbol: string;

    type: WaypointType;

    x: number;

    y: number;

}
