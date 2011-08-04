(function ($) {
    $.fn.extend({
        likeGFW: function() {
            var $this = $(this),
            	display = $this.css("display");
            $this.css("display", "none").ready(function (event) {
                var iframe = $this.find("fb:like iframe");
                if (iframe) {
                    $this.css("display", display);
                }
            });
            return this;
        }
    });
})(jQuery);
