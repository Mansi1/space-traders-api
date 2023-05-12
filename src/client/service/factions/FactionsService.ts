/**
 * This file was generated by st-open-api
 */
import { GetFactionPathParameter } from '../../interface/parameter/GetFactionPathParameter'
import { GetFactionsQueryParameter } from '../../interface/parameter/GetFactionsQueryParameter'
import { GetFactionResponse } from '../../interface/response/GetFactionResponse'
import { GetFactionsResponse } from '../../interface/response/GetFactionsResponse'

export class FactionsService {

    constructor(public config: {
        send: <T = void>(request: {
            method: string;
            url: string;
            queryParameter?: any;
            urlParameter?: any;
            headerParameter?: any;
            cookieParameter?: any;
            body?: any;
        }) => Promise<T>
    }) {
    }

    /*
     * View the details of a faction.
     */
    getFaction = async (urlParameter: GetFactionPathParameter, ): Promise<GetFactionResponse> => {
        return this.config.send<GetFactionResponse>({
                method: 'GET',
                url: '/factions/{factionSymbol}',
                urlParameter: urlParameter,
                queryParameter: {},
                headerParameter: {
                    'content-type': 'application/json',
                },
            }
        );
    };

    /*
     * List all discovered factions in the game.
     */
    getFactions = async (queryParameter: GetFactionsQueryParameter, ): Promise<GetFactionsResponse> => {
        return this.config.send<GetFactionsResponse>({
                method: 'GET',
                url: '/factions',
                urlParameter: {},
                queryParameter: queryParameter,
                headerParameter: {
                    'content-type': 'application/json',
                },
            }
        );
    };

}