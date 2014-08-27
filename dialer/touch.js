$.fn.addTouch = function() {
    if ($.support.touch) {
            this.each(function(i,el){
                    el.addEventListener("touchstart", iPadTouchHandler, false);
                    el.addEventListener("touchmove", iPadTouchHandler, false);
                    el.addEventListener("touchend", iPadTouchHandler, false);
                    el.addEventListener("touchcancel", iPadTouchHandler, false);
            });
    }
};
