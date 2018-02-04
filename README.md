## yaml-js-loader
[![Build Status](https://travis-ci.org/iAmao/yaml-js-loader.svg?branch=master)](https://travis-ci.org/iAmao/yaml-js-loader) [![codecov](https://codecov.io/gh/iAmao/yaml-js-loader/branch/master/graph/badge.svg)](https://codecov.io/gh/iAmao/yaml-js-loader)

Tells webpack how to load YAML files.

---


#### Installation

Open up your terminal and type the following
```
$ npm install --save-dev yaml-js-loader
```

---


#### Usage

The usage is quite easy.

Create a yaml file.

###### config.yml
```
name: Izuku Midoriya
quirk: One for all
friends:
 - Todoroki
 - Lida
 - Ochacho
 - Bakugo 

```


import the YAML file in your javascript file.

###### my-file.js
```
import config from './config.yml';

console.log(config);
// output -> {
//  url: "",
//  json: {
//    name: "Izuku Midoriya",
// .  quirk: "One for all",
//    friends: [
//      "Todoroki",
//      "Lida",
//      "Ochacho",
//      "Bakugo"
//    ]
// .},
//  text:"name: Izuku Midoriya\nquirk: One for all\nfriends:\n - Todoroki\n - Lida\n - Ochacho\n - Bakugo"\n
//}
```

Add the following conifguration to webpack config file.

###### webpack.config.js
```
...

{
    test: /\.yml$/,
    loader: 'yaml-js-loader'
}
...
```

---

#### Usage(with file-loader)

Using with file loader provides a live URL to where the YAML file is served.
The file can be accessed by visiting `[base_url][webpack_public_path][url]` for example,

if,
- base_url = http://localhost:3005
- webpack_public_path = /public
- url = /static/config.d23e812af.yml

then,
to access the file in the browser, you would need to visit: `http://localhost:3005/public/static/config.d23e812af.yml`

Create a yaml file.

###### config.yml
```
name: Izuku Midoriya
quirk: One for all
friends:
 - Todoroki
 - Lida
 - Ochacho
 - Bakugo 

```


import the YAML file in your javascript file. Now, the url property should have a value.

###### my-file.js
```
import config from './config.yml';

console.log(config);
// output -> {
//  url: "/static/[name].[hash:8].[ext]",
//  json: {
//    name: "Izuku Midoriya",
// .  quirk: "One for all",
//    friends: [
//      "Todoroki",
//      "Lida",
//      "Ochacho",
//      "Bakugo"
//    ]
// .},
//  text:"name: Izuku Midoriya\nquirk: One for all\nfriends:\n - Todoroki\n - Lida\n - Ochacho\n - Bakugo"\n
//}
```

Add the following conifguration to webpack config file.

###### webpack.config.js
```
module.exports = {
...

    {
        test: /\.(yml|yaml)$/,
        use: [
          { loader: 'yaml-js-loader' },
          {
            loader: 'file-loader',
            options: {
              name: 'static/[name].[hash:8].[ext]'
            }
          }
        ]
    }
...
}
```

---


#### Contributing


#### License
