<div w-full h-full>
    <div>
        <h1 w-95 pb-4 text-gradient-html font-mono text-2xl>Les balises de structures</h1>
    </div>
    <h1 text-xl pb-2 text-gradient-html>La balise HEADER et FOOTER</h1>
    <p pb-4>
        Les balises <code>&lt;header&gt;</code> et <code>&lt;footer&gt;</code> sont des balises de structure qui permettent de définir les en-têtes et les pieds de page d'une page web.
    </p>
    <div>
        <ListCustom
        title="Le <header> Peux contenir des éléments comme:"
        :list="[
            `Un menu`,
            `Un logo`,
            `des liens vers des réseaux sociaux`,
            `...`,
        ]"
        />
    </div>
        <div>
        <ListCustom
        title="Le <footer> Peux contenir des éléments comme:"
        :list="[
            `L'auteur de la page web`,
            `Les mentions légales`,
            `Des informations de contact`,
            `...`,
        ]"
        />
    </div>
    


</div>