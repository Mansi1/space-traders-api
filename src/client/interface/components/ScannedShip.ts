/**
 * This file was generated by st-open-api
 */
import { ScannedShipEngine } from './ScannedShipEngine'
import { ScannedShipFrame } from './ScannedShipFrame'
import { ScannedShipMounts } from './ScannedShipMounts'
import { ScannedShipReactor } from './ScannedShipReactor'
import { ShipNav } from './ShipNav'
import { ShipRegistration } from './ShipRegistration'

/**
 * Open-api schema
 * {
 *   "description": "The ship that was scanned. Details include information about the ship that could be detected by the scanner.",
 *   "type": "object",
 *   "properties": {
 *     "symbol": {
 *       "type": "string",
 *       "description": "The globally unique identifier of the ship."
 *     },
 *     "registration": {
 *       "$ref": "#/components/schemas/ShipRegistration"
 *     },
 *     "nav": {
 *       "$ref": "#/components/schemas/ShipNav"
 *     },
 *     "frame": {
 *       "type": "object",
 *       "description": "The frame of the ship.",
 *       "properties": {
 *         "symbol": {
 *           "type": "string"
 *         }
 *       },
 *       "required": [
 *         "symbol"
 *       ]
 *     },
 *     "reactor": {
 *       "type": "object",
 *       "description": "The reactor of the ship.",
 *       "properties": {
 *         "symbol": {
 *           "type": "string"
 *         }
 *       },
 *       "required": [
 *         "symbol"
 *       ]
 *     },
 *     "engine": {
 *       "type": "object",
 *       "description": "The engine of the ship.",
 *       "properties": {
 *         "symbol": {
 *           "type": "string"
 *         }
 *       },
 *       "required": [
 *         "symbol"
 *       ]
 *     },
 *     "mounts": {
 *       "type": "array",
 *       "items": {
 *         "type": "object",
 *         "description": "A mount on the ship.",
 *         "properties": {
 *           "symbol": {
 *             "type": "string"
 *           }
 *         },
 *         "required": [
 *           "symbol"
 *         ]
 *       }
 *     }
 *   },
 *   "required": [
 *     "symbol",
 *     "registration",
 *     "nav",
 *     "engine"
 *   ]
 * }
 */
export interface ScannedShip {

    /**
     * The engine of the ship.
     */
    engine: ScannedShipEngine;

    /**
     * The frame of the ship.
     */
    frame?: ScannedShipFrame;

    mounts?: Array<ScannedShipMounts>;

    nav: ShipNav;

    /**
     * The reactor of the ship.
     */
    reactor?: ScannedShipReactor;

    registration: ShipRegistration;

    /**
     * The globally unique identifier of the ship.
     */
    symbol: string;

}
