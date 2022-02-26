# Material UI 5 Search Bar

## Installation

```shell
npm i --save mui5-search
```

## Usage

```js
import Mui5search from "mui5-search";

return <Mui5search />;
```

### SearchBar Properties

| Name            | Type     | Default                                       | Description                                             |
| --------------- | -------- | --------------------------------------------- | ------------------------------------------------------- |
| cancelOnEscape  | `bool`   |                                               | Whether to clear search on escape                       |
| classes\*       | `object` |                                               | Override or extend the styles applied to the component. |
| className       | `string` | `''`                                          | Custom top-level class                                  |
| closeIcon       | `node`   | `<ClearIcon style={{ color: grey[500] }} />`  | Override the close icon.                                |
| disabled        | `bool`   | `false`                                       | Disables text field.                                    |
| onCancelSearch  | `func`   |                                               | Fired when the search is cancelled.                     |
| onChange        | `func`   |                                               | Fired when the text value changes.                      |
| onRequestSearch | `func`   |                                               | Fired when the search icon is clicked.                  |
| placeholder     | `string` | `'Search'`                                    | Sets placeholder text for the embedded text field.      |
| searchIcon      | `node`   | `<SearchIcon style={{ color: grey[500] }} />` | Override the search icon.                               |
| style           | `object` | `null`                                        | Override the inline-styles of the root element.         |
| value           | `string` | `''`                                          | The value of the text field.                            |

## License

The files included in this repository are licensed under the ISC license.
