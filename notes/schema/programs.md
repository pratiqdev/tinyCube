# Global Programs

Programs that can be referenced by source files

So all files from a program reference the same program and users can explore details about this software


**********************************************************************************
## Addition:
Programs can be added by any user by using an 'Add Program' form


**********************************************************************************
## Concerns:

- What if a fake program is added?
    Other users will likely not reference this program and it will remain unused.
    Eventually a mod will see this and delete the program from the list.


**********************************************************************************
## Values:

| KEY                   | TYPE      | VALUE

name                    | string    | The colloquial name of this software
full_name               | string    | The full actual name of this software
type                    | SOURCE    | The type of software or a reference to its common purpose / usage 
version                 | string    | the manufacturers / developers version of this software
compatible_versions     | array     | an array of versions that this version is compatible with
release_date            | string    | the date this software was released to the public
extensions              | array     | a list of extensions this software can produce / export 


**********************************************************************************
## Structure:

```js
const programs = {
    'xxxx': {
        program_name: 'Fusion 360',
        program_type: 'CAD',
        program_full_name: 'Autodesk Fusion 360',
        program_date: '16/12/2019',
        program_extensions: [
            'f3d',
            'mod',
            'cad',
        ]
    }
}
