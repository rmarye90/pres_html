<div w-full h-full>
  <v-switch>
    <template #0>
      <h1 pb-4 text-gradient-css font-mono text-2xl >Grid: Propriétés</h1>
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
</div>

<div h-96 border-2 border-orange>
  <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>1</div>
  <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>2</div>
  <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>3</div>
</div>
</div>
</template>
<template #1>
<h1 pb-4 text-gradient-css font-mono text-2xl >Grid: Propriétés</h1>
<div grid="~ cols-2 gap-4">
  <div>

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
</div>
<div h-96 border-2 border-orange grid="~ gap-1">
  <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>1</div>
  <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>2</div>
  <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>3</div>
</div>
</div>
</template>
<template #2>
<h1 pb-4 text-gradient-css font-mono text-2xl >Grid: Propriétés</h1>
<div grid="~ cols-2 gap-4">
  <div>

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
</div>
<div h-96 border-2 border-orange grid="~ cols-3 rows-3 gap-1">
  <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>1</div>
  <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>2</div>
  <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>3</div>
  <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>4</div>
</div>
</div>
</template>
<template #3>
<h1 pb-4 text-gradient-css font-mono text-2xl >Grid: Propriétés</h1>
<div grid="~ cols-2 gap-4">
  <div>

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
</div>
<div h-96 border-2 border-orange grid="~ cols-3 rows-3 gap-1">
  <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>1</div>
  <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>2</div>
  <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>3</div>
  <div p-4 border-3 border-emerald bg-teal-900 flex="~ justify-center items-center" text-3xl>4</div>
</div>
</div>
</template>
</v-switch>

</div>
        <!-- <template #2> -->
        <!-- </template> -->

<!-- Essayer d'englober tout dans un v-switch pour faire un peu comme sur revealjs il faut cancel chaque bloque split et les regrouper page par page au lieu de <div> par <div> -->
