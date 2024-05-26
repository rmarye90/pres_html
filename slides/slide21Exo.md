<div relative mt--10 w-full h-full flex="~ col justify-center items-center">
    <div>
        <h1 font-mono text-gradient-html text-5xl>Exercise 1:</h1>
        <p font-sans text-end>Et maintenant la pratique! 🎉</p>
    </div>
</div><div w-full h-full>
    <div>
        <h1 w-150 pb-4 text-gradient-html font-mono text-2xl>Exercice 1: Mise en place d'une page HTML</h1>
    </div>
    <div>
    <h2 px-8>Créer une page web simple avec un titre, une liste non ordonnée et un lien hypertexte qui s'ouvre dans un nouvel onglet.</h2>
    <h3 mb-4 px-8>Instructions</h3>
    <ListCustom
        title="Titre de la Page"
        :list="[
            `Ajouter un titre de page utilisant la balise <h1>.`,
        ]"
    />
    <ListCustom
        title="Liste Non Ordonnée"
        :list="[
            `Créer une liste non ordonnée (unordered list) utilisant les balises <ul> et <li>.`,
            `La liste doit contenir trois éléments`,
        ]"
    />
    <ListCustom
        title="Lien Hypertexte"
        :list="[
            `Ajouter un lien hypertexte (hyperlink) qui redirige vers google.com.`,
            `Le lien doit s'ouvrir dans un nouvel onglet en utilisant l'attribut target=&quot;_blank&quot;.`,
            `Le texte du lien doit être : &quot;Aller sur Google&quot;.`
        ]"
    />
    </div>
</div>

