import './paypal.css';
import React, { useState, useRef, useEffect } from 'react';
import clashRoyale from '~/assets/clashroyale.png';
import clashGold from '~/assets/clashroyale-gold.jpg';
import paypal from '~/config/paypal';
import { setPagamento, getPagamento } from '~/store/modules/cadastros/inscrevaSe/inscrevaSe.actions';
import { store } from '~/store';
import connect from '~/components/connect/connect';
import { Link } from 'react-router-dom';

function Paypal(props) {
  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  let paypalRef = useRef();

  const product = {
    price: 10.0,
    name: 'PassportClashCup',
    description: `Passport ${props.nameTorneio} - ${props.dataTorneio}`,
    image: clashRoyale,
  };

  const state = store.getState().inscrevaSe.TorneioId;

  useEffect(() => {
    function fetchData() {
      store.dispatch(getPagamento(props.TorneioId));
      const script = document.createElement('script');
      const id = paypal.secret;
      script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`;

      script.addEventListener('load', () => setLoaded(true));

      document.body.appendChild(script);
    }
    fetchData();
  }, [props.TorneioId]);

  //componentDidUpdate Conversion to Hooks
  useEffect(() => {
    var { Status, TorneioId } = store.getState().inscrevaSe;
    if (Status === 'Concluido' && props.TorneioId === TorneioId) {
      setPaid(true);
    }
  }, [state, props.TorneioId]);

  useEffect(() => {
    if (loaded && paid === false && isLoaded === false) {
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
                        currency_code: 'BRL',
                        value: product.price,
                      },
                    },
                  ],
                });
              },
              onApprove: async (_, actions) => {
                await actions.order.capture();
                await store.dispatch(setPagamento({ FormaPagamento: 'Paypal', TorneioId: props.TorneioId }));
                setPaid(true);
              },
            })
            .render(paypalRef);
          setIsLoaded(true);
        });
      }
      loadButtonAndLogicAboutPayment();
    }
  });

  return (
    <div className="App">
      {paid ? (
        <>
          <div>
            <h1>Parabéns, você comprou o {product.description}!</h1>
            <img
              alt={product.description}
              src={clashGold}
              style={{ width: '100%', height: 400, padding: 10, maxWidth: 800 }}
            />
          </div>
          <div>
            <Link className="btn btn-primary w-100" style={{ width: '100%', margin: 10, maxWidth: 770 }} to="/perfil">
              Detalhes
            </Link>
          </div>
        </>
      ) : (
        <>
          <h1>
            {product.description} por R${product.price}
          </h1>
          <img alt={product.description} src={clashRoyale} style={{ width: 250, height: 150 }} />
          <div ref={v => (paypalRef = v)} />
        </>
      )}
    </div>
  );
}

export default connect(Paypal);
