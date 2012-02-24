var tame = require('tamejs').runtime;
var __tame_defer_cb = null;
var __tame_fn_0 = function (__tame_k) {
    tame.setActiveCb (__tame_defer_cb);
    var userModel = require ( '../lib/userModel.js' ) . createUserModel ( ) ;
    
    module . exports . findMe =
    function  (user, callback) {
        var __tame_defer_cb = tame.findDeferCb ([user, callback]);
        tame.setActiveCb (__tame_defer_cb);
        var __tame_this = this;
        var __tame_fn_15 = function (__tame_k) {
            tame.setActiveCb (__tame_defer_cb);
            var error , result ;
            var __tame_fn_1 = function (__tame_k) {
                tame.setActiveCb (__tame_defer_cb);
                var __tame_fn_2 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_defers = new tame.Deferrals (__tame_k);
                    var __tame_fn_3 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        userModel . findByEmail ( user . email ,
                        __tame_defers.defer ( { 
                            assign_fn : 
                                function () {
                                    error = arguments[0];
                                    result = arguments[1];
                                }
                                ,
                            parent_cb : __tame_defer_cb,
                            line : 5,
                            file : "tame.tjs"
                        } )
                        ) ;
                        tame.callChain([__tame_k]);
                        tame.setActiveCb (null);
                    };
                    __tame_fn_3(tame.end);
                    __tame_defers._fulfill();
                    tame.setActiveCb (null);
                };
                var __tame_fn_4 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_fn_5 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                            callback ( error , result );
                            tame.callChain([tame.end, __tame_k]);
                        tame.setActiveCb (null);
                    };
                    if (error || result) {
                        tame.callChain([__tame_fn_5, __tame_k]);
                    } else {
                        tame.callChain([__tame_k]);
                    }
                    tame.setActiveCb (null);
                };
                var __tame_fn_6 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_defers = new tame.Deferrals (__tame_k);
                    var __tame_fn_7 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        userModel . findByName ( user . name ,
                        __tame_defers.defer ( { 
                            assign_fn : 
                                function () {
                                    error = arguments[0];
                                    result = arguments[1];
                                }
                                ,
                            parent_cb : __tame_defer_cb,
                            line : 9,
                            file : "tame.tjs"
                        } )
                        ) ;
                        tame.callChain([__tame_k]);
                        tame.setActiveCb (null);
                    };
                    __tame_fn_7(tame.end);
                    __tame_defers._fulfill();
                    tame.setActiveCb (null);
                };
                var __tame_fn_8 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_fn_9 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                            callback ( error , result );
                            tame.callChain([tame.end, __tame_k]);
                        tame.setActiveCb (null);
                    };
                    if (error || result) {
                        tame.callChain([__tame_fn_9, __tame_k]);
                    } else {
                        tame.callChain([__tame_k]);
                    }
                    tame.setActiveCb (null);
                };
                var __tame_fn_10 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_defers = new tame.Deferrals (__tame_k);
                    var __tame_fn_11 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        userModel . findByGithub ( user . github ,
                        __tame_defers.defer ( { 
                            assign_fn : 
                                function () {
                                    error = arguments[0];
                                    result = arguments[1];
                                }
                                ,
                            parent_cb : __tame_defer_cb,
                            line : 13,
                            file : "tame.tjs"
                        } )
                        ) ;
                        tame.callChain([__tame_k]);
                        tame.setActiveCb (null);
                    };
                    __tame_fn_11(tame.end);
                    __tame_defers._fulfill();
                    tame.setActiveCb (null);
                };
                var __tame_fn_12 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_fn_13 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                            callback ( error , result );
                            tame.callChain([tame.end, __tame_k]);
                        tame.setActiveCb (null);
                    };
                    if (error || result) {
                        tame.callChain([__tame_fn_13, __tame_k]);
                    } else {
                        tame.callChain([__tame_k]);
                    }
                    tame.setActiveCb (null);
                };
                var __tame_fn_14 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                        callback ( undefined , null );
                        tame.callChain([tame.end, __tame_k]);
                    tame.setActiveCb (null);
                };
                tame.callChain([__tame_fn_2, __tame_fn_4, __tame_fn_6, __tame_fn_8, __tame_fn_10, __tame_fn_12, __tame_fn_14, __tame_k]);
                tame.setActiveCb (null);
            };
            tame.callChain([__tame_fn_1, __tame_k]);
            tame.setActiveCb (null);
        };
        tame.callChain([__tame_fn_15, __tame_k]);
        tame.setActiveCb (null);
    }
    ;
    tame.callChain([__tame_k]);
    tame.setActiveCb (null);
};
__tame_fn_0 (tame.end);