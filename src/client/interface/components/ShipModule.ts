/**
 * This file was generated by st-open-api
 */
import { ShipModuleSymbol } from './ShipModuleSymbol'
import { ShipRequirements } from './ShipRequirements'

/**
 * Open-api schema
 * {
 *   "type": "object",
 *   "description": "A module can be installed in a ship and provides a set of capabilities such as storage space or quarters for crew. Module installations are permanent.",
 *   "properties": {
 *     "symbol": {
 *       "type": "string",
 *       "enum": [
 *         "MODULE_MINERAL_PROCESSOR_I",
 *         "MODULE_CARGO_HOLD_I",
 *         "MODULE_CREW_QUARTERS_I",
 *         "MODULE_ENVOY_QUARTERS_I",
 *         "MODULE_PASSENGER_CABIN_I",
 *         "MODULE_MICRO_REFINERY_I",
 *         "MODULE_ORE_REFINERY_I",
 *         "MODULE_FUEL_REFINERY_I",
 *         "MODULE_SCIENCE_LAB_I",
 *         "MODULE_JUMP_DRIVE_I",
 *         "MODULE_JUMP_DRIVE_II",
 *         "MODULE_JUMP_DRIVE_III",
 *         "MODULE_WARP_DRIVE_I",
 *         "MODULE_WARP_DRIVE_II",
 *         "MODULE_WARP_DRIVE_III",
 *         "MODULE_SHIELD_GENERATOR_I",
 *         "MODULE_SHIELD_GENERATOR_II"
 *       ]
 *     },
 *     "capacity": {
 *       "type": "integer",
 *       "minimum": 0
 *     },
 *     "range": {
 *       "type": "integer",
 *       "minimum": 0
 *     },
 *     "name": {
 *       "type": "string"
 *     },
 *     "description": {
 *       "type": "string"
 *     },
 *     "requirements": {
 *       "$ref": "#/components/schemas/ShipRequirements"
 *     }
 *   },
 *   "required": [
 *     "symbol",
 *     "name",
 *     "requirements"
 *   ]
 * }
 */
export interface ShipModule {

    /**
     * open-api validation:
     *   - minimum: 0
     */
    capacity?: number;

    description?: string;

    name: string;

    /**
     * open-api validation:
     *   - minimum: 0
     */
    range?: number;

    requirements: ShipRequirements;

    symbol: ShipModuleSymbol;

}
