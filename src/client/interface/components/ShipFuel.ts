/**
 * This file was generated by st-open-api
 */
import { ShipFuelConsumed } from './ShipFuelConsumed'

/**
 * Open-api schema
 * {
 *   "type": "object",
 *   "description": "Details of the ship's fuel tanks including how much fuel was consumed during the last transit or action.",
 *   "properties": {
 *     "current": {
 *       "type": "integer",
 *       "description": "The current amount of fuel in the ship's tanks.",
 *       "minimum": 0
 *     },
 *     "capacity": {
 *       "type": "integer",
 *       "description": "The maximum amount of fuel the ship's tanks can hold.",
 *       "minimum": 0
 *     },
 *     "consumed": {
 *       "type": "object",
 *       "properties": {
 *         "amount": {
 *           "type": "integer",
 *           "description": "The amount of fuel consumed by the most recent transit or action.",
 *           "minimum": 0
 *         },
 *         "timestamp": {
 *           "type": "string",
 *           "format": "date-time",
 *           "description": "The time at which the fuel was consumed."
 *         }
 *       },
 *       "required": [
 *         "amount",
 *         "timestamp"
 *       ]
 *     }
 *   },
 *   "required": [
 *     "current",
 *     "capacity"
 *   ]
 * }
 */
export interface ShipFuel {

    /**
     * The maximum amount of fuel the ship's tanks can hold.
     * open-api validation:
     *   - minimum: 0
     */
    capacity: number;

    consumed?: ShipFuelConsumed;

    /**
     * The current amount of fuel in the ship's tanks.
     * open-api validation:
     *   - minimum: 0
     */
    current: number;

}
