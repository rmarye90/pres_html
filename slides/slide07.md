<div w-full h-full>
    <div>
        <h1 w-140 pb-4 text-gradient-html font-mono text-2xl>Exceptions: Les balises autofermées</h1>
    </div>
    <p>Certaine balises n'ont pas besoin de balise fermante. On les appelle les balises autofermées.</p>
     <div pt-4>
        <ListCustom
        title="Comme par exemple:"
        :list="[
            `<br/>`,
            `<hr/>`,
            `<img/>`,
            `<input/>`,
            `<link/>`,
            `<meta/>`,
            `... et bien d'autres.`,                   
        ]"
        />
    </div>
</div>