<div w-full h-full>
    <div>
        <h1 w-50 pb-4 text-ts font-mono text-2xl>La Sémantique</h1>
    </div>
    <p>Il existe de nombreuse balise et chacune servant à baliser un contenu spécifique.</p>
    <div pt-4>
        <ListCustom
        title="Comme par exemple:"
        :list="[
            `des titres <h1>`,
            `des listes </li>`,
            `des tableaux </p>`,
            `des formulaires </form>`,
            `... et bien d'autres.`,
        ]"
        />
    </div>
    <p pt-4 pb-4 >Chaque balise a un rôle bien précis et permet de structurer le contenu de la page web.</p>
    <p text-quote>Il est important de bien choisir les balises en fonction du contenu que l'on souhaite afficher.</p>
</div>
