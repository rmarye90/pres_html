<div w-full h-full>
    <div>
        <h1 pb-4 text-gradient-css font-mono text-2xl >Grid: Placer les éléments</h1>
    </div>
    <div grid="~ cols-2 gap-4">
<div>

````md magic-move
```html
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item grid-position">Item 2</div>
  <div class="grid-item">Item 3</div>
</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ...
}

.grid-item {
  padding: 10px;
  border: 1px solid emerald;
}

.grid-position {
  grid-column-start: 2;
  grid-column-end: 4;
}
</style>
```
```html
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item grid-position">Item 2</div>
  <div class="grid-item">Item 3</div>
</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ...
}

.grid-item {
  padding: 10px;
  border: 1px solid emerald;
}

.grid-position {
  grid-column: 2 / 4;
}
</style>
```
````
</div>
<div>
    <div h-96 p-2 border-2 border-orange grid="~ cols-3 gap-4">
      <div p-4 border-2 border-emerald>Item 1</div>
      <div p-4 border-2 border-emerald col-start-2 col-end-4>Item 2</div>
      <div p-4 border-2 border-emerald>Item 3</div>
    </div>
</div>
</div>
</div>



