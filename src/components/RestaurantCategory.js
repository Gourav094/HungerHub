import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    return (
        <div>
            {/* Accodian Header */}
            <div className="shadow-md p-4 my-4  bg-gray-50">
                <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">{data.title} ({data.itemCards.length})</span>
                    <span><i class="fa-solid fa-chevron-down"></i></span>
                </div>
                <ItemList items = {data.itemCards}/> 
            </div>
            {/* Accodian body */}
        </div>
    )
}
export default RestaurantCategory;