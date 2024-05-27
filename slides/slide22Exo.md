<div relative w-full h-full>
    <div>
        <h1 font-mono text-gradient-html text-3xl>Exercice 1 : Créer une Page Web de Base</h1>
        <p font-sans mt-10 px-8 mb-4>Créer une page web simple avec un titre, une liste non ordonnée et un lien hypertexte qui s'ouvre dans un nouvel onglet.</p>
    </div>
    <ListCustom
        listStyle="text-gradient-html"
        title="Instructions"
        :list="[
          `Titre de la Page : Ajoutez un titre de page.`,
          `Liste Non Ordonnée : Créez une liste non ordonnée avec trois éléments.`,
          `Lien Hypertexte : Ajoutez un lien qui redirige vers google.com et s'ouvre dans un nouvel onglet.`
        ]"
    />
</div>
