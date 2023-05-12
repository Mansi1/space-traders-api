/**
 * This file was generated by st-open-api
 */
import {IShipRequirements} from './i-ship-requirements';
import {ISymbolShipModule} from './enumeration/i-symbol-ship-module';

export interface IShipModule {

    capacity?: number;

    description?: string;

    name: string;

    range?: number;

    requirements: IShipRequirements;

    symbol: ISymbolShipModule;

}
