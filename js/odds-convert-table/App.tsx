﻿(function () {
	var baseUrl = "/js/odds-convert-table/";

	require.config({
		urlArgs: "v=20160307",
		paths: {
			"Actions": baseUrl + "Actions",
			"ViewModels": baseUrl + "ViewModels",
			"OddsCalculatorStore": baseUrl + "OddsCalculatorStore",
			"Main": baseUrl + "Main",
			"App": baseUrl + "App",
			"OddsConvertTable": baseUrl + "OddsConvertTable",
		}
	});
})();

define(["require", "exports", 'Main'], function (require, exports, main) {
});
