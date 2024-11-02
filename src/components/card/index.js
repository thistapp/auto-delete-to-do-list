function CardComponents({ data, handleChange }) {
    return (
        <div className="card-style" onClick={() => handleChange(data)}>
            {data.name}
        </div>
    );
}

export default CardComponents