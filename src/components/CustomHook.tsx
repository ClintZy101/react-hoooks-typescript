import { useEffect, useMemo, useState } from "react"

export interface Beverage {
    name:             string;
    producerName:     string;
    beverageName:     string;
    beverageColor:    string;
    beverageStyle:    string;
    producerLocation: string;
    abv:              number;
    ibu:              number;
    logo:             string;
    level:            number;
}

// this custom hook is generic
// this will return data and done: so you need to specify the type in curly brackets
function useFetchData<Payload>(url: string): {
    data: Payload | null;
    done: boolean;
} {
    const [data, setData] = useState<Payload | null>(null);
    const [done, setDone] = useState(false)

    useEffect(()=> {
        fetch(url)
        .then(resp => resp.json())
        .then((d: Payload) => {
            setData(d);
            setDone(true)
        })
    }, [url])

    return {
        data,
        done
    }
}
// this is for specific use case

// function useFetchData(url: string): {
//     data: Beverage[] | null;
//     done: boolean;
// } {
//     const [data, setData] = useState<Beverage[] | null>(null);
//     const [done, setDone] = useState(false)

//     useEffect(()=> {
//         fetch(url)
//         .then(resp => resp.json())
//         .then((d: Beverage[]) => {
//             setData(d);
//             setDone(true)
//         })
//     }, [url])

//     return {
//         data,
//         done
//     }
// }

export const CustomHook = () => {
    const {data} = useFetchData<Beverage[]>("/hv-taplist.json")
 const portlandTaps = useMemo(()=>
     (data || []).filter(bev=> bev.producerLocation.includes("Portland")),
     [data]
 )
   
    return (
        <div>
            {
                portlandTaps.length && (
                    // data! : means it's gonna guarantee that data is there
                    <img
                    src={portlandTaps![3].logo}
                    alt="Beverage Logo"
                    />
                )
            }
        </div>
    )
}

