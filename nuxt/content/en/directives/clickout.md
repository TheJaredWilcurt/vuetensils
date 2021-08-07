---
title: clickout
position: 3
category: Directives
---

Vue directive to fire a function when the user clicks anywhere outside the target element.

- [Source](https://github.com/AustinGil/vuetensils/blob/master/src/directives/clickout.js)

## Installation

Global install:

```js
import Vue from 'vue';
import { clickout } from 'vuetensils/src/directives';

Vue.directive('clickout', clickout);
```

Local install:

```html
<script>
  import { clickout } from 'vuetensils/src/directives';

  export default {
    directives: {
      clickout,
    },
  };
</script>
```

## Usage

Open your console to see the results

```vue live
<template>
  <div v-clickout="onClickout" class="clickout-example">
    Go ahead, click outside of me.
  </div>
</template>

<script>
export default {
  methods: {
    onClickout() {
      console.log('Well, you certainly did not click inside...');
    },
  },
};
</script>

<style>
.clickout-example {
  border: 1px solid;
}
</style>
```
