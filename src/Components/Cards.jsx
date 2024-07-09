import React from "react";
import { Card } from "antd";
import "../Resources/Cards.css";
import img1 from "../img/image 1.png";
import img2 from "../img/image.png";
import img3 from "../img/image 7.png";
import img4 from "../img/image 5.png";
const { Meta } = Card;

export default function Cards() {
  return (
    <>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "20px", width: "84%" }}
      >
        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img1} />}
          >
            <Meta title="Imani" description="Nude maxi bodycon dress" />
            <h5 style={{ fontSize: "20px" }}>$550</h5>
          </Card>
        </div>

        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img2} />}
          >
            <Meta title="Evadore" description="Short chiffon black  dress " />
            <h5 style={{ fontSize: "20px", marginBottom:'12px' }}>$1200</h5>
            <div style={{display:'flex', gap:'10px'}}>
              <span
                style={{
                  backgroundColor: "#1E1B1B",
                  width: "20px",
                  height: "20px",
                }}
              ></span>
              <span
                style={{
                  backgroundColor: "#FCFCFC",
                  width: "20px",
                  height: "20px",
                  border: "1px solid",
                }}
              ></span>
            </div>
            <span
              style={{
                backgroundColor: "#863000",
                width: "20px",
                height: "20px",
              }}
            ></span>
            <span
              style={{
                backgroundColor: "#696868",
                width: "20px",
                height: "20px",
              }}
            ></span>
          </Card>
        </div>

        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img3} />}
          >
            <Meta title="Olessia" description="Mid Length crepe dress " />
            <h5 style={{ fontSize: "20px" }}>$150</h5>
          </Card>
        </div>

        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img4} />}
          >
            <Meta title="Olive" description="2 piece Sweatshirt & skirt " />
            <h5 style={{ fontSize: "20px", marginBottom: "12px" }}>$1200</h5>
            <div style={{ display: "flex", gap: "5px" }}>
              <span
                style={{
                  backgroundColor: "#863000",
                  width: "20px",
                  height: "20px",
                }}
              ></span>
              <span
                style={{
                  backgroundColor: "#696868",
                  width: "20px",
                  height: "20px",
                }}
              ></span>
            </div>
          </Card>
        </div>

        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img4} />}
          >
            <Meta title="Olive" description="2 piece Sweatshirt & skirt " />
            <h5 style={{ fontSize: "20px", marginBottom: "0px" }}>$1200</h5>
            <div style={{ display: "flex", gap: "5px" }}>
              <span
                style={{
                  backgroundColor: "#863000",
                  width: "20px",
                  height: "20px",
                }}
              ></span>
              <span
                style={{
                  backgroundColor: "#696868",
                  width: "20px",
                  height: "20px",
                }}
              ></span>
            </div>
          </Card>
        </div>

        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img2} />}
          >
            <Meta title="Evadore" description="Short chiffon black  dress " />
            <h5 style={{ fontSize: "20px" }}>$1200</h5>
          </Card>
        </div>

        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img1} />}
          >
            <Meta title="Imani" description="Nude maxi bodycon dress" />
            <h5 style={{ fontSize: "20px" }}>$550</h5>
          </Card>
        </div>

        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img3} />}
          >
            <Meta title="Olessia" description="Mid Length crepe dress " />
            <h5 style={{ fontSize: "20px" }}>$150</h5>
          </Card>
        </div>

        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img2} />}
          >
            <Meta title="Evadore" description="Short chiffon black  dress " />
            <h5 style={{ fontSize: "20px" }}>$1200</h5>
          </Card>
        </div>

        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img3} />}
          >
            <Meta title="Olessia" description="Mid Length crepe dress " />
            <h5 style={{ fontSize: "20px" }}>$150</h5>
          </Card>
        </div>

        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img1} />}
          >
            <Meta title="Imani" description="Nude maxi bodycon dress" />
            <h5 style={{ fontSize: "20px" }}>$550</h5>
          </Card>
        </div>

        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img4} />}
          >
            <Meta title="Olive" description="2 piece Sweatshirt & skirt " />
            <h5 style={{ fontSize: "20px", marginBottom: "0px" }}>$1200</h5>
            <div style={{ display: "flex", gap: "5px" }}>
              <span
                style={{
                  backgroundColor: "#863000",
                  width: "20px",
                  height: "20px",
                }}
              ></span>
              <span
                style={{
                  backgroundColor: "#696868",
                  width: "20px",
                  height: "20px",
                }}
              ></span>
            </div>
          </Card>
        </div>

        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img1} />}
          >
            <Meta title="Imani" description="Nude maxi bodycon dress" />
            <h5 style={{ fontSize: "20px" }}>$550</h5>
          </Card>
        </div>

        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img4} />}
          >
            <Meta title="Olive" description="2 piece Sweatshirt & skirt " />
            <h5 style={{ fontSize: "20px", marginBottom: "0px" }}>$1200</h5>
            <div style={{ display: "flex", gap: "5px" }}>
              <span
                style={{
                  backgroundColor: "#863000",
                  width: "20px",
                  height: "20px",
                }}
              ></span>
              <span
                style={{
                  backgroundColor: "#696868",
                  width: "20px",
                  height: "20px",
                }}
              ></span>
            </div>
          </Card>
        </div>

        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img2} />}
          >
            <Meta title="Evadore" description="Short chiffon black  dress " />
            <h5 style={{ fontSize: "20px" }}>$1200</h5>
          </Card>
        </div>

        <div
          className="Card"
          style={{
            width: 240,
            position: "relative",
          }}
        >
          <button
            class="like-button1"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            <div class="like-wrapper1">
              <div class="ripple1"></div>
              <svg class="heart1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </button>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={img3} />}
          >
            <Meta title="Olessia" description="Mid Length crepe dress " />
            <h5 style={{ fontSize: "20px" }}>$150</h5>
          </Card>
        </div>
      </div>
    </>
  );
}
