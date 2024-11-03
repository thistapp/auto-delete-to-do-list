import React, { useCallback, useEffect, useState } from "react";
import CardComponents from "../card";
import ListComponents from "../typeList";

function Todo() {
    const [busketList, setBusketList] = useState();
    const [fruits, setFruits] = useState([]);
    const [vegetables, setVegetables] = useState([]);
    const [timeouts, setTimeouts] = useState({})

    const dataConfig = [
        {
            id: 0,
            type: "Fruit",
            name: "Apple"
        }, {
            id: 1,
            type: "Vegetable",
            name: "Broccoli"
        }, {
            id: 2,
            type: "Vegetable",
            name: "Mushroom"
        }, {
            id: 3,
            type: "Fruit",
            name: "Banana"
        }, {
            id: 4,
            type: "Vegetable",
            name: "Tomato"
        }, {
            id: 5,
            type: "Fruit",
            name: "Orange"
        }, {
            id: 6,
            type: "Fruit",
            name: "Mango"
        }, {
            id: 7,
            type: "Fruit",
            name: "Pineapple"
        }, {
            id: 8,
            type: "Vegetable",
            name: "Cucumber"
        }, {
            id: 9,
            type: "Fruit",
            name: "Watermelon"
        }, {
            id: 11,
            type: "Vegetable",
            name: "Carrot"
        }
    ]

    const addType = useCallback((data) => {
        if (data.type === "Fruit") {
            setFruits((prev) => [...prev, data]);
        } else {
            setVegetables((prev) => [...prev, data]);
        }
        setBusketList((prev) => prev.filter((i) => i.id !== data.id));

        const timeoutId = setTimeout(() => {
            removeType(data);
        }, 5000);
        
        setTimeouts((prev) => ({
            ...prev,
            [data.id]: timeoutId,
        }));
    }, [])

    const removeType = useCallback((data) => {
        setBusketList((prev) => [...prev, data]);
        if (data.type === 'Fruit') {
            setFruits((prev) => prev.filter((i) => i.id !== data.id));
        } else {
            setVegetables((prev) => prev.filter((i) => i.id !== data.id));
        }

        clearTimeout(timeouts[data.id]);
        setTimeouts((prev) => {
            const { [data.id]: _, ...rest } = prev;
            return rest;
        });
    }, []);

    const handleRemove = (data) => {
        clearTimeout(timeouts[data.id]);
        removeType(data)
    }

    useEffect(() => {
        setBusketList(dataConfig)
    }, []);

    return (
        <div className="body">
            <div className="basket">
                {busketList?.map((o, i) => (
                    <div key={i}>
                        <CardComponents data={o} handleChange={addType} />
                    </div>
                ))}
            </div>
            <div>
                <ListComponents data={fruits} title={"Fruits"} handleChange={handleRemove} />
            </div>
            <div>
                <ListComponents data={vegetables} title={"Vegetables"} handleChange={handleRemove} />
            </div>
        </div>
    );
}

export default Todo;