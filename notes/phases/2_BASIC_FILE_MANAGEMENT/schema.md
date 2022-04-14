# File Management Schema

```js

const FileIdStructure = {PK: '<user_id>' FK: '#<file_id>#<file_type>'}

const FileSchema = {
    file_id: 'uuid-v4',
    file_type: 'source', | 'model' | 'gcode' | 'note' | '...'
    file_name: 'My File',
    file_description: 'This is a file for...',
    file_created: 12345678,
    file_modified: 12345678,
    file_path: '/path/to/S3/file/or/id',
    
    ...
}
```