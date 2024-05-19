<div w-full h-full>
    <div>
        <h1 w-90 pb-4 text-gradient-html font-mono text-2xl>Les balises de Liens</h1>
    </div>
    <p>
        Les liens sont des éléments qui permettent de naviguer d'une page à une autre. Ils sont utilisés pour relier des pages entre elles, mais aussi pour relier des parties d'une même page.
    </p>
    <p pb-4>
        Pour créer un lien, on utilise la balise <code>&lt;a&gt;</code> (pour <em>anchor</em>) et on définit l'URL de destination dans l'attribut <code>href</code> (pour <em>hypertext reference</em>).
    </p>
    <p>
        Voici un exemple de lien:
    </p>
    <div>
        <a href="https://www.google.com" text-amber>Google</a>
    </div>
    <p pb-4 pt-4>
       Par defaut, il s'ouvre dans la même fenêtre. Pour ouvrir dans une nouvelle fenêtre, on ajoute l'attribut <code>target="_blank"</code>.
    </p>
    <ul>
        <li>
            _self: Ouvre le lien dans la même fenêtre
        </li>
        <li>
            _blank: Ouvre le lien dans une nouvelle fenêtre
        </li>
    </ul>
<h1 text-xl text-gradient-html pt-4>Les Ancres</h1>
<p>
    Les ancres sont des liens qui permettent de naviguer à l'intérieur d'une même page. 
</p>
<p pb-4>
    Pour cela, une balise html doit être nommé avec une #id, et la source du lien doit prendre cette #id
</p>

</div>