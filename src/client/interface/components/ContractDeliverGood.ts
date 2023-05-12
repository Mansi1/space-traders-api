/**
 * This file was generated by st-open-api
 */

/**
 * Open-api schema
 * {
 *   "description": "The details of a delivery contract. Includes the type of good, units needed, and the destination.",
 *   "type": "object",
 *   "properties": {
 *     "tradeSymbol": {
 *       "type": "string",
 *       "description": "The symbol of the trade good to deliver.",
 *       "minLength": 1
 *     },
 *     "destinationSymbol": {
 *       "type": "string",
 *       "description": "The destination where goods need to be delivered.",
 *       "minLength": 1
 *     },
 *     "unitsRequired": {
 *       "type": "integer",
 *       "description": "The number of units that need to be delivered on this contract."
 *     },
 *     "unitsFulfilled": {
 *       "type": "integer",
 *       "description": "The number of units fulfilled on this contract."
 *     }
 *   },
 *   "required": [
 *     "tradeSymbol",
 *     "destinationSymbol",
 *     "unitsRequired",
 *     "unitsFulfilled"
 *   ]
 * }
 */
export interface ContractDeliverGood {

    /**
     * The destination where goods need to be delivered.
     * open-api validation:
     *   - minLength: 1
     */
    destinationSymbol: string;

    /**
     * The symbol of the trade good to deliver.
     * open-api validation:
     *   - minLength: 1
     */
    tradeSymbol: string;

    /**
     * The number of units fulfilled on this contract.
     */
    unitsFulfilled: number;

    /**
     * The number of units that need to be delivered on this contract.
     */
    unitsRequired: number;

}