<div w-full h-full>
    <div>
        <h1 w-40 pb-4 text-ts font-mono text-2xl>Les Balises</h1>
    </div>
    <div>
        <div>
        <ListCustom
        title="Est composée de deux éléments"
        :list="[
            `Une balise ouvrante <p>`,
            `Une balise fermante </p>`,
        ]"
        />
        </div> 
    </div>
    <p>Exemple:</p>

```html
<p>Mon paragraphe est ici</p>
````

<p pt-4 >Ainsi, notre navigateur sait que "Mon paragraphe est ici". est un paragraphe et sera interprété comme tel.</p>
</div>
