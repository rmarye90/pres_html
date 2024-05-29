<div w-full h-full>
    <div>
        <h1 pb-4 text-gradient-css font-mono text-2xl >Grid: Gap entre les cellules</h1>
    </div>
    <div grid="~ cols-2 gap-4">
<div>

```html
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px; /* Add gap between items */
  padding: 10px;
  height: 200px;
  border: 2px solid orange;
}

.grid-item {
  padding: 10px;
  border: 1px solid emerald;
}
</style>
```
</div>
<div>
    <div h-96 p-2 border-2 border-orange grid="~ cols-3 gap-4">
      <div p-4 border-2 border-emerald>Item 1</div>
      <div p-4 border-2 border-emerald>Item 2</div>
      <div p-4 border-2 border-emerald>Item 3</div>
    </div>
</div>
</div>
</div>


