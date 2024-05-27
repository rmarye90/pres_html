<div w-full h-full>
    <div>
        <h1 w-100 pb-4 text-gradient-css font-mono text-2xl >Activer Flexbox sur un conteneur</h1>
    </div>
    <div grid="~ cols-2 gap-4">
<div>

```html
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>

<style>
.flex-container {
  display: flex; /* Enable Flexbox */
  border: 2px solid #000;
}

.flex-item {
  padding: 10px;
  border: 1px solid #333;
}
</style>
```
</div>
<div>
    <div class="flex-container">
      <div class="flex-item">Item 1</div>
      <div class="flex-item">Item 2</div>
      <div class="flex-item">Item 3</div>
    </div>
</div>
</div>
</div>
