
function Ring() {
    return (
        <div className="bg-white p-10 rounded-lg shadow flex justify-between">
            <button type="button" className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 ring-blue-200 px-5 py-2 rounded text-white">
                Primary
            </button>
            <button type="button" className="bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 ring-gray-200 px-5 py-2 rounded text-white">
                Secondary
            </button>
            <button type="button" className="bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 ring-green-200 px-5 py-2 rounded text-white">
                Success
            </button>
            <button type="button" className="bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 ring-rose-200 px-5 py-2 rounded text-white">
                Danger
            </button>
            <button type="button" className="bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 ring-yellow-200 px-5 py-2 rounded text-black">
                Warning
            </button>
        </div>
    )
}

export default Ring
