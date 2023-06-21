"use client"

const page = () => {
  return (
    <>
    
    <section className="mb-4 bg-contact px-12">
        <h2 className="text-3xl font-bold text-center my-4">Contact us</h2>
        <p className="text-center mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you
          within a matter of hours to help you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2 mb-4 md:mb-0">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-1">
                      Your name
                    </label>
                    <input type="text" id="name" name="name" className="form-input border border-black" />
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-1  border ">
                      Your email
                    </label>
                    <input type="text" id="email" name="email" className="form-input  border border-black" />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-1  border ">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" className="form-input  border border-black" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1  border ">
                  Your message
                </label>
                <textarea id="message" name="message" rows="2" className="form-textarea  border border-black"></textarea>
              </div>
            </form>
            <div className="text-center">
            <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Send</button>
              
            </div>
            <div className="status"></div>
          </div>
          <div className="col-span-1 text-center">
            <ul className="list-none">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>San Francisco, CA 94126, USA</p>
              </li>
              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
              </li>
              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </>
  )
}

export default page