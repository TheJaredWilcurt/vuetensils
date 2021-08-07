### Styled Example

```vue
<template>
  <VToggle label="test" class="styled">
    <template v-slot:label>
      Click here to open the toggle
    </template>

    <div class="toggle-content">
      <p>Here is the content. Sweet!</p>
    </div>
  </VToggle>
</template>

<script>
export default {};
</script>

<styles>
.vts-toggle__button {
  display: block;
  width: 100%;
  border: 0;
  padding: 5px;
  font-size: 18px;
  text-align: left;
  color: #FFF;
  background-color: mediumseagreen;
}

.toggle-content {
  border: 1px solid #CCC;
  padding: 5px;
}
</styles>
```

### Basic Usage

```vue
<template>
  <VToggle label="test">
    <template v-slot:label>
      Title
    </template>

    content here
  </VToggle>
</template>

<script>
export default {};
</script>
```

### Custom Classes

This component can accept a `classes` prop to customize the output HTML classes:

```
:classes="{ root: 'root-class', label: 'label-class', content: 'content-class' }"
```
