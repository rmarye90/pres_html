<div w-full h-full>
    <div>
        <h1 pb-4 text-gradient-css font-mono text-2xl >Grid: Propriétés</h1>
    </div>
    <div grid="~ cols-2 gap-4">
<div>

````md magic-move
```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
</div>

<style>
  .grid-container {
    height: 200px;
    border: 2px solid orange;
  }

  .grid-item {
    border: 1px solid emerald;
    background-color: teal;
    ...
  }
</style>
```
```html {9}
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
</div>

<style>
  .grid-container {
    display: grid; /* Enable CSS Grid */
    height: 200px;
    border: 2px solid orange;
  }

  .grid-item {
    border: 1px solid emerald;
    background-color: teal;
      ...
  }
</style>
```
```html {11-12}
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 200px;
    border: 2px solid orange;
  }

  .grid-item {
    border: 1px solid emerald;
    background-color: teal;
      ...
  }
</style>
```
```html {11}
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>

<style> 
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
    gap: 2px;
    height: 200px;
    border: 2px solid orange;
  }

  .grid-item {
    border: 1px solid emerald;
    background-color: teal;
      ...
  }
</style>
```
````

</div>
    <v-switch>
            <template #0>
            <div h-96 border-2 border-orange>
              <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>1</div>
              <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>2</div>
              <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>3</div>
            </div>
            </template>
        <template #1>
            <div h-96 border-2 border-orange grid="~ gap-1">
              <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>1</div>
              <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>2</div>
              <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>3</div>
            </div>
        </template>
        <template #2>
            <div h-96 border-2 border-orange grid="~ cols-3 rows-3 gap-1">
              <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>1</div>
              <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>2</div>
              <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>3</div>
              <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>4</div>
            </div>
        </template>
    </v-switch>
</div>
</div>
