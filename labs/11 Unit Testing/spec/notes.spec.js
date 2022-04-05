describe('notes module', function () {
    beforeEach(function() {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
    });

    describe('note tests', function() {

        it("should be able to add a new note", function () {
            expect(notes.add('sixth note')).toBe(true);
            expect(notes.count()).toBe(6);
        });
        it("should ignore blank notes", function () {
            expect(notes.add('')).toBe(false);
            expect(notes.count()).toBe(5);
        });
        it('should ignore notes containing only whitespace', function() {
            expect(notes.add('   ')).toBe(false);
            expect(notes.count()).toBe(5);

        });

        it('should require a string parameter', function() {
            expect(notes.add()).toBe(false);
            expect(notes.count()).toBe(5);

        });
    });


    describe('finding a note', function() {

        it('should find nothing', function() {
            expect(notes.find()).toEqual(undefined);
        });

        it('should find first note', function() {
            expect(notes.find('first note')).toEqual(notes.list()[0]);
        });
    });

    describe('returning list', function() {

        it('should return list', function() {
            expect(Array.isArray(notes.list())).toEqual(true);
        });

    });

    describe('deleting a note', function() {

        it('should remove nothing', function() {
            expect(notes.remove()).toEqual(false);
        });

        it('should remove second note', function() {
            expect(notes.remove(1)).toEqual(true);
        });

        it('should clear list', function() {
            expect(notes.clear()).toEqual(0);
        });
    });

});

