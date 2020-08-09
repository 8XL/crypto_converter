import axios from 'axios';

// так удобнее контролить монетки, да и на случай всякий
export const coins = ['BTC','DASH','DOGE','DCR','DAI', 'EOS','ETH','ETC',
'XLM','XMR', 'ZRX', 'TRX']; 
//ADA,BAT,BCH,BSV,BTC,BTG,DASH,DOGE
//,IOTA,LTC,QTUM,LINK,LSK,XEM,NEO,USDC 
//,USDT ,XRP,XTZ,ZEC доступные тикеры

const URL = `https://production.api.coindesk.com/v2/price/ticker?assets=`

export const fetchCoin = async (name) => {
    const { data } = await axios
        .get(URL+name); 
    return data
}
