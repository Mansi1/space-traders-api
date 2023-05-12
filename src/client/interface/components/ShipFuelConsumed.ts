/**
 * This file was generated by st-open-api
 */

/**
 * Open-api schema
 * {
 *   "type": "object",
 *   "properties": {
 *     "amount": {
 *       "type": "integer",
 *       "description": "The amount of fuel consumed by the most recent transit or action.",
 *       "minimum": 0
 *     },
 *     "timestamp": {
 *       "type": "string",
 *       "format": "date-time",
 *       "description": "The time at which the fuel was consumed."
 *     }
 *   },
 *   "required": [
 *     "amount",
 *     "timestamp"
 *   ]
 * }
 */
export interface ShipFuelConsumed {

    /**
     * The amount of fuel consumed by the most recent transit or action.
     * open-api validation:
     *   - minimum: 0
     */
    amount: number;

    /**
     * The time at which the fuel was consumed.
     * open-api format: date-time
     */
    timestamp: Date;

}