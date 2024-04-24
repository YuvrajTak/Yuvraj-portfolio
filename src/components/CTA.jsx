import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
      <Link to="/candygame" className="px-4 py-2 rounded-md text-white font-medium bg-gradient-to-r from-orange-500 to-red-500 hover:bg-gradient-to-l">
               Candy Cream
              </Link>
              <Link to="/runnergame" className="px-4 py-2 rounded-md text-white font-medium bg-gradient-to-r from-orange-500 to-red-500 hover:bg-gradient-to-l">
                Subway Run
              </Link>
    </section>
  );
};

export default CTA;
