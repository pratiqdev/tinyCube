# Items

Models and associated files belonging to the current user

*******************************************************************************

## Structure:

```js
const items = {
    'xxxx': {
        item_created: 9457968345,
        item_modified: 9457968536,
        item_name: 'Small Clamp',
        item_description: 'A clamp for holding the desk trim while glue dries',
        item_public: true,

        item_versions: {
            'xxxx': {
                version_primary: true,
                version_number: '1.0.0',
                version_created: 9876547654,
                version_modified: 9876549876,
                version_name: 'Small Clamp - chamfered', //?
                version_description: 'Why i created this new version...',

                sources:{
                    'xxxx': {
                        source_created: 987659876,
                        source_modified: 987661342,
                        source_file: 'smallClamp.f3d'
                        source_extension: 'f3d',
                        source_program: 'Fusion 360',
                        source_description: 'Original model',
                    },
                    'xxxx': {
                        source_created: 987659876,
                        source_modified: 987661342,
                        source_file: 'smallClamp.inv'
                        source_extension: 'inv',
                        source_program: 'Autodesk Inventor',
                        source_description: 'Stress tests',
                    }
                }

                code: {
                    'xxxx':{
                        code_primary: true,
                        code_created: 9876987654,
                        code_file: 'tinycube_small_clamp_(1.0.0)_1.24.22',
                        code_description: 'Initial print test',
                        code_meta: {
                            machine: 'xxxx', // a reference to a user machine (Ender 3)
                            display_color: 'blue',
                            nozzle_temp_start,
                            nozzle_temp_print,
                            bed_temp_start,
                            bed_temp_print,
                            dimensions:{ x, y, z },
                            estimated_time: 12345,
                            estimated_volume: 72611, // always mm3
                            estimated_filament_length: 3421, // always mm,

                        }

                    }
                }
            }
        }
    }
}
```
