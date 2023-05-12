/**
 * This file was generated by st-open-api
 */
import { MarketTradeGood } from './MarketTradeGood'
import { MarketTransaction } from './MarketTransaction'
import { TradeGood } from './TradeGood'

/**
 * Open-api schema
 * {
 *   "description": "",
 *   "type": "object",
 *   "properties": {
 *     "symbol": {
 *       "type": "string",
 *       "description": "The symbol of the market. The symbol is the same as the waypoint where the market is located."
 *     },
 *     "exports": {
 *       "type": "array",
 *       "description": "The list of goods that are exported from this market.",
 *       "items": {
 *         "$ref": "#/components/schemas/TradeGood"
 *       }
 *     },
 *     "imports": {
 *       "type": "array",
 *       "description": "The list of goods that are sought as imports in this market.",
 *       "items": {
 *         "$ref": "#/components/schemas/TradeGood"
 *       }
 *     },
 *     "exchange": {
 *       "type": "array",
 *       "description": "The list of goods that are bought and sold between agents at this market.",
 *       "items": {
 *         "$ref": "#/components/schemas/TradeGood"
 *       }
 *     },
 *     "transactions": {
 *       "type": "array",
 *       "description": "The list of recent transactions at this market. Visible only when a ship is present at the market.",
 *       "items": {
 *         "$ref": "#/components/schemas/MarketTransaction"
 *       }
 *     },
 *     "tradeGoods": {
 *       "type": "array",
 *       "description": "The list of goods that are traded at this market. Visible only when a ship is present at the market.",
 *       "items": {
 *         "$ref": "#/components/schemas/MarketTradeGood"
 *       }
 *     }
 *   },
 *   "required": [
 *     "symbol",
 *     "exports",
 *     "imports",
 *     "exchange"
 *   ]
 * }
 */
export interface Market {

    /**
     * The list of goods that are bought and sold between agents at this market.
     */
    exchange: Array<TradeGood>;

    /**
     * The list of goods that are exported from this market.
     */
    exports: Array<TradeGood>;

    /**
     * The list of goods that are sought as imports in this market.
     */
    imports: Array<TradeGood>;

    /**
     * The symbol of the market. The symbol is the same as the waypoint where the market is located.
     */
    symbol: string;

    /**
     * The list of goods that are traded at this market. Visible only when a ship is present at the market.
     */
    tradeGoods?: Array<MarketTradeGood>;

    /**
     * The list of recent transactions at this market. Visible only when a ship is present at the market.
     */
    transactions?: Array<MarketTransaction>;

}
