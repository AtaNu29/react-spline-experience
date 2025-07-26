import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Spline from '@splinetool/react-spline';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* navbar goes here */}
      <nav class="w-full h-14 bg-white/10 backdrop-blur-md border-b border-white/10 flex justify-between items-center px-4 md:px-8 shadow-md">

        <div class="text-white text-2xl">Logo</div>
        <ul class="md:flex font-semibold hidden md:gap-10 lg:gap-15">
          <li class="cursor-pointer text-white">Home</li>
          <li class="cursor-pointer text-white">About Us</li>
          <li class="cursor-pointer text-white">Contact Us</li>
        </ul>
        <div class="text-white text-md hidden md:block bg-indigo-500 px-2 py-1 rounded-sm hover:bg-indigo-800 cursor-pointer font-bold">Login/Sign Up</div>
        <div class="md:hidden">
          <a href="#" class="text-4xl text-white">&#8801;</a>
        </div>
      </nav>
      {/* navbar End here */}

      {/* Hero Section */}
      <header className="flex-1 w-full h-[calc(100vh-56px)] bg-black flex justify-center items-center text-center md:text-left px-4 py-8 md:py-0 gap-8">
        {/* Left Text */}
        <div className="flex-1 flex items-center justify-center md:justify-center px-4">
          <div className="text-center  md:text-left">
            <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-400 drop-shadow-lg">
              Welcome to the <br /> Future of Tech
            </h1>
            <p className="font-sans mt-4 text-gray-300 text-sm sm:text-md md:text-lg">
              Explore the power of interactive 3D <br className="hidden md:block" /> design with AI-enhanced creativity.
            </p>
          </div>
        </div>
        {/* Spline Robot */}
        <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] xl:w-[650px] xl:h-[650px]">
          <Spline
            scene="https://prod.spline.design/Tn3bfhj6s7VCsD8V/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center md:text-left">
            <h2 className="font-mono text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-emerald-400 drop-shadow-lg">
              React + Spline<br /> Real-time Experience
            </h2>
            <p className="font-sans mt-4 text-gray-300 text-sm sm:text-md md:text-lg">
              Build immersive user interfaces<br className="hidden md:block" /> that feel alive.
            </p>
          </div>
        </div>

      </header>
      {/* Hero Section ends Here*/}

      {/* students Section start Here*/}
      <div className='h-auto w-full flex flex-wrap flex-col items-center text-center p-10 mt-'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center text-center mb-5'>
          <p className='text-indigo-800 font-bold text-2xl sm:3xl text-center'>"Pure Heardwork, No Shortcuts!"</p>
          <hr className='w-36 border-t-3 border-yellow-500 mt-2 rounded'/>
        </div>
      
      {/* students Section ends Here*/}
      <div className="w-full overflow-x-auto p-4 bg-black bg-opacity-70 rounded-xl shadow-inner shadow-cyan-500/20 backdrop-blur-sm">
  <table className="min-w-[600px] w-full text-sm text-center text-cyan-100 border border-cyan-700 rounded-lg overflow-hidden bg-gradient-to-r from-gray-900/60 to-gray-800/50">
    <thead className="text-cyan-400 uppercase tracking-wider border-b border-cyan-600 bg-gradient-to-r from-cyan-800/40 to-cyan-700/30">
      <tr>
        <th className="px-6 py-4">Name</th>
        <th className="px-6 py-4">Role</th>
        <th className="px-6 py-4">Status</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-cyan-700">
      <tr className="hover:bg-cyan-900/30 transition-all duration-300">
        <td className="px-6 py-4">Atanu Mondal</td>
        <td className="px-6 py-4">Frontend Dev</td>
        <td className="px-6 py-4 text-green-400">Active</td>
      </tr>
      <tr className="hover:bg-cyan-900/30 transition-all duration-300">
        <td className="px-6 py-4">Jane Matrix</td>
        <td className="px-6 py-4">UI/UX Designer</td>
        <td className="px-6 py-4 text-yellow-400">Pending</td>
      </tr>
      <tr className="hover:bg-cyan-900/30 transition-all duration-300">
        <td className="px-6 py-4">Neo Future</td>
        <td className="px-6 py-4">AI Architect</td>
        <td className="px-6 py-4 text-red-400">Offline</td>
      </tr>
    </tbody>
  </table>
