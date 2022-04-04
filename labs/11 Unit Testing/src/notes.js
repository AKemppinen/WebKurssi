var notes = (function() {
    var list = [];

    return {
        add: function(note) {
            if (note) {
                var item = {timestamp: Date.now(), text: note};
                list.push(item);
                return true;
            }
            return false;
        },
        remove: function(index) {
            list.splice(index, 1);
        },
        count: function() {
            return list.length;
        },
        list: function() {},
        find: function(str) {
            list.find(str);
        },
        clear: function() {
            list.splice(0, list.length);
        }
    }
}());