import { FaAnglesRight } from "react-icons/fa6";
function HeroSection() {
  return (
    <section className=" text-center container-fluid costum-heroSection">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-dark text-white">Find Your Laptop</h1>
          <p className="lead text-white">
            Explore top-rated laptops built for speed, style, and performance.
            Whether you're a student, gamer, or professional, we’ve got the
            right device to match your needs and budget. Shop now and experience
            seamless computing with unbeatable deals and fast delivery.
          </p>
          <p>
            <a href="#" className="btn btn-info my-2">
              Our Products <FaAnglesRight />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
