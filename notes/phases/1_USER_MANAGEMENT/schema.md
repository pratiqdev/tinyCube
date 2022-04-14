# User Management Schema


```js
const UserSchema = {
    user_id = 'uuid-v4',
    user_name = 'Jsmith',
    user_email = 'Jsmith@gmail.com',
    user_profile = 'My name is John and I am a ...',
    user_image = '/path/to/S3/image/or/file_id?',
    user_tags = ['tag', 'tag', 'tag'],
    user_created: 12345678,
    user_social: {
        linkedin: '',
        stackoverflow: '',
        github: '',
        twitter: '',
        instagram: '',
        
        ...
    }

    ...
}
```