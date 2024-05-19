<div w-full h-full>
    <div>
        <h1 w-50 pb-4 text-gradient-html font-mono text-2xl>Les attributs</h1>
    </div>
    <p>Les balises HTML peuvent contenir des attributs. ils sont des informations supplémentaires qui ne sont pas affichées à l'écran. Pour certain éléments, les attributs vont être facultatifs tandis que pour d'autres ils vont être obligatoires.</p>
    <div pt-4>
        <ListCustom
        title="Exemple d'attributs:"
        :list="[
            `href`,
            `src`,
            `alt`,
            `width`,
            `height`,
            `class`,
            `id`,
            `style`,
            `... et bien d'autres.`,                   
        ]"
        />
    </div>
</div>