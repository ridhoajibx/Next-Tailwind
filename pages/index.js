import { useEffect } from "react";

function Home() {
    const selectTheme = (value) => {
        let html = document.querySelector('html');
        localStorage.setItem('theme', value);
        html.classList.add(localStorage.getItem('theme'))
        if (value === 'dark') {
            html.classList.remove('light')
        } else {
            html.classList.remove('dark')
        }
    }

    useEffect(() => {
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
    }, []);

    return (
        <div className="antialiased flex items-center justify-center min-h-screen bg-gray-300 dark:bg-gray-700">
            <div className="w-6/12">
                <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg mb-6 flex items-center justify-between">
                    <div className="font-semibold text-lg text-gray-800 dark:text-gray-200">Switcher</div>
                    <div>
                        <button onClick={()=>selectTheme('light')} className='bg-gray-200 w-6 h-6 rounded-full focus:outline-none mr-2'></button>
                        <button onClick={()=>selectTheme('dark')} className='bg-black w-6 h-6 rounded-full focus:outline-none'></button>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <div className="px-10 py-8">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                            Lorem ipsum dolor sit amet consectetur.
                        </h2>
                        <div className="leading-relaxed text-gray-600 dark:text-gray-300 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quidem debitis maiores accusantium sunt ab illum praesentium inventore saepe error.
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 dark:text-gray-300 px-10 py-6 border-t-2 border-gray-200 dark:border-gray-800">
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
