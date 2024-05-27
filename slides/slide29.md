<div w-full h-full>
    <div>
        <h1 w-70 pb-4 text-gradient-css font-mono text-2xl >Les Couleurs en CSS</h1>
    </div>
    <div>
        <ListCustom
            listStyle="text-gradient-css"
            title="Définir les Couleurs"
            :list="[
                `Noms de couleurs : red`,
                `Hexadécimal : #ff0000`,
                `RGB : rgb(255, 0, 0)`
            ]"
        />
    </div>
    <div px-8>

```css
p {
  color: red;
  background-color: #ff0000;
  border-color: rgb(255, 0, 0);
}
```
</div>
</div>
