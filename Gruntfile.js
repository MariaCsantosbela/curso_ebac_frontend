module.exports=function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    'dist/styles/main.css':'src/styles/main.less'
                }
            },
            production:{
                options:{
                    compress: true,
                },
                files:{
                    'dist/styles/main.css':'src/styles/main.less'
                }
            }
            
        },
        watch:{
           less:{
            files:['src/styles/**/*.less'],
            task:['less: development']

           } ,
           html:{
           files: ['src/index.html'],
           tasks: ['replace:dev']

           }
        },
        replace: {
            dev: {
                options:{
                    pattens:[
                        {
                            watch:'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        },

                        {
                            watch:'ENDERECO_DO_JS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                },
                files:[
                   {
                    expand: true,
                    flatten: true,
                    src:['src/index.html'],
                    dest: 'dev/'
                   } 
                ]

            }

        },
        dist:{
            options:{
                pattens:[
                    {
                        watch:'ENDERECO_DO_CSS',
                        replacement: './styles/main.min.css'
    
                    },
                    {
                        watch:'ENDERECO_DO_JS',
                        replacement: '../scripts/main.js'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
     
        clean:[
            'prebuild'
        ],
        uglify:{
            target:{
                files: {
                    'dist/scripts/main.min.js':'src/scripts/main.js'
                }
            }
        }



        
    })
    

    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');






    grunt.registerTask('default',['watch'] );
    grunt.registerTask('build',['less:production', 'htmlmin:dist', 'replace:dist','clean','uglify' ]);

}


