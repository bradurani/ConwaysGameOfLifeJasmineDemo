
    describe("Asynchronous specs", function() {
        var value = 0;

        function funcRunInBackground() { //this function runs after 3 seconds
            value = 1;
        };

        function wrapFuncRunInBackground(done) { // setup for simulating the async operation, a function run in the background

            setTimeout(function() {
                funcRunInBackground();
                done(); //when this is called the test ends
            }, 3000);
        }

        beforeEach(function(done) { //the framework gives a done function that we call when the async operation returns
            wrapFuncRunInBackground(done);  //kick off the test
            console.log("wrap function returns immediately but value = 1 is set 3 seconds later. value is still " + value);
        });


        it("should support async execution of test preparation", function() {
            expect(value).toBeGreaterThan(0);
        });
    });


    /**
     * Because this calls the server it is now an integration test
     */
    describe("Ajax example", function() {

        var result;

        function makeAjaxCall(done) {
            $.ajax({
                dataType: "json",
                url: "localhost:80/ajax/getstuff",
                success: function(data) {
                    result = data;
                    done();
                }
            });
        }

        beforeEach(function(done) {
            makeAjaxCall(done);
        });

        it("should support async execution of test preparation", function() {
            expect(result).toEqual("success");
        });
    });



