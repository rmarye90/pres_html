<div w-full h-full>
    <div>
        <h1 w-70 pb-4 text-gradient-css font-mono text-2xl >Syntaxe de CSS</h1>
    </div>
    <div>
        <ListCustom
        listStyle="text-gradient-css"
        title="Sélecteurs, Propriétés et Valeurs"
        :list="[
            `Sélecteur: Cible les éléments HTML`,
            `Propriété: Aspect à styliser`,
            `Valeur: Style à appliquer`,
        ]"
        />
    </div>
    <div px-8>
        <p text-file-name>style.css</p>

```css
p {
  color: blue;
  font-size: 16px;
}
```
</div>
</div>

<!-- 
Voyons comment écrire du CSS. On utilise des sélecteurs pour cibler des éléments HTML, puis on spécifie des propriétés et des valeurs pour appliquer les styles. Par exemple, ici on change la couleur du texte en bleu et la taille de la police en 16 pixels.
-->
