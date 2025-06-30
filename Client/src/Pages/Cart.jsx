import React, { useEffect, useState } from "react";
import { Footer } from "../Component/Footer";
import { Header } from "../Component/Header";
import { Items } from "../Component/CartComponent/Items";

export const Cart = () => {
  useEffect(() => { window.scrollTo(0, 0) }, []);
  // const razorpay=useRazorpay();
  
      const [data, setdata] = useState();
      const[item,setItem]=useState([]);
      const [loading, setLoading] = useState(9);
      const [totalAmount, setTotalAmount] = useState(0);
      const[token,setToken]=useState(sessionStorage.getItem("token"));


      const fatchCart = async () => {
        // get cart item
        console.log(token);
        const res = await fetch("http://localhost:8080/cart/1", {headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
          },
        });
        const data = await res.json();
        setTotalAmount(data.totalAmount);
        setItem(data.cartDetalis);
      };

      useEffect(() => {
        fatchCart();

      }, [loading]);

      
      

      const createOrder = async (e) => {
        const res = await fetch(`http://localhost:8080/payment/${totalAmount}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
        "Authorization": "Bearer " + token
          },
        });
        const da = await res.json();
        setdata(da);
        return da;
      }


      const handlePayment = async () => {
        const order = await createOrder();
        const options = {
          key: order.key,
          amount: order.amount, 
          currency: order.currency,
          name: "userName",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: order.orderId, 
          handler: function (response) {
            console.log(response);
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
          },
          prefill: {
            name: "vivek",
            email: "vivek@gmail.com",
            contact: 7405999619,
          },
          notes: {
            address: "ABC, Delhi",
          },
          theme: {
            color: "#3399cc",
          },
        };
      
        const rzp1 = new window.Razorpay(options);;
        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
      
        rzp1.open();
      };
     





  return (
    <>
      <Header />
      <div className="shopping-cart">
        <div className="px-4 px-lg-0">
          <div className="pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                  {/* Shopping cart table */}
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="border-0 bg-light">
                            <div className="p-2 px-3 text-uppercase">
                              Produit
                            </div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Prix</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Quantité</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Supprimer</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>


                    {item ?    item.map((elem,index) => {
                          return (
                            <>

                              <Items
                                key={index} prop={elem} setLoading={setLoading} />
                              </>
                          )})
                        :<></>}

                      </tbody>
                    </table>
                  </div>
                  {/* End */}
                </div>
              </div>
              <div className="row py-5 p-4 bg-white rounded shadow-sm">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Ordre resumé{" "}
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      Les frais d'expédition et les frais supplémentaires sont
                       calculés en fonction des valeurs que vous avez saisies.
                    </p>
                    <ul className="list-unstyled mb-4">
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Ordre Soustotal </strong>
                        <strong>MAD {totalAmount}</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">
                          Frais de port et de manutention
                        </strong>
                        <strong>MAD 35.00</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Taxe</strong>
                        <strong>MAD 0.00</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Totale</strong>
                        <h3 className="font-weight-bold">MAD {totalAmount+35}</h3>
                      </li>
                    </ul>
                    <button
                      href=""
                      className="btn btn-dark rounded-pill py-2 btn-block"
                      onClick={(e) => handlePayment(e)}
                    >
                      Valider
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
