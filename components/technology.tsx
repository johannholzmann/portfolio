export default function Technology({ name }) {
    return (
        <div className="w-80 hover:scale-[105%] duration-200 bg-white hover:bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-700/90 dark:hover:bg-gray-800/90 dark:border-gray-700 text-black">
            <div className="p-5">
                <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</div>
            </div>
        </div>
    )
}