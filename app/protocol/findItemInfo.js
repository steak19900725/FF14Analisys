var request = require('request');

var iconHost = "http://gxh.dw.sdo.com:3344/ff14/item_icon/";

exports.exec = function(keyword, uikindkey, callback) {
    var url = "http://gxh.dw.sdo.com:8080/ff14.portal/business/item/getItemDataList.html?itemUIKindKey=" + uikindkey + "&itemUICategory=0&basicParamKey=&basicParamValue=0&itemRarity=0&classJobKey=0&maxItemLevel=100&minItemLevel=0&startIndex=0&keyword=" + encodeURIComponent(keyword);

    request.get({url: url, method: 'get'}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var itemDatas = JSON.parse(response.body).data;
            if (!itemDatas) {
                callback(null);
            }
            else {
                itemDatas = itemDatas.filter(function(item) {
                    return item.itemUINameCn == keyword;
                });
                var itemData = itemDatas[0];
                if (!itemData) {
                    callback(null);
                }
                else {
                    var itemObj = {
                        id: itemData.itemKey,
                        iconUrl: iconHost + itemData.itemIcon,
                        hqIconUrl: iconHost + itemData.itemIconHq
                    }
                    callback(itemObj);
                }
            }
        } else {
            callback(null);
        }
    })
}