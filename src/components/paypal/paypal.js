import "./paypal.css";
import React, { useState, useRef, useEffect } from "react";
import clashRoyale from "~/assets/clashroyale.png";
import clashGold from "~/assets/clashroyale-gold.jpg";
import paypal from "~/config/paypal";
import { setPagamento } from '~/store/modules/cadastros/inscrevaSe/inscrevaSe.actions';
import { store } from '~/store';

function Paypal() {
  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);

  let paypalRef = useRef();

  const product = {
    price: 10.0,
    name: "PassportClashCup",
    description: "Passport Clash Cup",
    image: clashRoyale,
  };

  useEffect(() => {
    const script = document.createElement("script");
    debugger
    const id = paypal.secret;
    script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`;

    script.addEventListener("load", () => setLoaded(true));

    document.body.appendChild(script);
  },[]);

  useEffect(() => {
    if (loaded) {
      function loadButtonAndLogicAboutPayment() {
        setTimeout(() => {
          window.paypal
            .Buttons({
              createOrder: (_, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: product.description,
                      amount: {
                        currency_code: "BRL",
                        value: product.price,
                      },
                    },
                  ],
                });
              },
              onApprove: async (_, actions) => {
                let result = await actions.order.capture();
                let resultBack = await store.dispatch(setPagamento({FormaPagamento: "Paypal"}));
                debugger
                if(resultBack){
                  setPaid(true);
                }
              },
            })
            .render(paypalRef);
        });
      }
      loadButtonAndLogicAboutPayment();
    }
  });

  return (
    <div className="App">
      {paid ? (
        <div>
          <h1>Congrats, you just bought {product.name}!</h1>
          <img alt={product.description} src={clashGold} />
        </div>
      ) : (
        <>
          <h1>
            {product.description} por R${product.price}
          </h1>
          <img alt={product.description} src={clashRoyale} style={{width: 250,height:150}} />
          <div ref={(v) => (paypalRef = v)} />
        </>
      )}
    </div>
  );
}

export default Paypal;
