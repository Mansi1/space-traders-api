/**
 * This file was generated by st-open-api
 */
import {IConsumedDataShipRefineResponse} from './interface/i-consumed-data-ship-refine-response';
import {ICooldown} from '../../components/i-cooldown';
import {IProducedDataShipRefineResponse} from './interface/i-produced-data-ship-refine-response';
import {IShipCargo} from '../../components/i-ship-cargo';

export interface IDataShipRefineResponse {

    cargo: IShipCargo;

    consumed: Array<IConsumedDataShipRefineResponse>;

    cooldown: ICooldown;

    produced: Array<IProducedDataShipRefineResponse>;

}