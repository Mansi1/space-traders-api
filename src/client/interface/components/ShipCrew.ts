/**
 * This file was generated by st-open-api
 */
import { ShipCrewRotation } from './ShipCrewRotation'

/**
 * Open-api schema
 * {
 *   "type": "object",
 *   "description": "The ship's crew service and maintain the ship's systems and equipment.",
 *   "properties": {
 *     "current": {
 *       "type": "integer",
 *       "description": "The current number of crew members on the ship."
 *     },
 *     "required": {
 *       "type": "integer",
 *       "description": "The minimum number of crew members required to maintain the ship."
 *     },
 *     "capacity": {
 *       "type": "integer",
 *       "description": "The maximum number of crew members the ship can support."
 *     },
 *     "rotation": {
 *       "type": "string",
 *       "description": "The rotation of crew shifts. A stricter shift improves the ship's performance. A more relaxed shift improves the crew's morale.",
 *       "enum": [
 *         "STRICT",
 *         "RELAXED"
 *       ],
 *       "default": "STRICT"
 *     },
 *     "morale": {
 *       "type": "integer",
 *       "description": "A rough measure of the crew's morale. A higher morale means the crew is happier and more productive. A lower morale means the ship is more prone to accidents.",
 *       "minimum": 0,
 *       "maximum": 100
 *     },
 *     "wages": {
 *       "type": "integer",
 *       "description": "The amount of credits per crew member paid per hour. Wages are paid when a ship docks at a civilized waypoint.",
 *       "minimum": 0
 *     }
 *   },
 *   "required": [
 *     "current",
 *     "required",
 *     "capacity",
 *     "rotation",
 *     "morale",
 *     "wages"
 *   ]
 * }
 */
export interface ShipCrew {

    /**
     * The maximum number of crew members the ship can support.
     */
    capacity: number;

    /**
     * The current number of crew members on the ship.
     */
    current: number;

    /**
     * A rough measure of the crew's morale. A higher morale means the crew is happier and more productive. A lower morale means the ship is more prone to accidents.
     * open-api validation:
     *   - minimum: 0
     *   - maximum: 100
     */
    morale: number;

    /**
     * The minimum number of crew members required to maintain the ship.
     */
    required: number;

    /**
     * The rotation of crew shifts. A stricter shift improves the ship's performance. A more relaxed shift improves the crew's morale.
     */
    rotation: ShipCrewRotation;

    /**
     * The amount of credits per crew member paid per hour. Wages are paid when a ship docks at a civilized waypoint.
     * open-api validation:
     *   - minimum: 0
     */
    wages: number;

}
