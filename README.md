# React Material UI 5 Search Bar


## Description

This is a simple search bar for react applications. It uses Latest Material UI.


## Demo

[https://codesandbox.io/s/mui5search-sample-hgeyjg?file=/src/App.js](https://codesandbox.io/s/mui5search-sample-hgeyjg?file=/src/App.js)


## Installation

```shell
npm i --save mui5-search
```


## Usage

```js
import Mui5search from "mui5-search";

return <Mui5search props />;
```


## Github link

[React 17 Material UI 5 Search](https://github.com/satya4satyanm/mui5-search)

## Features

- React Material UI 5 Search with 3 input type themes.
- It receives a POST URL to process the search operation.
- A callback method by which users will receive the response data.
- There are two sizes of the Search UI (Standard and small).
- Align the search button on left or right


## SearchBar Properties

| Name     | Type        | Default   | Description                                 |
| -------- | --------    | --------- | ------------------------------------------- |
| url      | `string`    |           | POST endpoint                               |
| cb       | `function`  |           | Callback function to receive response data  |
| opt      | `number`    | 3         | Theme - material ui style ( use 1, 2, 3 )   |
| size     | `string`    | ""        | TextField size - use "" or "s"              |
| buttonPos| `string`    | "r"       | Search button position - use "l" or "r"     |


## License

The files included in this repository are licensed under the ISC license.


## Warning

- This package uses React 17.0.2 and mui 5.4.3
- If you are using a different version of react or mui, please stop using this as it will clash with your project versions


## Local Development

- Uninstall npm package
- Install local package npm i path\to\mui5-search
- npm link path\to\mui5-search\node_modules\react


## Advanced Version (Coming soon)

- Typescript Support
- Auto complete
- Size (Small and Normal)
- Accessibility
- Option to enable keyboard enter
- Input validation based on regexp
- Cross Browser Fix
- CSP fixes
- Minify
- Hook APIs


## Contribute

- Checkout the code.
- Create a feature or bugfix branch
- Update or fix the code
- Raise PR to Master branch
- If everything looks good, I will pull in the PR


## Please Donate

This is Satyanarayan Mishra, a Full Stack Architect from Bengaluru, India.

I need few cups of coffee to think and come up with new components like this and to update existing components

Buy me one!

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/satya4satyanm?country.x=IN&locale.x=en_GB)


## Task list

- [x] Project setup
- [x] Code examples
- [ ] More customizable options
- [ ] Style customization
- [ ] Setup yarn
- [ ] Search button hover styles