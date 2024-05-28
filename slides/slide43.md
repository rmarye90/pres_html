<div w-full h-full>
    <div>
        <h1 pb-4 text-gradient-css font-mono text-2xl >Flex-Wrap: Permettre aux éléments de se répartir sur plusieurs lignes</h1>
    </div>
    <div grid="~ cols-2 gap-4">
<div>

```html
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
  <div class="flex-item">Item 4</div>
  <div class="flex-item">Item 5</div>
  <div class="flex-item">Item 6</div>
  <div class="flex-item">Item 7</div>
  <div class="flex-item">Item 8</div>
  <div class="flex-item">Item 9</div>
</div>

<style>
.flex-container {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap onto multiple lines */
  border: 2px solid orange;
  height: 100vh;
  padding: 10px;
}
</style>
```
</div>
<div>
    <div flex="~ wrap" border-2 border-orange h-89 mt-1 p-2>
      <div border-1 border-emerald p-2>Item 1</div>
      <div border-1 border-emerald p-2>Item 2</div>
      <div border-1 border-emerald p-2>Item 3</div>
      <div border-1 border-emerald p-2>Item 4</div>
      <div border-1 border-emerald p-2>Item 5</div>
      <div border-1 border-emerald p-2>Item 6</div>
      <div border-1 border-emerald p-2>Item 7</div>
      <div border-1 border-emerald p-2>Item 8</div>
      <div border-1 border-emerald p-2>Item 9</div>
    </div>
</div>
</div>
</div>






