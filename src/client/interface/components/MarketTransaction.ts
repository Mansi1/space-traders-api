/**
 * This file was generated by st-open-api
 */
import { MarketTransactionType } from './MarketTransactionType'

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
 *       "description": "The symbol of the ship that made the transaction."
 *     },
 *     "tradeSymbol": {
 *       "type": "string",
 *       "description": "The symbol of the trade good."
 *     },
 *     "type": {
 *       "type": "string",
 *       "description": "The type of transaction.",
 *       "enum": [
 *         "PURCHASE",
 *         "SELL"
 *       ]
 *     },
 *     "units": {
 *       "type": "integer",
 *       "description": "The number of units of the transaction.",
 *       "minimum": 1
 *     },
 *     "pricePerUnit": {
 *       "type": "integer",
 *       "description": "The price per unit of the transaction.",
 *       "minimum": 1
 *     },
 *     "totalPrice": {
 *       "type": "integer",
 *       "description": "The total price of the transaction.",
 *       "minimum": 1
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
 *     "tradeSymbol",
 *     "type",
 *     "units",
 *     "pricePerUnit",
 *     "totalPrice",
 *     "timestamp"
 *   ]
 * }
 */
export interface MarketTransaction {

    /**
     * The price per unit of the transaction.
     * open-api validation:
     *   - minimum: 1
     */
    pricePerUnit: number;

    /**
     * The symbol of the ship that made the transaction.
     */
    shipSymbol: string;

    /**
     * The timestamp of the transaction.
     * open-api format: date-time
     */
    timestamp: Date;

    /**
     * The total price of the transaction.
     * open-api validation:
     *   - minimum: 1
     */
    totalPrice: number;

    /**
     * The symbol of the trade good.
     */
    tradeSymbol: string;

    /**
     * The type of transaction.
     */
    type: MarketTransactionType;

    /**
     * The number of units of the transaction.
     * open-api validation:
     *   - minimum: 1
     */
    units: number;

    /**
     * The symbol of the waypoint where the transaction took place.
     */
    waypointSymbol: string;

}
