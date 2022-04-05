var notes = (function() {
    var list = [];

    return {
        add: function(note) {
            if (note) {
                note = note.trim();
                if(note == "") return false;

                var item = {timestamp: Date.now(), text: note};
                list.push(item);
                return true;
            }
            return false;
        },
        remove: function(index) {
            if(index) {
                if (index > list.length - 1) return false;
                return list.splice(index, 1).length > 0;

            }
            return false;

        },
        count: function() {
            return list.length;
        },
        list: function() {
            return list;
        },
        find: function(str) {
            if (str) {
                return list.find(x => x.text === str);
            }

        },
        clear: function() {
            list.splice(0, list.length);
            return list.length;
        }
    }
}());