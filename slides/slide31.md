<div w-full h-full>
    <div>
        <h1 w-100 pb-4 text-gradient-css font-mono text-2xl >Les Marges et les Paddings</h1>
    </div>
    <div>
        <ListCustom
            listStyle="text-gradient-css"
            title="Différence entre Marge et Padding"
            :list="[
                `Marge: Espace à l'extérieur de l'élément`,
                `Padding: Espace à l'intérieur de l'élément`
            ]"
        />
    </div>
    <div px-8>

```css
input[type="text"] {
  margin: 20px;
  padding: 10px;
  border: 1px solid black;
}
```
</div>
<div px-8 py-2 w-full>
    <img src="/m-p.jpg" w-60>
</div>
</div>


