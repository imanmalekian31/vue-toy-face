# vue-toy-face

<p align="center">
<img width="648" src="https://user-images.githubusercontent.com/58827166/183727670-e5909d83-0e15-431c-af05-d626ab1a8492.png">
</p>

## Demo

[Demo](https://vue-toy-face.vercel.app/)

## Installation

### Vue 3
```shell
# npm
$ npm install vue-toy-face
# yarn
$ yarn add vue-toy-face
```
### Vue 2
```shell
# npm
$ npm install vue-toy-face@1.5.0
# yarn
$ yarn add vue-toy-face@1.5.0
```

## Usage

```html
<template>
  <VueToyFace size="140" rounded="28" toy-number="3" />
</template>

<script>
  import VueToyFace from "vue-toy-face";

  export default {
    components: { VueToyFace },
  };
</script>
```

## Constructor Options

| Key         | Type           | Description                                 | Default |
| :---------- | -------------- | ------------------------------------------- | :-----: |
| `size`      | String, Number | Width and height of avatar (per pixel)      |  `48`   |
| `rounded`   | String, Number | Border radius of avatar (per pixel)         |   `0`   |
| `toyNumber` | String, Number | The Number of each avatar (between 1 to 18) |   `1`   |
| `group`     | String, Number | Avatars are defined in each group ( 1 or 2) |   `1`   |

# License

[The MIT License](http://opensource.org/licenses/MIT)
