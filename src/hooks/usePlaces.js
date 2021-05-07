import { useEffect, useState } from "react"

export function usePlaces() {
    const [loading, setLoading] = useState(false);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        setLoading(true);

        const placesList = [
            {
                id: "place-001",
                image: "https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                name: "New York",
                description: "The beauty of New York is multi-sensory: it's the historic architecture, from the Flatiron Building to the One World Trade Center. It's the feel of the grass underfoot (and the smell of roasted nuts) in Central Park."
            },
            {
                id: "place-002",
                image: "https://images.unsplash.com/photo-1453747063559-36695c8771bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                name: "Venice, Italy",
                description: "There is nowhere on Earth like Venice: its canals, car-free maze of cobbled streets and hidden passageways are perfect for strolling."
            },
            {
                id: "place-003",
                image: "https://www.infobae.com/new-resizer/6ez4GTSmEVj4CozMQP23KKzsnFo=/750x0/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/D6QNBDXLXFFKRHESNA7Z7S2JEE",
                name: "Buenos Aires, Argentina",
                description: "Design lovers should plan at least one visit to the Recoleta Cemetery, then explore the very varied architectural styles around every corner."
            },
            {
                id: "place-004",
                image: "https://images.unsplash.com/photo-1506374322094-6021fc3926f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=806&q=80",
                name: "Sydney, Australia",
                description: "It's almost not fair how beautiful Sydney is. Australia's largest city benefits from a waterfront culture, with locals hopping on ferries to travel home, or play, on the beaches of Bondi, Manly and Coogee, and the spectacular Sydney Opera House in the harbor. "
            },
            {
                id: "place-005",
                image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=686&q=80",
                name: "Rome, Italy",
                description: "Rome captivates travelers in a way few cities can: attribute it to world-class architecture, incredibly narrow cobblestone vicoli, and museums filled with artistic masterpieces. Call us sentimental, but we still stop short at the first glimpse of the Pantheon when we headed to Piazza della Rotonda. "
            },
            {
                id: "place-006",
                image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=798&q=80",
                name: "Rio de Janeiro, Brazil",
                description: "Rio has some of the most beautiful stretches of sand in the world, from Copacabana to Ipanema. Christ the Redeemer watches the entire coastline, where a vibrant city seems to dance to the sea and soften as you float on a stand up paddle board."
            }
        ]

        setPlaces(placesList);
        setLoading(false);
    }, [])

    return { loading, places }
}