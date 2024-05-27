<div w-full h-full>
    <div>
        <h1 w-80 pb-4 text-gradient-css font-mono text-2xl >Les Sélecteurs de Base</h1>
    </div>
    <div>
        <ListCustom
        listStyle="text-gradient-css"
        title="Sélecteurs de Type, de Classe et d'ID"
        :list="[
            `Type: p { color: blue; }`,
            `Classe: .class-name { color: red; }`,
            `ID: #id-name { color: green; }`
        ]"
        />
    </div>
    <p>Exemple :</p>

```css

p {
  color: blue;
}
p, h1 {
  font-size: 16px;
}
.class-name {
  color: red;
}
#id-name {
  color: green;
}

```

</div>