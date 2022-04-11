import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function about() {
  return (
    <div className=" flex flex-col min-h-screen bg-sammyBirdGray">
      <Navbar />
      <div className="  flex-grow max-w-5xl mx-auto w-full py-10 px-5 lg:px-0">
        <div className=" grid grid-cols-3 gap-3 grayscale pb-10">
          <img src="aboutLeft.jpeg" alt="" />
          <img src="aboutCenter.jpeg" alt="" />
          <img src="aboutRight.jpeg" alt="" />
        </div>
        <div className=" text-sm">
          <p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              incidunt quaerat itaque, ad hic sequi est dignissimos suscipit rem
              necessitatibus commodi sunt placeat voluptatum fugiat fugit
              dolorum corrupti perferendis delectus!
            </span>
            <span>
              Omnis architecto, magnam autem earum quod expedita! Soluta ipsam
              voluptate dicta quae aspernatur cupiditate, doloribus illum neque
              voluptas sit? Autem laboriosam dolore earum. Veritatis vel quo
              maxime distinctio iusto molestiae!
            </span>
            <span>
              Error rerum in unde labore repudiandae fuga neque nulla
              perspiciatis, ipsam molestiae libero voluptas dolore ducimus!
              Maxime provident alias temporibus saepe aut corrupti voluptates
              nisi. Atque ratione error sequi placeat.
            </span>
            <span>
              Temporibus ab modi repudiandae totam explicabo ratione? Ad beatae
              cupiditate, quibusdam nam repellendus id, rerum maiores vero
              maxime doloremque expedita? Sit beatae quia nisi odit nobis
              provident facere accusantium molestiae?
            </span>
            <span>
              Maxime quaerat debitis nemo. Explicabo earum, praesentium
              exercitationem quia voluptas maiores obcaecati reprehenderit,
              ratione accusantium dolorum maxime similique laboriosam sapiente
              amet possimus soluta doloremque minima quo, adipisci facere error
              dolor?
            </span>
            <span>
              Natus ducimus fuga maiores laboriosam quos voluptatibus nulla,
              dignissimos labore consectetur nostrum itaque, voluptates delectus
              officiis similique, explicabo iusto? Minus distinctio aspernatur
              unde incidunt illo aperiam ut magnam id harum.
            </span>
            <span>
              Ipsum doloremque ea excepturi iure nobis in ullam, saepe ipsam
              illum rerum maxime voluptates adipisci unde? Non sunt modi tempore
              nemo deserunt error voluptatibus consequatur alias quibusdam!
              Nesciunt, incidunt enim?
            </span>
            <span>
              Alias veniam eveniet commodi aspernatur doloremque, et amet saepe.
              Quia pariatur repellendus ratione numquam exercitationem iure, eos
              dicta nemo animi quisquam quaerat necessitatibus perspiciatis quam
              ut, ducimus ullam in. Ab?
            </span>
            <span>
              Aut ut ipsa error illo deserunt fugit consequatur doloribus
              obcaecati, molestiae doloremque asperiores nihil at rem amet
              incidunt velit et ea laboriosam animi? Minus deserunt voluptate
              adipisci? Voluptatum, molestiae incidunt?
            </span>
            <span>
              Enim iste dolore, voluptates perferendis odit quis omnis
              cupiditate fuga, eligendi nesciunt incidunt molestias ex autem
              asperiores magnam suscipit maiores amet quas, numquam labore nulla
              illo. Praesentium ratione corporis placeat.
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
