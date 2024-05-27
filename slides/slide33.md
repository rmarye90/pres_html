<div w-full h-full>
    <div>
        <h1 w-100 pb-4 text-gradient-css font-mono text-2xl >Le display en CSS</h1>
    </div>
    <div>
        <ListCustom
            listStyle="text-gradient-css"
            title="Valeurs de display"
            :list="[
                `block: Occupe toute la largeur disponible`,
                `inline: Occupe seulement la largeur nécessaire`,
                `inline-block: Combinaison de block et inline`,
                `none: Ne s'affiche pas`
            ]"
        />
    </div>
    <div py-4>
        <ListCustom
            listStyle="text-gradient-css"
            title="Display: inline"
            :list="[
                `Occupe l'espace nécessaire, Ne commence pas sur une nouvelle ligne, Ne peut pas avoir de dimensions définies`,
            ]"
        />
        <ListCustom
            listStyle="text-gradient-css"
            title="Display: block"
            :list="[
                `Occupe toute la largeur, Commence sur une nouvelle ligne, Peut avoir des dimensions définies`,
            ]"
        />
        <ListCustom
            listStyle="text-gradient-css"
            title="Display: inline-block"
            :list="[
                `Occupe l'espace nécessaire, Peut avoir des dimensions définies, Aligne les éléments sur une seule ligne`,
            ]"
        />
    </div>
</div>
