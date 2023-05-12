/**
 * This file was generated by st-open-api
 */
import {IShipCondition} from './i-ship-condition';
import {IShipRequirements} from './i-ship-requirements';
import {ISymbolShipFrame} from './enumeration/i-symbol-ship-frame';

export interface IShipFrame {

    condition?: IShipCondition;

    description: string;

    fuelCapacity: number;

    moduleSlots: number;

    mountingPoints: number;

    name: string;

    requirements: IShipRequirements;

    symbol: ISymbolShipFrame;

}
