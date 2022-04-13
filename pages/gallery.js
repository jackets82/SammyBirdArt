import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function gallery() {
  const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
  ];
  const Gallery = images.map((image) => {
    return <img key={image} src={`/gallery/${image}`} alt="" className=" shadow-lg rounded opacity-80 hover:opacity-100 transition-all duration-200 z-0"/>;
  });

  return (
    <div className="flex flex-col min-h-screen bg-sammyBirdGray">
      <Navbar />
      <div className=" flex-grow max-w-5xl mx-auto py-10 md:px-0 px-3">
        <div className="grid lg:grid-cols-3 gap-5 grid-cols-1">{Gallery}</div>
      </div>
      <Footer />
    </div>
  );
}

export default gallery;
