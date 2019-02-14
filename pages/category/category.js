// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabActive:1,
    //所有分类产品数据
    allProductData: [{
      cateId: 1,
      cateTitle: "新鲜蔬菜", //顶级分类名称
      data: [{
        cateId: 11,
        cateTitle: "叶菜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 12,
        cateTitle: "根茎类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 13,
        cateTitle: "茄瓜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 14,
        cateTitle: "姜葱类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 15,
        cateTitle: "豆类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 16,
        cateTitle: "菌类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 17,
        cateTitle: "特菜", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }]
    }, {
      cateId: 2,
      cateTitle: "时令水果", //顶级分类名称
      data: [{
        cateId: 11,
        cateTitle: "叶菜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 12,
        cateTitle: "根茎类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 13,
        cateTitle: "茄瓜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 14,
        cateTitle: "姜葱类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 15,
        cateTitle: "豆类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 16,
        cateTitle: "菌类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 17,
        cateTitle: "特菜", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }]
    }, {
      cateId: 3,
      cateTitle: "肉禽类", //顶级分类名称
      data: [{
        cateId: 11,
        cateTitle: "叶菜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 12,
        cateTitle: "根茎类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 13,
        cateTitle: "茄瓜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 14,
        cateTitle: "姜葱类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 15,
        cateTitle: "豆类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 16,
        cateTitle: "菌类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 17,
        cateTitle: "特菜", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }]
    }, {
      cateId: 4,
      cateTitle: "方便菜", //顶级分类名称
      data: [{
        cateId: 11,
        cateTitle: "叶菜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 12,
        cateTitle: "根茎类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 13,
        cateTitle: "茄瓜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 14,
        cateTitle: "姜葱类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 15,
        cateTitle: "豆类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 16,
        cateTitle: "菌类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 17,
        cateTitle: "特菜", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }]
    }, {
      cateId: 5,
      cateTitle: "水产冻货", //顶级分类名称
      data: [{
        cateId: 11,
        cateTitle: "叶菜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 12,
        cateTitle: "根茎类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 13,
        cateTitle: "茄瓜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 14,
        cateTitle: "姜葱类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 15,
        cateTitle: "豆类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 16,
        cateTitle: "菌类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 17,
        cateTitle: "特菜", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }]
    }, {
      cateId: 6,
      cateTitle: "蛋品面豆", //顶级分类名称
      data: [{
        cateId: 11,
        cateTitle: "叶菜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 12,
        cateTitle: "根茎类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 13,
        cateTitle: "茄瓜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 14,
        cateTitle: "姜葱类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 15,
        cateTitle: "豆类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 16,
        cateTitle: "菌类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 17,
        cateTitle: "特菜", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }]
    }, {
      cateId: 7,
      cateTitle: "米油粮面", //顶级分类名称
      data: [{
        cateId: 11,
        cateTitle: "叶菜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 12,
        cateTitle: "根茎类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 13,
        cateTitle: "茄瓜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 14,
        cateTitle: "姜葱类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 15,
        cateTitle: "豆类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 16,
        cateTitle: "菌类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 17,
        cateTitle: "特菜", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }]
    }, {
      cateId: 8,
      cateTitle: "休闲饮料", //顶级分类名称
      data: [{
        cateId: 11,
        cateTitle: "叶菜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 12,
        cateTitle: "根茎类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 13,
        cateTitle: "茄瓜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 14,
        cateTitle: "姜葱类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 15,
        cateTitle: "豆类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 16,
        cateTitle: "菌类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 17,
        cateTitle: "特菜", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }]
    }, {
      cateId: 9,
      cateTitle: "调料干货", //顶级分类名称
      data: [{
        cateId: 11,
        cateTitle: "叶菜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 12,
        cateTitle: "根茎类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 13,
        cateTitle: "茄瓜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 14,
        cateTitle: "姜葱类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 15,
        cateTitle: "豆类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 16,
        cateTitle: "菌类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 17,
        cateTitle: "特菜", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }]
    }, {
      cateId: 10,
      cateTitle: "餐厨用品", //顶级分类名称
      data: [{
        cateId: 11,
        cateTitle: "叶菜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 12,
        cateTitle: "根茎类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 13,
        cateTitle: "茄瓜类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 14,
        cateTitle: "姜葱类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 15,
        cateTitle: "豆类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 16,
        cateTitle: "菌类", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }, {
        cateId: 17,
        cateTitle: "特菜", //子级分类名称
        data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 1
          },
          {
            id: 2, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 3, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
            title: "上等优质猪肉", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          },
          {
            id: 4, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-4.png", //产品图片
            title: "大蒜", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "10.05", //最新价格
            oldPrice: "13.40", //原始价格
            label: "降价", //标签
            count: 2
          },
          {
            id: 5, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-1.png", //产品图片
            title: "100%花生食用油", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            label: "降价", //标签
            count: 0
          }
        ]
      }]
    }],
    activeIndex: 0,//控制顶级分类分页
    subActiveIndex:0,//控制子分类分页
    peopleBuyShow:false,
  },
  tabEventListener:function(e){
    //console.log(e.detail.index)
    this.setData({
      activeIndex: e.detail.index,
      subActiveIndex:0
    })
  },
  // 监听添加商品事件
  addEventListener: function (e) {
    //console.log(e.detail)
    var addCartCount = this.data.cartListNum + 1;
    this.setData({
      cartListNum: addCartCount
    })
  },
  // 监听删除商品事件
  subEventListener: function (e) {
    //console.log(e.detail)
    var subCartCount = this.data.cartListNum - 1;
    this.setData({
      cartListNum: subCartCount
    })
  },
  //监听input失去焦点事件
  blurEventListener: function (e) {
    //console.log(e.detail.value)
    var blurCartCount = this.data.cartListNum + e.detail.value;
    this.setData({
      cartListNum: blurCartCount
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})