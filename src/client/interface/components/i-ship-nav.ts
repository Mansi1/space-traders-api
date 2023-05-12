/**
 * This file was generated by st-open-api
 */
import {IShipNavFlightMode} from './i-ship-nav-flight-mode';
import {IShipNavRoute} from './i-ship-nav-route';
import {IShipNavStatus} from './i-ship-nav-status';

export interface IShipNav {

    flightMode: IShipNavFlightMode;

    route: IShipNavRoute;

    status: IShipNavStatus;

    systemSymbol: string;

    waypointSymbol: string;

}