/**
 * This file was generated by st-open-api
 */
import {ISizeSurvey} from './enumeration/i-size-survey';

export interface ISurvey {

    deposits: Array<any>;

    expiration: string;

    signature: string;

    size: ISizeSurvey;

    symbol: string;

}