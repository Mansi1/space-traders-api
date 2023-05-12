/**
 * This file was generated by st-open-api
 */
import {IEngineScannedShip} from './interface/i-engine-scanned-ship';
import {IFrameScannedShip} from './interface/i-frame-scanned-ship';
import {IMountsScannedShip} from './interface/i-mounts-scanned-ship';
import {IReactorScannedShip} from './interface/i-reactor-scanned-ship';
import {IShipNav} from './i-ship-nav';
import {IShipRegistration} from './i-ship-registration';

export interface IScannedShip {

    engine: IEngineScannedShip;

    frame?: IFrameScannedShip;

    mounts?: Array<IMountsScannedShip>;

    nav: IShipNav;

    reactor?: IReactorScannedShip;

    registration: IShipRegistration;

    symbol: string;

}