module.exports =function(grunt)
{
	//init function
	grunt.initConfig
	({
		concat: 
		{
			options:
			{
				separator:'//--------------------------------------------------\n',
				banner: '//--------------------------------------------------\n'
			},
			dist:
			{
				src:['scripts/js/*.js'],
				dest:'builds/dev/js/scripts.js'
			}
		},
		watch:
		{
			options:
			{
				spawn:false
			},
			scripts:
			{
				files:['builds/dev/**/*.html',
				      'builds/dev/**/*.js',
				      'scripts/js/*.js'
				     ],
				tasks:['concat']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default',['concat'],['watch']);

}; //wrapper function
