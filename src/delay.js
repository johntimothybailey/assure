/**
 * Strategy for detemining async method
 *
 * @return {Function} Async method
 */
var delay = ( function () {
	if ( typeof process !== "undefined" ) {
		return process.nextTick;
	}
	else {
		return function ( arg ) {
			setTimeout( arg, 0 );
		};
	}
})();