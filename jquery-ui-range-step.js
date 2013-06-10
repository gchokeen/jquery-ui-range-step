/*
 * jQuery UI Slider Range step extension 1.0 (Jun 10, 2013)
 *
 * This extension is based code provided by
 * jQuery UI Slider version 1.10.3
 * it may happen tht it won't work with newer versions
 *
 * Copyright (c) 2013 Gowri Sankar
 * Licensed under the terms of the MIT and GPL-2.0 license
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 *
 */

 (function($) {
   if ($.ui.slider){
		 
		 $.extend($.ui.slider.prototype.options, {
			stepScale:[]
			 });
		 
		 $.extend($.ui.slider.prototype, {
			 _slide: function(event, index, currentvalue) {

					var currentvalue,	    
	                stepValues = this.options.stepScale,
	                distance = [],
	                minDistance = this.options.max,
	                minI;

	                $.each(stepValues, function (i, val) {
	                    distance[i] = Math.abs(currentvalue - val);
	                    if (distance[i] < minDistance) {
	                        minDistance = distance[i];
	                        minI = i;
	                    }
	                });

	                if (minDistance < this.options.max){
	                	this.value(stepValues[minI]);

		             }
	                else{
		                this.value(currentvalue);
		              
		                }  
	                	                
				 }
			 });
 
		 }
 })(jQuery);

