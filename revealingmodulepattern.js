
var revealingModule = (function(){
	var privateVar = "hello";
	var publicVar = "hey there";

	function privateFunction(){
		console.log("Name": + privateVar);
	}

	function publicSetName(strName){
		privateVar = strName;
	}


	function publicGetName(){
		privateFunction();
	}

	return {
		setName: publicSetName,
		greeting: publicVar,
		getName: publicGetName
	};
})();

revealingModule.setName("kind of hey");
revealingModule.greeting();
revealingModule.getName();