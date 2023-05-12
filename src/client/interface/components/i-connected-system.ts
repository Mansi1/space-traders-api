/**
 * This file was generated by st-open-api
 */
import {ISystemType} from './i-system-type';

export interface IConnectedSystem {

    distance: number;

    factionSymbol?: string;

    sectorSymbol: string;

    symbol: string;

    type: ISystemType;

    x: number;

    y: number;

}