import { Global } from "../Global"
import { CfgItem, DtoItem } from "../config/CfgItem"
import { ItemType } from "../enum/ItemType"
import { StorageUtil } from "../util/StorageUtil"
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
export class ItemMgr {

    private static itemDic: { [key: number]: number } = {}
    public static get ItemDic() {
        return this.itemDic
    }

    public static init(): void {
        this.itemDic = StorageUtil.getObj('itemDic', Global.Default_Item)
        StorageUtil.setObj('itemDic', this.itemDic)
    }

    public static setItem(id: number, cnt: number): number {
        if (!this.itemDic[id]) this.itemDic[id] = 0
        this.itemDic[id] = cnt
        StorageUtil.setObj('itemDic', this.itemDic)
        return this.itemDic[id]
    }

    public static updateItem(id: number, cnt: number): number {
        if (!this.itemDic[id]) this.itemDic[id] = 0
        this.itemDic[id] += cnt
        StorageUtil.setObj('itemDic', this.itemDic)
        return this.itemDic[id]
    }

    public static getType(id: number): ItemType {
        const itemData: DtoItem = CfgItem[id]
        return itemData.type
    }

    public static getCnt(id: number): number {
        return this.itemDic[id]
    }

}

globalThis.ItemMgr = ItemMgr

