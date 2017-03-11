;
require.config({
	baseUrl:"http://127.0.0.1:8080/lbs-web/static/plugins/",
	map: {
        '*': {
            'css': 'require/css'
        }
	},
    paths : {
        'jquery' : "../jquery/jquery-3.1.1.min",
        'bootstrap' : "../bootstrap/js/bootstrap.min",
        'jqueryui' : "../jqueryui/jquery-ui.min",
        'echarts' : "../echarts/echarts.min",
        'chosen' : "../chosen/chosen.jquery"
    },
    shim :{
	    jqueryui: {
	    	deps: [
	            'jquery',
	            'css!../jquery-ui/jquery-ui.min.css',
	            'css!../jquery-ui/jquery-ui.theme.css'
            ]
	    },
	    bootstrap: {
	        deps: [
	            'jquery',
	            'css!../bootstrap/css/bootstrap.min.css',
	            'css!../bootstrap/css/bootstrap-theme.min.css',
	        ]
	    },
	    chosen:{
	    	deps:[
	    	    'jquery',
	    	    'css!../chosen/chosen.css'
	    	]
	    }
    }
});

require(['jquery','bootstrap','jqueryui','echarts','chosen'], function($,bootstrap,jqueryui,echarts,chosen) {
        console.info("Welcome to the require of the master configuration module!");
        //TODO
    }
);


