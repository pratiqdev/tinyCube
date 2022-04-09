# EXAMPLES

*********************************************************************************************
## Multi-version data structure

How version data and files with multiple versions are stored in the data structure

```js
items = [
    {
        name: 'Small Clamp',
        active_version: '2.0.1',
        versions: [
            '1.0.0',
            '1.0.1',
            '1.0.2',
            '1.1.0',
            '1.1.1',
            '1.1.2',
            '2.0.0',
            '2.0.1',
        ]
        source: [
            {
                version: '1.0.0',
                files: [...]
            },
            {
                version: '2.0.0',
                files: [...]
            }
        ],
        models: [
            {
                version: '1.0.0',
                file: ''
            },
            {
                version: '1.1.0',
                file: ''
            },
            {
                version: '2.0.0',
                file: ''
            }
        ],
        gcode: [
            {
                version: '1.0.0',
                file: ''
            },
            {
                version: '1.0.1',
                file: ''
            },
            {
                version: '1.0.2',
                file: ''
            },
            {
                version: '1.1.0',
                file: ''
            },
            {
                version: '1.1.1',
                file: ''
            },
            {
                version: '1.1.2',
                file: ''
            },
            {
                version: '2.0.0',
                file: ''
            },
            {
                version: '2.0.1',
                file: ''
            },
        ],
        notes: [
            {
                version: '1.0.0',
                files: [...]
            },
            {
                version: '1.0.1',
                files: [...]
            },
            {
                version: '1.0.2',
                files: [...]
            },
        ],
        images: [
            {
                version: '1.0.0',
                files: [
                    {
                        file: 'image.jpg',
                        for: '(id) image used for ... location? item? thumbnail? annotation? print?',
                        alt: 'This is an image of ...'
                    }
                ]
            }
        ]

    }
]
```

*********************************************************************************************
## example 2 