"use client"
import "./abot.css"

const page = () => {
  return (
   <>
 <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <div className=" items-center mb-6">
          <img
            src="/images/Bookablebiz.png"
            alt="Logo"
            width={500}
            height={200}
            // className="h-10 w-10 mr-2 rounded-full"
          />
          <p className="text-gray-700">
            Welcome to our website! We are a dedicated team of professionals
            passionate about creating amazing web experiences.
          </p>
        </div>
        <img
          src="/images/Bookablebiz.png"
          alt="Company"
          className="rounded-lg w-32"
        />
        <p className="text-gray-700 mt-4">
          Our mission is to provide innovative solutions that help businesses
          thrive in the digital world. We combine cutting-edge technologies with
          beautiful design to deliver outstanding results.
        </p>
        <p className="text-gray-700 mt-4">
          Whether you're looking for a stunning website, an engaging mobile app,
          or robust software solutions, we've got you covered. Our team has
          expertise in a wide range of technologies and is ready to take on any
          challenge.
        </p>
        <p className="text-gray-700 mt-4">
          At our core, we believe in collaboration and open communication. We
          work closely with our clients to understand their goals and ensure we
          deliver solutions that align with their vision. Your success is our
          top priority.
        </p>
        <p className="text-gray-700 mt-4">
          Feel free to reach out to us if you have any questions or if you'd
          like to discuss your project. We're here to help you succeed!
        </p>
      </div>
    </div>

   </>
  )
  
}

export default page
