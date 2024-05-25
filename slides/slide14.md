<div w-full h-full>
    <div>
        <h1 w-90 pb-4 text-gradient-html font-mono text-2xl>Les balises DIV et SPAN</h1>
    </div>
    <h1 text-xl pb-2 text-gradient-html>La balise DIV</h1>
    <p>
        La balise <code>&lt;div&gt;</code> est une balise conteneur pour regrouper d'autres éléments HTML. Elle est souvent utilisée pour appliquer des styles CSS ou pour manipuler plusieurs éléments en tant que groupe.
    </p>
    <p>
        La balise <code>&lt;div&gt;</code> ne représente aucun contenu spécifique et elle est souvent utilisée pour la mise en page.
    </p>

```html
<div>
    <h1>Mon titre principal</h1>
    <p>Mon paragraphe</p>
    <p>Mon deuxième paragraphe</p>
</div>
```

<h1 text-xl pb-2 pt-4 text-gradient-html>La balise SPAN</h1>
<p>
    La balise <code>&lt;span&gt;</code> est une balise en ligne qui permet d'appliquer des styles à une parties du texte.
</p>
<p>
    Contrairement à la balise <code>&lt;div&gt;</code>, la balise <code>&lt;span&gt;</code> n'introduit pas de saut de ligne et n'affecte pas la mise en page.
</p>

```html
<p>
    Voici un <span text-amber>texte</span> avec une partie colorée.
</p>
```
<p>Résultat:</p>
<div>
    <p>
        Voici un <span text-amber>texte</span> avec une partie colorée.
    </p>
</div>
</div>