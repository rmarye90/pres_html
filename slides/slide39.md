<div w-full h-full>
    <div>
        <h1 w-100 pb-4 text-gradient-css font-mono text-2xl >Flex: Centrer les éléments verticalement</h1>
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
  display: flex;
  justify-content: center;
  align-items: center; /* Center items vertically */
  border: 2px solid orange;
  height: 100vh; /* Full height to see vertical alignment */
  padding: 10px;
}

.flex-item {
  padding: 10px;
  border: 1px solid emerald;
  padding: 10px;
}
</style>
```
</div>
<div>
    <div flex="~ justify-center items-center" border-2 border-orange h-89 mt-1 p-2>
      <div border-1 border-emerald p-2>Item 1</div>
      <div border-1 border-emerald p-2>Item 2</div>
      <div border-1 border-emerald p-2>Item 3</div>
    </div>
    <p mt-3 italic text-color-primary>*align-items est a strech par defaut</p>
</div>
</div>
</div>


