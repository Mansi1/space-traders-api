/**
 * This file was generated by st-open-api
 */
import { CreateChartResponseData } from './CreateChartResponseData'

/**
 * Open-api schema
 * {
 *   "properties": {
 *     "data": {
 *       "properties": {
 *         "chart": {
 *           "$ref": "#/components/schemas/Chart"
 *         },
 *         "waypoint": {
 *           "$ref": "#/components/schemas/Waypoint"
 *         }
 *       },
 *       "required": [
 *         "chart",
 *         "waypoint"
 *       ],
 *       "type": "object"
 *     }
 *   },
 *   "type": "object",
 *   "required": [
 *     "data"
 *   ]
 * }
 */
export interface CreateChartResponse {

    data: CreateChartResponseData;

}
