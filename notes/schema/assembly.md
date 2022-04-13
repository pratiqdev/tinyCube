# User Assemblies 

Collections of items with connections and hardware

*******************************************************************************
## Addition:

Users can create an assembly from any parts on the site.
Using another users item will 'fork' the item to the current users account.

*******************************************************************************
## Concerns:

- How will items be manipulated in 3d space within the assembly?
    Items will need an origin point at the center of the model.
    This root origin point can be found by the dimensions floor(x / 2)
    The origin of manipulation can be set elsewhere by clicking
    somewhere on the model?

- Can / how can the mouse interact with the model?
- Is there any way to detect edges / surfaces of the model?
- How would items be attached by standard joint objects
- How can user items be used as a joint


*******************************************************************************
## Structure:

```js
const assembly = [
    {
        type: 'model',
        item: 'xxxx',
        location: { x,y,z } // offset from the root origin of the scene
        rotation: { x,y,z } // rotation of the item relative to the root origin of the scene
    },
    {
        type: 'model',
        item: 'xxxx',
        location: { x,y,z } // offset from the root origin of the scene
        rotation: { x,y,z } // rotation of the item relative to the root origin of the scene
    },
    {
        type: 'joint',
        joint: 'xxxx', // null or an id of a joint object
        items: ['xxxx','xxxx'], // an array of all the items that are attached by this fix
        location: { x,y,z } // location of the fix based on the first item in the array
    }
]

```