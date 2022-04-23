const explorer = {
    name: 'root',
    isFolder: true,
    items: [
        {
            name: 'node_modules',
            isFolder: true,
            items: [
                {
                    name: '.bin',
                    isFolder: true,
                    items: [
                        {
                            name: 'index.html',
                            isFolder: false
                        }
                    ]
                },
                {
                    name: '.cache',
                    isFolder: true,
                    items: [
                        {
                            name: 'cache.js',
                            isFolder: false
                        }
                    ]
                },
                {
                    name: '@babel',
                    isFolder: true,
                    items: [
                        {
                            name: 'Hello.jsx',
                            isFolder: false
                        }
                    ]
                },
                {
                    name: '@batch',
                    isFolder: true,
                    items: [
                        {
                            name: 'index.js',
                            isFolder: false
                        }
                    ]
                },{
                    name: '@chokidar',
                    isFolder: true,
                    items: [
                        {
                            name: 'index.js',
                            isFolder: false
                        }
                    ]
                },
            ]
        },
        {
            name: 'public',
            isFolder: true,
            items: [
                {
                    name: 'index.html',
                    isFolder: false
                },
                {
                    name: 'style.css',
                    isFolder: false
                },
                {
                    name: 'readme.txt',
                    isFolder: false
                }
            ]
        }, {
            name: 'src',
            isFolder: true,
            items: [
                {
                    name: 'components',
                    isFolder: true,
                    items: [
                        {
                            name: 'Hello.jsx',
                            isFolder: false
                        },
                        {
                            name: 'hello.css',
                            isFolder: false
                        }
                    ]
                },
                {
                    name: "App.js",
                    isFolder: false
                },
                {
                    name: 'index.js',
                    isFolder: false
                },
                {
                    name: 'index.css',
                    isFolder: false
                }
            ]

        },
        {
            name: 'package.json',
            isFolder: false
        }
    ]
};

export default explorer;