</div>

      {/* cards ends */}

      <div className='mt-10 w-full flex flex-wrap justify-evenly'>
        <div className='w-60 flex flex-col items-center mb-12 '>
          <img className='w-44 h-44 rounded-full' src="https://plus.unsplash.com/premium_photo-1682125139523-92d7def89cd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWxsdXN0cmF0aW9ufGVufDB8fDB8fHww" alt="" />
          <p className='text-2xl font-bold text-white mt-2'>600+</p>
          <p className='text-3xl font-bold text-gray-500'>Diffrent Courses</p>
        </div>
        <div className='w-60 flex flex-col items-center mb-12 '>
          <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <p className='text-2xl font-bold text-white mt-2'>500+</p>
          <p className='text-3xl font-bold text-gray-500'>Diffrent Theory</p>
        </div>
        <div className='w-60 flex flex-col items-center mb-12 '>
          <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1578763727915-a976fa77f8c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <p className='text-2xl font-bold text-white mt-2'>200+</p>
          <p className='text-3xl font-bold text-gray-500'>Diffrent Books</p>
        </div>
      </div>

      {/* product sectio start here */}
        <div className='w-full h-auto flex flex-wrap flex-col items-center text-center'>
          <p className='text-indigo-800 font-bold text-2xl sm:3xl text-center'>"Our Products!"</p>
          <hr className='w-26 border-t-3 border-yellow-500 mt-2 rounded'/>
        </div>
       <div className='mt-10 w-full flex flex-wrap justify-around'>
        <div className='w-60 flex flex-col items-center mb-12 border-1 border-gray-200 rounded-md p-2'>
          <img className='w-44 h-44 rounded-full' src="https://plus.unsplash.com/premium_photo-1682125139523-92d7def89cd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWxsdXN0cmF0aW9ufGVufDB8fDB8fHww" alt="" />
          <p className='text-xl font-bold text-white mt-2'>600+</p>
          <p className='text-2xl font-bold text-gray-500'>Diffrent Courses</p>
          <p className='text-1xl font-bold text-gray-600 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quidem.</p>
        </div>
        <div className='w-60 h-auto flex flex-col items-center mb-12 '>
          <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <p className='text-2xl font-bold text-white mt-2'>500+</p>
          <p className='text-3xl font-bold text-gray-500'>Diffrent Theory</p>
        </div>
        <div className='w-60 flex flex-col items-center mb-12 '>
          <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1578763727915-a976fa77f8c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <p className='text-2xl font-bold text-white mt-2'>200+</p>
          <p className='text-3xl font-bold text-gray-500'>Diffrent Books</p>
        </div>
        <div className='w-60 flex flex-col items-center mb-12 '>
          <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1575550597909-fff46d723735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <p className='text-2xl font-bold text-white mt-2'>600+</p>
          <p className='text-3xl font-bold text-gray-500'>Diffrent Courses</p>
        </div>
        <div className='w-60 flex flex-col items-center mb-12 border-1 border-gray-200 rounded-md p-2'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
          <img className='w-full h-auto' src="https://images.unsplash.com/photo-1579762714453-51d9913984e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <p className='text-xl font-bold text-white mt-2'>600+</p>
          <p className='text-2xl font-bold text-gray-500'>Diffrent Courses</p>
          <p className='text-1xl font-bold text-gray-600 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quidem.</p>
        </div>
      </div>
      {/* product sectio end here */}
    </div>
    <footer className="bg-gray-900 text-cyan-100 py-8 px-4 sm:px-8 lg:px-16">
  <div className="max-w-10xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between text-center">
    {/* Logo and Description */}
    <div className='mb-2'>
      <h2 className="text-2xl font-bold text-cyan-400">TechVerse</h2>
      <p className="mt-2 text-sm text-white mx-auto w-50">
        Exploring futuristic design with React, 3D, and AI creativity.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-xl font-semibold mb-2 text-cyan-300">Quick Links</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="#" className="hover:text-cyan-400">Home</a></li>
        <li><a href="#" className="hover:text-cyan-400">About</a></li>
        <li><a href="#" className="hover:text-cyan-400">Projects</a></li>
        <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-xl font-semibold mb-2 text-cyan-300">Resources</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
        <li><a href="#" className="hover:text-cyan-400">Docs</a></li>
        <li><a href="#" className="hover:text-cyan-400">Tutorials</a></li>
        <li><a href="#" className="hover:text-cyan-400">FAQ</a></li>
      </ul>
    </div>

    {/* Social Media */}
    {/* Social Media */}
    <div>
      <h3 className="text-xl font-semibold mb-2 text-cyan-300">Follow Us</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="#" className="hover:text-cyan-400">Twitter</a></li>
        <li><a href="#" className="hover:text-cyan-400">GitHub</a></li>
        <li><a href="#" className="hover:text-cyan-400">LinkedIn</a></li>
      </ul>
    </div>

  </div>

  {/* Bottom Line */}
  <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
    © 2025 Atmond. All rights reserved.
  </div>
</footer>

    </div>
  )
}

export default App
