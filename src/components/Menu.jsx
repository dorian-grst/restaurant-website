const tapas = [
    {
        name: 'Terrine de foie gras entier du Sud Ouest à partager, toasts grillés (bocal de 125g)',
        price: '26,00',
    },
    {
        name: 'Assortiment de charcuterie et fromage',
        price: '16,00',
    },
    {
        name: 'Gravlax de saumon à l’aneth sauce tzatziki (100g)',
        price: '8,00',
    },
    {
        name: 'Patatas fritas de la casa',
        price: '3,50',
    },
    {
        name: 'Croquettes de cabillaud pannées sauce tartare (10 pièces)',
        price: '6,00',
    },
    {
        name: 'Pan con tomate (4 pièces)',
        price: '3,50',
    },
    {
        name: 'Pan con tomate au jambon Espagnol (4 pièces)',
        price: '7,00',
    },
    {
        name: 'Planche de rôti de boeuf, oignons conflits et sauce curry (150g)',
        price: '9,00',
    },
    {
        name: 'Noix de Saint Jacques snackées sauce piment doux (100g)',
        price: '12,00',
    },
    {
        name: 'Tortilla con patatas (3 pièces)',
        price: '6,00',
    },
    {
        name: 'Couteaux en persillade (10 pièces)',
        price: '8,00',
    },
    {
        name: 'Magret de canard séché, pommes et noix',
        price: '10,00',
    },
    {
        name: 'Terrine de campagne maison au poivre vert, cornichons (2 tranches)',
        price: '6,00',
    },
    {
        name: 'Toasts au caviar d’aubergine et Coppa (3 pièces)',
        price: '7,00',
    },
    {
        name: 'Petits poivrons farcis au fromage de chèvre (8 pièces)',
        price: '12,00',
    },
    {
        name: 'Calamars à la plancha, pistou et chorizo (150g)',
        price: '12,00',
    },
    {
        name: 'Toasts aux oignons et aux anchois (3 pièces)',
        price: '7,00',
    },
    {
        name: 'Brochettes de crevettes à l’aïoli (2 pièces)',
        price: '9,00',
    },
    {
        name: 'Mozzarella sticks panés (8 pièces)',
        price: '7,00',
    },
    {
        name: 'Oignons rings “rouelles d’oignon pannées” (8 pièces)',
        price: '5,00',
    },
    {
        name: 'Bouchées de carpaccio de boeuf au parmesan sauce Asiatique (6 pièces)',
        price: '8,00',
    },
    {
        name: 'Dés de fromage Cheddar (100g)',
        price: '4,00',
    },
    {
        name: 'Supplément sauce (curry, aïoli et piment doux)',
        price: '1,00',
    },
]

const douceurs = [
    {
        name: 'Le colonel (vodka, glace citron)',
        price: '8,00',
    },
    {
        name: 'Nougat glacé, coulis aux fruits rouges',
        price: '7,00',
    },
    {
        name: 'Assortiments de macarons (5 pièces)',
        price: '6,00',
    },
    {
        name: 'Petits cannelés de Bordeaux (4 pièces)',
        price: '4,00',
    },
    {
        name: 'Gaufre au Nutella glace caramel beurre salé',
        price: '6,00',
    },
    {
        name: 'Coulant au chocolat, boule de glace caramel beurre salé',
        price: '8,00',
    },
    {
        name: 'Coupe cévenole (glace  vanille, crème de marron et chantilly)',
        price: '6,00',
    },
    {
        name: 'Pêche melba (glace vanille, pèche en sirop, coulis de fruits rouges, chantilly)',
        price: '7,00',
    },
]

const Menu = () => {
    return (
        <div className="static flex bg-white p-12 xl:absolute xl:rounded-3xl">
            <div className="flex flex-col gap-12 md:flex-row">
                <div className="flex flex-col gap-6">
                    <div className="align-center flex flex-col lg:flex-row lg:items-center lg:gap-2">
                        <h5>TAPAS & PLANCHA</h5>
                        <p className="italic lg:mt-[6px]">
                            (Seulement le soir)
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        {tapas.map((tapa) => (
                            <div
                                key={'tapas-' + tapas.indexOf(tapa)}
                                className="flex flex-row justify-between gap-6"
                            >
                                <p className="text-black">{tapa.name}</p>
                                <p className="text-black">{tapa.price}€</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-6">
                        <div className="align-center flex flex-col lg:flex-row lg:items-center lg:gap-2">
                            <h5>DOUCEURS</h5>
                            <p className="italic lg:mt-[6px]">
                                (Seulement le soir)
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            {douceurs.map((douceur) => (
                                <div
                                    key={
                                        'douceurs-' + douceurs.indexOf(douceur)
                                    }
                                    className="flex flex-row justify-between gap-6"
                                >
                                    <p className="text-black">{douceur.name}</p>
                                    <p className="text-black">
                                        {douceur.price}€
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className="flex h-full flex-col gap-8 md:justify-between
                    md:gap-0"
                    >
                        <div className="flex flex-col gap-6">
                            <div className="align-center flex flex-col break-keep lg:flex-row lg:items-center lg:gap-2">
                                <h5>MENU & FORMULES</h5>
                                <p className="italic lg:mt-[6px]">
                                    (Seulement le midi)
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <h6>MENU DU JOUR À 25€</h6>
                                    <p>Entrée, plat et dessert</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h6>FORMULES À 19€</h6>
                                    <p>Entrée, plat</p>
                                    <p>ou</p>
                                    <p>Plat, dessert</p>
                                    <p>Café compris</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>
                                *Les entrées, plats, et desserts changent tous
                                les jours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
