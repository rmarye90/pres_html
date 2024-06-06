<div w-full h-full>
    <div>
        <h1 pb-4 text-gradient-css font-mono text-2xl >Grid: Placer les éléments</h1>
    </div>
    <div grid="~ cols-2 gap-4">
<div>

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
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
```

</div>

<v-switch>
  <template #1>
    <div grid="~" border-2 border-orange rounded p-0.5>
        <div h-20 border-2 border-emerald flex="~ justify-center items-center" text-3xl>1</div>
        <div h-20 border-2 border-emerald flex="~ justify-center items-center" text-3xl>2</div>
        <div h-20 border-2 border-emerald flex="~ justify-center items-center" text-3xl>3</div>
    </div>
</template>
  <template #2>
    <div grid="~ cols-3" border-3 border-orange rounded p-0.5>
        <div h-20 border-2 border-emerald flex="~ justify-center items-center" text-3xl>1</div>
        <div h-20 border-2 border-emerald flex="~ justify-center items-center" text-3xl>2</div>
        <div h-20 border-2 border-emerald flex="~ justify-center items-center" text-3xl>3</div>
    </div>
</template>
  <template #5-7> show at click 5, hide at click 7. </template>
</v-switch>

</div>
</div>
