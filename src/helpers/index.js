export default {
    URLSearchParams (obj) {
        var params = new URLSearchParams();
        
        for (var [key, value] of Object.entries(obj)) params.append(key, value);
        
        return params;
    },
    convertStringToTime (datetime, keys) {
        for (var value of keys) {
            datetime[value] = new Date(datetime[value]);
        }
        return datetime;
    }
};
