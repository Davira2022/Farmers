function Buttons({filteredProducts}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => filteredProducts("vegetables")}>Vegetables</button>
            <button className="change" onClick={() => filteredProducts("fruits")}>Fruits</button>
            <button className="change" onClick={() => filteredProducts("berries")}>Berries</button>
        </div>
    )
}

export default Buttons;
