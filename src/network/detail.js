import {request} from './request'
export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export class Goods{
    constructor(itemInfo,columns,shopInfo){
        this.title=itemInfo.title;
        this.price=itemInfo.price;
        this.oldprice=itemInfo.oldPrice;
        this.discount=itemInfo.discountDesc;
        this.discountcolor=itemInfo.discountBgColor;
        this.sales=columns[0];
        this.collect=columns[1];
        this.services= shopInfo.services
        this.desc=itemInfo.desc
        this.nowprice=itemInfo.lowNowPrice
    }
}

export class Shop {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods
    }
  }

  export class GoodsParam {
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }