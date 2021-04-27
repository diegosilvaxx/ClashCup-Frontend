import './paypal.css';
import React, { useState, useEffect } from 'react';
import clashRoyale from '~/assets/clashroyale.png';
import clashGold from '~/assets/clashroyale-gold.jpg';
import { setPagamento, getPagamento } from '~/store/modules/cadastros/inscrevaSe/inscrevaSe.actions';
import { store } from '~/store';
import connect from '~/components/connect/connect';
import { Link } from 'react-router-dom';

function Paypal(props) {
  const [paid, setPaid] = useState(false);
  const product = {
    name: 'PassportClashCup',
    description: `Passport ${props.nameTorneio} - ${props.dataTorneio}`,
    image: clashRoyale,
  };

  const state = store.getState().inscrevaSe.TorneioId;

  useEffect(() => {
    function fetchData() {
      store.dispatch(getPagamento(props.TorneioId));
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

  async function onsubmit() {
    await store.dispatch(setPagamento({ FormaPagamento: 'Paypal', TorneioId: props.TorneioId }));
    setPaid(true);
  }

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
            <Link className="btn btn-primary w-100" style={{ width: '100%', margin: 10, maxWidth: 784 }} to="/perfil">
              Detalhes
            </Link>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>{product.description}</h1>
            <img alt={product.description} src={clashRoyale} style={{ width: 250, height: 150 }} />
            <button className="btn btn-primary" onClick={onsubmit} style={{ width: '17%', marginBottom: '30px' }}>
              Participar
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default connect(Paypal);
