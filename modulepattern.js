var testModule = (function(){
	var counter = 0;

	return {
		incrementCounter : function(){
			return counter++;
		},

		resetCounter: function(){
			console.log("log event");
			counter = 0;
		}
	}
})();

testModule.incrementCounter();

testModule.resetCounter();