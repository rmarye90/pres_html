<div w-full h-full>
    <div>
        <h1 w-70 pb-4 text-gradient-css font-mono text-2xl >Les Polices en CSS</h1>
    </div>
    <div>
        <ListCustom
            listStyle="text-gradient-css"
            title="Définir les Polices"
            :list="[
                `font-family: Choisir la police`,
                `font-size: Taille de la police`,
                `font-weight: Épaisseur de la police`
            ]"
        />
    </div>
    <div px-8>

```css
p {
  font-family: Arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
}
```
</div>
</div>

