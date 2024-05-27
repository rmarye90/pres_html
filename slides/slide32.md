<div w-full h-full>
    <div>
        <h1 w-70 pb-2 text-gradient-css font-mono text-2xl >Les Bordures en CSS</h1>
    </div>
    <div>
        <ListCustom
        listStyle="text-gradient-css"
        title="Définir les Bordures"
        :list="[
            `border-width: Epaisseur de la bordure;`,
            `border-style: style de la bordure;`,
            `border-color: couleur de la bordure;`,
            `border-radius: arrondir les angles;`,
        ]"
        />
    </div>

```css
div {
  border-width: 2px;
  border-style: solid;
  border-color: black;
  border-radius: 5px;
}
```

<p text-gradient-css pb-2>Diférent style de bordure:</p>
<img src="/public/bordure.png" alt="bordure" width="250">

</div>

<!-- 
Présentation :
Les bordures entourent nos éléments et les font ressortir. On peut définir leur épaisseur avec `border-width`, leur style avec `border-style` et leur couleur avec `border-color`. C'est comme encadrer une photo pour la rendre plus belle !
-->