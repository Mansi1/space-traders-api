/**
 * This file was generated by st-open-api
 */

/**
 * Open-api schema
 * {
 *   "type": "object",
 *   "properties": {
 *     "waypointSymbol": {
 *       "type": "string",
 *       "description": "The symbol of the waypoint where the transaction took place."
 *     },
 *     "shipSymbol": {
 *       "type": "string",
 *       "description": "The symbol of the ship that was purchased."
 *     },
 *     "price": {
 *       "type": "integer",
 *       "description": "The price of the transaction.",
 *       "minimum": 1
 *     },
 *     "agentSymbol": {
 *       "type": "string",
 *       "description": "The symbol of the agent that made the transaction."
 *     },
 *     "timestamp": {
 *       "type": "string",
 *       "format": "date-time",
 *       "description": "The timestamp of the transaction."
 *     }
 *   },
 *   "required": [
 *     "waypointSymbol",
 *     "shipSymbol",
 *     "price",
 *     "agentSymbol",
 *     "timestamp"
 *   ]
 * }
 */
export interface ShipyardTransaction {

    /**
     * The symbol of the agent that made the transaction.
     */
    agentSymbol: string;

    /**
     * The price of the transaction.
     * open-api validation:
     *   - minimum: 1
     */
    price: number;

    /**
     * The symbol of the ship that was purchased.
     */
    shipSymbol: string;

    /**
     * The timestamp of the transaction.
     * open-api format: date-time
     */
    timestamp: Date;

    /**
     * The symbol of the waypoint where the transaction took place.
     */
    waypointSymbol: string;

}
