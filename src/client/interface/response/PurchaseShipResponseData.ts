/**
 * This file was generated by st-open-api
 */
import { Agent } from '../components/Agent'
import { Ship } from '../components/Ship'
import { ShipyardTransaction } from '../components/ShipyardTransaction'

/**
 * Open-api schema
 * {
 *   "properties": {
 *     "agent": {
 *       "$ref": "#/components/schemas/Agent"
 *     },
 *     "ship": {
 *       "$ref": "#/components/schemas/Ship"
 *     },
 *     "transaction": {
 *       "$ref": "#/components/schemas/ShipyardTransaction"
 *     }
 *   },
 *   "required": [
 *     "ship",
 *     "agent",
 *     "transaction"
 *   ],
 *   "type": "object"
 * }
 */
export interface PurchaseShipResponseData {

    agent: Agent;

    ship: Ship;

    transaction: ShipyardTransaction;

}
