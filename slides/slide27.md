<div w-full h-full>
    <div>
        <h1 w-70 pb-4 text-gradient-css font-mono text-2xl >Comment Ajouter du CSS</h1>
    </div>
    <div>
        <ListCustom
            listStyle="text-gradient-css"
            title="3 Façons d'Ajouter du CSS"
            :list="[
                `Styles en ligne: Directement dans les balises HTML`,
                `Styles internes: Dans la balise <style> du document HTML`,
                `Styles externes: Fichier CSS séparé`
            ]"
        />
    </div>
    <div px-8>

```html
    <html>
        <head>
            <title>Mon titre</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            ...
        </body>
    </html>
```
</div>
</div>
