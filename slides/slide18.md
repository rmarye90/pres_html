<div w-full h-full>
    <div>
        <h1 w-95 pb-2 text-gradient-html font-mono text-2xl>Les balises de structures</h1>
    </div>
    <h1 text-xl text-gradient-html>La balise ARTICLE</h1>
    <p>
        La balise <code>&lt;article&gt;</code> est une balise de structure qui permet de définir un contenu indépendant.
    </p>
    <div>
        <ListCustom
        title="Comme par exemple:"
        :list="[
            `Un article de blog`,
            `des commentaires`,
            `...`,
        ]"
        />
    </div>

```html
<main>
	<p>
		Texte de mon contenu. Voilà des articles liés à ma page :
	</p>
	<div>
		<article>
			<h2>
				Titre de mon article
			</h2>
			<p>
				Texte de mon article.
			</p>
		</article>
	</div>
</main>
```

</div>
