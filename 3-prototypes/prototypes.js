"use strict";

/**
 * An den Stellen, wo ADD ONE LINE steht, darf maximal nur eine Zeile stehen in der maximal nur ein Semikolon verwendet wird.
 * Wo EDIT THIS LINE steht darf lediglich die nächste Zeile abgeändert werden.
 *
 * Gut: var a = 2, b = a + 1, c = b;
 * Böse: var a = 2; var b = a + 1; var c = b;
 */
describe("Prototypes", function () {
    
    describe("test 1", function () {
        
        it("should run without errors", function () {
            var monster = {
                health: 10
            };

            /* ADD ONE LINE */


            expect(godzilla).to.have.property("health", 10);
            expect(godzilla.hasOwnProperty("health")).to.equal(false);
        });

    });

    describe("test 2", function () {

        it("should run without errors", function () {
            /* ADD ONE LINE */

            expect(godzilla).to.have.property("health", 10);
            expect(godzilla.hasOwnProperty("health")).to.equal(false);
            expect(Object.getPrototypeOf(godzilla)).to.equal(monster);
            expect(monster.hasOwnProperty("health")).to.equal(false);
        });

    });

    describe("test 3", function () {

        it("should run without errors", function () {
            var monster = { health: 10 };
            var godzilla = Object.create(monster);

            /* ADD ONE LINE */

            expect(godzilla).to.have.property("health", 15);
            expect(monster).to.have.property("health", 10);
        });

    });

    describe("test 4", function () {

        it("should run without errors", function () {
            var monster = { health: 10 };
            var godzilla = Object.create(monster);

            godzilla.health = 15;
            /* ADD ONE LINE */


            expect(godzilla).to.have.property("health", 10);
            expect(godzilla.hasOwnProperty("health")).to.equal(false);
        });

    });

    describe("test 5", function () {

        it("should run without errors", function () {
            var monster = { victims: [] };
            var godzilla = Object.create(monster);
            var kingKong = Object.create(monster);

            /* ADD ONE LINE */


            expect(godzilla.victims).to.have.length(1);
            expect(kingKong.victims).to.have.length(1);
        });

    });

    describe("test 6", function () {

        it("should run without errors", function () {
            var godzilla;

            /* ADD TWO LINES */



            godzilla = new Monster();
            expect(godzilla).to.have.property("health", 10);
            expect(godzilla.hasOwnProperty("health")).to.equal(false);
        });

    });

    describe("test 7", function () {

        it("should run without errors", function () {
            var godzilla;

            function Animal() {}
            function Monster() {}

            /* ADD ONE LINE */


            godzilla = new Monster();
            expect(godzilla).to.be.an.instanceof(Monster);
            expect(godzilla).to.be.an.instanceof(Animal);
        });

    });

    describe("test 8", function () {

        it("should run without errors", function () {
            var godzilla;
            var kingKong;

            /* ADD ONE LINE */


            godzilla = new Monster();
            kingKong = new Monster();
            kingKong.victims.push("Jane");
            expect(godzilla.victims).to.have.length(0);
        });

    });

    describe("test 9", function () {

        it("should run without errors", function () {
            var monster = { kills: 0 };
            var animal = { health: 10 };
            var godzilla = Object.create(monster);

            /* ADD ONE LINE */


            expect(godzilla).to.not.have.property("kills");
            expect(godzilla).to.have.property("health", 10);
        });

    });

});
