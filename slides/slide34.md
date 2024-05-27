<div w-full h-full>
    <div>
        <h1 w-80 pb-2 text-gradient-css font-mono text-2xl >Propriété 'position'</h1>
    </div>
    <div>
        <ListCustom
        listStyle="text-gradient-css"
        title="Valeurs de 'position'"
        :list="[
            `static: position par défaut;`,
            `relative: positioné par rapport à sa position initiale;`,
            `absolute: positioné par rapport à son parent;`,
            `fixed: positioné par rapport à la fenêtre du navigateur;`,
            `sticky: positioné en fonction du défilement;`,
        ]"
        />
    </div>
    <img src="/positionement.webp" alt="position" width="500">
</div>