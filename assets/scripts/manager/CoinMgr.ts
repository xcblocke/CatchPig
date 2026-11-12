import { math } from "cc"
import { ItemMgr } from "./ItemMgr"
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
export class CoinMgr {
    public static get CurCoin(): number {
        return ItemMgr.ItemDic[0] ?? 0
    }
    public static set CurCoin(v: number) {
        ItemMgr.setItem(0, math.clamp(v, 0, 9999999))
    }

    public static fakeCoin: number = 0
}

globalThis.CoinMgr = CoinMgr
