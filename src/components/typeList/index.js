import CardComponents from "../card";

function ListComponents({ data, title,handleChange }) {

    return (
        <div className="type">
            <div className="type-title">
                {title}
            </div>
            <div className="type-data">
                {data?.map((o, i) => (
                    <div key={i}>
                        <CardComponents data={o} handleChange={handleChange} />
                    </div>
                ))}
            </div>
        </div>
    )

}

export default ListComponents;