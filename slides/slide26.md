<div w-full h-full>
    <div>
        <h1 w-70 pb-4 text-gradient-css font-mono text-2xl >Box Model en CSS</h1>
    </div>
    <div>
        <ListCustom
        listStyle="text-gradient-css"
        title="Composants du Modèle de Boîte"
        :list="[
            `Padding : C'est l'espace entre le contenu et la bordure de l'élément. Il peut être utilisé pour ajouter de l'espace à l'intérieur de l'élément.`,
            `Border : C'est la ligne qui entoure le padding et le contenu.`,
            `Margin : C'est l'espace à l'extérieur de la bordure, qui sépare l'élément des autres éléments sur la page.`,
        ]"
        />
    </div>
    <div px-8>
        <p text-file-name>index.css</p>
```css
.box {
    padding: 20px;
    border: 5px solid black;
    margin: 20px;
}
```
<p text-file-name mt-4>index.html</p>

```html
<div class="box">Exemple de box model</div>
```
</div>
</div>

<!-- 
Présentation :
Maintenant, on va parler du modèle de boîte en CSS. C'est super important de comprendre comment le contenu, le padding, la bordure et la marge fonctionnent ensemble. Voici un exemple visuel pour mieux comprendre.
-->
