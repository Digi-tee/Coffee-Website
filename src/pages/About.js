import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-section text-center mt-5">
        <h1>About Us Page</h1>
        <p>Some lorem text about who we are and what we do.</p>
        <p className='p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus, asperiores iste pariatur deleniti, dolorum harum a, aliquam nostrum nam aut blanditiis dolores quibusdam nesciunt? Nesciunt tenetur perspiciatis officiis eligendi id dicta. Sequi quaerat harum accusantium labore asperiores nobis minima porro doloremque nesciunt optio, dolor quod tempore saepe aperiam tenetur. Quo perferendis adipisci, perspiciatis modi voluptatum itaque tempore numquam officiis ducimus fuga laborum sint, recusandae porro quis eveniet deleniti necessitatibus voluptate esse rerum consectetur ipsam reiciendis voluptatem. Officiis repellendus excepturi eligendi officia doloremque numquam odio voluptate ab unde maxime maiores quod sint, nulla consectetur, culpa nobis quis quia voluptas enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus, asperiores iste pariatur deleniti, dolorum harum a, aliquam nostrum nam aut blanditiis dolores quibusdam nesciunt? Nesciunt tenetur perspiciatis officiis eligendi id dicta. Sequi quaerat harum accusantium labore asperiores nobis minima porro doloremque nesciunt optio, dolor quod tempore saepe aperiam tenetur. Quo perferendis adipisci, perspiciatis modi voluptatum itaque tempore numquam officiis ducimus fuga laborum sint, recusandae porro quis eveniet deleniti necessitatibus voluptate esse rerum consectetur ipsam reiciendis voluptatem. Officiis repellendus excepturi eligendi officia doloremque numquam odio voluptate ab unde maxime maiores quod sint, nulla consectetur, culpa nobis quis quia voluptas enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus, asperiores iste pariatur deleniti, dolorum harum a, aliquam nostrum nam aut blanditiis dolores quibusdam nesciunt? Nesciunt tenetur perspiciatis officiis eligendi id dicta. Sequi quaerat harum accusantium labore asperiores nobis minima porro doloremque nesciunt optio, dolor quod tempore saepe aperiam tenetur. Quo perferendis adipisci, perspiciatis modi voluptatum itaque tempore numquam officiis ducimus fuga laborum sint, recusandae porro quis eveniet deleniti necessitatibus voluptate esse rerum consectetur ipsam reiciendis voluptatem. Officiis repellendus excepturi eligendi officia doloremque numquam odio voluptate ab unde maxime maiores quod sint, nulla consectetur, culpa nobis quis quia voluptas enim!</p>
      </div>

      <h1 className='fs-8 mt-5' style={{textAlign:"center"}}>Our Team</h1>
      <div className='about-us '>

        
        <section className="col-md m-5">
          <div className="card bg-light text-dark">
            <div className="col-md text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQb_OQqKNnnMY4OY8pWJTDr-JfpwBKCtqFQ&usqp=CAU" className="img-fluid rounded-circle p-2" alt="" />
            </div>
            <div className="container text-center">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p>"In the past seven years, I've used digital design software to complete my duties and projects as an art director and graphic designer. I've also used color swatches and drawing instruments like oil pastels and pencils. As design continues to evolve, I'm committed to learning how new tools work and how I can implement them in my designs."</p>
              <p>mikeross123@divaespresso.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </section>

        <section className="col-md m-5">
          <div className="card bg-light text-dark">
            <div className="col-md text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu8laA9EmPmj6uBeUt65jaa5GNHUIxTj84tQ&usqp=CAU" className="img-fluid rounded-circle p-2" alt="" />
            </div>
            <div className="container text-center">
              <h2>Chukwunonso Opara</h2>
              <p className="title">CEO & Founder</p>
              <p>I will strive to gain mastery over life's challenges through increasing my circle of influence and de-emphasizing those areas of concern over which I have no control. I will behave in a manner so as to become a light, not a roadblock, for others who choose to follow or lead me. I am committed to energizes my staffs, inspiring them to achieve excellence.</p>
              <p>chukwunonso_@divaespresso.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </section>

        <section className="col-md m-5">
          <div className="card bg-light text-dark">
            <div className="col-md text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7HyzGi0Brs2AkT8G3awpkGu_UwHaJthdJQ&usqp=CAU" className="img-fluid rounded-circle p-2 align-center" alt="" />
            </div>
            <div className="container text-center">
              <h2>Jane Doe</h2>
              <p className="title fw-bold">Designer</p>
              <p>I'm a creative person driven by my passion for design. I'm proficient with graphic tools and have an artistic approach towards everything I create. I'm also a team player and know how to improve myself when given feedback. But my weakness is that I'm rather bad with time-management. lorem ipsum grande</p>
              <p>janedoe12@divaespresso.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </section>
        </div>
      <Footer />
    </div>
  )
}

export default About