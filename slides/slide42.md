<div w-full h-full>
    <div>
        <h1 pb-4 text-gradient-css font-mono text-2xl >Flex: Aligner individuellement un élément</h1>
    </div>
    <div grid="~ cols-2 gap-4">
<div>

```html
<div class="flex-container">
  <div class="flex-item align-self-end">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>

<style>
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: between;
  align-items: center;
  border: 2px solid orange;
  height: 100vh;
  padding: 10px;
}

.align-self-end {
  align-self: flex-end; /* Align the last item to the end */
}
</style>
```
</div>
<div>
    <div flex="~ col justify-between items-center" border-2 border-orange h-89 mt-1 p-2>
      <div border-1 border-emerald p-2 self-end>Item 1</div>
      <div border-1 border-emerald p-2>Item 2</div>
      <div border-1 border-emerald p-2>Item 3</div>
    </div>
</div>
</div>
</div>





