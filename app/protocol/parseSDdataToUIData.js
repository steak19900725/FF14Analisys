exports.exec = function(arr, callback) {
    var dates = arr.map(function(obj) {
        return obj.itemTradeDate;
    })
    var itemBottomPrices = arr.map(function(obj) {
        return obj.itemBottomPrice;
    })
    var itemAveragePrizes = arr.map(function(obj) {
        return obj.itemAveragePrize;
    })
    var itemPeakPrices = arr.map(function(obj) {
        return obj.itemPeakPrice;
    })

    var returnObj = {
        dates : dates,
        itemBottomPrices : itemBottomPrices,
        itemAveragePrizes : itemAveragePrizes,
        itemPeakPrices : itemPeakPrices
    };

    callback(returnObj);
}