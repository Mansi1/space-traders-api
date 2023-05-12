/**
 * This file was generated by st-open-api
 */
import { SystemType } from './SystemType'

/**
 * Open-api schema
 * {
 *   "description": "",
 *   "type": "object",
 *   "properties": {
 *     "symbol": {
 *       "type": "string",
 *       "minLength": 1
 *     },
 *     "sectorSymbol": {
 *       "type": "string",
 *       "minLength": 1
 *     },
 *     "type": {
 *       "$ref": "#/components/schemas/SystemType"
 *     },
 *     "x": {
 *       "type": "integer"
 *     },
 *     "y": {
 *       "type": "integer"
 *     },
 *     "distance": {
 *       "type": "integer"
 *     }
 *   },
 *   "required": [
 *     "symbol",
 *     "sectorSymbol",
 *     "type",
 *     "x",
 *     "y",
 *     "distance"
 *   ]
 * }
 */
export interface ScannedSystem {

    distance: number;

    /**
     * open-api validation:
     *   - minLength: 1
     */
    sectorSymbol: string;

    /**
     * open-api validation:
     *   - minLength: 1
     */
    symbol: string;

    type: SystemType;

    x: number;

    y: number;

}