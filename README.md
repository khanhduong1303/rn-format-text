# rn-format-text

Format text for React Native, it's support break text by key `{c}`, use `{0}`, `{1}`... for replaces text, we can use custom Text component, pass to prop `TextComponent`

## Installation

```sh
npm install @khanhdh1303/rn-format-text -S
```

## Usage

```js
import FormatText from "@khanhdh1303/rn-format-text";

<FormatText
  //TextComponent={CustomTextComponent}
  props={{ style: { color: "blue" } }}
  sources={
    "This is the {c}library{c} support {c}format text{c} and also support {c}{0}{c}"
  }
  formats={[
    null,
    { style: { color: "pink" } },
    null,
    { style: { color: "yellow" } },
    null,
    { style: { color: "purple" } },
  ]}
  replaces={{ "{0}": "replace text" }}
/>;
```

## License

MIT
