var request = require('request');

exports.exec = function (itemKey, areaId, groupId, callback) {
    var url = "http://gxh.dw.sdo.com:8080/ff14.portal/business/item/getItemTradeDataOfTheLatestHalfAmonthByAreaIdAndGroupId.html?itemKey=" + itemKey + "&areaId=" + areaId + "&groupId=" + groupId;

    request.get({url: url, method: 'get'}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var tradeData = JSON.parse(response.body).data;
            callback(tradeData);
        } else {
            callback(null);
        }
    })
}