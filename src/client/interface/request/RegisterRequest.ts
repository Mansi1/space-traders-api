/**
 * This file was generated by st-open-api
 */
import { RegisterRequestFaction } from './RegisterRequestFaction'

/**
 * Open-api schema
 * {
 *   "properties": {
 *     "faction": {
 *       "description": "The faction you choose determines your headquarters.",
 *       "enum": [
 *         "COSMIC",
 *         "VOID",
 *         "GALACTIC",
 *         "QUANTUM",
 *         "DOMINION"
 *       ]
 *     },
 *     "symbol": {
 *       "description": "How other agents will see your ships and information.",
 *       "example": "BADGER",
 *       "maxLength": 14,
 *       "minLength": 3,
 *       "type": "string"
 *     }
 *   },
 *   "required": [
 *     "symbol",
 *     "faction"
 *   ],
 *   "type": "object"
 * }
 */
export interface RegisterRequest {

    /**
     * The faction you choose determines your headquarters.
     */
    faction: RegisterRequestFaction;

    /**
     * How other agents will see your ships and information.
     * open-api validation:
     *   - minLength: 3
     *   - maxLength: 14
     */
    symbol: string;

}
