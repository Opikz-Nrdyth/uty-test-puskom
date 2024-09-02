import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const Product = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const currencyFormat = (amount) => {
    const formater = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formater.format(amount);
  };

  useEffect(() => {
    axios({
      url: `${import.meta.env.VITE_BASEURL}products`,
      method: "GET",
      headers: {
        token: `${import.meta.env.VITE_TOKEN}`,
      },
    })
      .then((response) => {
        setDataProduct(response.data);
      })
      .catch((error) => {
        console.log("Error data", error);
      });
  }, []);

  return (
    <div className="row">
      {dataProduct.length > 0 ? (
        dataProduct?.result?.map((item, index) => (
          <Card
            className="col-md-3 col-sm-4 col-6 bg-white shadow-sm"
            data-aos="fade-up"
            key={index}
          >
            <Card.Img
              variant="top"
              className="mt-2"
              src="https://test-puskom.uty.ac.id/img/empty.jpg"
            />
            <Card.Body>
              <Card.Title className="text-opacity">
                {item?.name_brand || "Brand Name"}
              </Card.Title>
              <Card.Text>
                <p className="brand-series">{item?.name || "Brand Series"}</p>
                <p className="text-opacity">
                  Rp.{item?.price || currencyFormat(100000)}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <Card
          className="col-md-3 col-sm-4 col-6 bg-white shadow-sm"
          data-aos="fade-up"
        >
          <Card.Img
            variant="top"
            className="mt-2"
            src="https://placehold.co/600x400"
          />
          <Card.Body>
            <Card.Title className="text-opacity">Brand Name</Card.Title>
            <Card.Text>
              <p className="brand-series">Brand Series</p>
              <p className="text-opacity">{currencyFormat(100000)}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};
export default Product;
