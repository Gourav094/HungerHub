 import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItem,setshowIndex}) => {
    
    const handleClick = () => {
        setshowIndex();
    }

    return (
        <div>
            {/* Accodian Header */}
            <div className="shadow-md p-4 my-4  bg-gray-50">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-semibold text-gray-800">{data.title} ({data.itemCards.length})</span>
                    <span>
                        {
                            showItem ? <i className="fa-solid fa-chevron-down"></i> :
                            <i className="fa-solid fa-chevron-up"></i>
                        }
                    </span>
                    
                </div>
                {showItem && <ItemList items = {data.itemCards}/>}
            </div>
            {/* Accodian body */}
        </div>
    )
}
export default RestaurantCategory;