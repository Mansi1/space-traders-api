/**
 * This file was generated by st-open-api
 */
import {IShipNavRouteWaypoint} from './i-ship-nav-route-waypoint';

export interface IShipNavRoute {

    arrival: string;

    departure: IShipNavRouteWaypoint;

    departureTime: string;

    destination: IShipNavRouteWaypoint;

}