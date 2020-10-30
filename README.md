# Laravel Vue Crud

## Guide

```bash
$ php artisan make:model Models/Post -m
$ php artisan make:seeder PostTableSeeder
$ php artisan make:resource Post
$ php artisan make:request Post
$ php artisan make:controller API/Admin/PostController
$ php artisan migrate:fresh --seed
```

| Element  | Listing | Disabled | Readonly | Multiple | Options | Editor | Render | dateFormat | enableTime |
| -------- | ------- | -------- | -------- | -------- | ------- | ------ | ------ | ---------- | ---------- |
| text     | ✓       | ✓        | ✓        | x        | x       | x      | x      | x          | x          | 
| textarea | ✓       | ✓        | x        | x        | x       | ✓      | ✓      | x          | x          | 
| select   | ✓       | ✓        | x        | ✓        | ✓       | x      | x      | x          | x          |
| image    | ✓       | x        | x        | ✓        | x       | x      | x      | x          | x          |
| checkbox | ✓       | ✓        | x        | ✓        | x       | x      | x      | x          | x          |
| date     | ✓       | ✓        | x        | x        | x       | x      | x      | ✓          | ✓          |
| toggle
| radio
| range
| colorpicker




| Attr         | Value   | Extra                                                      |
| ------------ | ------- | ---------------------------------------------------------- |
| Listing      | boolean |                                                            |
| Disabled     | boolean |                                                            |
| Readonly     | boolean |                                                            |
| Multiple     | boolean |                                                            |
| Options      | array   | [['value' => 'valueResult', 'label' => 'labelText']]       |
| Editor       | boolean |                                                            |
| Render       | boolean |                                                            |
| dateFormat   | string  | default value is "Y-m-d H:i" but change like this "d-m-Y"  |
| enableTime   | boolean | default value is true but change this false                |

toggle Attr
*titleOn->string
*titleOff->string

radio Attr Example
[
    'name' => 'title', 
    'type' => 'radio', 
    'title' => 'Başlık', 
    'listing' => true,
    'values' => [
        'aDeneme',
        'b Hayat Güzel',
        'c Ondokuzon'
    ]
],
`app/Http/Resources/Post.php` in;

```php
public function with($request)
{
    return [
        'meta' => [
            'fields' => [
                [
                    'name' => 'name',
                    'type' => 'text',
                    'title' => 'Title',
                    'listing' => true,
                    'disabled' => true
                ],
                [
                    'name' => 'name',
                    'type' => 'select',
                    'title' => 'Title',
                    'listing' => false,
                    'multiple' => true,
                    'options' => [
                        ['value' => 1, 'text' => 'Film'],
                        ['parent' => 1, 'value' => 2, 'text' => 'Sci-fi'],
                    ]
                ],
                [
                    'name' => 'name',
                    'type' => 'textarea',
                    'title' => 'Title',
                    'listing' => false,
                    'editor' => true
                ],
                [
                    'name' => 'name',
                    'type' => 'image',
                    'title' => 'Title',
                    'listing' => false,
                    'multiple' => true
                ],
            ],
        ],
    ];
}
```

`API\Admin\PostController` in;

```php
namespace App\Http\Controllers\API\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post; // Model
use App\Http\Resources\Post as PostResource; // Resource
use App\Http\Requests\Post as PostRequest; // Validation

class PostController extends Controller
{
    public function index(Request $request)
    {
        // list & filter posts code
        return new PostResource($posts->paginate($paginate));
    }

    public function show($id)
    {
        // get post data
        return new PostResource($post);
    }

    public function save(PostRequest $request, $id = null)
    {
        // create & update post code
        return response()->json(['status' => 'success']);
    }

    public function destroy($id)
    {
        // destory posts
        return response()->json(['status' => 'success']);
    }
}

```

`api.php` in;

```php
Route::get('/posts', 'API\Admin\PostController@index');
Route::post('/posts', 'API\Admin\PostController@index');
Route::get('/posts/{id}', 'API\Admin\PostController@show');
Route::post('/posts/save', 'API\Admin\PostController@save');
Route::post('/posts/{id}', 'API\Admin\PostController@save');
Route::post('/posts/{id}/destroy', 'API\Admin\PostController@destroy');

// file upload for editor
Route::post('uploadFile', function(Request $request){
    $name = $request->file('file')->store('uploads/img');
    return asset('storage/' . $name);
});
```

Usage;

```html
<vue-crud-table api-url="{{ url('/api/admin/posts') }}" api-token="api_token" />
```

## Development

.env.local

```
VUE_APP_TOKEN={token}
VUE_APP_API_URL={api_url}
```

```bash
$ npm run serve
```
