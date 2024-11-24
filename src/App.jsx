import { useState } from "react";

import "./App.css";

function App() {
  const images = [
    { id: 1, text: "1.png" },
    { id: 2, text: "2.png" },
    { id: 3, text: "3.png" },
    { id: 4, text: "4.png" },
  ];

  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [cartItems, setCartItems] = useState(0);
  const [mainImg, setMainImg] = useState(images[0].text);
  const [secondImg, setSecondImg] = useState(images[0].text);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(1);
  const [show2, setShow2] = useState(false);
  const [priceCount, setPriceCount] = useState(1);
  const [show3, setShow3] = useState(false);

  const nextHandler = () => {
    if (count >= images.length) {
      setCount(0);
      setSecondImg(images[count].text);
    } else {
      setCount(count + 1);
      setSecondImg(images[count].text);
    }
  };

  const nextHandler2  = () => {
    if (count >= images.length) {
      setCount(0);
      setMainImg(images[count].text);
    } else {
      setCount(count + 1);
      setMainImg(images[count].text);
    }
  };


  const a = 125 * cartItems;

  const functionTwo = () => {
    setShow3(true);
   

  };

  return (
    <>
      <header>
        <img
          onClick={functionTwo}
          className="menu"
          src="./public/img/Combined Shape 2.png"
          alt=""
        />
        <h1>sneakers</h1>
        <span>Collections</span>
        <span>Men</span>
        <span>Women</span>
        <span>About</span>
        <span>Contact</span>
        <img
          onClick={() => setShow2(true)}
          src="./public/img/Shape.png"
          alt=""
        />
        <img
          onClick={() => setShow2(true)}
          className="Oval"
          src="./public/img/Oval.png"
          alt=""
        />
      </header>
      <div className="container">
        <div className="pics">
          <div>
            <img
              className="mainImg"
              onClick={() => setShow(true)}
              src={`/public/img/${mainImg}`}
              alt=""
            />
          </div>
          <div className="smallpics">
            {images.map((el) => (
              <img
                key={el.id}
                onClick={() => setMainImg(el.text)}
                className="smallpic"
                src={`./public/img/${el.text}`}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="text">
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <h1>$125.00</h1>
          <div className="buttondiv">
            <div className="firstbutton">
              <button
                onClick={() => {
                  if (priceCount > 1) {
                    setPriceCount(priceCount - 1);
                  }
                }}
              >
                -
              </button>
              <p>{priceCount}</p>
              <button onClick={() => setPriceCount(priceCount + 1)}>+</button>
            </div>
            <button
              onClick={() => {
                setIsCartEmpty(false);
                setCartItems(priceCount);
              }}
              className="secondbutton"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="responsivearrows">
        <button onClick={nextHandler2}>L</button>
        <button onClick={nextHandler2}>R</button>
      </div>

      <div>
        {show && (
          <div className="modal">
            <button onClick={() => setShow(false)} className="X">
              X
            </button>
            <div className="buttondiv1">
              <button onClick={nextHandler}>L</button>
              <button onClick={nextHandler}>R</button>
            </div>
            <div className="secondImg">
              <img
                className="mainImg"
                onClick={() => setShow(true)}
                src={`/public/img/${secondImg}`}
                alt=""
              />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              {images.map((el) => (
                <img
                  className="smallpic"
                  onClick={() => {
                    setSecondImg(el.text);
                  }}
                  key={el.id}
                  src={`/public/img/${el.text}`}
                  width={200}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {show2 && (
        <div className="modal2">
          {isCartEmpty ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="idk">
              <img src="./public/img/1.png" alt="" />
              <div className="idkk">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  {`$125.00 X ${cartItems} = `}
                  <span>{`$${a}`}</span>
                </p>
              </div>
            </div>
          )}
          <button className="ckeckout">Checkout</button>
          <button
            onClick={() => {
              setIsCartEmpty(true);
              setCartItems(0);
              document.querySelector(".ckeckout").style.display = "none";
            }}
          >
            Delete
          </button>
        </div>
      )}

      {show3 && (
        <div className="modal3">
          <div>
            <h1 onClick={() => setShow3(false)}>X</h1>
            <dir>
              <span>Collections</span>
              <span>Men</span>
              <span>Women</span>
              <span>About</span>
              <span>Contact</span>
            </dir>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
