const Grocery = () => {
    return (
        <div>
            <h2 className="font-bold p-5 m-5 text-lg" >Welcome to our grocery store!!</h2>
            <form>
                <input className="p-2 m-2 border" placeholder="name"/>
                <input className="p-2 m-2 border" placeholder="email"/>
                <button className="p-2 m-2 border">Submit</button>
            </form>
        </div>
    )
}
export default Grocery;