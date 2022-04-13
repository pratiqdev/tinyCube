# User Machines

A user may/must add machines to a list that can be selected from later
a list of default machines can be selected from as a starting point
any values of the machine can be changed by the user


**********************************************************************************
## Addition:

Machines can be added by any user by using an 'Add Machine' form
Machines only appear for the current user


**********************************************************************************
## Concerns:


**********************************************************************************
## Values:

| KEY                   | TYPE          | VALUE                                     |
|-----------------------|---------------|-------------------------------------------|
| name                  | string        | The short name of this machine            |
| full_name             | string        | The full name of the machine              |
| type                  | MACHINE_TYPE  | The method of creation for this machine   |


**********************************************************************************
## Structure:

```js
const machines = {
    'xxxx': {
        machine_name: 'Ender 3',
        machine_type: 'FDM',
        machine_dimensions: {
            x: 210,
            y: 210,
            z: 230,
        }
        machine_max_temp: 520,
        machine_nozzle_sizes: {
            'xxxx':{

            }
        }
        machine_materials: {
            'xxxx': {
                material_type: 'PETG',
                material_min_temp: 380,
                material_max_temp: 430,
                material
            }
        }
    }
}
