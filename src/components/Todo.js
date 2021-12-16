function Todo(props) {
    return (
        <div className="bg-white p-3 mt-2  h-32 pb-6 w-1/2 rounded-lg" > 
          <h2 className="text-2xl font-bold">{ props.text }</h2>
          <div className="mt-4 h-full w-full">
            <div className=" float-right">
            <button className="rounded-lg  border border-gray-800 mr-2 p-2 bg-gray-100 text-gray-800">Edit</button>
            <button className="rounded-lg  p-2 bg-red-600 text-gray-100">Delete</button>
            </div>
          </div>
          
      </div>
    )
}

export default Todo;
