/**
 * This file was generated by st-open-api
 */
import { Agent } from '../components/Agent'
import { Contract } from '../components/Contract'
import { Faction } from '../components/Faction'
import { Ship } from '../components/Ship'

/**
 * Open-api schema
 * {
 *   "properties": {
 *     "agent": {
 *       "$ref": "#/components/schemas/Agent"
 *     },
 *     "contract": {
 *       "$ref": "#/components/schemas/Contract"
 *     },
 *     "faction": {
 *       "$ref": "#/components/schemas/Faction"
 *     },
 *     "ship": {
 *       "$ref": "#/components/schemas/Ship"
 *     },
 *     "token": {
 *       "description": "A Bearer token for accessing secured API endpoints.",
 *       "type": "string"
 *     }
 *   },
 *   "required": [
 *     "token",
 *     "agent",
 *     "faction",
 *     "contract",
 *     "ship"
 *   ],
 *   "type": "object"
 * }
 */
export interface RegisterResponseData {

    agent: Agent;

    contract: Contract;

    faction: Faction;

    ship: Ship;

    /**
     * A Bearer token for accessing secured API endpoints.
     */
    token: string;

}
